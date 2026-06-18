
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function getHumanChoice() {
  return new Promise((resolve) => {
    rl.question('Rock, Paper or Scissors: ', (answer) => {
      resolve(answer.trim());
    });
  });
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

function playGame()
{
    for (let i = 0; i < 5; i++)
    {
        humanSelection = getHumanChoice();
        computerSelection = getComputerChoice();
        console.log(playRound(humanSelection, computerSelection));
    }
}

let humanScore = 0;
let computerScore = 0;
let humanSelection = 0;
let computerSelection = 0;


playGame();
console.log("Result: " + humanScore + " vs. " + computerScore);