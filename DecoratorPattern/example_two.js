//DECORATOR PATTERN
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
//Definimos una clase abstracta Bebida con su metodo cost
var Bebida = /** @class */ (function () {
    function Bebida() {
    }
    return Bebida;
}());
//Definimos una clase abstracta ExtraBebida que hereda de Bebida
var ExtraBebida = /** @class */ (function (_super) {
    __extends(ExtraBebida, _super);
    function ExtraBebida() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ExtraBebida;
}(Bebida));
//Definimos una clase Espresso que hereda de Bebida
var Espresso = /** @class */ (function (_super) {
    __extends(Espresso, _super);
    function Espresso() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        //Definimos la funcion cost para Espresso
        _this.cost = function () {
            return 25;
        };
        return _this;
    }
    return Espresso;
}(Bebida));
//Definimos una clase Grande que hereda de ExtraBebida
var Grande = /** @class */ (function (_super) {
    __extends(Grande, _super);
    function Grande(bebida) {
        var _this = _super.call(this) || this;
        //Definimos la funcion cost para Extra Bebida
        _this.cost = function () {
            return _this.bebida.cost() * 2; //El costo de la bebida que se paso por el constructor al doble
        };
        _this.bebida = bebida;
        return _this;
    }
    return Grande;
}(ExtraBebida));
var LecheSoya = /** @class */ (function (_super) {
    __extends(LecheSoya, _super);
    function LecheSoya(bebida) {
        var _this = _super.call(this) || this;
        _this.cost = function () {
            return _this.bebida.cost() + 10;
        };
        _this.bebida = bebida;
        return _this;
    }
    return LecheSoya;
}(ExtraBebida));
//IMPLEMENTACION
/**
  * Creamos una nueva bebida
  * Espresso con leche de soya grande
  */
var bebida = new Grande(new LecheSoya(new Espresso()));
console.log("El costo es: " + bebida.cost()); //El costo es 70 ((25 + 10) * 2)
var bebidaDeLaBren = new LecheSoya(new Grande(new Espresso()));
console.log("El costo es: " + bebidaDeLaBren.cost()); //El costo es 60 ( 25 * 2 + 10 )
