//Creamos la clase NormalShip que implementa IShip
var NormalShip = /** @class */ (function () {
    function NormalShip(index) {
        this.size = 10;
        this.speed = 10;
        this.index = index;
        console.log("Init normal ship", this.index);
    }
    return NormalShip;
}());
var BigShip = /** @class */ (function () {
    function BigShip(index) {
        this.size = 15;
        this.speed = 10;
        this.index = index;
        console.log("Init big ship", this.index);
    }
    return BigShip;
}());
var FastShip = /** @class */ (function () {
    function FastShip(index) {
        this.size = 10;
        this.speed = 20;
        this.index = index;
        console.log("Init fast ship", this.index);
    }
    return FastShip;
}());
//Creamos la clase EasyGame que implementa IGame
var EasyGame = /** @class */ (function () {
    function EasyGame(level) {
        //en este metodo se inicializa el juego
        this.startGame = function () {
            console.log("Started Easy Game");
        };
        this.level = level;
        this.normalShips = [];
        this.bigShips = [];
        this.fastShips = [];
        for (var n = 0; n < 10; n++) {
            //Creamos las naves
            this.normalShips.push(new NormalShip(n));
        }
        for (var n = 0; n < 3; n++) {
            this.bigShips.push(new BigShip(n));
        }
    }
    return EasyGame;
}());
var NormalGame = /** @class */ (function () {
    function NormalGame(level) {
        this.startGame = function () {
            console.log("Started Normal Game");
        };
        this.level = level;
        this.normalShips = [];
        this.bigShips = [];
        this.fastShips = [];
        for (var n = 0; n < 13; n++) {
            this.normalShips.push(new NormalShip(n));
        }
        for (var n = 0; n < 5; n++) {
            this.bigShips.push(new BigShip(n));
        }
    }
    return NormalGame;
}());
var HardGame = /** @class */ (function () {
    function HardGame(level) {
        this.startGame = function () {
            console.log("Started Hard Game");
        };
        this.level = level;
        this.normalShips = [];
        this.bigShips = [];
        this.fastShips = [];
        for (var n = 0; n < 15; n++) {
            this.normalShips.push(new NormalShip(n));
        }
        for (var n = 0; n < 10; n++) {
            this.bigShips.push(new BigShip(n));
        }
        for (var n = 0; n < 3; n++) {
            this.fastShips.push(new FastShip(n));
        }
    }
    return HardGame;
}());
//clase SpaceShip que es la responsable de crear los juegos
var SpaceShip = /** @class */ (function () {
    function SpaceShip() {
        //funcion para definir que tipo de juego e inicializarlo.
        this.setGame = function (difficulty, level) {
            var Game;
            if (difficulty === "easy") {
                Game = new EasyGame(level);
            }
            if (difficulty === "normal") {
                Game = new NormalGame(level);
            }
            if (difficulty === "hard") {
                Game = new HardGame(level);
            }
            Game.startGame();
        };
    }
    return SpaceShip;
}());
//creamos un nuevo juego
var newGame = new SpaceShip();
//creaos la instancia del juego dificultad facil
newGame.setGame("easy", 1);
