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

// Clases con constructor breve

class Player {

    constructor(public nombre: string,
                public apellidos: string,
                public dorsal: number,
                private creadoEl: object,
                public goles?:number,
               ) {
                   this.goles = goles ? goles : 0;
               }

    sumaGol(): void {
        this.goles++;
    }

}

let player1 = new Player('Cristiano','Ronaldo',9,new Date());
console.log(player1);

// Herencia de clases

class Empleado {
    public nombre: string;
    protected tfnoMovil: string; // para la clase y sus clases hijas
    private edad: number;

    constructor(nombre: string, tfnoMovil: string, edad: number){
        this.nombre = nombre;
        this.tfnoMovil = tfnoMovil;
        this.edad = edad ? edad : 0;
    }

    getNombre() {
        return this.nombre;
    }

    setNombre(nombre: string) {
        this.nombre = nombre;
    }

    setEdadCumple() {
        this.edad++;
    }
}

class Manager extends Empleado {

    public rol: string;
    
    constructor(nombre: string, tfnoMovil: string, edad: number, rol: string ) {
        super(nombre, tfnoMovil, edad);
        this.rol = rol;
    }

    setPrefijo(prefijo: string) {
        this.tfnoMovil = prefijo + this.tfnoMovil; // no da error porque 
                                                  // la propiedad es protegida en la madre
    }

    // setEdadCumple() {
    //     this.edad++; // Lanza error porque la propiedad es privada en la madre
    // }

}

let posicion = new Manager('Juan','666666666', 40,'ventas');
// console.log(posicion.edad) // Error por ser privada
// console.log(posicion.tfnoMovil); // Error por ser protegida
console.log(posicion.rol);
posicion.setPrefijo('+34');
console.log(posicion);

// Composición de clases

class Alumno {
    public nombre: string;
    public dni: string;
    public direcciones: Array<any> = [];

    constructor(nombre: string, dni: string) {
        this.nombre = nombre;
        this.dni = dni;
    }

    setDireccionAlumno(direccion: Direccion) {
        this.direcciones.push(direccion);
    }

}

class Direccion {
    public calle: string;
    public localidad: string;

    constructor(calle: string, localidad: string) {
        this.calle = calle;
        this.localidad = localidad;
    }
}

let cliente1 = new Alumno('Juan','07454154V');
let direccion1 = new Direccion('Serrano Galvache, 56', 'Madrid');

cliente1.setDireccionAlumno(direccion1);
cliente1.setDireccionAlumno({calle:'Ppe Vergara, 100',localidad:'Madrid'});
console.log(cliente1);