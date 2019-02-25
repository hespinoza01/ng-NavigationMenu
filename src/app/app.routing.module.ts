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
import {AppComponent} from './app.component';
import {E404Component} from './E404Component/e404.component';

const appRouting: Routes = [
  {path: '', component: AppComponent},
  {path: '**', component: E404Component}
];

export const AppRoutingWithProvider: any[] = [];
export const Routing: ModuleWithProviders = RouterModule.forRoot(appRouting);
