////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

var compare = function(choice1, choice2) {
    if (choice1===choice2) {
        console.log("Neither player has won the game!");
    } else if (choice1==="rock") {
        if (choice2==="scissors") {
            console.log("rock wins");
        }
        else {
            console.log("paper wins");
        }
    } else if (choice1==="paper") {
        if (choice2==="rock") {
            console.log("paper wins");
        }
        else {
            console.log("scissors wins");
        } 
    } else if (choice1==="scissors") {
        if (choice2==="rock") {
            console.log("rock wins");
        }
        else {
            console.log("scissors wins");
        } 
    }
};

playGame();


