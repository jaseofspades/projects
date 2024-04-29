// Write a simple program or function that plays a simple game of rock, paper, scissors between two computer players. 
// The rules are simple, each computer player randomly chooses rock, paper, or scissors and the winner is determined by the following conditions, 
// rock beats scissors, scissors beats paper, and paper beats rock.
// Minimum Viable Product:
// Match can be played with two people (P1 & P2)
// The result it logged to the console at the end of the game.

/**
 * Edge case: TIE CONDITION
 */


let actions = ['rock', 'paper', 'scissors'];

function selectRPSAction() {
    return actions[Math.floor(Math.random() * 3)];
}

function checkWinningConditions(playerOne, playerTwo) {
    let result = null;

    if (playerOne === playerTwo) {
        result = 'Tie';
    }
    else if (playerOne === 'paper' && playerTwo === 'rock') {
        result = 'Player One';
    }
    else if (playerOne === 'rock' && playerTwo === 'scissors') {
        result = 'Player One';
    }
    else if (playerOne === 'scissors' && playerTwo === 'paper') {
        result = 'Player One';
    }

    if (result === null) {
        return 'Player Two';
    }

    return result;
}

let isWinningConditionMet = false;
let result = null;

while (!isWinningConditionMet) {
    let playerOne = selectRPSAction();
    let playerTwo = selectRPSAction();
    console.log('player1: ', playerOne);
    console.log('player2: ', playerTwo);
    result = checkWinningConditions(playerOne, playerTwo);
    if (result !== null) {
        isWinningConditionMet = true;
    }
}

console.log(result);

// Add multiple rounds, best of 5