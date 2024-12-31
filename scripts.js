let humanScore = 0;
let computerScore = 0;

function getComputerChoice () {
    const minRange = 1; // min value option
    const maxRange = 3; // max value option

     // Assign random values to separate variables
    const choice = Math.floor(Math.random() * (maxRange - minRange + 1)) + minRange;
     // Debugging log for random number check
    console.log(choice);


    let result;
        if (choice === 1) {
        result = 'rock'
        } else if (choice === 2) {
        result = 'paper'
        } else if (choice === 3) {
        result = 'scissors'
        }

        return result; 
    }

function getHumanChoice () {
    let choice = prompt("Rock, Paper, or Scissors?");

    choice = choice.trim().toLowerCase();
    
    let result;

    if (choice === 'rock') {
        result = 'rock';
    } else if (choice === 'paper') {
        result = 'paper';
    } else if (choice === 'scissors') {
        result = 'scissors'; 
    } else {
        result = 'invalid'; 
    }
    
    return result;
}

function playRound (humanChoice, computerChoice) {

    if (humanChoice === 'rock' && computerChoice === 'scissors' || 
        humanChoice === 'scissors' && computerChoice === 'paper' || 
        humanChoice === 'paper' && computerChoice === 'rock') {
        humanScore = humanScore + 1;
        console.log('You lose CPU, have a good day!');
    } else if (humanChoice === 'rock' && computerChoice === 'paper' ||
        humanChoice === 'paper' && computerChoice === 'scissors' ||
        humanChoice === 'scissors' && computerChoice === 'rock') {
        computerScore = computerScore + 1;
        console.log('You lose human, have a nice day!');
    } else if (humanChoice === 'rock' && computerChoice === 'rock' ||
        humanChoice === 'paper' && computerChoice === 'paper' ||
        humanChoice === 'scissors' && computerChoice === 'scissors') {
        console.log('Tie! Play again!')
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();


playRound(humanSelection, computerSelection);
console.log(humanScore, computerScore)


