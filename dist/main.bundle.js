webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<layout-header></layout-header>\n<div class=\"container fill\">\n    <div class=\"row\">\n        <div class=\"col-12 col-md-2 col-xl-3 py-md-4 bd-sidebar\">\n            <layout-sidenav></layout-sidenav>\n        </div>\n        <main class=\"col-12 col-md-10 col-xl-8 py-md-4 pl-md-4 bd-content\">\n            <h2 class=\"bd-title\">\n                {{title}}\n            </h2>\n            \n            <router-outlet></router-outlet>\n                \n        </main>\n    </div>\n</div><!--The content below is only a placeholder and can be replaced.-->\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        //    setTimeout(()=>{
        /*
        switch/radioList
            'domains': [{label:'SI', value:true}, {label:'NO', value:false}],
            'multiple' : '1',
            'bindLabel': 'label',
            'bindValue': 'value'
        checkboxList
            'domains': [{label:'Berlin', value:1}, {label:'London', value:2}, {label:'Milan', value:3}, {label:'Paris', value:4}],
            'multiple' : '4',
            'bindLabel': 'label',
            'bindValue': 'value'
        tags with suggestions
            'suggestions': ['pippo@pippo.com', 'paperino@paperino.com', 'pluto@pluto.com'],
            'multiple' : '*'
        range
            {
              'model' : 'birth.from',
              'type' : 'OPERATORS',
              'label' : 'Data di nascita da',
              'operators' : [ 'le'],
              'multiple' : false,
              'mask':{
                mask:'99-99-9999'
              }
            },
            {
              'model' : 'birth.to',
              'type' : 'OPERATORS',
              'label' : 'Data di nascita a',
              'operators' : [ 'ne', 'ge'],
              'multiple' : false,
              'mask':{
                mask:'99-99-9999'
              }
            }
          autocomplete
          con formatModelViewValue e formatModelValue non si può mettere bindValue (solo bindLabel)
        */
        this.title = 'app';
        this.model = {};
        //model = { "completeName2": "kjhjkhjk", "email2": [ "ewrerw" ], "username2": { "username": { "test": { "test": [ "fdsfdsfsd", "fdsfdfds" ], "username3": [ { "op": "contains", "value": "fdsfsdfsd" }, { "op": "contains", "value": "fdsfsdffdsfsfs" }, { "op": "endsWith", "value": "fdsfssd" }, { "op": "startsWith", "value": "fdsfdsfs" }, { "op": "startsWith", "value": "fdsfsdfsdfsdfsd" }, { "op": "contains", "value": "fdsfdfdsfdsfsdfsd" }, { "op": "contains", "value": "fdsfdsfdsdsfsdfsd" } ] } } } };
        this.template = [];
        this.model =
            { "isEnabled": [{ "label": "Yes", "value": true }], "city": [1, 2, 3, 4], "youtube": ["Marvel Studios' Avengers: Infinity War Official Trailer"] };
        this.template = [
            {
                'model': 'isEnabled',
                'type': 'INPUT',
                'inputType': 'TEXT',
                'position': 1,
                'label': 'Enabled',
                'domains': [{ label: 'Yes', value: true }, { label: 'No', value: false }],
                'multiple': '1',
                'bindLabel': 'label'
            },
            {
                'model': 'city',
                'type': 'INPUT',
                'inputType': 'TEXT',
                'position': 2,
                'label': 'Città',
                'domains': [{ label: 'Berlin', value: 1 }, { label: 'London', value: 2 }, { label: 'Milan', value: 3 }, { label: 'Paris', value: 4 }],
                'multiple': '4',
                'bindLabel': 'label'
            },
            {
                'model': 'email',
                'type': 'INPUT',
                'inputType': 'TEXT',
                'position': 3,
                'label': 'E-mail',
                'suggestions': ['pippo@pippo.com', 'paperino@paperino.com', 'pluto@pluto.com'],
                'multiple': '*'
            },
            {
                'model': 'birth.from',
                'type': 'OPERATORS',
                'inputType': 'TEXT',
                'position': 4,
                'label': 'Data di nascita da',
                'operators': ['ge'],
                'multiple': false,
                'mask': {
                    mask: '99-99-9999'
                }
            },
            {
                'model': 'birth.to',
                'type': 'OPERATORS',
                'inputType': 'TEXT',
                'position': 5,
                'label': 'Data di nascita a',
                'operators': ['le', 'lt'],
                'multiple': false,
                'mask': {
                    mask: '99-99-9999'
                }
            },
            {
                'model': 'occupazione',
                'type': 'OPERATORS',
                'inputType': 'TEXT',
                'position': 2147483647,
                'label': 'Occupazione',
                'operators': ['startsWith', 'contains', 'eq', 'ne', 'endsWith'],
                'domains': [{ 'label': 'disoccupato' }, { 'label': 'impiegato' }, { 'label': 'operaio' }],
                'required': false,
                'multiple': '1',
                'bindLabel': 'label',
                'bindValue': 'label'
            },
            {
                'model': 'gmap',
                'type': 'OPERATORS',
                'inputType': 'TEXT',
                'position': 2147483647,
                'label': 'Location',
                'operators': ['startsWith', 'contains', 'eq', 'ne', 'endsWith'],
                'suggestions': 'https://maps.googleapis.com/maps/api/place/textsearch/json',
                'required': false,
                'multiple': '3',
                'bindLabel': 'label'
            },
            {
                'model': 'youtube',
                'type': 'INPUT',
                'inputType': 'TEXT',
                'position': 2147483647,
                'label': 'Youtube users',
                'operators': ['startsWith', 'contains', 'eq', 'ne', 'endsWith'],
                'domains': 'https://api.github.com/search/users',
                'required': false,
                'multiple': '3',
                'bindLabel': 'label'
            },
            {
                'model': 'test',
                'type': 'OPERATORS',
                'inputType': 'TEXT',
                'position': 2147483647,
                'label': 'Test',
                'operators': ['startsWith', 'contains', 'eq', 'ne', 'endsWith'],
                'domains': [{ 'label': 'disoccupato', 'id': '1' }, { 'label': 'impiegato', id: '2' }, { 'label': 'operaio', id: '3' }],
                'required': false,
                'multiple': '3',
                'bindLabel': 'label',
                'bindValue': 'id'
            },
        ];
        //    },10000);
    }
    AppComponent.prototype.onEditNext = function (data) {
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_advanced_searchbox__ = __webpack_require__("../../../../ngx-advanced-searchbox/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__appConfig_service__ = __webpack_require__("../../../../../src/app/appConfig.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__layout_header_component__ = __webpack_require__("../../../../../src/app/layout/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__layout_sidenav_component__ = __webpack_require__("../../../../../src/app/layout/sidenav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__routes_appendTo_component__ = __webpack_require__("../../../../../src/app/routes/appendTo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__routes_switchRadio_component__ = __webpack_require__("../../../../../src/app/routes/switchRadio.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ngx_highlightjs__ = __webpack_require__("../../../../ngx-highlightjs/ngx-highlightjs.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var appRoutes = [
    {
        path: '',
        redirectTo: '/general',
        pathMatch: 'full'
    },
    { path: 'general', component: __WEBPACK_IMPORTED_MODULE_9__routes_appendTo_component__["a" /* AppendToComponent */], data: { title: 'General' } },
    { path: 'switch-radio', component: __WEBPACK_IMPORTED_MODULE_10__routes_switchRadio_component__["a" /* SwitchRadioComponent */], data: { title: 'Switch - Radio' } }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__layout_header_component__["a" /* LayoutHeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_8__layout_sidenav_component__["a" /* LayoutSidenavComponent */],
                __WEBPACK_IMPORTED_MODULE_9__routes_appendTo_component__["a" /* AppendToComponent */],
                __WEBPACK_IMPORTED_MODULE_10__routes_switchRadio_component__["a" /* SwitchRadioComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_4_ngx_advanced_searchbox__["a" /* AsBoxModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_6__angular_router__["a" /* RouterModule */].forRoot(appRoutes, {
                    useHash: true
                }),
                __WEBPACK_IMPORTED_MODULE_11_ngx_highlightjs__["a" /* HighlightModule */].forRoot()
            ],
            providers: [
                { provide: __WEBPACK_IMPORTED_MODULE_4_ngx_advanced_searchbox__["b" /* AsConfigService */], useClass: __WEBPACK_IMPORTED_MODULE_5__appConfig_service__["a" /* AppConfigService */] }
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/appConfig.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppConfigService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_take__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/take.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_advanced_searchbox__ = __webpack_require__("../../../../ngx-advanced-searchbox/index.js");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AppConfigService = /** @class */ (function (_super) {
    __extends(AppConfigService, _super);
    function AppConfigService(_http) {
        var _this = _super.call(this, _http) || this;
        _this.customDomainsAsyncFn['youtube'] = function (observable, viewModel, model) {
            return observable
                .switchMap(function (term) {
                return _http.get('https://www.googleapis.com/youtube/v3/search', { params: {
                        q: term,
                        key: 'AIzaSyBafKFrisguQvT3WC20Q972uxS1cZfPvg8',
                        type: 'video',
                        maxResults: '12',
                        part: 'id,snippet'
                    } })
                    .catch(function () { return []; })
                    .map(function (response) {
                    var newResponse = { response: [], term: '' };
                    newResponse.response = response.items.map(function (item) {
                        return { label: item.snippet.title };
                    });
                    newResponse.term = term;
                    return newResponse;
                });
            });
        };
        _this.customSuggestionsAsyncFn['gmap'] = _this.customDomainsAsyncFn['youtube'];
        _this.formatModelValue = {
            'youtube': function (val) {
                if (val) {
                    return val.label;
                }
                return val;
            },
            'birth.to': function (val) {
                var newVal = Object.assign({}, val);
                var daySplitted = val.value.split('-');
                newVal.value = new Date(parseInt(daySplitted[2]), parseInt(daySplitted[1]) - 1, parseInt(daySplitted[0]), 12);
                return newVal;
            },
            'birth.from': function (val) {
                var newVal = Object.assign({}, val);
                var daySplitted = val.value.split('-');
                newVal.value = new Date(parseInt(daySplitted[2]), parseInt(daySplitted[1]) - 1, parseInt(daySplitted[0]), 12);
                return newVal;
            },
            'city': function (val) {
                if (val) {
                    return val.value;
                }
                return val;
            }
        };
        _this.formatModelViewValue = {
            'youtube': function (val) {
                if (typeof val === 'string') {
                    return { label: val };
                }
                return val;
            },
            'birth.to': function (val) {
                var newVal = Object.assign({}, val);
                newVal.value = new Date(val.value);
                newVal.value = newVal.value.getDate() + "-" + (newVal.value.getMonth() + 1) + "-" + newVal.value.getFullYear();
                return newVal;
            },
            'birth.from': function (val) {
                var newVal = Object.assign({}, val);
                newVal.value = new Date(val.value);
                newVal.value = newVal.value.getDate() + "-" + (newVal.value.getMonth() + 1) + "-" + newVal.value.getFullYear();
                return newVal;
            },
            'city': function (val, template) {
                var domainsFiltered = template.domains.filter(function (par) {
                    return par.value == val;
                });
                if (domainsFiltered.length > 0) {
                    return domainsFiltered[0];
                }
                return val;
            },
            'test': function (val, template) {
                var domainsFiltered = template.domains.filter(function (par) {
                    return par.label == val.value;
                });
                if (domainsFiltered.length > 0) {
                    return domainsFiltered[0].value.id;
                }
                if (val.value) {
                    return val.value;
                }
                return val;
            }
        };
        _this.customDomainsModelFormatter = {
            'test': function (viewModel, val) {
                var current = viewModel.domains.filter(function (item) {
                    if (typeof val === 'object') {
                        return item.id == val.id;
                    }
                    return item.id == val;
                });
                return current[0].label;
            }
        };
        return _this;
    }
    AppConfigService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], AppConfigService);
    return AppConfigService;
}(__WEBPACK_IMPORTED_MODULE_4_ngx_advanced_searchbox__["b" /* AsConfigService */]));



/***/ }),

/***/ "../../../../../src/app/layout/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LayoutHeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LayoutHeaderComponent = /** @class */ (function () {
    function LayoutHeaderComponent() {
        this.theme = 'Default theme';
    }
    LayoutHeaderComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], LayoutHeaderComponent.prototype, "version", void 0);
    LayoutHeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'layout-header',
            template: "\n        <nav class=\"navbar navbar-expand navbar-dark flex-column flex-md-row bd-navbar bg-primary\">\n            <a class=\"navbar-brand\" href=\"#\">\n                <img src=\"https://angular.io/assets/images/logos/angular/angular.svg\" width=\"32px\" height=\"32px\"/>\n                ngx-advanced-searchbox{{version}}\n            </a>\n            <button class=\"navbar-toggler\"\n                    type=\"button\"\n                    data-toggle=\"collapse\"\n                    data-target=\"#navbarsExampleDefault\"\n                    aria-controls=\"navbarsExampleDefault\"\n                    aria-expanded=\"false\"\n                    aria-label=\"Toggle navigation\">\n                <span class=\"navbar-toggler-icon\"></span>\n            </button>\n\n            <div class=\"collapse navbar-collapse\">\n                <ul class=\"navbar-nav mr-auto\">\n                </ul>\n\n                <form class=\"form-inline my-2 my-lg-0\">\n                <iframe src=\"https://ghbtns.com/github-btn.html?user=symrad&repo=ngx-advanced-searchbox&type=star&count=true&size=large\" frameborder=\"0\" scrolling=\"0\" width=\"160px\" height=\"30px\"></iframe>\n                </form>\n            </div>\n        </nav>\n    "
        })
    ], LayoutHeaderComponent);
    return LayoutHeaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/layout/sidenav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LayoutSidenavComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var LayoutSidenavComponent = /** @class */ (function () {
    function LayoutSidenavComponent() {
    }
    LayoutSidenavComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'layout-sidenav',
            template: "\n        <ul class=\"nav nav-pills flex-column\">\n            <li class=\"nav-item\" routerLinkActive=\"active\">\n                <a class=\"nav-link\" routerLink=\"/general\" routerLinkActive=\"active\">General</a>\n            </li>\n            <li class=\"nav-item\" routerLinkActive=\"active\">\n                <a class=\"nav-link\" routerLink=\"/switch-radio\" routerLinkActive=\"active\">Switch/Radio</a>\n            </li>\n        </ul>\n    "
        })
    ], LayoutSidenavComponent);
    return LayoutSidenavComponent;
}());



/***/ }),

/***/ "../../../../../src/app/routes/appendTo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppendToComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppendToComponent = /** @class */ (function () {
    function AppendToComponent() {
        //    setTimeout(()=>{
        /*
        switch/radioList
            'domains': [{label:'SI', value:true}, {label:'NO', value:false}],
            'multiple' : '1',
            'bindLabel': 'label',
            'bindValue': 'value'
        checkboxList
            'domains': [{label:'Berlin', value:1}, {label:'London', value:2}, {label:'Milan', value:3}, {label:'Paris', value:4}],
            'multiple' : '4',
            'bindLabel': 'label',
            'bindValue': 'value'
        tags with suggestions
            'suggestions': ['pippo@pippo.com', 'paperino@paperino.com', 'pluto@pluto.com'],
            'multiple' : '*'
        range
            {
              'model' : 'birth.from',
              'type' : 'OPERATORS',
              'label' : 'Data di nascita da',
              'operators' : [ 'le'],
              'multiple' : false,
              'mask':{
                mask:'99-99-9999'
              }
            },
            {
              'model' : 'birth.to',
              'type' : 'OPERATORS',
              'label' : 'Data di nascita a',
              'operators' : [ 'ne', 'ge'],
              'multiple' : false,
              'mask':{
                mask:'99-99-9999'
              }
            }
          autocomplete
          con formatModelViewValue e formatModelValue non si può mettere bindValue (solo bindLabel)
        */
        this.title = 'app';
        this.model = {};
        //model = { "completeName2": "kjhjkhjk", "email2": [ "ewrerw" ], "username2": { "username": { "test": { "test": [ "fdsfdsfsd", "fdsfdfds" ], "username3": [ { "op": "contains", "value": "fdsfsdfsd" }, { "op": "contains", "value": "fdsfsdffdsfsfs" }, { "op": "endsWith", "value": "fdsfssd" }, { "op": "startsWith", "value": "fdsfdsfs" }, { "op": "startsWith", "value": "fdsfsdfsdfsdfsd" }, { "op": "contains", "value": "fdsfdfdsfdsfsdfsd" }, { "op": "contains", "value": "fdsfdsfdsdsfsdfsd" } ] } } } };
        this.template = [];
        this.model =
            { "isEnabled": [{ "label": "Yes", "value": true }], "city": [1, 2, 3, 4], "youtube": ["Marvel Studios' Avengers: Infinity War Official Trailer"] };
        this.template = [
            {
                'model': 'isEnabled',
                'type': 'INPUT',
                'inputType': 'TEXT',
                'position': 1,
                'label': 'Enabled',
                'domains': [{ label: 'Yes', value: true }, { label: 'No', value: false }],
                'multiple': '1',
                'bindLabel': 'label'
            },
            {
                'model': 'city',
                'type': 'INPUT',
                'inputType': 'TEXT',
                'position': 2,
                'label': 'Città',
                'domains': [{ label: 'Berlin', value: 1 }, { label: 'London', value: 2 }, { label: 'Milan', value: 3 }, { label: 'Paris', value: 4 }],
                'multiple': '4',
                'bindLabel': 'label'
            },
            {
                'model': 'email',
                'type': 'INPUT',
                'inputType': 'TEXT',
                'position': 3,
                'label': 'E-mail',
                'suggestions': ['pippo@pippo.com', 'paperino@paperino.com', 'pluto@pluto.com'],
                'multiple': '*'
            },
            {
                'model': 'birth.from',
                'type': 'OPERATORS',
                'inputType': 'TEXT',
                'position': 4,
                'label': 'Data di nascita da',
                'operators': ['ge'],
                'multiple': false,
                'mask': {
                    mask: '99-99-9999'
                }
            },
            {
                'model': 'birth.to',
                'type': 'OPERATORS',
                'inputType': 'TEXT',
                'position': 5,
                'label': 'Data di nascita a',
                'operators': ['le', 'lt'],
                'multiple': false,
                'mask': {
                    mask: '99-99-9999'
                }
            },
            {
                'model': 'occupazione',
                'type': 'OPERATORS',
                'inputType': 'TEXT',
                'position': 2147483647,
                'label': 'Occupazione',
                'operators': ['startsWith', 'contains', 'eq', 'ne', 'endsWith'],
                'domains': [{ 'label': 'disoccupato' }, { 'label': 'impiegato' }, { 'label': 'operaio' }],
                'required': false,
                'multiple': '1',
                'bindLabel': 'label',
                'bindValue': 'label'
            },
            {
                'model': 'gmap',
                'type': 'OPERATORS',
                'inputType': 'TEXT',
                'position': 2147483647,
                'label': 'Location',
                'operators': ['startsWith', 'contains', 'eq', 'ne', 'endsWith'],
                'suggestions': 'https://maps.googleapis.com/maps/api/place/textsearch/json',
                'required': false,
                'multiple': '3',
                'bindLabel': 'label'
            },
            {
                'model': 'youtube',
                'type': 'INPUT',
                'inputType': 'TEXT',
                'position': 2147483647,
                'label': 'Youtube users',
                'operators': ['startsWith', 'contains', 'eq', 'ne', 'endsWith'],
                'domains': 'https://api.github.com/search/users',
                'required': false,
                'multiple': '3',
                'bindLabel': 'label'
            },
            {
                'model': 'test',
                'type': 'OPERATORS',
                'inputType': 'TEXT',
                'position': 2147483647,
                'label': 'Test',
                'operators': ['startsWith', 'contains', 'eq', 'ne', 'endsWith'],
                'domains': [{ 'label': 'disoccupato', 'id': '1' }, { 'label': 'impiegato', id: '2' }, { 'label': 'operaio', id: '3' }],
                'required': false,
                'multiple': '3',
                'bindLabel': 'label',
                'bindValue': 'id'
            },
        ];
        //    },10000);
    }
    AppendToComponent.prototype.onEditNext = function (data) {
    };
    AppendToComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'append-to',
            template: "\n    <advanced-searchbox [template]=\"template\" [model]=\"model\" (editNext)=\"onEditNext($event)\" [openOnLoad]=\"true\">\n    <ng-container *asTemplate=\"let filter\">\n      <ng-container [ngSwitch]=\"filter.type\">\n        <!--<app-as-operators *ngSwitchCase=\"'RANGE'\" [viewModel]=\"filter\" class=\"as-filter\"></app-as-operators>-->\n      </ng-container>\n    </ng-container>\n  </advanced-searchbox>\n  <br/>\n  <div>\n    <code>\n      {{model | json}}\n    </code>\n  </div>\n    ",
            styles: [
                "\n           .overflow-box {\n               widht: 300px;\n               padding: 5px;\n               height: 100px;\n               border: 1px solid #999;\n               overflow: hidden;\n           }\n        "
            ]
        }),
        __metadata("design:paramtypes", [])
    ], AppendToComponent);
    return AppendToComponent;
}());



/***/ }),

/***/ "../../../../../src/app/routes/switchRadio.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SwitchRadioComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SwitchRadioComponent = /** @class */ (function () {
    function SwitchRadioComponent() {
        this.model = {};
        this.template = {};
        this.model = { "isEnabled": [{ "label": "Yes", "value": true }] };
        this.template = [
            {
                'model': 'isEnabled',
                'type': 'INPUT',
                'inputType': 'TEXT',
                'position': 1,
                'label': 'Enabled',
                'domains': [{ label: 'Yes', value: true }, { label: 'No', value: false }],
                'multiple': '1',
                'bindLabel': 'label'
            }
        ];
        this.codeJs = "\n      public model = {};\n      public template = {};\n\n      constructor(){\n        this.model = { \"isEnabled\": [ { \"label\": \"Yes\", \"value\": true } ]};\n        this.template = [\n          {\n            'model' : 'isEnabled',\n            'type' : 'INPUT',\n            'inputType' : 'TEXT',\n            'position' : 1,\n            'label' : 'Enabled',\n            'domains': [{label:'Yes', value:true}, {label:'No', value:false}],\n            'multiple' : '1',\n            'bindLabel': 'label'\n          }\n        ];\n      }";
    }
    SwitchRadioComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'switch-radio',
            template: "\n    <advanced-searchbox [template]=\"template\" [model]=\"model\" [openOnLoad]=\"true\">\n    </advanced-searchbox>\n  <br/>\n  <div>\n    <code>\n      {{model | json}}\n    </code>\n    <pre><code highlight [code]=\"codeJs\"></code></pre>\n    <pre><code highlight [code]=\"codeHtml\"></code></pre>\n  </div>\n    ",
            styles: [
                "\n           .overflow-box {\n               widht: 300px;\n               padding: 5px;\n               height: 100px;\n               border: 1px solid #999;\n               overflow: hidden;\n           }\n        "
            ]
        }),
        __metadata("design:paramtypes", [])
    ], SwitchRadioComponent);
    return SwitchRadioComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_reflect_metadata__ = __webpack_require__("../../../../reflect-metadata/Reflect.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_reflect_metadata___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_reflect_metadata__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_zone_js__ = __webpack_require__("../../../../zone.js/dist/zone.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_zone_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_zone_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");






if (__WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map