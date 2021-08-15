import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {CabeceraModule} from "./cabecera/cabecera.module";
import {SidebarModule} from "./sidebar/sidebar.module";
import {PrincipalModule} from "./principal/principal.module";
import {FooterModule} from "./footer/footer.module";
import {ModalModule} from "./modal/modal.module";




@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CabeceraModule,
    SidebarModule,
    PrincipalModule,
    FooterModule,
    ModalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
