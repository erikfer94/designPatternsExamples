//OBSERVER PATTERN
//Definimos la clase EstacionSismos que implements IStation
var EstacionSismos = /** @class */ (function () {
    function EstacionSismos() {
        var _this = this;
        this.observers = []; //Aqui guardamos los observers
        this.move = 100; //Variable de movimiento que se va a reportar
        //Funcion para agregar observers al array
        this.add = function (observer) {
            _this.observers.push(observer);
        };
        // Funcion par borrar observers del array
        this.remove = function (observer) {
            //Algo para borrar
        };
        //Aqui se notifica a cada observer registrado
        this.notify = function () {
            for (var _i = 0, _a = _this.observers; _i < _a.length; _i++) {
                var observer = _a[_i];
                observer.update(); //funcion update del observer
            }
        };
        this.getMovement = function () {
            return _this.move; //regresa el movimiento
        };
    }
    return EstacionSismos;
}());
//Definimos una clase Phone que implementa la interface IStationObserver
var PhoneApp = /** @class */ (function () {
    function PhoneApp(station) {
        var _this = this;
        //Funcion a la que notifica EstacionSismos
        this.update = function () {
            var movement = _this.station.getMovement(); //Obtiene el movimiento
            console.log("Hola desde phoneApp", movement);
            //
        };
        this.station = station; // Se subscribe a la estacion
    }
    return PhoneApp;
}());
var LapTopApp = /** @class */ (function () {
    function LapTopApp(station) {
        var _this = this;
        this.update = function () {
            var movement = _this.station.getMovement();
            console.log("Hola desde LapTopApp", movement);
            //
        };
        this.station = station;
    }
    return LapTopApp;
}());
//IMPLEMENTACION
/**
  * Creamos una nueva estacion
  */
var estacion = new EstacionSismos;
/**
  * Creamos tres observers que se subscribiran a la estacion
  */
var someApp = new PhoneApp(estacion);
var CairoApp = new PhoneApp(estacion);
var CristalLap = new LapTopApp(estacion);
estacion.add(someApp); // Hola desde PhoneApp 100
estacion.add(CairoApp); // Hola desde PhoneApp 100
estacion.add(CristalLap); // Hola desde LapTopApp 100
estacion.notify();
