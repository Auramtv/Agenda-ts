"use strict";
// main.ts  al ejecutar en la terminal traslada los datos del contacto al que se le ha agregado nueva información y debe aparecer solo al contacto objeto de busqueda.
exports.__esModule = true;
var persona_1 = require("./persona");
var direccion_1 = require("./direccion");
var Telefono_1 = require("./Telefono");
var Mail_1 = require("./Mail");
// Crear registros de personas
var direccion1 = new direccion_1.Direccion("Calle cartagena", "13", "3", "B", "28028", "Madrid", "Madrid");
var telefono1 = new Telefono_1.Telefono("Móvil", "626782313");
var mail1 = new Mail_1.Mail("Personal", "juanap25@outlook.com");
var persona1 = new persona_1.Persona("Juana", "Pérez", "76236523A", 30, "25/01/1993", "Rojo", "Femenino", [direccion1], [telefono1], [mail1], "Residencia");
var direccion2 = new direccion_1.Direccion("Costanilla San Andres", "14", "4", "A", "28005", "Madrid", "Madrid");
var telefono2 = new Telefono_1.Telefono("Móvil", "7546890");
var mail2 = new Mail_1.Mail("Personal", "jmarigom12@hotmail.com");
var persona2 = new persona_1.Persona("Marisol", "Gómez", "87457643P", 24, "01/12/1998", "Purpura", "Femenino", [direccion2], [telefono2], [mail2], "Segunda residencia");
var direccion3 = new direccion_1.Direccion("santa Cruz de Mercenado", "13", "3", "A", "28015", "Madrid", "Madrid");
var telefono3 = new Telefono_1.Telefono("fijo", "915782354");
var mail3 = new Mail_1.Mail("personal", "lopezmati16@gmail.com");
var persona3 = new persona_1.Persona("Matias", "López", "11918237Z", 33, "16/03/1990", "Verde", "Masculino", [direccion3], [telefono3], [mail3], "Negocio");
// Mostrar los registros de personas
console.log("Registros de personas:");
console.log(persona1);
console.log(persona2);
console.log(persona3);
// Modificar uno de los registros de persona
var dniABuscar = "76236523A";
var personaEncontrada = [persona1, persona2, persona3].find(function (persona) { return persona.DNI === dniABuscar; });
if (personaEncontrada) {
    var nuevaDireccion = new direccion_1.Direccion("Avenida de la marina", "22", "2", "B", "15002", "A coruña", "Coruña");
    var nuevoTelefono = new Telefono_1.Telefono("fijo", "981440615");
    var nuevoMail = new Mail_1.Mail("Negocio", "jperez@zenstudio.com");
    personaEncontrada.agregarDireccion(nuevaDireccion);
    personaEncontrada.agregarTelefono(nuevoTelefono);
    personaEncontrada.agregarMail(nuevoMail);
}
// Mostrar los registros de personas con los cambios realizados
console.log("\nRegistros de personas con los cambios realizados:");
console.log(persona1);
console.log(persona2);
console.log(persona3);
