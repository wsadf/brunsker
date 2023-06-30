import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormularioImovelComponent } from './formulario-imovel/formulario-imovel.component';
import { HttpClientModule } from '@angular/common/http';
import { ListaImoveisComponent } from './lista-imoveis/lista-imoveis.component';

@NgModule({
  declarations: [
    AppComponent,
    FormularioImovelComponent,
    ListaImoveisComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
