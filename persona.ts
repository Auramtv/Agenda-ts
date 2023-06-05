// Persona.ts

import { Direccion } from "./direccion";
import { Telefono } from "./Telefono";
import { Mail } from "./Mail";

class Persona {
  nombre: string;
  apellidos: string;
  DNI: string;
  edad: number;
  cumpleanos: string;
  colorFavorito: string;
  sexo: string;
  direcciones: Direccion[];
  telefonos: Telefono[];
  mails: Mail[];
  notas: string;

  constructor(
    nombre: string,
    apellidos: string,
    DNI: string,
    edad: number,
    cumpleanos: string,
    colorFavorito: string,
    sexo: string,
    direcciones: Direccion[],
    telefonos: Telefono[],
    mails: Mail[],
    notas: string
  ) {
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.DNI = DNI;
    this.edad = edad;
    this.cumpleanos = cumpleanos;
    this.colorFavorito = colorFavorito;
    this.sexo = sexo;
    this.direcciones = direcciones;
    this.telefonos = telefonos;
    this.mails = mails;
    this.notas = notas;
  }

  // Métodos para obtener los datos de la persona
  obtenerDirecciones(): Direccion[] {
    return this.direcciones;
  }

  obtenerTelefonos(): Telefono[] {
    return this.telefonos;
  }

  obtenerMails(): Mail[] {
    return this.mails;
  }

  // Método para agregar una nueva dirección
  agregarDireccion(direccion: Direccion): void {
    this.direcciones.push(direccion);
  }

  // Método para agregar un nuevo teléfono
  agregarTelefono(telefono: Telefono): void {
    this.telefonos.push(telefono);
  }

  // Método para agregar un nuevo mail
  agregarMail(mail: Mail): void {
    this.mails.push(mail);
  }
}

export { Persona };

