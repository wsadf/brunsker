import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { ViaCepService } from '../via-cep.service';
import { Imovel } from '../formulario-imovel/imovel';

@Component({
  selector: 'app-formulario-imovel',
  templateUrl: './formulario-imovel.component.html',
  styleUrls: ['./formulario-imovel.component.css']
})
export class FormularioImovelComponent implements OnInit {
  imovelForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService,
    private viaCepService: ViaCepService
  ) {}

  ngOnInit(): void {
    this.imovelForm = this.formBuilder.group({
      endereco: ['', Validators.required],
      cep: ['', [Validators.required, Validators.pattern(/^\d{5}-\d{3}$/)]],
      cidade: ['', Validators.required],
      bairro: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.imovelForm.invalid) {
      return;
    }

    const { endereco, cep, cidade, bairro, numero } = this.imovelForm.value;

    // Salvar o imóvel
    this.apiService.criarImovel(new Imovel(0, endereco, cep, cidade, bairro, numero)).subscribe(
      response => {
        console.log('Imóvel salvo com sucesso:', response);
        this.imovelForm.reset();
      },
      error => {
        console.error('Erro ao salvar o imóvel:', error);
      }
    );
  }

  buscarEndereco(): void {
    const cep = this.imovelForm.controls['cep'].value;

    // Buscar o endereço a partir do CEP
    this.viaCepService.buscarEnderecoPorCEP(cep).subscribe(
      response => {
        this.imovelForm.patchValue({
          endereco: response.logradouro,
          cidade: response.localidade,
          bairro: response.bairro          // Preencha os outros campos do endereço
        });
      },
      error => {
        console.error('Erro ao buscar o endereço:', error);
      }
    );
  }
}
