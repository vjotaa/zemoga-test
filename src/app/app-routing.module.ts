import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { TrialsComponent } from './pages/trials/trials.component';
import { HowComponent } from './pages/how/how.component';
import { SearchComponent } from './pages/search/search.component';
import { AuthenticationComponent } from './pages/authentication/authentication.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'trials', component: TrialsComponent },
  { path: 'how', component: HowComponent },
  { path: 'search', component: SearchComponent },
  { path: 'authentication', component: AuthenticationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
