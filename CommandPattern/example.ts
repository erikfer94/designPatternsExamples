//COMMAND PATTERN

type voidFunction = () => void

//Definimos una interface ICommand
interface ICommand {
	execute: voidFunction,
	unexecute: voidFunction
}

//Definimos una clase reciever que es la que estara recibiendo los comandos
class Reciever{
	posicion: number;

	constructor(posicion: number){
		this.posicion = posicion
	}

	addTen(){
		this.posicion += 10;
	}

	substractTen(){
		this.posicion -= 10;
	}

	multupliyTen(){
		this.posicion *= 10;
	}

	devideTen(){
		this.posicion /= 10;
	}
}

//Definimos un comando para añadir y substraer 10 al reciever
class AddCommand implements ICommand{
	reciever: Reciever; //Awui almacenaremos al objeto que sera afectaa por el comando

	constructor(reciever: Reciever){
		this.reciever = reciever
	}

	//Execute command
	public execute: voidFunction = () => {
		this.reciever.addTen()
	}

	//UnexecuteCommand
	public unexecute: voidFunction = () => {
		this.reciever.substractTen()
	}
}

//Definimos un comando para multiplicar y dividir 10 al reciever
class MultCommand implements ICommand{
	reciever: Reciever;

	constructor(reciever: Reciever){
		this.reciever = reciever
	}

	public execute: voidFunction = () => {
		this.reciever.multupliyTen()
	}

	public unexecute: voidFunction = () => {
		this.reciever.devideTen()
	}
}

//Creamos una clase control que ejecutara los comandos definidos en el contructor
class Control {
	add: ICommand;
	multiply: ICommand;

	constructor ( add : ICommand, multiply: ICommand){
		this.add = add;
		this.multiply = multiply;
	}

	public pressAdd() {
		this.add.execute()
	}

	public pressSubstract() {
		this.add.unexecute()
	}

	public pressMult() {
		this.multiply.execute()
	}

	public pressDevide() {
		this.multiply.unexecute()
	}
}

//IMPLEMENTACION
/**
  * Creamos un objeto reciever
  */
const reciever = new Reciever(100)

/**
  * Creamos un objeto control y pasamos los comandos que usaremos
  */
const control = new Control(new AddCommand(reciever), new MultCommand(reciever));

console.log(reciever.posicion);
control.pressAdd()
console.log(reciever.posicion);
control.pressSubstract()
console.log(reciever.posicion);
control.pressMult();
console.log(reciever.posicion);
control.pressDevide();
console.log(reciever.posicion);