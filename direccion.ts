// Direccion.ts

class Direccion {
    calle: string;
    numero: string;
    piso: string;
    letra: string;
    codigoPostal: string;
    poblacion: string;
    provincia: string;
  
    constructor(
      calle: string,
      numero: string,
      piso: string,
      letra: string,
      codigoPostal: string,
      poblacion: string,
      provincia: string
    ) {
      this.calle = calle;
      this.numero = numero;
      this.piso = piso;
      this.letra = letra;
      this.codigoPostal = codigoPostal;
      this.poblacion = poblacion;
      this.provincia = provincia;
    }
  }
  
  export { Direccion };
  