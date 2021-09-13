//STRATEGY PATTERN
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//Definimos una clase que implemente la interface IFlyBehavior
var FlyWithWingsBehavior = /** @class */ (function () {
    function FlyWithWingsBehavior() {
        this.fly = function () {
            console.log("vuela como pato");
        };
    }
    return FlyWithWingsBehavior;
}());
//Definimos otra clase que implemente la interface IFlyBehavior
var NoFlyBehavior = /** @class */ (function () {
    function NoFlyBehavior() {
        this.fly = function () {
            console.log("no vuela :(");
        };
    }
    return NoFlyBehavior;
}());
//Definimos una clase que implemente la interface ICuackBehavior
var CuackBehavior = /** @class */ (function () {
    function CuackBehavior() {
        this.cuack = function () {
            console.log("cuack!!");
        };
    }
    return CuackBehavior;
}());
//Definimos otra clase que implemente la interface ICuackBehavior
var SqueakBehavior = /** @class */ (function () {
    function SqueakBehavior() {
        this.cuack = function () {
            console.log("Squeak!!");
        };
    }
    return SqueakBehavior;
}());
//Definimos otra clase que implemente la interface ICuackBehavior
var MuteCuackBehavior = /** @class */ (function () {
    function MuteCuackBehavior() {
        this.cuack = function () {
            console.log("*silencio*");
        };
    }
    return MuteCuackBehavior;
}());
//Definimos a la clase abstracta pato
var Pato = /** @class */ (function () {
    function Pato() {
        var _this = this;
        this.performFly = function () {
            //Se invoca la funcion fly del behaivior que se paso en el constructor
            _this.flyBehavior.fly();
        };
        this.performCuack = function () {
            //Se invoca la funcion cuack del behaivior que se paso en el constructor
            _this.cuackBehavior.cuack();
        };
        this.swim = function () {
            console.log("Todos los patos pueden flotar");
        };
    }
    return Pato;
}());
//IMPLEMENTACION
/** Definimos la clase PatoSalvaje con
  * FlyWithWingsBehavior y CuackBehavior
  */
var PatoSalvaje = /** @class */ (function (_super) {
    __extends(PatoSalvaje, _super);
    function PatoSalvaje() {
        var _this = _super.call(this) || this;
        _this.display = function () {
            console.log("Hola estoy en una montaña");
        };
        //Asignamos los valores de las implementaciones concretas de cada Behavior
        _this.flyBehavior = new FlyWithWingsBehavior();
        _this.cuackBehavior = new CuackBehavior();
        return _this;
    }
    return PatoSalvaje;
}(Pato));
/** Definimos la clase PatoHule con
  * NoFlyBehavior y SqueakBehavior
  */
var PatoHule = /** @class */ (function (_super) {
    __extends(PatoHule, _super);
    function PatoHule() {
        var _this = _super.call(this) || this;
        _this.display = function () {
            console.log("Hola estoy en una tina");
        };
        //Asignamos los valores de las implementaciones concretas de cada Behavior
        _this.flyBehavior = new NoFlyBehavior();
        _this.cuackBehavior = new SqueakBehavior();
        return _this;
    }
    return PatoHule;
}(Pato));
/** Definimos la clase PatoMadera con
  * NoFlyBehavior y MuteCuackBehavior
  */
var PatoMadera = /** @class */ (function (_super) {
    __extends(PatoMadera, _super);
    function PatoMadera() {
        var _this = _super.call(this) || this;
        _this.display = function () {
            console.log("Hola soy un adorno");
        };
        //Asignamos los valores de las implementaciones concretas de cada Behavior
        _this.flyBehavior = new NoFlyBehavior();
        _this.cuackBehavior = new MuteCuackBehavior();
        return _this;
    }
    return PatoMadera;
}(Pato));
//Creamos a los objetos pato.
//Pato Salvaje
console.log("Pato Salvaje");
var unPatoSalvaje = new PatoSalvaje();
unPatoSalvaje.display(); //Hola estoy en una montaña
unPatoSalvaje.performFly(); //vuela como pato
unPatoSalvaje.performCuack(); //cuack
unPatoSalvaje.swim(); //Todos los patos pueden flotar
//Pato Hule
console.log("Pato Hule");
var unPatoHule = new PatoHule();
unPatoHule.display(); //Hola estoy en una tina
unPatoHule.performFly(); //no vuela
unPatoHule.performCuack(); //squeak
unPatoHule.swim(); //Todos los patos pueden flotar
//Pato Madera
console.log("Pato Madera");
var unPatoMadera = new PatoMadera();
unPatoMadera.display(); //Hola soy un adorno
unPatoMadera.performFly(); //no vuela
unPatoMadera.performCuack(); //*silencio
unPatoMadera.swim(); //Todos los patos pueden flotar
