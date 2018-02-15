import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';
import { ToastrModule } from 'ngx-toastr';
import { CommonModule } from "@angular/common";
import { AppComponent } from './app.component';
import { EtiquetaContadoraComponent } from './etiqueta-contadora/etiqueta-contadora.component';
import { ListaEtiquetasContadorasComponent } from './lista-etiquetas-contadoras/lista-etiquetas-contadoras.component';
import { EtiquetasContadorasService } from './etiquetas-contadoras.service';
import { EtiquetaContadoraAddComponent } from './etiqueta-contadora-add/etiqueta-contadora-add.component';


@NgModule({
  declarations: [
    AppComponent,
    EtiquetaContadoraComponent,
    ListaEtiquetasContadorasComponent,
    EtiquetaContadoraAddComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    CommonModule
  ],
  providers: [EtiquetasContadorasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
