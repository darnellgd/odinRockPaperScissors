//console.log("Darnell");

const choice = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
    const random = Math.floor(Math.random() * choice.length);
    return choice[random];
}

// console.log(getComputerChoice());

function playRound(playerSelection, computerSelection) {
    let playerResult;
    let dictator;

    if (playerSelection == computerSelection) {
        playerResult = "Draw";
        dictator = "is the same as";
    } else if ((playerSelection == "Rock" && computerSelection == "Scissors") || (playerSelection == "Paper" && computerSelection == "Rock") || (playerSelection == "Scissors" && computerSelection == "Paper")) {
        playerResult = "Win";
        dictator = "beats";
    } else if ((computerSelection == "Rock" && playerSelection == "Scissors") || (computerSelection == "Paper" && playerSelection == "Rock") || (computerSelection == "Scissors" && playerSelection == "Paper")) {
        playerResult = "Lose";
        dictator = "loses to";
    }

    let result = ("You " + playerResult + "! " + playerSelection + " " + dictator + " " + computerSelection);

    return result;
}

// let playerSelection = "Rock";
let computerSelection = getComputerChoice();

function game() {
    for(let i = 0; i < 5; i++) {
        playerSelection = prompt("Choose Rock, Paper, or Scissors: ");
        computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
    }
}

game();
// console.log(game());
// console.log(playRound(playerSelection, computerSelection));