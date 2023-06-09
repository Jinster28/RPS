// Global variable declarations
let pScore = 0;  // Keep Player Score
let cScore = 0;  // Keep Computer Score


// Custom Functions
function getComputerChoice() {
    let randNum = Math.floor(Math.random() * 3);

    if (randNum == 0) {
        return 'Rock';
    }
    else if (randNum == 1) {
        return 'Paper';
    }
    else {
        return 'Scissor';
    }
}

// Takes user input
function playerSelection() {
    
    let userInput = prompt("What is your move?  Please enter one of Rock, Paper, or Scissor").toUpperCase();       
     
    while (userInput != "ROCK" && userInput != "SCISSOR" && userInput != "PAPER") {
        userInput = prompt("Invalid choice.  Please enter one of Rock, Paper, or Scissor").toUpperCase(); 
    }

    return userInput;
}

// simulate a game of Rock Paper Scissors while taking 2 parameters.  First is player choice, second is computer generated choice
function playRound(playerChoice, computerChoice) {
    let ps = playerChoice.toUpperCase();
    let cs = computerChoice.toUpperCase();
    let gameText = document.querySelector('.outcome');

    if (ps == cs) {
        gameText.innerHTML = "Draw";
        return 0;
    }
    else if (ps == "ROCK") {
        if (cs == "PAPER") {
            gameText.innerHTML = "You Lose!  Paper beats Rock!";
            return -1;
        }
        else if (cs == "SCISSOR") {
            gameText.innerHTML = "You Win!  Rock beats Scissor!";
            return 1;
        }
    }
    else if (ps == "PAPER") {
        if (cs == "SCISSOR") {
            gameText.innerHTML = "You Lose!  Scissor beats Paper!";
            return -1;
        }
        else if (cs == "ROCK") {
            gameText.innerHTML = "You Win!  Paper beats Rock!";
            return 1;
        }
    }
    else if (ps == "SCISSOR") {
        if (cs == "ROCK") {
            gameText.innerHTML = "You Lose!  Rock beats Scissor!";
            return -1;
        }
        else if (cs == "PAPER") {
            gameText.innerHTML = "You Win!  Scissor beats Paper!";
            return 1;
        }
    }
}

// Function to keep track of scores
function tallyScore(value) {
  
    if (value == 1) {
        pScore = pScore + 1;
    } 
    else if (value == -1) {
        cScore = cScore + 1;
    }

    document.querySelector('#uScore').innerHTML = pScore;
    document.querySelector('#cScore').innerHTML = cScore;
}

// Function to declare a winner when someone reaches 5 wins
function declareWin() {
    let winDeclare = document.querySelector('.gameStatus');

    if (pScore == 5) {
        winDeclare.innerHTML = `User Wins! Final Score: User ${pScore} Computer Score ${cScore}`;
        endGame();
    }
    else if (cScore == 5) {
        winDeclare.innerHTML = `Computer Wins! Final Score: User ${pScore} Computer Score ${cScore}`;
        endGame();
    }
    else {
        winDeclare.innerHTML = 'Who will win?  Go User!  I am rooting for you!';
    }
}

// Function to end game
function endGame() {
    let gameButton = document.querySelectorAll('.btn');

    for (i = 0; i < gameButton.length; i++) {
        gameButton[i].disabled = true;
    }
}

// Function to reset game
function gameReset() {
    
    let gameButton = document.querySelectorAll('.btn');
    pScore = 0;
    cScore = 0;
    document.querySelector('.outcome').innerHTML = "";
    document.querySelector('.gameStatus').innerHTML = "Ready for a round?";
    document.querySelector('#uScore').innerHTML = pScore;
    document.querySelector('#cScore').innerHTML = cScore;

    for (i = 0; i < gameButton.length; i++) {
        gameButton[i].disabled = false;
    }
}


// Main
gameReset();

document.addEventListener('click', function(e) {
    if (e.target.innerHTML == "Rock" || e.target.innerHTML == "Paper" || e.target.innerHTML == "Scissor") {
        let counter = playRound(e.target.innerHTML, getComputerChoice());
        tallyScore(counter);
        declareWin();
    }
    else if (e.target.innerHTML == "Reset") {
        gameReset();
    } 
});
