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

    if (ps == cs) {
        console.log("Draw");
        return 0;
    }
    else if (ps == "ROCK") {
        if (cs == "PAPER") {
            console.log("You Lose!  Paper beats Rock!");
            return -1;
        }
        else if (cs == "SCISSOR") {
            console.log("You Win!  Rock beats Scissor!");
            return 1;
        }
    }
    else if (ps == "PAPER") {
        if (cs == "SCISSOR") {
            console.log("You Lose!  Scissor beats Paper!");
            return -1;
        }
        else if (cs == "ROCK") {
            console.log("You Win!  Paper beats Rock!");
            return 1;
        }
    }
    else if (ps == "SCISSOR") {
        if (cs == "ROCK") {
            console.log("You Lose!  Rock beats Scissor!");
            return -1;
        }
        else if (cs == "PAPER") {
            console.log("You Win!  Scissor beats Paper!");
            return 1;
        }
    }
}

function game() {
    let wcounter = 0;
    let lcounter = 0;

    for (let i = 0; i < 5; i++) {
        let decision = playRound(playerSelection(), getComputerChoice());
        
        if (decision < 0) {
            lcounter++;
        }
        else if (decision > 0) {
            wcounter++;
        }
    }

    console.log("The score is Player: " + wcounter + " Computer: " + lcounter);

    if (wcounter > lcounter) {
        console.log("You win!");
    }
    else if (wcounter < lcounter) {
        console.log("You lose!");
    }
    else {
        console.log("It is a draw!");
    }

}

game();