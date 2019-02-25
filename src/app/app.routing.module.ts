/*
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
*/
import { ModuleWithProviders } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

// import components
import {E404Component} from './E404Component/e404.component';

// pages
import {HomePage} from './pages/home/home.page';
import {AboutPage} from './pages/about/about.page';
import {ContactPage} from './pages/contact/contact.page';

const appRouting: Routes = [
  {path: '', component: HomePage},
  {path: 'about', component: AboutPage},
  {path: 'contact', component: ContactPage},
  {path: '**', component: E404Component}
];

export const AppRoutingWithProvider: any[] = [];
export const Routing: ModuleWithProviders = RouterModule.forRoot(appRouting);
