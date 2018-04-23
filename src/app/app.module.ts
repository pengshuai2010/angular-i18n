import {NgModule, TRANSLATIONS} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';
// Import the service
import {I18n} from '@ngx-translate/i18n-polyfill';

import {AppComponent} from './app.component';
import {UserPanelComponent} from './user-panel/user-panel.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {HomeComponent} from './home/home.component';
import {routing} from './app.routing';
import {LanguageSelectionComponent} from './language-selection/language-selection.component';

declare const require; // Use the require method provided by webpack
export const translations = require(`raw-loader!../locale/messages.zh-cn.xlf`);

@NgModule({
  imports: [
    BrowserModule,
    routing
  ],
  declarations: [AppComponent, UserPanelComponent, PageNotFoundComponent, HomeComponent, LanguageSelectionComponent],
  providers: [
    Location,
    {provide: LocationStrategy, useClass: PathLocationStrategy},
    {provide: TRANSLATIONS, useValue: translations},
    I18n,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
