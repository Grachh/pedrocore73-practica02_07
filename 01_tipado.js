// Tipado de datos
// Tipo string
var mensaje;
mensaje = '¡Hola Mundo!';
console.log(mensaje);
// mensaje = 3; lanza error porque asigno un number a string
// Tipo number
var resultado;
resultado = 8.6;
// Tipo boolean
var mayorEdad;
mayorEdad = true;
// Arrays
var frutas;
frutas = ['pera', 'manzana', 'pera'];
var vehiculos;
vehiculos = ['Mercedes', 'VW', 'BMW'];
// Objetos
var jugador1;
jugador1 = {
    nombre: 'Rafael',
    apellidos: 'Nadal'
};
// Any 
//let edad = 'Cuarenta'; // Inferencia de tipos le asigna string
// edad = 38; // Lanza error
var edad = 'Dieciocho';
edad = 19;
var referencia;
referencia = 'ABC123467';
referencia = 12457781;
var toby;
toby = 'Mastín';
// toby = 'Chihuahua'; // error
// Tipos a funciones
function suma(a, b) {
    var sumatorio = a + b;
    return 'El resultado es ' + sumatorio;
}
// let resultado2 = suma('pepe',2); // Error
