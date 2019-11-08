/* Clases en TypeScript */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
// Clases con constructor breve
var Player = /** @class */ (function () {
    function Player(nombre, apellidos, dorsal, creadoEl, goles) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.dorsal = dorsal;
        this.creadoEl = creadoEl;
        this.goles = goles;
        this.goles = goles ? goles : 0;
    }
    Player.prototype.sumaGol = function () {
        this.goles++;
    };
    return Player;
}());
var player1 = new Player('Cristiano', 'Ronaldo', 9, new Date());
console.log(player1);
// Herencia de clases
var Empleado = /** @class */ (function () {
    function Empleado(nombre, tfnoMovil, edad) {
        this.nombre = nombre;
        this.tfnoMovil = tfnoMovil;
        this.edad = edad ? edad : 0;
    }
    Empleado.prototype.getNombre = function () {
        return this.nombre;
    };
    Empleado.prototype.setNombre = function (nombre) {
        this.nombre = nombre;
    };
    Empleado.prototype.setEdadCumple = function () {
        this.edad++;
    };
    return Empleado;
}());
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(nombre, tfnoMovil, edad, rol) {
        var _this = _super.call(this, nombre, tfnoMovil, edad) || this;
        _this.rol = rol;
        return _this;
    }
    Manager.prototype.setPrefijo = function (prefijo) {
        this.tfnoMovil = prefijo + this.tfnoMovil; // no da error porque 
        // la propiedad es protegida en la madre
    };
    return Manager;
}(Empleado));
var posicion = new Manager('Juan', '666666666', 40, 'ventas');
// console.log(posicion.edad) // Error por ser privada
// console.log(posicion.tfnoMovil); // Error por ser protegida
console.log(posicion.rol);
posicion.setPrefijo('+34');
console.log(posicion);
// Composición de clases
var Alumno = /** @class */ (function () {
    function Alumno(nombre, dni) {
        this.direcciones = [];
        this.nombre = nombre;
        this.dni = dni;
    }
    Alumno.prototype.setDireccionAlumno = function (direccion) {
        this.direcciones.push(direccion);
    };
    return Alumno;
}());
var Direccion = /** @class */ (function () {
    function Direccion(calle, localidad) {
        this.calle = calle;
        this.localidad = localidad;
    }
    return Direccion;
}());
var cliente1 = new Alumno('Juan', '07454154V');
var direccion1 = new Direccion('Serrano Galvache, 56', 'Madrid');
cliente1.setDireccionAlumno(direccion1);
cliente1.setDireccionAlumno({ calle: 'Ppe Vergara, 100', localidad: 'Madrid' });
console.log(cliente1);
