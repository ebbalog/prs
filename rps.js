function computerPlay() {
    const choice = ['rock', 'paper', 'scissors']
    return choice[Math.floor(Math.random() * 3)];
}

const playerSelection = prompt('rock, papaer or scissors?','');
const computerSelection = computerPlay();

function playRorund (playerSelection, computerSelection){
    if (playerSelection === 'rock') {
        if (computerSelection === 'rock') {
            alert ('it\'s a tie!')
        } else if (computerSelection === 'paper') {
            alert ('computer wins!')
        } else if (computerSelection === 'rock') {
            alert ('player wins!')
        }
    } else if (playerSelection === 'paper') {
        if (computerSelection === 'rock') {
            alert ('player wins!')
        } else if (computerSelection === 'paper') {
            alert ('it\'s a tie!')
        } else if (computerSelection === 'scissors') {
            alert ('computer wins!')
        }
    } else if (playerSelection === 'scissors') {
        if (computerSelection === 'rock') {
            alert ('computer wins!')
        } else if (computerSelection === 'paper') {
            alert ('player wins!')
        } else if (computerSelection === 'scissors') {
            alert ('it\'s a tie!')
        }
    }
}

playRorund(playerSelection, computerSelection)