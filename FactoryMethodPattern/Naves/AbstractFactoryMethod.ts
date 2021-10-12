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
	startGame: voidFunction,
	display: IDisplay,
	stars: IStars,
	music: IMusic,
	initGame: voidFunction
}

interface IDisplay{
	name: string
}

class SingleDisplay implements IDisplay{
	name : string = "SingleDisplay";

	constructor() {
		console.log("New ", this.name)
	}
}

class MultiplayerDisplay implements IDisplay{
	name : string = "MultiplayerDisplay"

	constructor() {
		console.log("New ", this.name)
	}
}

interface IStars{
	color: string
}

class RedStars implements IStars{
	color: string = "red"

	constructor() {
		console.log("Stars are ", this.color)
	}
}

class BlueStars implements IStars{
	color: string = "blue"

	constructor() {
		console.log("Stars are ", this.color)
	}
}

interface IMusic{
	song: string
}

class SingleMusic implements IMusic{
	song: string = "la la lalal la la dadada parparap lala"

	constructor() {
		console.log(this.song)
	}
}

class MultiplayerMusic implements IMusic{
	song: string = "tatata parapara taratta lala papra lalala"

	constructor() {
		console.log(this.song)
	}
}

type emptyFunctionDisplay = () => IDisplay
type emptyFunctionStars = () => IStars
type emptyFunctionMusic = () => IMusic
//Definimos la interfaz IGameInterfaceFactory para crear el entorno del uego 
interface IGameInterfaceFactory{
	createDisplay: emptyFunctionDisplay,
	createStars: emptyFunctionStars,
	createMusic: emptyFunctionMusic
}

class SingleGameInterfaceFactory implements IGameInterfaceFactory{
	public createDisplay: emptyFunctionDisplay = () => {
		return new SingleDisplay()
	}

	public createStars: emptyFunctionStars = () => {
		return new RedStars()
	}

	public createMusic: emptyFunctionMusic = () => {
		return new SingleMusic()
	}
}

class MultiplayerGameInterfaceFactory implements IGameInterfaceFactory{
	public createDisplay: emptyFunctionDisplay = () => {
		return new MultiplayerDisplay()
	}

	public createStars: emptyFunctionStars = () => {
		return new BlueStars()
	}

	public createMusic: emptyFunctionMusic = () => {
		return new MultiplayerMusic()
	}
}


//Creamos la clase NormalShip que implementa IShip
class NormalShip implements IShip{
	index : number;
	size: number = 10;
	speed: number = 10;

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

	display: IDisplay;
	stars: IStars;
	music: IMusic;

	interfaceFactory: IGameInterfaceFactory

	constructor (level: number, interfaceFactory: IGameInterfaceFactory){
		this.interfaceFactory = interfaceFactory
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

	public initGame: voidFunction = () => {
		this.display = this.interfaceFactory.createDisplay();
		this.music = this.interfaceFactory.createMusic();
	}
}

class NormalSingleGame implements IGame {
	level: number;
	normalShips: Array<IShip>;
	bigShips: Array<IShip>;
	fastShips: Array<IShip>;
	bigFastShips: Array<IShip>;

	display: IDisplay;
	stars: IStars;
	music: IMusic;

	interfaceFactory: IGameInterfaceFactory

	constructor (level: number, interfaceFactory: IGameInterfaceFactory){
		this.interfaceFactory = interfaceFactory
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

	public initGame: voidFunction = () => {
		this.display = this.interfaceFactory.createDisplay();
		this.stars = this.interfaceFactory.createStars()
		this.music = this.interfaceFactory.createMusic();
	}
}

class HardSingleGame implements IGame {
	level: number;
	normalShips: Array<IShip>;
	bigShips: Array<IShip>;
	fastShips: Array<IShip>;
	bigFastShips: Array<IShip>;

	display: IDisplay;
	stars: IStars;
	music: IMusic;

	interfaceFactory: IGameInterfaceFactory

	constructor (level: number, interfaceFactory: IGameInterfaceFactory){
		this.interfaceFactory = interfaceFactory
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

	public initGame: voidFunction = () => {
		this.display = this.interfaceFactory.createDisplay();
		this.stars = this.interfaceFactory.createStars()
		this.music = this.interfaceFactory.createMusic();
	}
}

//Creamos la clase EasyMultiplayerGame que implementa IGame
class EasyMultiplayerGame implements IGame {
	level: number;
	normalShips: Array<IShip>;
	bigShips: Array<IShip>;
	fastShips: Array<IShip>;
	bigFastShips: Array<IShip>;

	display: IDisplay;
	stars: IStars;
	music: IMusic;

	interfaceFactory: IGameInterfaceFactory

	constructor (level: number, interfaceFactory: IGameInterfaceFactory){
		this.interfaceFactory = interfaceFactory
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

	public initGame: voidFunction = () => {
		this.display = this.interfaceFactory.createDisplay();
		this.music = this.interfaceFactory.createMusic();
	}
}

class NormalMultiplayerGame implements IGame {
	level: number;
	normalShips: Array<IShip>;
	bigShips: Array<IShip>;
	fastShips: Array<IShip>;
	bigFastShips: Array<IShip>;

	display: IDisplay;
	stars: IStars;
	music: IMusic;

	interfaceFactory: IGameInterfaceFactory

	constructor (level: number, interfaceFactory: IGameInterfaceFactory){
		this.interfaceFactory = interfaceFactory
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

	public initGame: voidFunction = () => {
		this.display = this.interfaceFactory.createDisplay();
		this.stars = this.interfaceFactory.createStars()
		this.music = this.interfaceFactory.createMusic();
	}
}

class HardMultiplayerGame implements IGame {
	level: number;
	normalShips: Array<IShip>;
	bigShips: Array<IShip>;
	fastShips: Array<IShip>;
	bigFastShips: Array<IShip>;

	display: IDisplay;
	stars: IStars;
	music: IMusic;

	interfaceFactory: IGameInterfaceFactory

	constructor (level: number, interfaceFactory: IGameInterfaceFactory){
		this.interfaceFactory = interfaceFactory
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

	public initGame: voidFunction = () => {
		this.display = this.interfaceFactory.createDisplay();
		this.stars = this.interfaceFactory.createStars()
		this.music = this.interfaceFactory.createMusic();
	}
}

type stringNumberFunctionGame = (s: string, n: number) => IGame

//clase abstracta SpaceShip, define su funcion setGame para inciailizar el juego 
//y la calse abstracta createGame para qye se implemente en las subclases
abstract class SpaceShip {

	public setGame: stringNumberFunction = (difficulty: string, level: number) => {
		const Game = this.createGame(difficulty, level)
		Game.initGame()
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
			Game = new EasySingleGame(level, new SingleGameInterfaceFactory())
		}

		if (difficulty === "normal") {
			Game = new NormalSingleGame(level, new SingleGameInterfaceFactory())
		}

		if (difficulty === "hard") {
			Game = new HardSingleGame(level, new SingleGameInterfaceFactory())
		}

		return Game;
	}

}

class MultiplayerGame extends SpaceShip {

	public createGame: stringNumberFunctionGame = (difficulty: string, level: number) => {
		let Game: IGame;
		if (difficulty === "easy") {
			Game = new EasyMultiplayerGame(level, new MultiplayerGameInterfaceFactory())
		}

		if (difficulty === "normal") {
			Game = new NormalMultiplayerGame(level, new MultiplayerGameInterfaceFactory())
		}

		if (difficulty === "hard") {
			Game = new HardMultiplayerGame(level, new MultiplayerGameInterfaceFactory())
		}

		return Game;
	}

}

const singleGame = new SingleGame();
const multiplayerGame = new MultiplayerGame();
singleGame.setGame("normal", 1);
multiplayerGame.setGame("hard", 1)