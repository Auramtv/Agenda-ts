// main.ts  al ejecutar en la terminal traslada los datos del contacto al que se le ha agregado nueva información y debe aparecer solo al contacto objeto de busqueda.


import { Persona } from "./Persona";
import { Direccion } from "./direccion";
import { Telefono } from "./Telefono";
import { Mail } from "./Mail";

// Crear registros de personas
const direccion1 = new Direccion(
  "Calle cartagena",
  "13",
  "3",
  "B",
  "28028",
  "Madrid",
  "Madrid"
);

const telefono1 = new Telefono("Móvil", "626782313");
const mail1 = new Mail("Personal", "juanap25@outlook.com");

const persona1 = new Persona(
  "Juana",
  "Pérez",
  "76236523A",
  30,
  "25/01/1993",
  "Rojo",
  "Femenino",
  [direccion1],
  [telefono1],
  [mail1],
  "Residencia"
);

const direccion2 = new Direccion(
  "Costanilla San Andres",
  "14",
  "4",
  "A",
  "28005",
  "Madrid",
  "Madrid"
);

const telefono2 = new Telefono("Móvil", "7546890");
const mail2 = new Mail("Personal", "jmarigom12@hotmail.com");

const persona2 = new Persona(
  "Marisol",
  "Gómez",
  "87457643P",
  24,
  "01/12/1998",
  "Purpura",
  "Femenino",
  [direccion2],
  [telefono2],
  [mail2],
  "Segunda residencia"
);

const direccion3 = new Direccion(
  "santa Cruz de Mercenado",
  "13",
  "3",
  "A",
  "28015",
  "Madrid",
  "Madrid"
);

const telefono3 = new Telefono("fijo", "915782354");
const mail3 = new Mail("personal", "lopezmati16@gmail.com");

const persona3 = new Persona(
  "Matias",
  "López",
  "11918237Z",
  33,
  "16/03/1990",
  "Verde",
  "Masculino",
  [direccion3],
  [telefono3],
  [mail3],
  "Negocio"
);


// Mostrar los registros de personas
console.log("Registros de personas:");
console.log(persona1);
console.log(persona2);
console.log(persona3);

// Modificar uno de los registros de persona
const dniABuscar = "76236523A";
const personaEncontrada = [persona1, persona2, persona3].find(
  (persona) => persona.DNI === dniABuscar
);

if (personaEncontrada) {
  const nuevaDireccion = new Direccion(
    "Avenida de la marina",
    "22",
    "2",
    "B",
    "15002",
    "A coruña",
    "Coruña"
  );

  const nuevoTelefono = new Telefono("fijo", "981440615");
  const nuevoMail = new Mail("Negocio", "jperez@zenstudio.com");

  personaEncontrada.agregarDireccion(nuevaDireccion);
  personaEncontrada.agregarTelefono(nuevoTelefono);
  personaEncontrada.agregarMail(nuevoMail);
}

// Mostrar los registros de personas con los cambios realizados
console.log("\nRegistros de personas con los cambios realizados:");
console.log(persona1);
console.log(persona2);
console.log(persona3);
