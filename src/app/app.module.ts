import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Routing, AppRoutingWithProvider } from './app.routing.module';

// components
import { AppComponent } from './app.component';
import {E404Component} from './E404Component/e404.component';

// pages
import {HomePage} from './pages/home/home.page';
import {AboutPage} from './pages/about/about.page';
import {ContactPage} from './pages/contact/contact.page';

@NgModule({
  declarations: [
    AppComponent,
    E404Component,
    HomePage,
    AboutPage,
    ContactPage
  ],
  imports: [
    BrowserModule,
    Routing
  ],
  providers: [AppRoutingWithProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
