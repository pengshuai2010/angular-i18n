import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {UserPanelComponent} from './user-panel/user-panel.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {HomeComponent} from './home/home.component';

const appRoutes: Routes = [
  {path: 'user-panel', component: UserPanelComponent},
  {path: 'home', component: HomeComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
];

export const routing = RouterModule.forRoot(
  appRoutes,
  {preloadingStrategy: PreloadAllModules}
);
