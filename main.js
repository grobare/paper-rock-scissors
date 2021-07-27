
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
    player = (prompt("Choose your option?/paper,rock/scissors/ ")).toLowerCase();
    }
    return player;
}

//Winner check

function whoWins(a, b) {
    
    if (a == b) {
        console.log("It's draw.");
        return 'draw'
        } else if (a == "rock" && b == "scissors") {
        console.log("Player wins!");
        return 'player';
        } else if (a == "paper" && b == "rock") {
        console.log("Player wins!");
        return 'player';
        } else if (a == "scissors" && b == "paper") {
        console.log("Player wins!");
        return 'player';
        } else {
        console.log("Computer wins!");
        return 'computer';
        }
}
//play again option

function playAgain() {
    let answer = prompt("Restart? y/n ");
    if (answer.startsWith("y")) {
    return true;
    } else if (answer.startsWith('n')) {
    body.append("You pussy bro!");
    return false;
    } 
}
//game logic
function theGame() {
    console.log("\nHi bitches!");
    console.log("Welcome to the game!\n");
    let playWins = 0;
    let computerWins = 0;
    let draw = 0;
    for(let i = 1; i <= 5; i++) {
        
        let a = playerOption();
        let b = computerOption();
        if (whoWins(a,b) == 'player') {
            playWins += 1;
            
        } else if (whoWins(a,b) == 'computer') {
            computerWins += 1;
            
        } else {
            draw += 1;
        }
        console.log(`The score is: Player ${playWins}, Computer ${computerWins}, Draws ${draw}`);
 }
}
while (true) {
    
    theGame();
    if (playAgain()) {
        continue;
        
    } else {
        break;
    }
}