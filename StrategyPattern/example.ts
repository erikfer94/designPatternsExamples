//STRATEGY PATTERN

type voidFunction = () => void

//Definimos una interface FlyBehaivior
interface IFlyBehavior{
	fly: voidFunction
}

//Creamos una clase que implemente la interface IFlyBehavior
class PatoFlyBehavior implements IFlyBehavior{
	public fly: voidFunction = () => {
		console.log("vuela como pato")
	}
}

//Creamos otra clase que implemente la interface IFlyBehavior
class NoFlyBehavior implements IFlyBehavior{
	public fly: voidFunction = () => {
		console.log("no vuela :(")
	}
}

//Definimos una interface ICuackBehavior
interface ICuackBehavior{
	cuack: voidFunction
}

//Creamos otra clase que implemente la interface ICuackBehavior
class NoCuackBehavior implements ICuackBehavior{
	public cuack: voidFunction = () => {
		console.log("no hace cuack :(")
	}
}

//Definimos a la clase pato
class Pato{
	flyBehavior: IFlyBehavior; //Variable para interface IFlyBehavior
	cuackBehavior: ICuackBehavior; //Variable para interface ICuackBehavior

	constructor (flyBehavior: IFlyBehavior, cuackBehavior: ICuackBehavior){
		//Asignamos los valores de las implementaciones concretas de cada Behavios que construimos
		this.flyBehavior = flyBehavior;
		this.cuackBehavior = cuackBehavior;
	}

	public display = () => {
		console.log("aqui se ve el pato")
	}

	public fly = () => {
		//Se invoca la funcion fly del behaivior que se paso en el constructor
		this.flyBehavior.fly();
	}

	public cuack = () => {
		//Se invoca la funcion cuack del behaivior que se paso en el constructor
		this.cuackBehavior.cuack()
	}
}

//IMPLEMENTACION

/** Creamoe al pato de montaña conmo un pato con 
  * PatoFlyBehavior y NoCuackBehavior
  */
let patoMontana = new Pato(new PatoFlyBehavior, new NoCuackBehavior);

/** Creamos al pato maco conmo un pato con 
  * NoFlyBehavior y NoCuackBehavior
  */
let patoManco = new Pato(new NoFlyBehavior, new NoCuackBehavior);

patoMontana.display(); //aqui se ve el pato
patoMontana.fly(); //vuela como pato
patoMontana.cuack(); //no hace cuack :(
patoManco.fly(); // no vuela :(
patoManco.cuack(); // no hace cuack :(
