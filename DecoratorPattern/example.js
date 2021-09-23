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
//Definimos la clase abstracta Bebida
var Bebida = /** @class */ (function () {
    function Bebida() {
        var _this = this;
        //Variable de instancia description
        this.description = "Bebida desconocida";
        //get Description esta implementada
        this.getDescription = function () {
            return _this.description;
        };
    }
    return Bebida;
}());
//Definimos la clase abstracta ExtraDecorator que hereda de Bebida
var ExtraDecorator = /** @class */ (function (_super) {
    __extends(ExtraDecorator, _super);
    function ExtraDecorator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ExtraDecorator;
}(Bebida));
// BEBIDAS
//Definimos una clase Espresso que hereda de bebida
var Espresso = /** @class */ (function (_super) {
    __extends(Espresso, _super);
    function Espresso() {
        var _this = _super.call(this) || this;
        //Necesitamos implementar nuestra funcion cost, en este casi regresamos el numero 30
        _this.cost = function () {
            return 30;
        };
        //Definimos el valor para la varibla de instancia desription que heredamos desde Bebida
        _this.description = "Espresso";
        return _this;
    }
    return Espresso;
}(Bebida));
var Americano = /** @class */ (function (_super) {
    __extends(Americano, _super);
    function Americano() {
        var _this = _super.call(this) || this;
        _this.cost = function () {
            return 25;
        };
        _this.description = "Americano";
        return _this;
    }
    return Americano;
}(Bebida));
// EXTRAS
//Definimos la clase grande que hereda de ExtraDecorator
var Grande = /** @class */ (function (_super) {
    __extends(Grande, _super);
    //Necesitamos pasar por el constructor la instancia de Bebida que vamos a decorar
    function Grande(bebida) {
        var _this = _super.call(this) || this;
        //Implementamos el metodo getDescription para este decorator
        _this.getDescription = function () {
            return _this.bebida.getDescription() + ", Grande";
        };
        //implementamos su propio metodo cost
        //En este caso regresaremos el valor del costo del objeto que estamos decorando multiplicado por 2
        _this.cost = function () {
            return _this.bebida.cost() * 2;
        };
        _this.bebida = bebida;
        return _this;
    }
    return Grande;
}(ExtraDecorator));
var Soya = /** @class */ (function (_super) {
    __extends(Soya, _super);
    function Soya(bebida) {
        var _this = _super.call(this) || this;
        _this.getDescription = function () {
            return _this.bebida.getDescription() + ", Leche de Soya";
        };
        _this.cost = function () {
            return _this.bebida.cost() + 5;
        };
        _this.bebida = bebida;
        return _this;
    }
    return Soya;
}(ExtraDecorator));
var Leche = /** @class */ (function (_super) {
    __extends(Leche, _super);
    function Leche(bebida) {
        var _this = _super.call(this) || this;
        _this.getDescription = function () {
            return _this.bebida.getDescription() + ", Leche Entera";
        };
        _this.cost = function () {
            return _this.bebida.cost() + 3;
        };
        _this.bebida = bebida;
        return _this;
    }
    return Leche;
}(ExtraDecorator));
// SIRVAMOS EL CAFE
// Creamos una bebida espresso con Leche
// Leche es el decorator de Espresso, asi espresso que cuesta 30 + 3 de la leche nos da 33 
var espressoLeche = new Leche(new Espresso());
console.log(espressoLeche.getDescription(), ":", espressoLeche.cost());
// Creamos una bebida cafe americano grande con Leche de soya
// Soya es el decorator de Grande que a su vez es decorator de Americano
// asi Americano que cuesta 25 * 2 por ser grande nos da 50
// esos 50 del Americano Grande mas 5 de la leche de soya: 50 + 5 = 55 
var americanoGrandeSoya = new Soya(new Grande(new Americano()));
console.log(americanoGrandeSoya.getDescription(), ":", americanoGrandeSoya.cost());
