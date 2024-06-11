// Get player choice
// Check if the player choice is either rock, paper or scissor
// Compare player and computer's choice
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() { //  gets the computer choice for the game
    const computerChoice = ['rock', 'paper', 'scissors'];
    return computerChoice[Math.floor(Math.random() * computerChoice.length)];
}

function getHumanChoice() { //gets the human choice for the game
    return prompt('Rock, Paper or Scissors?', 'Rock').toLowerCase();
}

function playRound(humanChoice, computerChoice) { // plays one round of the game
    if (humanChoice === computerChoice) {
        return 'It\'s a tie';
    }

    if (humanChoice === 'rock') {
        if (computerChoice === 'paper') {
            computerScore++;
            return 'You lose, paper covers rock';
        } else if (computerChoice === 'scissors') {
            humanScore++;
            return 'You win, rock blunts scissors';
        }
    } else if (humanChoice === 'paper') {
        if (computerChoice === 'scissors') {
            computerScore++;
            return 'You lose, scissors shreds paper';
        } else if (computerChoice === 'rock') {
            humanScore++;
            return 'You win, paper covers rock';
        }
    } else if (humanChoice === 'scissors') {
        if (computerChoice === 'rock') {
            computerScore++;
            return 'You lose, rock blunts scissors';
        } else if (computerChoice === 'paper') {
            humanScore++;
            return 'You win, scissors shreds paper';
        }
    }
}

function playGame() { // loops through 1 - 5 to play 5 rounds of the game
    for (let i = 0; i < 5; i++) { // loops through 1 - 5
        displayResult(playRound(getHumanChoice(), getComputerChoice()));
        displayScore();
    }
}

function displayResult(message) { // displays the game result on the console
    console.log(message);
}

function displayScore() {
    console.log(`player ${humanScore} : ${computerScore} computer`);
    console.log('');
}

playGame();
