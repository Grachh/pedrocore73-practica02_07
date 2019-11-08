/* Clases en TypeScript */
var Jugador = /** @class */ (function () {
    function Jugador(nombre, apellidos, dorsal) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.dorsal = dorsal;
        this.goles = 0;
        this.creadoEl = new Date();
    }
    Jugador.prototype.sumaGol = function () {
        this.goles++;
    };
    return Jugador;
}());
var jugador1 = new Jugador('Sergio', 'Ramos', 4);
console.log(jugador1);
// console.log(jugador1.creadoEl) provoca error al ser la propiedad privada
