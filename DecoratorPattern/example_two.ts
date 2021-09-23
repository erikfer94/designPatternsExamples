//DECORATOR PATTERN

//Definimos una clase abstracta Bebida con su metodo cost
abstract class Bebida{
	public abstract cost() : number;
	//
}

//Definimos una clase abstracta ExtraBebida que hereda de Bebida
abstract class ExtraBebida extends Bebida{
	public abstract cost() : number;
	//
}

//Definimos una clase Espresso que hereda de Bebida
class Espresso extends Bebida{

	//Definimos la funcion cost para Espresso
	public cost: () => number = () => {
		return 25
	}
}

//Definimos una clase Grande que hereda de ExtraBebida
class Grande extends ExtraBebida{
	bebida: Bebida; //Aqui definimos una variable donde guardarmos la implmentacion de bebida que pase por e constructor

	constructor(bebida: Bebida){
		super();
		this.bebida = bebida;
	}

	//Definimos la funcion cost para Extra Bebida
	public cost: () => number = () => {
		return this.bebida.cost() * 2; //El costo de la bebida que se paso por el constructor al doble
	}
}

class LecheSoya extends ExtraBebida{
	bebida: Bebida;

	constructor(bebida: Bebida){
		super();
		this.bebida = bebida;
	}

	public cost: () => number = () => {
		return this.bebida.cost() + 10;
	}
}

//IMPLEMENTACION
/**
  * Creamos una nueva bebida
  * Espresso con leche de soya grande
  */
const bebida : Bebida = new Grande(new LecheSoya(new Espresso()));
console.log("El costo es: " + bebida.cost()) //El costo es 70 ((25 + 10) * 2)

const bebidaDeLaBren : Bebida = new LecheSoya(new Grande(new Espresso()));
console.log("El costo es: " + bebidaDeLaBren.cost()) //El costo es 60 ( 25 * 2 + 10 )


