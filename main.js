console.log("Hi bitches!");
console.log("Welcome to the game!");
const options = ["rock", "paper", "scissors"];
const body = document.body;

//computer chooses answer

function computerOption() {
    let ranInt = Math.floor(Math.random() * 3);
    return options[ranInt];
}
//player Choose answer

function playerOption() {
    let player;
    while (!options.includes(player)) {
    player = prompt("Choose your option?/paper,rock/scissors/ ");
    }
    return player;
}

//Winner check

function whoWins(a, b) {
    if (a == b) {
    console.log("It's draw.");
    } else if (a == "rock" && b == "scissors") {
    console.log("Player wins!");
    } else if (a == "paper" && b == "rock") {
    console.log("Player wins!");
    } else if (a == "scissors" && b == "paper") {
    console.log("Player wins!");
    } else {
    console.log("Computer wins!");
    }
}
//play again option

function playAgain() {
    let answer = prompt("Restart? y/n ");
    if (answer == "y") {
    return true;
    }
    body.append("You pussy bro!");
    return false;
}
//game logic
while (true) {
    let a = playerOption();
    let b = computerOption();
    whoWins(a, b);
    console.log(b);
    if (playAgain()) {
    continue;
    } else {
    break;
    }
}