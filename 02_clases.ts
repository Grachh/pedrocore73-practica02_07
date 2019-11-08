/* Clases en TypeScript */

class Jugador {

    public nombre: string; // los valores son públicos fuera del objeto
    public apellidos: string;
    public dorsal: number;
    public goles: number;
    private creadoEl: object; // los valores son privados fuera del objeto;

    constructor(nombre: string, apellidos: string, dorsal: number) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.dorsal = dorsal;
        this.goles = 0;
        this.creadoEl = new Date();
    }

    sumaGol(): void {
        this.goles++;
    }

}

let jugador1 = new Jugador('Sergio','Ramos',4);
console.log(jugador1);
// console.log(jugador1.creadoEl) provoca error al ser la propiedad privada
