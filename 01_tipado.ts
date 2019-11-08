// Tipado de datos

// Tipo string

let mensaje: string;

mensaje = '¡Hola Mundo!';
console.log(mensaje);
// mensaje = 3; lanza error porque asigno un number a string

// Tipo number

let resultado: number;
resultado = 8.6;

// Tipo boolean

let mayorEdad: boolean;
mayorEdad = true;

// Arrays

let frutas: string[];
frutas = ['pera','manzana','pera'];

let vehiculos: Array<string>;
vehiculos = ['Mercedes','VW','BMW'];

// Objetos

let jugador1: object;
jugador1 = {
    nombre: 'Rafael',
    apellidos: 'Nadal'
}

// Any 

//let edad = 'Cuarenta'; // Inferencia de tipos le asigna string
// edad = 38; // Lanza error

let edad: any = 'Dieciocho';
edad = 19;

// Tipos de unión

type strnum = string | number;

let referencia: strnum;
referencia = 'ABC123467';
referencia = 12457781;
// referencia = true; // lanza error porque no es string ni number

// Tipos de unión complejos

type raza = 'Pastor Alemán' | 'Dogo' | 'Mastín';

let toby:raza;
toby = 'Mastín';
// toby = 'Chihuahua'; // error

// Tipos a funciones

function suma(a:number, b:number):string {
    let sumatorio = a + b;
    return 'El resultado es ' + sumatorio;
}

// let resultado2 = suma('pepe',2); // Error

// Parámetros opcionales de TypeScript

function multiplicacion(a:number,b:number,mensaje?:string):string {
    let resultado = a * b;
    // ternario  (condicion) ? codigosicumple : codigosinocumple
    return mensaje ? mensaje + resultado : 'El resultado es ' + resultado;
}

let puntuacion = multiplicacion(3,5);
console.log(puntuacion);

let puntuacion2 = multiplicacion(3,5,'The result is ');
console.log(puntuacion2);

// Tipos genéricos para funciones (el tipo se define cuando se
// ejecuta la función)

function devValor<T> (a:T) {
    return a;
}

let valor1 = devValor<string>('rojo');
// let valor2 = devValor<number>('12'); lanzaría error