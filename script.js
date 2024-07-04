const selections = document.querySelectorAll('button');
const display = document.querySelector('div');
const p1 = display.firstElementChild;
const p2 = display.lastElementChild;


let humanScore = 0;
let computerScore = 0;

function getComputerChoice() { //  gets the computer choice for the game
    const computerChoice = ['rock', 'paper', 'scissors'];
    return computerChoice[Math.floor(Math.random() * computerChoice.length)];
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

selections.forEach((selection) => {
    selection.addEventListener('click', (e) => {
        displayResult(playRound(e.target.textContent.toLowerCase(), getComputerChoice()));
        displayScore();

        if (humanScore == 5 || computerScore == 5) {
            endGame();
            return;
        }
    });
});

function displayResult(message) { // displays the game result on the console
    p1.textContent = message;
}

function displayScore() {
    p2.textContent = `player ${humanScore} : ${computerScore} computer`;
}

function endGame() {
    p1.textContent = `player ${ humanScore } : ${ computerScore } computer`;

    if (humanScore > computerScore) {
        p2.textContent = `player wins the game with ${humanScore} points`;
    } else {
        p2.textContent = `computer wins the game with ${computerScore} points`;
    }
}

// playGame();
