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
     
    console.log(userInput);

    return userInput;
}


// function playRound(playerSelection(), getComputerChoice())
// simulate a game of Rock Paper Scissors while taking 2 parameters

//getComputerChoice();
playerSelection();