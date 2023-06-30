export class Imovel {
    constructor(
      public id: number,
      public endereco: string,
      public cep: string,
      public cidade: string,
      public estado: string,
      public numero: string
      // Outros atributos do imóvel
    ) {}
  }
  