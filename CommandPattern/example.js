//COMMAND PATTERN
//Definimos una clase reciever que es la que estara recibiendo los comandos
var Reciever = /** @class */ (function () {
    function Reciever(posicion) {
        this.posicion = posicion;
    }
    Reciever.prototype.addTen = function () {
        this.posicion += 10;
    };
    Reciever.prototype.substractTen = function () {
        this.posicion -= 10;
    };
    Reciever.prototype.multupliyTen = function () {
        this.posicion *= 10;
    };
    Reciever.prototype.devideTen = function () {
        this.posicion /= 10;
    };
    return Reciever;
}());
//Definimos un comando para añadir y substraer 10 al reciever
var AddCommand = /** @class */ (function () {
    function AddCommand(reciever) {
        var _this = this;
        //Execute command
        this.execute = function () {
            _this.reciever.addTen();
        };
        //UnexecuteCommand
        this.unexecute = function () {
            _this.reciever.substractTen();
        };
        this.reciever = reciever;
    }
    return AddCommand;
}());
//Definimos un comando para multiplicar y dividir 10 al reciever
var MultCommand = /** @class */ (function () {
    function MultCommand(reciever) {
        var _this = this;
        this.execute = function () {
            _this.reciever.multupliyTen();
        };
        this.unexecute = function () {
            _this.reciever.devideTen();
        };
        this.reciever = reciever;
    }
    return MultCommand;
}());
//Creamos una clase control que ejecutara los comandos definidos en el contructor
var Control = /** @class */ (function () {
    function Control(add, multiply) {
        this.add = add;
        this.multiply = multiply;
    }
    Control.prototype.pressAdd = function () {
        this.add.execute();
    };
    Control.prototype.pressSubstract = function () {
        this.add.unexecute();
    };
    Control.prototype.pressMult = function () {
        this.multiply.execute();
    };
    Control.prototype.pressDevide = function () {
        this.multiply.unexecute();
    };
    return Control;
}());
//IMPLEMENTACION
/**
  * Creamos un objeto reciever
  */
var reciever = new Reciever(100);
/**
  * Creamos un objeto control y pasamos los comandos que usaremos
  */
var control = new Control(new AddCommand(reciever), new MultCommand(reciever));
console.log(reciever.posicion);
control.pressAdd();
console.log(reciever.posicion);
control.pressSubstract();
console.log(reciever.posicion);
control.pressMult();
console.log(reciever.posicion);
control.pressDevide();
console.log(reciever.posicion);
