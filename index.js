const choices = ['rock', 'paper', 'scissors'];
const playerDisplay = document.getElementById('playerDisplay');
const computerDisplay = document.getElementById('computerDisplay');
const resultDisplay = document.getElementById('resultDisplay');

function playGame(playerChoice) {
    const computerChoice = choices[Math.floor(Math.random() * 3)]; //0 1 2
    let result = '';

    if (playerChoice === computerChoice) {
        result = "It's a tie!";
    } else{
        switch(playerChoice){
            case 'rock':
                (computerChoice === 'scissors') ? result = "You win!" : result = "You lose!";
                break;
            case 'paper':
                (computerChoice === 'rock') ? result = "You win!" : result = "You lose!";
                break;
            case 'scissors':
                (computerChoice === 'paper') ? result = "You win!" : result = "You lose!";
                break;

        }
    }

    playerDisplay.innerText = `Player: ${playerChoice}`;
    computerDisplay.innerText = `Computer: ${computerChoice}`;
    resultDisplay.innerText = result;
}