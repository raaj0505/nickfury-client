import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from "./app.component";
import {HomeComponent} from "./home/home.component";
import {HelpsComponent} from "./helps/helps.component";
import {AboutComponent} from "./about/about.component";
import {ProfileComponent} from "./profile/profile.component";
import {NotFoundComponent} from "./not-found/not-found.component";

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
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
