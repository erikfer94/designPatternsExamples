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
	bigFastShips: Array<IShip>,
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

class BigFastShip implements IShip{
	index : number;
	size: number = 10;
	speed: number = 20;
	constructor (index: number){
		this.index = index
		console.log("Init fast ship", this.index)
	}
}

//Creamos la clase EasySingleGame que implementa IGame
class EasySingleGame implements IGame {
	level: number;
	normalShips: Array<IShip>;
	bigShips: Array<IShip>;
	fastShips: Array<IShip>;
	bigFastShips: Array<IShip>;

	constructor (level: number){
		this.level = level;
		this.normalShips = [];
		this.bigShips = [];
		this.fastShips = [];
		this.bigFastShips = [];
		for(let n = 0; n < 10; n++){
			this.normalShips.push(new NormalShip(n))
		}
		for(let n = 0; n < 3; n++){
			this.bigShips.push(new BigShip(n))
		}
	}

	public startGame: voidFunction = () => {
		console.log("Started Single Easy Game")
	}
}

class NormalSingleGame implements IGame {
	level: number;
	normalShips: Array<IShip>;
	bigShips: Array<IShip>;
	fastShips: Array<IShip>;
	bigFastShips: Array<IShip>;

	constructor (level: number){
		this.level = level;
		this.normalShips = [];
		this.bigShips = [];
		this.fastShips = [];
		this.bigFastShips = [];
		for(let n = 0; n < 13; n++){
			this.normalShips.push(new NormalShip(n))
		}
		for(let n = 0; n < 5; n++){
			this.bigShips.push(new BigShip(n))
		}
	}

	public startGame: voidFunction = () => {
		console.log("Started Single Normal Game")
	}
}

class HardSingleGame implements IGame {
	level: number;
	normalShips: Array<IShip>;
	bigShips: Array<IShip>;
	fastShips: Array<IShip>;
	bigFastShips: Array<IShip>;

	constructor (level: number){
		this.level = level;
		this.normalShips = [];
		this.bigShips = [];
		this.fastShips = [];
		this.bigFastShips = [];
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
		console.log("Started Single Hard Game")
	}
}

//Creamos la clase EasyMultiplayerGame que implementa IGame
class EasyMultiplayerGame implements IGame {
	level: number;
	normalShips: Array<IShip>;
	bigShips: Array<IShip>;
	fastShips: Array<IShip>;
	bigFastShips: Array<IShip>;

	constructor (level: number){
		this.level = level;
		this.normalShips = [];
		this.bigShips = [];
		this.fastShips = [];
		this.bigFastShips = [];
		for(let n = 0; n < 15; n++){
			this.normalShips.push(new NormalShip(n))
		}
		for(let n = 0; n < 5; n++){
			this.bigShips.push(new BigShip(n))
		}
	}

	public startGame: voidFunction = () => {
		console.log("Started Multiplayer Easy Game")
	}
}

class NormalMultiplayerGame implements IGame {
	level: number;
	normalShips: Array<IShip>;
	bigShips: Array<IShip>;
	fastShips: Array<IShip>;
	bigFastShips: Array<IShip>;

	constructor (level: number){
		this.level = level;
		this.normalShips = [];
		this.bigShips = [];
		this.fastShips = [];
		this.bigFastShips = [];
		for(let n = 0; n < 20; n++){
			this.normalShips.push(new NormalShip(n))
		}
		for(let n = 0; n < 10; n++){
			this.bigShips.push(new BigShip(n))
		}
	}

	public startGame: voidFunction = () => {
		console.log("Started Multiplayer Normal Game")
	}
}

class HardMultiplayerGame implements IGame {
	level: number;
	normalShips: Array<IShip>;
	bigShips: Array<IShip>;
	fastShips: Array<IShip>;
	bigFastShips: Array<IShip>;

	constructor (level: number){
		this.level = level;
		this.normalShips = [];
		this.bigShips = [];
		this.fastShips = [];
		this.bigFastShips = [];
		for(let n = 0; n < 25; n++){
			this.normalShips.push(new NormalShip(n))
		}
		for(let n = 0; n < 15; n++){
			this.bigShips.push(new BigShip(n))
		}
		for(let n = 0; n < 7; n++){
			this.fastShips.push(new FastShip(n))
		}
		for(let n = 0; n < 3; n++){
			this.bigFastShips.push(new BigFastShip(n))
		}
	}

	public startGame: voidFunction = () => {
		console.log("Started Multiplayer Hard Game")
	}
}

type stringNumberFunctionGame = (s: string, n: number) => IGame

//clase abstracta SpaceShip, define su funcion setGame para inciailizar el juego 
//y la calse abstracta createGame para qye se implemente en las subclases
abstract class SpaceShip {

	public setGame: stringNumberFunction = (difficulty: string, level: number) => {
		const Game = this.createGame(difficulty, level)

		Game.startGame();
		
	}

	abstract createGame: stringNumberFunctionGame; //se debe de implementar en as subclases
}

//Creamos el Factory Single que hereda de SpaceShip para crear los juegos cuando es un solo jugador
class SingleGame extends SpaceShip {

	//su propio implementacion de createGame
	public createGame: stringNumberFunctionGame = (difficulty: string, level: number) => {
		let Game: IGame;
		if (difficulty === "easy") {
			Game = new EasySingleGame(level)
		}

		if (difficulty === "normal") {
			Game = new NormalSingleGame(level)
		}

		if (difficulty === "hard") {
			Game = new HardSingleGame(level)
		}

		return Game;
	}

}

class MultiplayerGame extends SpaceShip {

	public createGame: stringNumberFunctionGame = (difficulty: string, level: number) => {
		let Game: IGame;
		if (difficulty === "easy") {
			Game = new EasyMultiplayerGame(level)
		}

		if (difficulty === "normal") {
			Game = new NormalMultiplayerGame(level)
		}

		if (difficulty === "hard") {
			Game = new HardMultiplayerGame(level)
		}

		return Game;
	}

}

const singleGame = new SingleGame();
const multiplayerGame = new MultiplayerGame();
singleGame.setGame("normal", 1);
multiplayerGame.setGame("hard", 1)