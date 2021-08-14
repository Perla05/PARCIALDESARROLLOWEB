import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {CabeceraModule} from "./cabecera/cabecera.module";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CabeceraModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
