import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioImovelComponent } from './formulario-imovel/formulario-imovel.component';
import { ListaImoveisComponent } from './lista-imoveis/lista-imoveis.component';

const routes: Routes = [
  { path: 'imoveis', component: ListaImoveisComponent },
  { path: '', redirectTo: 'novo-imovel', pathMatch: 'full' },
  { path: 'novo-imovel', component: FormularioImovelComponent },
  { path: 'editar-imovel/:id', component: FormularioImovelComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
