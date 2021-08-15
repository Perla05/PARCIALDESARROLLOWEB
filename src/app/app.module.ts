import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {CabeceraModule} from "./cabecera/cabecera.module";
import {SidebarModule} from "./sidebar/sidebar.module";
import {PrincipalModule} from "./principal/principal.module";
import {FooterModule} from "./footer/footer.module";



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CabeceraModule,
    SidebarModule,
    PrincipalModule,
    FooterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
