// possible values in the game
// DO NOT CHANGE THE ORDER!! 
const VALUES = ["paper", "scissors", "rock"];

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
            return `You Win! ${player} beats ${computer}`;
        else if (VALUES.indexOf(computer) === 0)
            return `You Lose! ${computer} beats ${player}`;
    }

    // the higher value in the array wins
    if (VALUES.indexOf(player) > VALUES.indexOf(computer))
        return `You Win! ${player} beats ${computer}`;
    else
        return `You Lose! ${computer} beats ${player}`;
}

/*
MAIN 
*/
let playerSelection = prompt("Your turn. Write rock, paper or scissors");
console.log(playRound(playerSelection, computerPlay()));

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
