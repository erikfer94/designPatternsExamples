var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var BigFastShip = /** @class */ (function () {
    function BigFastShip(index) {
        this.size = 20;
        this.speed = 20;
        this.index = index;
        console.log("Init big fast ship", this.index);
    }
    return BigFastShip;
}());
var SingleGameShipFactory = /** @class */ (function () {
    function SingleGameShipFactory() {
        this.createEasy = function () {
            var ships = {
                normalShips: [],
                bigShips: [],
                fastShips: [],
                bigFastShips: []
            };
            for (var n = 0; n < 10; n++) {
                ships.normalShips.push(new NormalShip(n));
            }
            for (var n = 0; n < 3; n++) {
                ships.bigShips.push(new BigShip(n));
            }
            return ships;
        };
        this.createNormal = function () {
            var ships = {
                normalShips: [],
                bigShips: [],
                fastShips: [],
                bigFastShips: []
            };
            for (var n = 0; n < 13; n++) {
                ships.normalShips.push(new NormalShip(n));
            }
            for (var n = 0; n < 5; n++) {
                ships.bigShips.push(new BigShip(n));
            }
            return ships;
        };
        this.createHard = function () {
            var ships = {
                normalShips: [],
                bigShips: [],
                fastShips: [],
                bigFastShips: []
            };
            for (var n = 0; n < 15; n++) {
                ships.normalShips.push(new NormalShip(n));
            }
            for (var n = 0; n < 10; n++) {
                ships.bigShips.push(new BigShip(n));
            }
            for (var n = 0; n < 3; n++) {
                ships.fastShips.push(new FastShip(n));
            }
            return ships;
        };
    }
    return SingleGameShipFactory;
}());
var MultiplayerGameShipFactory = /** @class */ (function () {
    function MultiplayerGameShipFactory() {
        this.createEasy = function () {
            var ships = {
                normalShips: [],
                bigShips: [],
                fastShips: [],
                bigFastShips: []
            };
            for (var n = 0; n < 15; n++) {
                ships.normalShips.push(new NormalShip(n));
            }
            for (var n = 0; n < 5; n++) {
                ships.bigShips.push(new BigShip(n));
            }
            return ships;
        };
        this.createNormal = function () {
            var ships = {
                normalShips: [],
                bigShips: [],
                fastShips: [],
                bigFastShips: []
            };
            for (var n = 0; n < 20; n++) {
                ships.normalShips.push(new NormalShip(n));
            }
            for (var n = 0; n < 10; n++) {
                ships.bigShips.push(new BigShip(n));
            }
            return ships;
        };
        this.createHard = function () {
            var ships = {
                normalShips: [],
                bigShips: [],
                fastShips: [],
                bigFastShips: []
            };
            for (var n = 0; n < 25; n++) {
                ships.normalShips.push(new NormalShip(n));
            }
            for (var n = 0; n < 15; n++) {
                ships.bigShips.push(new BigShip(n));
            }
            for (var n = 0; n < 7; n++) {
                ships.fastShips.push(new FastShip(n));
            }
            for (var n = 0; n < 3; n++) {
                ships.bigFastShips.push(new BigFastShip(n));
            }
            return ships;
        };
    }
    return MultiplayerGameShipFactory;
}());
var SingleGameInterfaceFactory = /** @class */ (function () {
    function SingleGameInterfaceFactory() {
        this.setInterface = function () {
            console.log("Interfaz de un jugador");
        };
    }
    return SingleGameInterfaceFactory;
}());
var MultiplayerGameInterfaceFactory = /** @class */ (function () {
    function MultiplayerGameInterfaceFactory() {
        this.setInterface = function () {
            console.log("Interfaz multijugador");
        };
    }
    return MultiplayerGameInterfaceFactory;
}());
var EasyGame = /** @class */ (function () {
    function EasyGame(shipFactory, interfaceFactory, level) {
        var _this = this;
        this.setGame = function () {
            _this.interfaceFactory.setInterface();
            _this.ships = _this.shipFactory.createEasy();
        };
        this.startGame = function () {
            console.log("Started Easy Game");
        };
        this.level = level;
        this.shipFactory = shipFactory;
        this.interfaceFactory = interfaceFactory;
    }
    return EasyGame;
}());
var NormalGame = /** @class */ (function () {
    function NormalGame(shipFactory, interfaceFactory, level) {
        var _this = this;
        this.setGame = function () {
            _this.interfaceFactory.setInterface();
            _this.ships = _this.shipFactory.createNormal();
        };
        this.startGame = function () {
            console.log("Started Normal Game");
        };
        this.level = level;
        this.shipFactory = shipFactory;
        this.interfaceFactory = interfaceFactory;
    }
    return NormalGame;
}());
var HardGame = /** @class */ (function () {
    function HardGame(shipFactory, interfaceFactory, level) {
        var _this = this;
        this.setGame = function () {
            _this.interfaceFactory.setInterface();
            _this.ships = _this.shipFactory.createHard();
        };
        this.startGame = function () {
            console.log("Started Hard Game");
        };
        this.level = level;
        this.shipFactory = shipFactory;
        this.interfaceFactory = interfaceFactory;
    }
    return HardGame;
}());
var SpaceShip = /** @class */ (function () {
    function SpaceShip() {
        var _this = this;
        this.setGame = function (difficulty, level) {
            var Game = _this.createGame(difficulty, level);
            Game.setGame();
            Game.startGame();
        };
    }
    return SpaceShip;
}());
var SingleGame = /** @class */ (function (_super) {
    __extends(SingleGame, _super);
    function SingleGame() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.createGame = function (difficulty, level) {
            var Game;
            var shipFactory = new SingleGameShipFactory();
            var interfaceFactory = new SingleGameInterfaceFactory();
            if (difficulty === "easy") {
                Game = new EasyGame(shipFactory, interfaceFactory, level);
            }
            if (difficulty === "normal") {
                Game = new NormalGame(shipFactory, interfaceFactory, level);
            }
            if (difficulty === "hard") {
                Game = new HardGame(shipFactory, interfaceFactory, level);
            }
            return Game;
        };
        return _this;
    }
    return SingleGame;
}(SpaceShip));
var MultiplayerGame = /** @class */ (function (_super) {
    __extends(MultiplayerGame, _super);
    function MultiplayerGame() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.createGame = function (difficulty, level) {
            var Game;
            var shipFactory = new MultiplayerGameShipFactory();
            var interfaceFactory = new MultiplayerGameInterfaceFactory();
            if (difficulty === "easy") {
                Game = new EasyGame(shipFactory, interfaceFactory, level);
            }
            if (difficulty === "normal") {
                Game = new NormalGame(shipFactory, interfaceFactory, level);
            }
            if (difficulty === "hard") {
                Game = new HardGame(shipFactory, interfaceFactory, level);
            }
            return Game;
        };
        return _this;
    }
    return MultiplayerGame;
}(SpaceShip));
var singleGame = new SingleGame();
var multiplayerGame = new MultiplayerGame();
singleGame.setGame("hard", 1);
multiplayerGame.setGame("hard", 1);
