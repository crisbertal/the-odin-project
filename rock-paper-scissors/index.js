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

    // if there's a rock in game
    if (VALUES.indexOf(player) === 2 || VALUES.indexOf(computer) === 2) {
        // 0 must win
        if (VALUES.indexOf(player) === 0)
            return playerWin(player, computer);
        else if (VALUES.indexOf(computer) === 0)
            return computerWin(player, computer);
    }

    // the higher value in the array wins
    if (VALUES.indexOf(player) > VALUES.indexOf(computer))
        return playerWin(player, computer);
    else
        return computerWin(player, computer);
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
MAIN 
*/
// 5 rounds saving the score
for (let i = 0; i < 5; i++) {
    let playerSelection = prompt("Your turn. Write rock, paper or scissors");
    console.log(playRound(playerSelection, computerPlay()));
    console.log(`Player score: ${playerScore} | Computer Score: ${computerScore}`);
}

// in 5 rounds there's no tie
if (playerScore > computerScore) {
    console.log("You won the match!");
}
else
    console.log("You lost the match!");

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
