function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);
    let computerChoice;
    if (randomNumber === 0) {
        computerChoice = 'Rock';
    } else if (randomNumber === 1) {
        computerChoice = 'Paper';
    } else {
        computerChoice = 'Scissors';
    }
    return computerChoice;
}

function playRound(playerSelection, computerSelection) {
    let result;
    if (   playerSelection === 'Rock' && computerSelection === 'Paper'
        || playerSelection === 'Paper' && computerSelection === 'Scissors'
        || playerSelection === 'Scissors' && computerSelection === 'Rock') {

            result = 'lose';
    } else if (playerSelection === computerSelection) {
            result = 'draw';
    } else {
            result = 'win';
    }
    return result;
}

function game() {
    let computerScore = 0;
    let playerScore = 0;

    for (let round = 0; round < 5; ++round) {
        const playerInput = prompt('Choose one: Rock, Paper or Scissors');
        if (!validateUserInput(playerSelection)) {
            console.log("Incorrect input - round lost");
            ++computerScore;
            continue;
        };
        const playerSelection = formatUserInput(playerInput);
        const computerSelection = getComputerChoice();

        const roundResult = playRound(playerSelection, computerSelection);
        let message;
        if (roundResult === 'lose') {
            message = `You Lose! ${computerSelection} beats ${playerSelection}`;
            ++computerScore;
        } else if (roundResult === 'draw') {
            message = `A draw it is! Both players chose ${playerSelection}`;
            ++computerScore;
            ++playerScore;
        } else {
            message = `You Win! ${playerSelection} beats ${computerSelection}`;
            ++playerScore;
        }
        console.log(message);
    }

    let gameResultMessage;
    if (computerScore > playerScore) {
        gameResultMessage = `Your opponent won with the overall score of ${computerScore} to ${playerScore}`;
    } else if (computerScore < playerScore) {
        gameResultMessage = `You won with the overall score of ${playerScore} to ${computerScore}`
    } else {
        gameResultMessage = `The game is a draw with each player scoring ${playerScore} points`;
    }
    console.log(gameResultMessage);
}

function validateUserInput(playerInput) {
    playerInput = playerInput || 'default';
    playerInput = playerInput.length < 2 ? 'default' : playerSelection;
    playerInput = formatUserInput(playerInput);
    if (   playerInput !== 'Rock'
        && playerInput !== 'Paper'
        && playerInput !== 'Scissors') {
            
            return false;
    }
    return true;
}

function formatUserInput(playerSelection) {
    return playerSelection.slice(0, 1).toUpperCase() + playerSelection.slice(1).toLowerCase();
}

game();