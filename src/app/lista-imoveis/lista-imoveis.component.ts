import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Imovel } from '../formulario-imovel/imovel';

@Component({
  selector: 'app-lista-imoveis',
  templateUrl: './lista-imoveis.component.html',
  styleUrls: ['./lista-imoveis.component.css']
})
export class ListaImoveisComponent implements OnInit {
  imoveis: any = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(){
    this.apiService.getImoveis().subscribe(async (imoveis) => {

      let im = await imoveis.imovel;
      
      if (Array.isArray(im)) {
        this.imoveis = await im;
        console.log(im);
        
      } else if (typeof imoveis === 'object') {
        this.imoveis = Object.values(imoveis);
      }
    });
  }
  
}
