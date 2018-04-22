import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';

import {AppComponent} from './app.component';
import {UserPanelComponent} from './user-panel/user-panel.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {HomeComponent} from './home/home.component';
import {routing} from './app.routing';
import {LanguageSelectionComponent} from './language-selection/language-selection.component';

@NgModule({
  imports: [
    BrowserModule,
    routing
  ],
  declarations: [AppComponent, UserPanelComponent, PageNotFoundComponent, HomeComponent, LanguageSelectionComponent],
  providers: [Location, {provide: LocationStrategy, useClass: PathLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
