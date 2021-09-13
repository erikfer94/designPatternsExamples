//STRATEGY PATTERN

type voidFunction = () => void

//Definimos una interface FlyBehaivior
interface IFlyBehavior{
	fly: voidFunction
}

//Definimos una clase que implemente la interface IFlyBehavior
class FlyWithWingsBehavior implements IFlyBehavior{
	public fly: voidFunction = () => {
		console.log("vuela como pato")
	}
}

//Definimos otra clase que implemente la interface IFlyBehavior
class NoFlyBehavior implements IFlyBehavior{
	public fly: voidFunction = () => {
		console.log("no vuela :(")
	}
}

//Definimos una interface ICuackBehavior
interface ICuackBehavior{
	cuack: voidFunction
}

//Definimos una clase que implemente la interface ICuackBehavior
class CuackBehavior implements ICuackBehavior{
	public cuack: voidFunction = () => {
		console.log("cuack!!")
	}
}

//Definimos otra clase que implemente la interface ICuackBehavior
class SqueakBehavior implements ICuackBehavior{
	public cuack: voidFunction = () => {
		console.log("Squeak!!")
	}
}

//Definimos otra clase que implemente la interface ICuackBehavior
class MuteCuackBehavior implements ICuackBehavior{
	public cuack: voidFunction = () => {
		console.log("*silencio*")
	}
}

//Definimos a la clase abstracta pato
abstract class Pato{
	flyBehavior: IFlyBehavior; //Variable para interface IFlyBehavior
	cuackBehavior: ICuackBehavior; //Variable para interface ICuackBehavior

	public abstract display: voidFunction; //Cada pato tiene su propio display

	public performFly: voidFunction = () => {
		//Se invoca la funcion fly del behaivior que se paso en el constructor
		this.flyBehavior.fly();
	}

	public performCuack: voidFunction = () => {
		//Se invoca la funcion cuack del behaivior que se paso en el constructor
		this.cuackBehavior.cuack()
	}

	public swim: voidFunction = () => {
		console.log("Todos los patos pueden flotar")
	}
}

//IMPLEMENTACION

/** Definimos la clase PatoSalvaje con
  * FlyWithWingsBehavior y CuackBehavior
  */

class PatoSalvaje extends Pato {
	
	constructor (){
		super();
		//Asignamos los valores de las implementaciones concretas de cada Behavior
		this.flyBehavior = new FlyWithWingsBehavior();
		this.cuackBehavior = new CuackBehavior();
	}

	public display: voidFunction = () => {
		console.log("Hola estoy en una montaña")
	}

}

/** Definimos la clase PatoHule con
  * NoFlyBehavior y SqueakBehavior
  */

class PatoHule extends Pato {
	
	constructor (){
		super();
		//Asignamos los valores de las implementaciones concretas de cada Behavior
		this.flyBehavior = new NoFlyBehavior();
		this.cuackBehavior = new SqueakBehavior();
	}

	public display: voidFunction = () => {
		console.log("Hola estoy en una tina")
	}

}


/** Definimos la clase PatoMadera con
  * NoFlyBehavior y MuteCuackBehavior
  */

class PatoMadera extends Pato {
	
	constructor (){
		super();
		//Asignamos los valores de las implementaciones concretas de cada Behavior
		this.flyBehavior = new NoFlyBehavior();
		this.cuackBehavior = new MuteCuackBehavior();
	}

	public display: voidFunction = () => {
		console.log("Hola soy un adorno")
	}

}

//Creamos a los objetos pato.

//Pato Salvaje
console.log("Pato Salvaje")
const unPatoSalvaje = new PatoSalvaje()
unPatoSalvaje.display(); //Hola estoy en una montaña
unPatoSalvaje.performFly(); //vuela como pato
unPatoSalvaje.performCuack(); //cuack
unPatoSalvaje.swim(); //Todos los patos pueden flotar

//Pato Hule
console.log("Pato Hule")
const unPatoHule = new PatoHule()
unPatoHule.display(); //Hola estoy en una tina
unPatoHule.performFly(); //no vuela
unPatoHule.performCuack(); //squeak
unPatoHule.swim(); //Todos los patos pueden flotar

//Pato Madera
console.log("Pato Madera")
const unPatoMadera = new PatoMadera()
unPatoMadera.display(); //Hola soy un adorno
unPatoMadera.performFly(); //no vuela
unPatoMadera.performCuack(); //*silencio
unPatoMadera.swim(); //Todos los patos pueden flotar
