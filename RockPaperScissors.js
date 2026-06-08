
function getHumanChoice() {
    return Math.floor(Math.random() * 3);
}


function getComputerChoice() {
  return Math.floor(Math.random() * 3);
}

function playRound(humanChoice, computerChoice) {
   // NOTE: 
   //   0 = rock
   //   1 = paper
   //   2 = scissors

  if ((humanChoice == 0 && computerChoice == 2) || 
    (humanChoice == 1 && computerChoice == 0) || 
    (humanChoice == 2 && computerChoice == 1)
    )
    {
        humanScore++;
        return "you win";
    }

    else if ((humanChoice == 0 && computerChoice == 1) || 
    (humanChoice == 1 && computerChoice == 2) || 
    (humanChoice == 2 && computerChoice == 0)
    )
    {
        computerScore++;
        return "you lose";
    }
    else
      return "tie";

}

let humanScore = 0;
let computerScore = 0;
let humanSelection = getHumanChoice();
let computerSelection = getComputerChoice();


console.log(playRound(humanSelection, computerSelection));

humanSelection = getHumanChoice();
computerSelection = getComputerChoice();
console.log(playRound(humanSelection, computerSelection));

humanSelection = getHumanChoice();
computerSelection = getComputerChoice();
console.log(playRound(humanSelection, computerSelection));

humanSelection = getHumanChoice();
computerSelection = getComputerChoice();
console.log(playRound(humanSelection, computerSelection));

humanSelection = getHumanChoice();
computerSelection = getComputerChoice();
console.log(playRound(humanSelection, computerSelection));

console.log("Result: " + humanScore + " vs. " + computerScore);