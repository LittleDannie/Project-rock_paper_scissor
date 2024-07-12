const cardsContainer = document.querySelector('.cards');
const cards = document.querySelectorAll('.card');
const playGame = document.querySelector('.playGame');
const startGame = document.querySelector('#start');
const playerInput = document.querySelector('.playerInput');
const textField = document.querySelector('input[type=text]');
const submit = document.querySelector('input[type=submit]');
const scoreCard = document.querySelector('.scoreCard');
const openingText = document.querySelector('.openingText');
const text1 = document.querySelector('.text1');
const showResult = document.querySelector('.result');
const playerChoiceCard = document.createElement('img');
const messageBoard = document.querySelector('.messageBoard');
const verdict1 = document.createElement('p');
const verdict2 = document.createElement('p');
const computerChoiceCard = document.createElement('img');
const gameOver = document.querySelector('.gameOver');
const declaration = document.createElement('div');
const playAgain = document.querySelector('#playAgain');

const SECONDS_2 = 0;

let playerScore = 0;
let computerScore = 0;
let playerName;
let computerChoice;
let playerChoice;

const backgroundImages = [
    'url(./images/background1.jpg)',
    'url(./images/background2.jpg)',
    'url(./images/background3.jpg)',
    'url(./images/background4.jpg)',
    'url(./images/background5.jpg)',
    'url(./images/background6.jpg)',
    'url(./images/background7.jpg)',
    'url(./images/background8.jpg)',
];

function randomIndex() {
    return Math.floor(Math.random() * backgroundImages.length);
}

window.onload = () => {
    document.body.style.backgroundImage = `${backgroundImages[randomIndex()]}`;
};

startGame.addEventListener('click', () => {
    startGame.style.display = 'none';
    playerInput.style.display = 'flex';
    textField.focus();
});

submit.addEventListener('click', () => {
    playerInput.style.display = 'none';
    playGame.style.display = 'flex';
    playerName = textField.value;
    if (playerName === undefined || playerName === '') playerName = 'Grandeor';

    const addText = document.createElement('span');
    addText.textContent = ` ${playerName}`;
    addText.style.color = 'violet';
    text1.appendChild(addText);
});

cards.forEach((card) => {
    card.addEventListener('click', (e) => {

        openingText.style.display = 'none';
        playerChoice = e.target.id.toLowerCase();        computerChoice = getComputerChoice();

        displayResult(playRound(playerChoice, computerChoice));
        displayScore();
        
        if (playerScore === 5 || computerScore === 5) {
            const delayResult = () => {
                showResult.style.display = 'none';
                endGame();
            }
            setTimeout(delayResult, 2000);
        } else {
            setTimeout(showPlayingCards, SECONDS_2);
        }
    });
});

function getComputerChoice() {
    const computerChoice = ['rock', 'paper', 'scissors'];
    return computerChoice[Math.floor(Math.random() * computerChoice.length)];
}

function playRound(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return 'Oops! same magic';
    }

    if (playerChoice === 'rock') {
        if (computerChoice === 'paper') {
            ++computerScore;
            return 'Loser!, rouge mage gain'
        } else if (computerChoice === 'scissors') {
            ++playerScore;
            return 'Winner!, you gain';
        }
    } else if (playerChoice === 'paper') {
        if (computerChoice === 'scissors') {
            ++computerScore;
            return 'Loser!, rouge mage gain';
        } else if (computerChoice === 'rock') {
            ++playerScore;
            return 'Winner!, you gain';
        }
    } else if (playerChoice === 'scissors') {
        if (computerChoice === 'rock') {
            ++computerScore;
            return 'Loser!, rouge mage gain';
        } else if (computerChoice === 'paper') {
            ++playerScore;
            return 'Winner!, you gain';
        }
    }
}

function displayResult(message) {
    hidePlayingCards();
    playerChoiceCard.src = `./images/${playerChoice}_hand_gesture.jpg`;
    splitMessage = message.split(',');
    verdict1.textContent = splitMessage[0];
    verdict2.textContent = '';
    
    if (splitMessage.length === 2) {
        verdict2.textContent = splitMessage[1];
        const addGain = document.createElement('span');
        addGain.textContent = ' 1 magic';
        addGain.style.color = 'violet';
        verdict2.appendChild(addGain);
    }

    computerChoiceCard.src = `./images/${computerChoice}_hand_gesture.jpg`;
    showResult.insertBefore(playerChoiceCard, messageBoard);
    messageBoard.appendChild(verdict1);
    messageBoard.appendChild(verdict2);
    showResult.appendChild(computerChoiceCard, messageBoard);
    showResult.style.display = 'flex';
}

function hidePlayingCards() {
    text1.style.display = 'none';
    cardsContainer.style.display = 'none';
}

function showPlayingCards() {text1.style.display = 'block';
    cardsContainer.style.display = 'flex';
    showResult.style.display = 'none';
}

function displayScore() {
    scoreCard.textContent = `${playerName} ${playerScore} : ${computerScore} rogue mage`;
}

function endGame() {
    gameOver.style.display = 'block';

    if (playerScore > computerScore) {
        declaration.textContent = 'You won the battle!';
    } else {
        declaration.textContent = 'You lost the battle!';
    }

    declaration.classList.add('declaration');
    gameOver.appendChild(declaration);

    playAgain.style.display = 'block';
}

playAgain.addEventListener('click', () => {
    showPlayingCards();
    playerScore = 0;
    computerScore = 0;
    scoreCard.textContent = `${playerName} ${playerScore} : ${computerScore} rogue mage`;
    gameOver.style.display = 'none';
    gameOver.removeChild(declaration);
    playAgain.style.display = 'none';
});

