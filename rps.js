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
    return {pScore, cScore};
}


// Main
document.addEventListener('click', function(e) {
    if (e.target.innerHTML == "Rock" || e.target.innerHTML == "Paper" || e.target.innerHTML == "Scissor") {
        let counter = playRound(e.target.innerHTML, getComputerChoice());
        console.log(tallyScore(counter));
    }
});


// Obsolete Code - Keep temporarily

// function game(num) {
//     let wcounter = 0;
//     let lcounter = 0;

//     for (let i = 0; i < num; i++) {
//         let decision = playRound(playerSelection(), getComputerChoice());
        
//         if (decision < 0) {
//             lcounter++;
//         }
//         else if (decision > 0) {
//             wcounter++;
//         }
//     }

//     console.log("The score is Player: " + wcounter + " Computer: " + lcounter);

//     if (wcounter > lcounter) {
//         console.log("You win!");
//     }
//     else if (wcounter < lcounter) {
//         console.log("You lose!");
//     }
//     else {
//         console.log("It is a draw!");
//     }

// }

//game(5);