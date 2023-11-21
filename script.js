// setup the background Text by HTML;
// "Ready to play Rock Paper Scissors Game?" and set up a button to start;

// setup an array "gameAnswerFromComputer" with 3 values "Rock Paper Scissors";
var gameOptions = ['R', 'P', 'S'];

// setup a pop window;
// setup the question to customer "please input your answer from Rock Paper Scissors";
// let customer input an answer;

var timesOfDraw = 0;
var timesOfWin = 0;
var timesOfLost = 0;

function tryIt() {
user = prompt("Please input your answer from Rock Paper Scissors", "R for Rock, P for Paper, S for Scissors");
console.log (user);

const random = Math.floor(Math.random() * gameOptions.length);
console.log(random, gameOptions[random]);



if (user === 'R' || user === 'P' || user === 'S') {
    
    window.alert("The computer choosed " + gameOptions[random] + " , see the result?");
    

    if (user === gameOptions[random]) {
        window.alert("It's a draw \nsee the results of the whole game?");
        timesOfDraw++;
    } else if ((user === 'R' && gameOptions[random] ==='P') ||
    (user === 'P' && gameOptions[random] ==='S') ||
    (user === 'S' && gameOptions[random] ==='R')) {
        window.alert("You lost \nsee the results of the whole game?");
        timesOfLost++;
    } else {
        window.alert("You win \nsee the results of the whole game?");
        timesOfWin++;
    }
    
console.log (timesOfDraw);
    
    var confirm = window.confirm("You won : " + timesOfWin + "\nYou lost : " + timesOfLost + "\nDraw :" + timesOfDraw + "\n\n\nPlay again?");
    if (confirm) {tryIt();}
   

} else if (user === null) {
    return;
} else {
    window.alert("Please input R or P or S");
    tryIt();
}

}


// then randomly pick an value from "gameAnswerFromComputer";


// ask customer "ready to see the result? yes or not";


// if no, reture to the game with "change my answer";


// if yes, show the result;


// Write if condition and log the result of the game;


// ask customer "check the whole result?"


// click "yes";


// show "win ?, lose ? draw ？"


// ask customer "play again ?"


// if yes, return to the game.


// if no, ask "exit the page?"


// if yes, close the page.


// if no, return to the game.