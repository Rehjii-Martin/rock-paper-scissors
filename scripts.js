let humanScore = 0;
let computerScore = 0;

function getComputerChoice () {
    const minRange = 1; // min value option
    const maxRange = 3; // max value option

     // Assign random values to separate variables
    const choice = Math.floor(Math.random() * (maxRange - minRange + 1)) + minRange;
     
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
        humanScore++;
        console.log('You lose CPU, have a good day!');
    } else if (humanChoice === 'rock' && computerChoice === 'paper' ||
        humanChoice === 'paper' && computerChoice === 'scissors' ||
        humanChoice === 'scissors' && computerChoice === 'rock') {
        computerScore++;
        console.log('You lose human, have a nice day!');
    } else if (humanChoice === computerChoice) {
        console.log('Tie! Play again!')
    } else {
        console.log('Invalid input, no score rewarded')
    }
}

function playGame () {
    for (let i = 1; i <= 5; i++) {
        console.log(`Round ${i}`);
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
        console.log(`Current Scores - Human: ${humanScore}, CPU: ${computerScore}`);
    }

    console.log("Final Results:");
    if (humanScore > computerScore) {
        console.log('Human wins! Final Score: Human ${humanScore} - CPU ${computerScore}');
    } else if (computerScore > humanScore) {
        console.log(`CPU wins! Final Score: Human ${humanScore} - CPU ${computerScore}`);
    } else {
        console.log('The game is tied, play again!')
     }
}

playGame();
