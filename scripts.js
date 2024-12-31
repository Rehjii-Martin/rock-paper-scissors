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

console.log(getHumanChoice());
console.log(getComputerChoice());
