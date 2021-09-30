type stringNumberFunction = (s: string, n: number) => void
type voidFunction = () => void

//Definimos ua interfaz para las naves
interface IShip{
	index: number
	size: number,
	speed: number
}

//Definimos la interfaz IGame para los tipos de juego
interface IGame{
	level: number,
	normalShips: Array<IShip>,
	bigShips: Array<IShip>,
	fastShips: Array<IShip>,
	startGame: voidFunction
}

//Creamos la clase NormalShip que implementa IShip
class NormalShip implements IShip{
	index : number;
	size: number = 10;
	speed: number = 10
	constructor (index: number){
		this.index = index
		console.log("Init normal ship", this.index)
	}
}

class BigShip implements IShip{
	index : number;
	size: number = 15;
	speed: number = 10;
	constructor (index: number){
		this.index = index
		console.log("Init big ship", this.index)
	}
}

class FastShip implements IShip{
	index : number;
	size: number = 10;
	speed: number = 20;
	constructor (index: number){
		this.index = index
		console.log("Init fast ship", this.index)
	}
}

//Creamos la clase EasyGame que implementa IGame
class EasyGame implements IGame {
	level: number;
	normalShips: Array<IShip>;
	bigShips: Array<IShip>;
	fastShips: Array<IShip>;

	constructor (level: number){
		this.level = level;
		this.normalShips = [];
		this.bigShips = [];
		this.fastShips = [];
		for(let n = 0; n < 10; n++){
			//Creamos las naves
			this.normalShips.push(new NormalShip(n))
		}
		for(let n = 0; n < 3; n++){
			this.bigShips.push(new BigShip(n))
		}
	}

	//en este metodo se inicializa el juego
	public startGame: voidFunction = () => {
		console.log("Started Easy Game")
	}
}

class NormalGame implements IGame {
	level: number;
	normalShips: Array<IShip>;
	bigShips: Array<IShip>;
	fastShips: Array<IShip>;

	constructor (level: number){
		this.level = level;
		this.normalShips = [];
		this.bigShips = [];
		this.fastShips = [];
		for(let n = 0; n < 13; n++){
			this.normalShips.push(new NormalShip(n))
		}
		for(let n = 0; n < 5; n++){
			this.bigShips.push(new BigShip(n))
		}
	}

	public startGame: voidFunction = () => {
		console.log("Started Normal Game")
	}
}

class HardGame implements IGame {
	level: number;
	normalShips: Array<IShip>;
	bigShips: Array<IShip>;
	fastShips: Array<IShip>;

	constructor (level: number){
		this.level = level;
		this.normalShips = [];
		this.bigShips = [];
		this.fastShips = [];
		for(let n = 0; n < 15; n++){
			this.normalShips.push(new NormalShip(n))
		}
		for(let n = 0; n < 10; n++){
			this.bigShips.push(new BigShip(n))
		}
		for(let n = 0; n < 3; n++){
			this.fastShips.push(new FastShip(n))
		}
	}

	public startGame: voidFunction = () => {
		console.log("Started Hard Game")
	}
}

//clase SpaceShip que es la responsable de crear los juegos
class SpaceShip {

	//funcion para definir que tipo de juego e inicializarlo.
	public setGame: stringNumberFunction = (difficulty: string, level: number) => {
		let Game: IGame;
		if (difficulty === "easy") {
			Game = new EasyGame(level)
		}

		if (difficulty === "normal") {
			Game = new NormalGame(level)
		}

		if (difficulty === "hard") {
			Game = new HardGame(level)
		}

		Game.startGame();
	}
}

//creamos un nuevo juego
const newGame = new SpaceShip();
//creaos la instancia del juego dificultad facil
newGame.setGame("easy", 1);