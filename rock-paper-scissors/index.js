// possible values in the game
// DO NOT CHANGE THE ORDER!! 
const VALUES = ["paper", "scissors", "rock"];

// score values
let playerScore = 0;
let computerScore = 0;

// return random values of rock paper or scissors
const computerPlay = () => {
    return VALUES[Math.floor(Math.random() * 3)];
}

// Game logic
const playRound = (playerSelection, computerSelection) => {
    // insensitive case
    let player = playerSelection.toLowerCase();
    let computer = computerSelection.toLowerCase();

    // if draw
    if (VALUES.indexOf(player) === VALUES.indexOf(computer)) {
        return `Draw of ${player}`;
    }
    // if player wins
    else if
        (
        player === "rock" && computer === "scissors" ||
        player === "paper" && computer === "rock" ||
        player === "scissors" && computer === "paper"
    ) {
        return playerWin(player, computer);
    }
    // else, the computer wins
    else {
        return computerWin(player, computer);
    }
}

const playerWin = (player, computer) => {
    playerScore++;
    return `You Win! ${player} beats ${computer}`;
}

const computerWin = (player, computer) => {
    computerScore++;
    return `You Lose! ${computer} beats ${player}`;
}

/*
UI Handlers
*/
const playerScoreText = document.querySelector(".player-score");
const computerScoreText = document.querySelector(".computer-score");
const resultText = document.querySelector("#result");
const buttons = document.querySelectorAll("button");

const playGame = (e) => {
    //if the max score is reached, stop playing
    if (computerScore === 5 || playerScore === 5) return;
    else {
        //else, play the game
        resultText.textContent = playRound(e.target.textContent, computerPlay());
        playerScoreText.textContent = `Player - ${playerScore}`;
        computerScoreText.textContent = `Computer - ${computerScore}`;

        //show the final score after playing
        if (computerScore === 5 || playerScore === 5) {
            //show result
            resultText.textContent = playerScore === 5 ? "You win the game!" : "You loose the game!";
        }
    }
}

buttons.forEach((button) => button.addEventListener("click", playGame));

/*
UNIT TESTING
*/

/*
// draw
console.log(playRound("rock", "rock"));
// paper and scissors should win scissors
console.log(playRound("paper", "scissors"));
// paper and rock should win paper
console.log(playRound("paper", "rock"));
// paper and scissors should win scissors
console.log(playRound("paper", "scissors"));
*/
