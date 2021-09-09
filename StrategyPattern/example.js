//STRATEGY PATTERN
//Creamos una clase que implemente la interface IFlyBehavior
var PatoFlyBehavior = /** @class */ (function () {
    function PatoFlyBehavior() {
        this.fly = function () {
            console.log("vuela como pato");
        };
    }
    return PatoFlyBehavior;
}());
//Creamos otra clase que implemente la interface IFlyBehavior
var NoFlyBehavior = /** @class */ (function () {
    function NoFlyBehavior() {
        this.fly = function () {
            console.log("no vuela :(");
        };
    }
    return NoFlyBehavior;
}());
//Creamos otra clase que implemente la interface ICuackBehavior
var NoCuackBehavior = /** @class */ (function () {
    function NoCuackBehavior() {
        this.cuack = function () {
            console.log("no hace cuack :(");
        };
    }
    return NoCuackBehavior;
}());
//Definimos a la clase pato
var Pato = /** @class */ (function () {
    function Pato(flyBehavior, cuackBehavior) {
        var _this = this;
        this.display = function () {
            console.log("aqui se ve el pato");
        };
        this.fly = function () {
            //Se invoca la funcion fly del behaivior que se paso en el constructor
            _this.flyBehavior.fly();
        };
        this.cuack = function () {
            //Se invoca la funcion cuack del behaivior que se paso en el constructor
            _this.cuackBehavior.cuack();
        };
        //Asignamos los valores de las implementaciones concretas de cada Behavios que construimos
        this.flyBehavior = flyBehavior;
        this.cuackBehavior = cuackBehavior;
    }
    return Pato;
}());
//IMPLEMENTACION
/** Creamoe al pato de montaña conmo un pato con
  * PatoFlyBehavior y NoCuackBehavior
  */
var patoMontana = new Pato(new PatoFlyBehavior, new NoCuackBehavior);
/** Creamos al pato maco conmo un pato con
  * NoFlyBehavior y NoCuackBehavior
  */
var patoManco = new Pato(new NoFlyBehavior, new NoCuackBehavior);
patoMontana.display(); //aqui se ve el pato
patoMontana.fly(); //vuela como pato
patoMontana.cuack(); //no hace cuack :(
patoManco.fly(); // no vuela :(
patoManco.cuack(); // no hace cuack :(
