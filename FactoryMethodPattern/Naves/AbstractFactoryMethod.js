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
var SingleDisplay = /** @class */ (function () {
    function SingleDisplay() {
        this.name = "SingleDisplay";
        console.log("New ", this.name);
    }
    return SingleDisplay;
}());
var MultiplayerDisplay = /** @class */ (function () {
    function MultiplayerDisplay() {
        this.name = "MultiplayerDisplay";
        console.log("New ", this.name);
    }
    return MultiplayerDisplay;
}());
var RedStars = /** @class */ (function () {
    function RedStars() {
        this.color = "red";
        console.log("Stars are ", this.color);
    }
    return RedStars;
}());
var BlueStars = /** @class */ (function () {
    function BlueStars() {
        this.color = "blue";
        console.log("Stars are ", this.color);
    }
    return BlueStars;
}());
var SingleMusic = /** @class */ (function () {
    function SingleMusic() {
        this.song = "la la lalal la la dadada parparap lala";
        console.log(this.song);
    }
    return SingleMusic;
}());
var MultiplayerMusic = /** @class */ (function () {
    function MultiplayerMusic() {
        this.song = "tatata parapara taratta lala papra lalala";
        console.log(this.song);
    }
    return MultiplayerMusic;
}());
var SingleGameInterfaceFactory = /** @class */ (function () {
    function SingleGameInterfaceFactory() {
        this.createDisplay = function () {
            return new SingleDisplay();
        };
        this.createStars = function () {
            return new RedStars();
        };
        this.createMusic = function () {
            return new SingleMusic();
        };
    }
    return SingleGameInterfaceFactory;
}());
var MultiplayerGameInterfaceFactory = /** @class */ (function () {
    function MultiplayerGameInterfaceFactory() {
        this.createDisplay = function () {
            return new MultiplayerDisplay();
        };
        this.createStars = function () {
            return new BlueStars();
        };
        this.createMusic = function () {
            return new MultiplayerMusic();
        };
    }
    return MultiplayerGameInterfaceFactory;
}());
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
var BigFastShip = /** @class */ (function () {
    function BigFastShip(index) {
        this.size = 10;
        this.speed = 20;
        this.index = index;
        console.log("Init fast ship", this.index);
    }
    return BigFastShip;
}());
//Creamos la clase EasySingleGame que implementa IGame
var EasySingleGame = /** @class */ (function () {
    function EasySingleGame(level, interfaceFactory) {
        var _this = this;
        this.startGame = function () {
            console.log("Started Single Easy Game");
        };
        this.initGame = function () {
            _this.display = _this.interfaceFactory.createDisplay();
            _this.music = _this.interfaceFactory.createMusic();
        };
        this.interfaceFactory = interfaceFactory;
        this.level = level;
        this.normalShips = [];
        this.bigShips = [];
        this.fastShips = [];
        this.bigFastShips = [];
        for (var n = 0; n < 10; n++) {
            this.normalShips.push(new NormalShip(n));
        }
        for (var n = 0; n < 3; n++) {
            this.bigShips.push(new BigShip(n));
        }
    }
    return EasySingleGame;
}());
var NormalSingleGame = /** @class */ (function () {
    function NormalSingleGame(level, interfaceFactory) {
        var _this = this;
        this.startGame = function () {
            console.log("Started Single Normal Game");
        };
        this.initGame = function () {
            _this.display = _this.interfaceFactory.createDisplay();
            _this.stars = _this.interfaceFactory.createStars();
            _this.music = _this.interfaceFactory.createMusic();
        };
        this.interfaceFactory = interfaceFactory;
        this.level = level;
        this.normalShips = [];
        this.bigShips = [];
        this.fastShips = [];
        this.bigFastShips = [];
        for (var n = 0; n < 13; n++) {
            this.normalShips.push(new NormalShip(n));
        }
        for (var n = 0; n < 5; n++) {
            this.bigShips.push(new BigShip(n));
        }
    }
    return NormalSingleGame;
}());
var HardSingleGame = /** @class */ (function () {
    function HardSingleGame(level, interfaceFactory) {
        var _this = this;
        this.startGame = function () {
            console.log("Started Single Hard Game");
        };
        this.initGame = function () {
            _this.display = _this.interfaceFactory.createDisplay();
            _this.stars = _this.interfaceFactory.createStars();
            _this.music = _this.interfaceFactory.createMusic();
        };
        this.interfaceFactory = interfaceFactory;
        this.level = level;
        this.normalShips = [];
        this.bigShips = [];
        this.fastShips = [];
        this.bigFastShips = [];
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
    return HardSingleGame;
}());
//Creamos la clase EasyMultiplayerGame que implementa IGame
var EasyMultiplayerGame = /** @class */ (function () {
    function EasyMultiplayerGame(level, interfaceFactory) {
        var _this = this;
        this.startGame = function () {
            console.log("Started Multiplayer Easy Game");
        };
        this.initGame = function () {
            _this.display = _this.interfaceFactory.createDisplay();
            _this.music = _this.interfaceFactory.createMusic();
        };
        this.interfaceFactory = interfaceFactory;
        this.level = level;
        this.normalShips = [];
        this.bigShips = [];
        this.fastShips = [];
        this.bigFastShips = [];
        for (var n = 0; n < 15; n++) {
            this.normalShips.push(new NormalShip(n));
        }
        for (var n = 0; n < 5; n++) {
            this.bigShips.push(new BigShip(n));
        }
    }
    return EasyMultiplayerGame;
}());
var NormalMultiplayerGame = /** @class */ (function () {
    function NormalMultiplayerGame(level, interfaceFactory) {
        var _this = this;
        this.startGame = function () {
            console.log("Started Multiplayer Normal Game");
        };
        this.initGame = function () {
            _this.display = _this.interfaceFactory.createDisplay();
            _this.stars = _this.interfaceFactory.createStars();
            _this.music = _this.interfaceFactory.createMusic();
        };
        this.interfaceFactory = interfaceFactory;
        this.level = level;
        this.normalShips = [];
        this.bigShips = [];
        this.fastShips = [];
        this.bigFastShips = [];
        for (var n = 0; n < 20; n++) {
            this.normalShips.push(new NormalShip(n));
        }
        for (var n = 0; n < 10; n++) {
            this.bigShips.push(new BigShip(n));
        }
    }
    return NormalMultiplayerGame;
}());
var HardMultiplayerGame = /** @class */ (function () {
    function HardMultiplayerGame(level, interfaceFactory) {
        var _this = this;
        this.startGame = function () {
            console.log("Started Multiplayer Hard Game");
        };
        this.initGame = function () {
            _this.display = _this.interfaceFactory.createDisplay();
            _this.stars = _this.interfaceFactory.createStars();
            _this.music = _this.interfaceFactory.createMusic();
        };
        this.interfaceFactory = interfaceFactory;
        this.level = level;
        this.normalShips = [];
        this.bigShips = [];
        this.fastShips = [];
        this.bigFastShips = [];
        for (var n = 0; n < 25; n++) {
            this.normalShips.push(new NormalShip(n));
        }
        for (var n = 0; n < 15; n++) {
            this.bigShips.push(new BigShip(n));
        }
        for (var n = 0; n < 7; n++) {
            this.fastShips.push(new FastShip(n));
        }
        for (var n = 0; n < 3; n++) {
            this.bigFastShips.push(new BigFastShip(n));
        }
    }
    return HardMultiplayerGame;
}());
//clase abstracta SpaceShip, define su funcion setGame para inciailizar el juego 
//y la calse abstracta createGame para qye se implemente en las subclases
var SpaceShip = /** @class */ (function () {
    function SpaceShip() {
        var _this = this;
        this.setGame = function (difficulty, level) {
            var Game = _this.createGame(difficulty, level);
            Game.initGame();
            Game.startGame();
        };
    }
    return SpaceShip;
}());
//Creamos el Factory Single que hereda de SpaceShip para crear los juegos cuando es un solo jugador
var SingleGame = /** @class */ (function (_super) {
    __extends(SingleGame, _super);
    function SingleGame() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        //su propio implementacion de createGame
        _this.createGame = function (difficulty, level) {
            var Game;
            if (difficulty === "easy") {
                Game = new EasySingleGame(level, new SingleGameInterfaceFactory());
            }
            if (difficulty === "normal") {
                Game = new NormalSingleGame(level, new SingleGameInterfaceFactory());
            }
            if (difficulty === "hard") {
                Game = new HardSingleGame(level, new SingleGameInterfaceFactory());
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
            if (difficulty === "easy") {
                Game = new EasyMultiplayerGame(level, new MultiplayerGameInterfaceFactory());
            }
            if (difficulty === "normal") {
                Game = new NormalMultiplayerGame(level, new MultiplayerGameInterfaceFactory());
            }
            if (difficulty === "hard") {
                Game = new HardMultiplayerGame(level, new MultiplayerGameInterfaceFactory());
            }
            return Game;
        };
        return _this;
    }
    return MultiplayerGame;
}(SpaceShip));
var singleGame = new SingleGame();
var multiplayerGame = new MultiplayerGame();
singleGame.setGame("normal", 1);
multiplayerGame.setGame("hard", 1);
