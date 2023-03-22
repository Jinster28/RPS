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

// function playerSelection()
// Takes user input

// function playRound(playerSelection(), getComputerChoice())
// simulate a game of Rock Paper Scissors while taking 2 parameters

getComputerChoice();