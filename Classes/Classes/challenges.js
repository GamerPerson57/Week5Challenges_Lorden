//-------------------------------------
//CHALLENGE 1: Make a new calculator, and
//use it to multiply the numbers 123 and 456.

//You will notice that when you do this,
//VS Code will add an "import" statement 
//just above. This is good!

import { Calculator } from "./helpers/calculator.js"
let calculator = new Calculator();
let product = calculator.multiply(123, 456);
console.log(product);


//-------------------------------------
//CHALLENGE 2: Make two players, give them nice names.
//A player can "attack" another player. See if you can make
//one of the players' health go below zero, just by attacking!


import { Player } from "./helpers/player.js"

let player1 = new Player("Toph");
let player2 = new Player("Katara");
player1.attack(player2);
player1.attack(player2);
player1.attack(player2);


//--------------------------------------
//CHALLENGE 3: Make your own class, called "Light".
//Give the class a two functions, "SwitchOn" and
//"SwitchOff". Then, make a new light here, and call these functions!
//REMEMBER: You have to add a script element to the index.html file
//So javascript will be able to load your class.

import { Light } from "./helpers/light.js"

// let lightSwitch = new Light();
// lightSwitch.switchOn();
// lightSwitch.switchOff();
// lightSwitch.switchOn();
// lightSwitch.switchOff();
// lightSwitch.switchOn();
// lightSwitch.switchOff();



//--------------------------------------
//CHALLENGE 4: Change your "Light" class so that if
//you call "SwitchOn" when the light is already on,
//It says "You can't do that again!" When you call
//SwitchOff, it should have similar behavior.


let roomSwitch = new Light();
roomSwitch.switchOn();
roomSwitch.switchOn();
roomSwitch.switchOff();
roomSwitch.switchOff();



//----------------------------------------
//CHALLENGE 5: Add a canvas to index.html, and get
//a reference to it here. Then make a class called Flower.
//Whenever you call flower.grow() from this class, the flower
//should draw a circle (or some other shape) onto the canvas,
//but a little bigger than it was before. 
//BONUS: If the flower grows too much, it should change colors,
//and refuse to get bigger.