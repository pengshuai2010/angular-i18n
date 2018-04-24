import {LOCALE_ID, MissingTranslationStrategy, NgModule, TRANSLATIONS, TRANSLATIONS_FORMAT} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';
// Import the service
import {I18n, MISSING_TRANSLATION_STRATEGY} from '@ngx-translate/i18n-polyfill';

import {AppComponent} from './app.component';
import {UserPanelComponent} from './user-panel/user-panel.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {HomeComponent} from './home/home.component';
import {routing} from './app.routing';
import {LanguageSelectionComponent} from './language-selection/language-selection.component';

declare const require; // Use the require method provided by webpack

@NgModule({
  imports: [
    BrowserModule,
    routing
  ],
  declarations: [AppComponent, UserPanelComponent, PageNotFoundComponent, HomeComponent, LanguageSelectionComponent],
  providers: [
    Location,
    {provide: LocationStrategy, useClass: PathLocationStrategy},
    {
      provide: TRANSLATIONS,
      useFactory: (locale) => {
        locale = locale || 'en'; // default to english if no locale provided
        if (locale === 'en') {
          return require(`raw-loader!../locale/messages.xlf`);
        }
        return require(`raw-loader!../locale/messages.${locale}.xlf`);
      },
      deps: [LOCALE_ID]
    },
    // format of translations that you use
    {provide: TRANSLATIONS_FORMAT, useValue: 'xlf'},
// optional, defines how error will be handled
    {provide: MISSING_TRANSLATION_STRATEGY, useValue: MissingTranslationStrategy.Warning},
    I18n,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
