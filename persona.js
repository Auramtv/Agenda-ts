"use strict";
// Persona.ts
exports.__esModule = true;
exports.Persona = void 0;
var Persona = /** @class */ (function () {
    function Persona(nombre, apellidos, DNI, edad, cumpleanos, colorFavorito, sexo, direcciones, telefonos, mails, notas) {
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
    Persona.prototype.obtenerDirecciones = function () {
        return this.direcciones;
    };
    Persona.prototype.obtenerTelefonos = function () {
        return this.telefonos;
    };
    Persona.prototype.obtenerMails = function () {
        return this.mails;
    };
    // Método para agregar una nueva dirección
    Persona.prototype.agregarDireccion = function (direccion) {
        this.direcciones.push(direccion);
    };
    // Método para agregar un nuevo teléfono
    Persona.prototype.agregarTelefono = function (telefono) {
        this.telefonos.push(telefono);
    };
    // Método para agregar un nuevo mail
    Persona.prototype.agregarMail = function (mail) {
        this.mails.push(mail);
    };
    return Persona;
}());
exports.Persona = Persona;
