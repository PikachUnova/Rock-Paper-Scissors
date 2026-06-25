let humanScore = 0;
let computerScore = 0;

const resultsDiv = document.querySelector("#results");
const scoreDiv = document.querySelector("#score");

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
        return "You Win this match";
    }

    else if ((humanChoice == 0 && computerChoice == 1) || 
    (humanChoice == 1 && computerChoice == 2) || 
    (humanChoice == 2 && computerChoice == 0)
    )
    {
        computerScore++;
        return "You Lose this match";
    }
    else
      return "Tie!";

}

function handleClick(humanChoice) {
    console.log("Clicked:", humanChoice);

    let computerChoice = getComputerChoice();
    console.log("Computer:", computerChoice);

    let result = playRound(humanChoice, computerChoice);
    console.log(result);

    //resultsDiv.textContent = result;
    //scoreDiv.textContent = `Player: ${humanScore} | Computer: ${computerScore}`;
    console.log("results:", document.querySelector("#results"));
    console.log("score:", document.querySelector("#score"));
}

document.querySelector("#rock").addEventListener("click", () => handleClick(0));
document.querySelector("#paper").addEventListener("click", () => handleClick(1));
document.querySelector("#scissors").addEventListener("click", () => handleClick(2));
