import { environment } from './../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { AsBoxModule, AsConfigService } from 'ngx-advanced-searchbox';
import { AppConfigService } from './appConfig.service';
import { RouterModule } from '@angular/router'
import { LayoutHeaderComponent } from './layout/header.component';
import { LayoutSidenavComponent } from './layout/sidenav.component';
import { AppendToComponent } from './routes/appendTo.component';
import { SwitchRadioComponent } from './routes/switchRadio.component';
import { HighlightModule } from 'ngx-highlightjs';
 
var appRoutes = [
  {
      path: '',
      redirectTo: '/general',
      pathMatch: 'full'
  },
  { path: 'general', component: AppendToComponent, data: { title: 'General' } },
  { path: 'switch-radio', component: SwitchRadioComponent, data: { title: 'Switch - Radio' } }
];

@NgModule({
  declarations: [
    AppComponent,
    LayoutHeaderComponent,
    LayoutSidenavComponent,
    AppendToComponent,
    SwitchRadioComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AsBoxModule.forRoot(),
    RouterModule.forRoot(
      appRoutes,
      {
          useHash: true
      }
    ),
    HighlightModule.forRoot({path: environment.assetsPath+'/lib/hljs'})
  ],
  providers: [
    {provide:AsConfigService, useClass:AppConfigService}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
