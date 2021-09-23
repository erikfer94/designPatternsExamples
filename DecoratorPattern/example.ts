type stringFunction = () => string
type numberFunction = () => number

//Definimos la clase abstracta Bebida
abstract class Bebida{
	//Variable de instancia description
	public description: string = "Bebida desconocida";

	//get Description esta implementada
	public getDescription: stringFunction = () => {
		return this.description
	}

	//Cost es abstracto asi que debemos implementarla en las subclases
	public abstract cost() : number;
}

//Definimos la clase abstracta ExtraDecorator que hereda de Bebida
abstract class ExtraDecorator extends Bebida{
	//Aqui definimos una variable de instancia con el supertipo Bebida,
	//Este objeto sera el que estaremos decorando
	public bebida: Bebida;

	//Necesitamos que cada ExtraDecorator implemente su propio getDescription
	public abstract getDescription: stringFunction;
}

// BEBIDAS

//Definimos una clase Espresso que hereda de bebida
class Espresso extends Bebida{

	constructor() {
		super();
		//Definimos el valor para la varibla de instancia desription que heredamos desde Bebida
		this.description = "Espresso"
	}

	//Necesitamos implementar nuestra funcion cost, en este casi regresamos el numero 30
	public cost: numberFunction = () => {
		return 30; 
	}
}

class Americano extends Bebida{

	constructor() {
		super();
		this.description = "Americano"
	}

	public cost: numberFunction = () => {
		return 25; 
	}
}

// EXTRAS

//Definimos la clase grande que hereda de ExtraDecorator
class Grande extends ExtraDecorator{

	//Necesitamos pasar por el constructor la instancia de Bebida que vamos a decorar
	constructor(bebida: Bebida) {
		super();
		this.bebida = bebida
	}

	//Implementamos el metodo getDescription para este decorator
	public getDescription: stringFunction = () => {
		return this.bebida.getDescription() + ", Grande"
	}

	//implementamos su propio metodo cost
	//En este caso regresaremos el valor del costo del objeto que estamos decorando multiplicado por 2
	public cost: numberFunction = () => {
		return this.bebida.cost() * 2;
	}
}

class Soya extends ExtraDecorator{

	constructor(bebida: Bebida) {
		super();
		this.bebida = bebida
	}

	public getDescription: stringFunction = () => {
		return this.bebida.getDescription() + ", Leche de Soya"
	}

	public cost: numberFunction = () => {
		return this.bebida.cost() + 5;
	}
}

class Leche extends ExtraDecorator{

	constructor(bebida: Bebida) {
		super();
		this.bebida = bebida
	}

	public getDescription: stringFunction = () => {
		return this.bebida.getDescription() + ", Leche Entera"
	}

	public cost: numberFunction = () => {
		return this.bebida.cost() + 3;
	}
}

// SIRVAMOS EL CAFE

// Creamos una bebida espresso con Leche
// Leche es el decorator de Espresso, asi espresso que cuesta 30 + 3 de la leche nos da 33 
const espressoLeche: Bebida = new Leche(new Espresso());
console.log(espressoLeche.getDescription(), ":", espressoLeche.cost())

// Creamos una bebida cafe americano grande con Leche de soya
// Soya es el decorator de Grande que a su vez es decorator de Americano
// asi Americano que cuesta 25 * 2 por ser grande nos da 50
// esos 50 del Americano Grande mas 5 de la leche de soya: 50 + 5 = 55 
const americanoGrandeSoya: Bebida = new Soya(new Grande(new Americano()));
console.log(americanoGrandeSoya.getDescription(), ":", americanoGrandeSoya.cost())