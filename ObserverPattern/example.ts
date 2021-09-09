//OBSERVER PATTERN

type voidFunction = () => void

//Definimos una interface IStation
interface IStation{
	add: observerVoidFunction,
	remove: observerVoidFunction,
	notify: voidFunction
}

//Definimos una interface IStationObserver
interface IStationObserver{
	update: voidFunction
}

type observerVoidFunction = (observer: IStationObserver) => void

//Definimos la clase EstacionSismos que implements IStation
class EstacionSismos implements IStation{
	observers: IStationObserver[] = []; //Aqui guardamos los observers
	move: number = 100 //Variable de movimiento que se va a reportar

	//Funcion para agregar observers al array
	public add: observerVoidFunction = (observer: IStationObserver) =>{
		this.observers.push(observer)
	}

	// Funcion par borrar observers del array
	public remove: observerVoidFunction = (observer: IStationObserver) =>{
		//Algo para borrar
	}

	//Aqui se notifica a cada observer registrado
	public notify: voidFunction = () => {
		for( let observer of this.observers){
			observer.update() //funcion update del observer
		}
	}

	public getMovement: voidFunction = () => {
		return this.move //regresa el movimiento
	}
}

//Definimos una clase Phone que implementa la interface IStationObserver
class PhoneApp implements IStationObserver{
	station: EstacionSismos; //Variable para guardar la etacion a la que se subscribira

	constructor(station: EstacionSismos){
		this.station = station; // Se subscribe a la estacion
	}

	//Funcion a la que notifica EstacionSismos
	public update: voidFunction = () => {
		let movement = this.station.getMovement(); //Obtiene el movimiento
		console.log("Hola desde phoneApp", movement);
		//
	}
}

class LapTopApp implements IStationObserver{
	station: EstacionSismos;

	constructor(station: EstacionSismos){
		this.station = station;
	}

	public update: voidFunction = () => {
		let movement = this.station.getMovement();
		console.log("Hola desde LapTopApp", movement);
		//
	}
}

//IMPLEMENTACION
/**
  * Creamos una nueva estacion
  */
let estacion = new EstacionSismos;

/**
  * Creamos tres observers que se subscribiran a la estacion
  */
let someApp = new PhoneApp(estacion);
let CairoApp = new PhoneApp(estacion);
let CristalLap = new LapTopApp(estacion);

estacion.add(someApp); // Hola desde PhoneApp 100
estacion.add(CairoApp);// Hola desde PhoneApp 100
estacion.add(CristalLap);// Hola desde LapTopApp 100

estacion.notify();


