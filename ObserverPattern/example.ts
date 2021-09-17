type voidFunction = () => void;
type setMeasurmentsFunction = (temperature: number, humidity: number, pressure: number) => void

//Definimos la interfaz IObserver
interface IObserver {
	update: voidFunction
}

//Tipo de dato que admite un IObserver como parametro y regresa un void.
type observerFunctionVoid = (observer: IObserver) => void;

//Definimos la interfaz ISubject
interface ISubject{
	registerObserver: observerFunctionVoid,
	removeObserver: observerFunctionVoid,
	notifyObservers: voidFunction
}

//Definimos la interfaz IDisplay
interface IDisplay{
	display: voidFunction
}

//Definimos la clase WeatherData
class WeatherData implements ISubject {
	private observers: Array<IObserver>; //Los observers estaran dentro de este array
	public temperature: number; //Aqui almacenaremos la temperatura
	public humidity: number; //Aqui almacenaremos la humedad
	public pressure: number; //Aqui almacenaremos la presion

	constructor() {
		//incializamos observers como un array vacio
		this.observers = [];
	}

	public registerObserver: observerFunctionVoid = (observer: IObserver) => {
		this.observers.push(observer) //Agregamos un observer al array
	}

	public removeObserver: observerFunctionVoid = (observer: IObserver) => {
		let position = this.observers.indexOf(observer)
		this.observers.splice(position, 1); //Removemos un observer del array
	}

	public notifyObservers: voidFunction = () => {
		for( let observer of this.observers){
			observer.update() //funcion update del observer
		}
	}

	public measurementsChanged: voidFunction = () => {
		this.notifyObservers();
		//aqui podriamos hacer mas cosas
	}

	public setMeasurments: setMeasurmentsFunction = (temperature: number, humidity: number, pressure: number) => {
		this.temperature = temperature;
		this.humidity = humidity;
		this.pressure = pressure;
		this.measurementsChanged();
	}
}

class HotelOne implements IObserver, IDisplay {
	private temperature: number; //Almacenamos la temperatura del dispositivo
	private humidity: number; //Almacenamos la humedad del dispositivo
	private weatherData: WeatherData; //Aqui estara la instancia a la que nos vamos a suscribir

	constructor(weatherData: WeatherData){
		this.weatherData = weatherData; //Inicializamos weatherData
		this.weatherData.registerObserver(this); //Aqui se realiza la suscripcion
	}

	public update: voidFunction = () => {
		this.temperature = this.weatherData.temperature; //obtenemos el valor de temperatura
		this.humidity = this.weatherData.humidity //obtenemos el valor de humedad
		this.display() //Se muestra en la pantalla
	}

	public display: voidFunction = () => {
		console.log(
			"Hotel One reporta " + 
			this.temperature +
			"°C con " + 
			this.humidity + 
			"% de humedad\n"
		);
	}
}

class HotelTwo implements IObserver, IDisplay {
	private temperature: number;
	private humidity: number; 
	private pressure: number;
	private weatherData: WeatherData;

	constructor(weatherData: WeatherData){
		this.weatherData = weatherData;
		this.weatherData.registerObserver(this);
	}

	public update: voidFunction = () => {
		this.temperature = this.weatherData.temperature;
		this.humidity = this.weatherData.humidity
		this.pressure = this.weatherData.pressure
		this.display()
	}

	public display: voidFunction = () => {
		console.log(
			"Hotel Two trae el reporte del clima. " + 
			this.temperature +
			"°C con " + 
			this.humidity + 
			"% de humedad y una persion atmosférica de " +
			this.pressure + "mb\n"
		);
	}
}

class HotelThree implements IObserver, IDisplay {
	private temperature: number;
	private humidity: number; 
	private pressure: number;
	private weatherData: WeatherData;

	constructor(weatherData: WeatherData){
		this.weatherData = weatherData;
		this.weatherData.registerObserver(this);
	}

	public update: voidFunction = () => {
		this.temperature = this.weatherData.temperature;
		this.humidity = this.weatherData.humidity
		this.pressure = this.weatherData.pressure
		this.display()
	}

	public display: voidFunction = () => {
		console.log(
			"Buen día le desea el HotelThree. Hoy tenemos una temperatura de" + 
			this.temperature +
			"°C con " + 
			this.humidity + 
			"% de humedad y una persion atmosférica de " +
			this.pressure + "mb\n"
		);
	}
}

//IMPLEMETACION

const weatherData: WeatherData = new WeatherData; //Nuevo objeto del tipo WeatherData

const HotelOneDisplay = new HotelOne(weatherData); //Objeto del tipo HotelOne, pasamos weatherData al constructor
const HotelTwoDisplay = new HotelTwo(weatherData); //Objeto del tipo HotelTwo
const HotelThreeDisplay = new HotelThree(weatherData); //Objeto del tipo HotelThree

console.log("\nFirst\n")
weatherData.setMeasurments(33.2, 87.2, 1002); //Cambio de valores del clima
console.log("\nSecond\n")
weatherData.setMeasurments(37.7, 76.9, 1006);
console.log("\nThird\n")
weatherData.setMeasurments(40, 60.5, 1008);