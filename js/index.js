const choice = ["Rock", "Paper", "Scissors"];
let playerWinCount = 0;
let computerWinCount = 0;
let computerSelection = getComputerChoice();
let gameState = "Win";

function getComputerChoice() {
    const random = Math.floor(Math.random() * choice.length);
    return choice[random];
}

function playRound(playerSelection, computerSelection) {
    let playerResult;
    let dictator;

    if (playerSelection == computerSelection) {
        playerResult = "Draw";
        dictator = "is the same as";
    } else if ((playerSelection == "Rock" && computerSelection == "Scissors") || (playerSelection == "Paper" && computerSelection == "Rock") || (playerSelection == "Scissors" && computerSelection == "Paper")) {
        playerResult = "Win";
        dictator = "beats";
        playerWinCount++;
        if (scoreCheck()) {
            finalMessage.textContent = 'You ' + gameState;
            return;
        }
    } else if ((computerSelection == "Rock" && playerSelection == "Scissors") || (computerSelection == "Paper" && playerSelection == "Rock") || (computerSelection == "Scissors" && playerSelection == "Paper")) {
        playerResult = "Lose";
        dictator = "loses to";
        computerWinCount++;
        if (scoreCheck()) {
            finalMessage.textContent = 'You ' + gameState;
            return;
        }
    }

    let result = ("You " + playerResult + "! " + playerSelection + " " + dictator + " " + computerSelection);
    return result;
}

const results = document.getElementById('results');
const finalMessage = document.getElementById('finalMessage');
const roundResult = document.getElementById('roundResult');
const playerScore = document.getElementById('playerScore');
const computerScore = document.getElementById('computerScore');

function scoreCheck() {
    if (playerWinCount == 5) {
        gameState = "Win!";
        return true;
    } else if (computerWinCount == 5) {
        gameState = "Lose!";
        return true;
    }
    return false;
}

const rock = document.querySelector('#rock');
rock.addEventListener('click', () => {
    playerSelection = "Rock";
    computerSelection = getComputerChoice();
    playGame();
});

const paper = document.querySelector('#paper');
paper.addEventListener('click', () => {
    playerSelection = "Paper";
    computerSelection = getComputerChoice();
    playGame();
});

const scissors = document.querySelector('#scissors');
scissors.addEventListener('click', () => {
    playerSelection = "Scissors";
    computerSelection = getComputerChoice();
    playGame();
});

function playGame() {
    playRound(playerSelection, computerSelection);
    playerScore.textContent = playerWinCount;
    computerScore.textContent = computerWinCount;
}