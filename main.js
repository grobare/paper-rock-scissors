const game = () => {

  let playerScore = 0;
  let computeScore = 0;

  function resetGame() {
    playerScore = 0;
    computeScore = 0;
    const computerS = document.querySelector('.computer-score span')
    const playerS = document.querySelector('.player-score span');
    computerS.innerText = 0;
    playerS.innerText = 0;    
 };

  function computerChoose() {
    const options = ["rock", "paper", "scissors"];
    let ranInt = Math.floor(Math.random() * 3);
    return options[ranInt];
  }

  function updateScore() {
      const computerS = document.querySelector('.computer-score span')
      const playerS = document.querySelector('.player-score span');
      playerS.innerText = playerScore;
      computerS.innerText = computeScore;
     
  };
  
  function checkWinner(a, b) { //a is player, b is computer
    
    if (a === b) {
        return "It's a draw!";
    };
    //rock check
    if (a === 'rock') {
        if (b === 'scissors') {
            return 'player';
        } else {
            return 'computer'; //if a is not winner, its b
        };
    };
    //paper check
    if (a === 'paper') {
        if (b === 'rock') {
            return 'player';
        } else {
            return 'computer';
        };
    };

    if (a == 'scissors') {
        if (b === 'scissors') {
            return 'player';
        } else {
            return 'computer';
        };
    };

  };

  playGame = () => {
    
    const buttons = Array.from(document.querySelectorAll('.buttons button'));
    buttons.forEach((button) => {
      button.addEventListener('click', function(e) {
        const playerOption = e.target.innerText.toLowerCase();
        const computerOption = computerChoose();
        const winner = checkWinner(playerOption, computerOption);
        const resetButton = document.querySelector('.score button');
        resetButton.addEventListener('click', resetGame);
        
        if (winner === 'player') {
          playerScore++;
          updateScore();
        } else if (winner === 'computer') {
          computeScore++;
          updateScore();
        } else {
          console.log('Its a tie.')
        }
      });
    });
  };
  //function calling
  playGame();
};