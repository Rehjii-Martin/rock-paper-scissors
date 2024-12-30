function getComputerChoice () {
    const minRange = 1; // min value option
    const maxRange = 3; // max value option

     // Assign random values to separate variables
    const choice= Math.floor(Math.random() * (maxRange - minRange + 1)) + minRange;
            
    let result;
        if (choice === 3) {
        result = 'rock'
        } else if (choice === 2) {
        result = 'paper'
        } else if (choice === 1) {
        result = 'scissors'
        }

        return result; 
    }

function getHumanChoice () {

}

console.log(getComputerChoice());
