type stringNumberFunction = (s: string, n: number) => void
type voidFunction = () => void

interface IShip{
	index: number
	size: number,
	speed: number
}

interface IGameShips {
	normalShips: Array<IShip>,
	bigShips: Array<IShip>,
	fastShips: Array<IShip>,
	bigFastShips: Array<IShip>
}

interface IGame{
	level: number,
	ships: IGameShips,
	setGame: voidFunction,
	startGame: voidFunction
}

type emptyFunctionShips = () => IGameShips

interface IShipsFactory{
	createEasy: emptyFunctionShips,
	createNormal: emptyFunctionShips,
	createHard: emptyFunctionShips
}

interface IGameInterfaceFactory{
	setInterface: voidFunction
}

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
	size: number = 20;
	speed: number = 20;
	constructor (index: number){
		this.index = index
		console.log("Init big fast ship", this.index)
	}
}

class SingleGameShipFactory implements IShipsFactory {
	public createEasy: emptyFunctionShips = () => {
		const ships: IGameShips = {
			normalShips: [],
			bigShips: [],
			fastShips: [],
			bigFastShips: []
		};
		for(let n = 0; n < 10; n++){
			ships.normalShips.push(new NormalShip(n))
		}
		for(let n = 0; n < 3; n++){
			ships.bigShips.push(new BigShip(n))
		}
		return ships
	}

	public createNormal: emptyFunctionShips = () => {
		const ships: IGameShips = {
			normalShips: [],
			bigShips: [],
			fastShips: [],
			bigFastShips: []
		};
		for(let n = 0; n < 13; n++){
			ships.normalShips.push(new NormalShip(n))
		}
		for(let n = 0; n < 5; n++){
			ships.bigShips.push(new BigShip(n))
		}
		return ships
	}

	public createHard: emptyFunctionShips = () => {
		const ships: IGameShips = {
			normalShips: [],
			bigShips: [],
			fastShips: [],
			bigFastShips: []
		};
		for(let n = 0; n < 15; n++){
			ships.normalShips.push(new NormalShip(n))
		}
		for(let n = 0; n < 10; n++){
			ships.bigShips.push(new BigShip(n))
		}
		for(let n = 0; n < 3; n++){
			ships.fastShips.push(new FastShip(n))
		}
		return ships
	}
}

class MultiplayerGameShipFactory implements IShipsFactory {
	public createEasy: emptyFunctionShips = () => {
		const ships: IGameShips = {
			normalShips: [],
			bigShips: [],
			fastShips: [],
			bigFastShips: []
		};
		for(let n = 0; n < 15; n++){
			ships.normalShips.push(new NormalShip(n))
		}
		for(let n = 0; n < 5; n++){
			ships.bigShips.push(new BigShip(n))
		}
		return ships
	}

	public createNormal: emptyFunctionShips = () => {
		const ships: IGameShips = {
			normalShips: [],
			bigShips: [],
			fastShips: [],
			bigFastShips: []
		};
		for(let n = 0; n < 20; n++){
			ships.normalShips.push(new NormalShip(n))
		}
		for(let n = 0; n < 10; n++){
			ships.bigShips.push(new BigShip(n))
		}
		return ships
	}

	public createHard: emptyFunctionShips = () => {
		const ships: IGameShips = {
			normalShips: [],
			bigShips: [],
			fastShips: [],
			bigFastShips: []
		};
		for(let n = 0; n < 25; n++){
			ships.normalShips.push(new NormalShip(n))
		}
		for(let n = 0; n < 15; n++){
			ships.bigShips.push(new BigShip(n))
		}
		for(let n = 0; n < 7; n++){
			ships.fastShips.push(new FastShip(n))
		}
		for(let n = 0; n < 3; n++){
			ships.bigFastShips.push(new BigFastShip(n))
		}
		return ships
	}
}

class SingleGameInterfaceFactory implements IGameInterfaceFactory{
	public setInterface: voidFunction = () => {
		console.log("Interfaz de un jugador")
	}
}

class MultiplayerGameInterfaceFactory implements IGameInterfaceFactory{
	public setInterface: voidFunction = () => {
		console.log("Interfaz multijugador")
	}
}


class EasyGame implements IGame {
	level: number;
	ships: IGameShips
	shipFactory: IShipsFactory;
	interfaceFactory: IGameInterfaceFactory

	constructor (shipFactory: IShipsFactory, interfaceFactory: IGameInterfaceFactory, level: number){
		this.level = level;
		this.shipFactory = shipFactory	
		this.interfaceFactory = interfaceFactory
	}

	public setGame: voidFunction = () => {
		this.interfaceFactory.setInterface()
		this.ships = this.shipFactory.createEasy()
	}

	public startGame: voidFunction = () => {
		console.log("Started Easy Game")
	}
}

class NormalGame implements IGame {
	level: number;
	ships: IGameShips
	shipFactory: IShipsFactory;
	interfaceFactory: IGameInterfaceFactory

	constructor (shipFactory: IShipsFactory, interfaceFactory: IGameInterfaceFactory, level: number){
		this.level = level;
		this.shipFactory = shipFactory	
		this.interfaceFactory = interfaceFactory
	}

	public setGame: voidFunction = () => {
		this.interfaceFactory.setInterface()
		this.ships = this.shipFactory.createNormal()
	}

	public startGame: voidFunction = () => {
		console.log("Started Normal Game")
	}
}

class HardGame implements IGame {
	level: number;
	ships: IGameShips
	shipFactory: IShipsFactory;
	interfaceFactory: IGameInterfaceFactory

	constructor (shipFactory: IShipsFactory, interfaceFactory: IGameInterfaceFactory, level: number){
		this.level = level;
		this.shipFactory = shipFactory	
		this.interfaceFactory = interfaceFactory
	}

	public setGame: voidFunction = () => {
		this.interfaceFactory.setInterface()
		this.ships = this.shipFactory.createHard()
	}

	public startGame: voidFunction = () => {
		console.log("Started Hard Game")
	}
}

type stringNumberFunctionGame = (s: string, n: number) => IGame


abstract class SpaceShip {

	public setGame: stringNumberFunction = (difficulty: string, level: number) => {
		const Game = this.createGame(difficulty, level)
		Game.setGame();
		Game.startGame();
		
	}

	abstract createGame: stringNumberFunctionGame;
}

class SingleGame extends SpaceShip {

	public createGame: stringNumberFunctionGame = (difficulty: string, level: number) => {
		let Game: IGame;
		const shipFactory : IShipsFactory = new SingleGameShipFactory();
		const interfaceFactory: IGameInterfaceFactory = new SingleGameInterfaceFactory();
		if (difficulty === "easy") {
			Game = new EasyGame(shipFactory, interfaceFactory, level)
		}

		if (difficulty === "normal") {
			Game = new NormalGame(shipFactory, interfaceFactory, level)
		}

		if (difficulty === "hard") {
			Game = new HardGame(shipFactory, interfaceFactory, level)
		}

		return Game;
	}

}

class MultiplayerGame extends SpaceShip {

	public createGame: stringNumberFunctionGame = (difficulty: string, level: number) => {
		let Game: IGame;
		const shipFactory : IShipsFactory = new MultiplayerGameShipFactory();
		const interfaceFactory: IGameInterfaceFactory = new MultiplayerGameInterfaceFactory();
		if (difficulty === "easy") {
			Game = new EasyGame(shipFactory, interfaceFactory, level)
		}

		if (difficulty === "normal") {
			Game = new NormalGame(shipFactory, interfaceFactory, level)
		}

		if (difficulty === "hard") {
			Game = new HardGame(shipFactory, interfaceFactory, level)
		}

		return Game;
	}

}

const singleGame = new SingleGame();
const multiplayerGame = new MultiplayerGame();
singleGame.setGame("hard", 1);
multiplayerGame.setGame("hard", 1);