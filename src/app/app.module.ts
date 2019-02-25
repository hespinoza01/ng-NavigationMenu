import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Routing, AppRoutingWithProvider } from './app.routing.module';
import { AppComponent } from './app.component';
import {E404Component} from './E404Component/e404.component';

@NgModule({
  declarations: [
    AppComponent,
    E404Component
  ],
  imports: [
    BrowserModule,
    Routing
  ],
  providers: [AppRoutingWithProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
