import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from "./app.component";
import {HomeComponent} from "./pages/home/home.component";
import {HelpsComponent} from "./pages/helps/helps.component";
import {AboutComponent} from "./pages/about/about.component";
import {ProfileComponent} from "./pages/profile/profile.component";
import {NotFoundComponent} from "./pages/not-found/not-found.component";
import {DashboardComponent} from "./pages/dashboard/dashboard.component";
import {SystemsComponent} from "./pages/systems/systems.component";

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'dashboard',
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'all-systems',
    component: SystemsComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'profile',
    component: ProfileComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'help',
    component: HelpsComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
