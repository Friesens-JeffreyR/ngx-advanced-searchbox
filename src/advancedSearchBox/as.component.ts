import { ViewModelInterface } from './asViewModel.interface';
import { FilterInterface } from './asFilter.interface';
import { AsTemplateDirective } from './asTemplate.directive';
import { Component, Input, OnInit, Output, EventEmitter, OnChanges,
    SimpleChanges, ContentChild, TemplateRef, ViewChild, ElementRef, Renderer2,
    ViewChildren, QueryList, ContentChildren, AfterViewInit, AfterContentInit, forwardRef, HostListener } from '@angular/core';
import { Key as KeyBoard} from 'ts-keycode-enum';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/merge';
import 'rxjs/add/operator/share';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/first';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { NgbTypeaheadConfig, NgbTypeahead, NgbTypeaheadSelectItemEvent } from '@ng-bootstrap/ng-bootstrap';
import { fromEvent } from 'rxjs/observable/fromEvent';
import { NgModel, FormGroup, FormControl, ControlContainer } from '@angular/forms';
import { UUID } from 'angular2-uuid';
import { AsConfigService } from './asConfig.service';
import { AsSimpleInputComponent } from './input/asSimpleInput.component';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'advanced-searchbox',
    template: `
    <div [formGroup]="form">
        <ng-template #rt let-r="result" let-t="term">
            {{ r.label}}
        </ng-template>
        <ng-container *ngFor="let filter of viewModel; trackBy: trackByFn;" >
            <ng-container [ngSwitch]="filter.type" >
                <as-input *ngSwitchCase="'INPUT'" [viewModel]="filter" class="as-filter" [formControl]="form.get([filter.model+'_'+filter.uuid])" ></as-input>
                <as-input-operators *ngSwitchCase="'OPERATORS'" [viewModel]="filter" class="as-filter" [formControl]="form.get([filter.model+'_'+filter.uuid])" ></as-input-operators>
                <ng-container *ngTemplateOutlet="externalTemplate; context: {$implicit: filter}"></ng-container>
            </ng-container>
        </ng-container>
        <input id="search" type="text" (selectItem)="addFilter($event)" (focus)="focusInput$.next()" 
        [(ngModel)]="searchBox" [ngModelOptions]="{standalone: true}" (keydown)="keydown($event)" [ngbTypeahead]="searchBoxFunc" 
        [resultTemplate]="rt" [inputFormatter]="formatter" #searchbox #searchboxModel="ngModel" placeholder="Cerca" autosize/>
    </div>
    `,
    providers: [NgbTypeaheadConfig]
})
export class AsComponent implements OnInit, OnChanges {

    @Output('editNext') editNext:EventEmitter<any>;
    @Output('editPrev') editPrev:EventEmitter<any>;
    @Output('onChangeViewModel') onChangeViewModel:EventEmitter<any>;
    @ContentChild(AsTemplateDirective, {read: TemplateRef}) externalTemplate:TemplateRef<any>;
    @ViewChild('searchbox') searchboxInput:ElementRef;
    @ViewChild('searchboxModel') searchboxModel:NgModel;
    @ViewChild(NgbTypeahead) typeaheadController;
    @Input('openOnLoad') openOnLoad:Boolean;
    @Input('validators') validators:{};
    @Input('form') form:FormGroup;

    
    private _template;
    @Input()
    set template(template){
        // viene eseguito solo se si riassegna il template (es. template = [])
        template.map((response) => {
            const uuid = UUID.UUID();
            return Object.assign({'_templateUuid': uuid}, response);
        });
        this._template = template;
        
    }
    get template(): Array<ViewModelInterface>{
        return this._template;
    }

    @Input()
    set model(model: Object){
         // viene eseguito solo se si riassegna il model (es. model = [])
         this._model = model;
    }

    get model(): Object{
        return this._model;
    }

    private _model: Object;
    public viewModel: Array<ViewModelInterface>;
    public searchBox;
    public searchboxInputClick$: Observable<any>;
    public searchboxClick$: Observable<any>;
    public focusInput$: Subject<any>;
    public filtersControllers;
    public focusIndex;
    public afterViewInitFilters$: Subject<any>;
    public searchBoxFunc;
    public formatter;
    public formGroupSameModel:{[key:string]:FormGroup};

    constructor(
        public element: ElementRef,
        public typeahead: NgbTypeaheadConfig,
        private _renderer: Renderer2,
        protected _http: HttpClient,
        private _config: AsConfigService) {
            this.editNext = new EventEmitter();
            this.editPrev = new EventEmitter();
            this.onChangeViewModel = new EventEmitter();
            this.openOnLoad = true;
            this.viewModel = [];
            this.searchBox = '';
            this.focusInput$ = new Subject();
            this.filtersControllers = {};
            this.focusIndex = 0;
            this.afterViewInitFilters$ = new Subject();
            this.searchBoxFunc = (text$: Observable<string>) =>
                text$
                .merge(this.searchboxInputClick$)
                .merge(this.focusInput$)
                .debounceTime(50)
                .distinctUntilChanged()
                .map((term: any) => {
                    if (term instanceof MouseEvent || term === undefined) {
                        term = this.searchBox;
                    }
        
                    const test = this.filterSearchBox()
                        .filter(v => v.label.toLowerCase().indexOf(term.toLowerCase()) > -1)
                        .slice(0, 10);
                        return test;
            });
            this.formatter = (x: {label: string}) => x.label;
    }

    filterSearchBox(): Array<any> {
        return this.template
        .filter((value) => {
          return this.viewModel.filter((param) => {
                  if (param['model'] === value['model'] && (param['value'] && param['value'].op && !param['value'].value)) {
                      return false;
                  }
                  const maxOccurrence = param['multiple'];
                  if (maxOccurrence && maxOccurrence !== '*') {
                      const modelFinded = this.getterModelTree(this.model, param.model.split('.'));
                      return param['model'] === value['model'] && (modelFinded && param['multiple'] <= modelFinded.length);
                  }else {
                      return param['model'] === value['model'] && !param['multiple'];
                  }
              }).length === 0;
        });
    }

    trackByFn(index, item) {
        return item.uuid;
    }

    ngOnInit() {
        
        this._renderer.setProperty(this.searchboxInput.nativeElement, 'value', '');

        this.searchboxInputClick$ = fromEvent(this.searchboxInput.nativeElement, 'click').map((response: MouseEvent) => {
            response.preventDefault();
            response.stopPropagation();
            return response;
        });


        this.searchboxModel.valueChanges.subscribe(response => {});

        this.typeaheadController._userInput = '';
        // allo start, per far si che entri nel subscribe dobbiamo fare in modo che abbia almeno sempre 2 elementi nella history
        this._config.navigation.next({controller:null, from:null});
        this._config.navigation.next({controller:this, from:'searchbox'});

        this.editPrev
        .filter((response) => !response.viewModel)
        .subscribe((response) => {
            if(this.viewModel[this.viewModel.length-1]){
                if(this.prevFilterControllerFromSearchbox(this.viewModel[this.viewModel.length-1])){
                    this.prevFilterControllerFromSearchbox(this.viewModel[this.viewModel.length-1]).onFocus('prev');
                }
            }
        });
    }

    ngOnChanges(changes: SimpleChanges) {
        if(changes.template && changes.template.firstChange){
            if (this.openOnLoad) {
                setTimeout(() => {
                    this.focusInput$.next();
                    this.searchboxInput.nativeElement.focus();
                });
            }
        }
        if(changes.template && changes.template.currentValue){
            this.createViewFilterFromModel(this.model);
        }
        if(changes.model && changes.model.currentValue){
            this.createViewFilterFromModel(this.model);
            this.populateForm();
        }
    }

    populateForm():void{
        if(!this.form){
            this.form = new FormGroup({});
        }
        var formGroup = {};
        for(let viewModel of this.viewModel){
            if(this.validators[viewModel.model]){
                this.form.addControl(viewModel.model+'_'+viewModel.uuid, new FormControl(viewModel.value ? viewModel.value : '',this.validators[viewModel.model]));  
            }else{
                this.form.addControl(viewModel.model+'_'+viewModel.uuid, new FormControl(viewModel.value ? viewModel.value : ''));
            }
        }
    }

    removeFormControls(){
        if(!this.form){
            return false;
        }
        for(let controlName in this.form.controls){
            this.form.removeControl(controlName);
        }
    }

    findTemplate(key, value):ViewModelInterface {
        return this.template.filter((param) => {
            return param[key] === value;
        })[0];
    }

    getCurrentCaretPosition(input):number {
        if (!input) {
            return 0;
        }

        try {
            // Firefox & co
            if (typeof input.selectionStart === 'number') {
                return input.selectionDirection === 'backward' ? input.selectionStart : input.selectionEnd;

            } else if ((<any>document).selection) { // IE
                input.focus();
                const selection = (<any>document).selection.createRange();
                const selectionLength = (<any>document).selection.createRange().text.length;
                selection.moveStart('character', -input.value.length);
                return selection.text.length - selectionLength;
            }
        }catch (err) {
            // selectionStart is not supported by HTML 5 input type, so jut ignore it
        }
        return 0;
    };

    getterModelTree(parent, models) {
        if (models.length === 0) {
            return parent;
        }
        const firstModel = models[0];
        if (!parent[firstModel]) {
            return false;
        }
        models.shift();
        return this.getterModelTree(parent[firstModel], models);
    }

    keydown(e, currentViewModel?, options:{id?: any , blackList?: any} = {}) {
        const valueEmitted = {
            viewModel: currentViewModel,
            options: options
        };

        if(!options.blackList){
            options.blackList = [];
        }

        const handledKeys: KeyBoard[] = [
            KeyBoard.Backspace,
            KeyBoard.Tab,
            KeyBoard.Enter,
            KeyBoard.LeftArrow,
            KeyBoard.RightArrow
        ];

        if (handledKeys.indexOf(e.which) === -1) {
            return;
        }

        const cursorPosition = this.getCurrentCaretPosition(e.target);

        if (e.which === KeyBoard.Backspace && options.blackList.indexOf('Backspace') < 0) {
            if (cursorPosition === 0) {
                e.preventDefault();
                this.editPrev.emit(valueEmitted);
            }

        } else if (e.which === KeyBoard.Tab && options.blackList.indexOf('Tab') < 0) {
            if (e.shiftKey) {
                e.preventDefault();
                this.editPrev.emit(valueEmitted);
            } else {
                e.preventDefault();
                this.editNext.emit(valueEmitted);
            }

        } else if (e.which === KeyBoard.Enter && options.blackList.indexOf('Enter') < 0) {
            this.editNext.emit(valueEmitted);

        } else if (e.which === KeyBoard.LeftArrow && options.blackList.indexOf('LeftArrow') < 0) {
            if (cursorPosition === 0) {
                this.editPrev.emit(valueEmitted);
            }

        } else if (e.which === KeyBoard.RightArrow && options.blackList.indexOf('RightArrow') < 0) {
            if (cursorPosition === e.target.value.length) {
                this.editNext.emit(valueEmitted);
            }
        }
    }

    addFilter(typeaheadSelected: NgbTypeaheadSelectItemEvent): void {
        typeaheadSelected.preventDefault();
        const viewModel = this.createViewFilter(typeaheadSelected.item);
        this.afterViewInitFilters$.filter((response) => {
            return response.uuid === viewModel.uuid;
        }).first().subscribe((response) => {
            this.getFilterController(viewModel).onFocus('next');
        });
        
    }

    createViewFilter(singleTemplate, value?) {
        const uuid = UUID.UUID();
        let viewModel:ViewModelInterface = Object.assign({uuid: uuid}, this.findTemplate('model', singleTemplate.model), {value: value});
        if(this._config.formatModelViewValue[singleTemplate.model]){
            viewModel = Object.assign({uuid: uuid}, this.findTemplate('model', singleTemplate.model));
        }
        if(value){
            viewModel.value = value;
            if(this._config.formatModelViewValue[singleTemplate.model]){
                viewModel.value = this._config.formatModelViewValue[singleTemplate.model](value,singleTemplate);
            }
        }
        this.viewModel.push(viewModel);
        this.searchBox = '';
        if(this.form){
            if(this.validators[viewModel.model]){
                this.form.addControl(viewModel.model+'_'+viewModel.uuid, new FormControl(viewModel.value ? viewModel.value : '',this.validators[viewModel.model]));  
            }else{
                this.form.addControl(viewModel.model+'_'+viewModel.uuid, new FormControl(viewModel.value ? viewModel.value : ''));
            }
        }
        
        this.onChangeViewModel.emit(this.viewModel);

        return viewModel;
    }

    createViewFilterFromModel(model){
        this.removeFormControls();
        this.viewModel = [];
        for (const singleTemplate of this.template){
            const modelFinded = this.getterModelTree(model, singleTemplate.model.split('.'));
            if (modelFinded) {
                const typeOfModel: string = typeof modelFinded;
                if (Array.isArray(modelFinded)) {
                    for (const singleModelValue of modelFinded) {
                        this.createViewFilter(singleTemplate, singleModelValue);
                    }
                }else {
                    this.createViewFilter(singleTemplate, modelFinded);
                }
            }
        }
    }

    addFilterController(uuid, controller): void {
        this.filtersControllers[uuid] = controller;
    }

    removeFilterController(uuid): void {
        delete this.filtersControllers[uuid];
    }

    nextFilterController(viewModel): FilterInterface | AsComponent {
        const indexViewModel = this.viewModel.indexOf(viewModel);
        if (indexViewModel >= 0 && indexViewModel + 1 < this.viewModel.length) {
            const nextFilter: any = this.viewModel[indexViewModel + 1];
            this._config.navigation.next({controller:<FilterInterface>this.filtersControllers[this.viewModel[indexViewModel].uuid], from:'next'});
            return <FilterInterface>this.filtersControllers[nextFilter.uuid];
        }
        this._config.navigation.next({controller:this, from:'searchbox'});
        return this;
    }

    prevFilterController(viewModel): FilterInterface | AsComponent {
        const indexViewModel = this.viewModel.indexOf(viewModel);
        if (indexViewModel > 0 ) {
            const prevFilter: any = this.viewModel[indexViewModel - 1];
            this._config.navigation.next({controller:<FilterInterface>this.filtersControllers[this.viewModel[indexViewModel].uuid], from:'prev'});
            return <FilterInterface>this.filtersControllers[prevFilter.uuid];
        }
        this._config.navigation.next({controller:this, from:'searchbox'});
        return this;
    }

    prevFilterControllerFromSearchbox(viewModel): FilterInterface | AsComponent {
        return <FilterInterface>this.filtersControllers[viewModel.uuid];
    }

    getFilterController(viewModel): FilterInterface {
        return this.filtersControllers[viewModel.uuid];
    }

    removeViewModel(viewModel:ViewModelInterface): void {
        const index = this.viewModel.indexOf(viewModel);
        if (index !== undefined && index > -1) {
            this.viewModel.splice(index, 1);
            this.form.removeControl(viewModel.model+'_'+viewModel.uuid);
        }
        this.onChangeViewModel.emit(this.viewModel);
    }

    removeAll(): void {
        this.viewModel = [];
        this.model = {};
    }

    onFocus(prevNext) {
        this.searchboxInput.nativeElement.focus();
    }
}