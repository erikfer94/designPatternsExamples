//Definimos la clase WeatherData
var WeatherData = /** @class */ (function () {
    function WeatherData() {
        var _this = this;
        this.registerObserver = function (observer) {
            _this.observers.push(observer); //Agregamos un observer al array
        };
        this.removeObserver = function (observer) {
            var position = _this.observers.indexOf(observer);
            _this.observers.splice(position, 1); //Removemos un observer del array
        };
        this.notifyObservers = function () {
            for (var _i = 0, _a = _this.observers; _i < _a.length; _i++) {
                var observer = _a[_i];
                observer.update(); //funcion update del observer
            }
        };
        this.measurementsChanged = function () {
            _this.notifyObservers();
            //aqui podriamos hacer mas cosas
        };
        this.setMeasurments = function (temperature, humidity, pressure) {
            _this.temperature = temperature;
            _this.humidity = humidity;
            _this.pressure = pressure;
            _this.measurementsChanged();
        };
        //incializamos observers como un array vacio
        this.observers = [];
    }
    return WeatherData;
}());
var HotelOne = /** @class */ (function () {
    function HotelOne(weatherData) {
        var _this = this;
        this.update = function () {
            _this.temperature = _this.weatherData.temperature; //obtenemos el valor de temperatura
            _this.humidity = _this.weatherData.humidity; //obtenemos el valor de humedad
            _this.display(); //Se muestra en la pantalla
        };
        this.display = function () {
            console.log("Hotel One reporta " +
                _this.temperature +
                "°C con " +
                _this.humidity +
                "% de humedad\n");
        };
        this.weatherData = weatherData; //Inicializamos weatherData
        this.weatherData.registerObserver(this); //Aqui se realiza la suscripcion
    }
    return HotelOne;
}());
var HotelTwo = /** @class */ (function () {
    function HotelTwo(weatherData) {
        var _this = this;
        this.update = function () {
            _this.temperature = _this.weatherData.temperature;
            _this.humidity = _this.weatherData.humidity;
            _this.pressure = _this.weatherData.pressure;
            _this.display();
        };
        this.display = function () {
            console.log("Hotel Two trae el reporte del clima. " +
                _this.temperature +
                "°C con " +
                _this.humidity +
                "% de humedad y una persion atmosférica de " +
                _this.pressure + "mb\n");
        };
        this.weatherData = weatherData;
        this.weatherData.registerObserver(this);
    }
    return HotelTwo;
}());
var HotelThree = /** @class */ (function () {
    function HotelThree(weatherData) {
        var _this = this;
        this.update = function () {
            _this.temperature = _this.weatherData.temperature;
            _this.humidity = _this.weatherData.humidity;
            _this.pressure = _this.weatherData.pressure;
            _this.display();
        };
        this.display = function () {
            console.log("Buen día le desea el HotelThree. Hoy tenemos una temperatura de" +
                _this.temperature +
                "°C con " +
                _this.humidity +
                "% de humedad y una persion atmosférica de " +
                _this.pressure + "mb\n");
        };
        this.weatherData = weatherData;
        this.weatherData.registerObserver(this);
    }
    return HotelThree;
}());
//IMPLEMETACION
var weatherData = new WeatherData; //Nuevo objeto del tipo WeatherData
var HotelOneDisplay = new HotelOne(weatherData); //Objeto del tipo HotelOne, pasamos weatherData al constructor
var HotelTwoDisplay = new HotelTwo(weatherData); //Objeto del tipo HotelTwo
var HotelThreeDisplay = new HotelThree(weatherData); //Objeto del tipo HotelThree
console.log("\nFirst\n");
weatherData.setMeasurments(33.2, 87.2, 1002); //Cambio de valores del clima
console.log("\nSecond\n");
weatherData.setMeasurments(37.7, 76.9, 1006);
console.log("\nThird\n");
weatherData.setMeasurments(40, 60.5, 1008);
