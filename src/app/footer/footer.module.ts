import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PantallaComponent } from './footer/pantalla.component';




@NgModule({
  declarations: [
    PantallaComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[PantallaComponent]
})
export class FooterModule { }
