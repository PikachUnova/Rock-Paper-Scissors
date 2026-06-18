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
      return "Tie!";

}

function handleClick(humanChoice) {
    // stop game if someone already won
    if (humanScore === 5 || computerScore === 5) return;

    let computerChoice = getComputerChoice();
    let result = playRound(humanChoice, computerChoice);

    resultsDiv.textContent = result;
    scoreDiv.textContent = `Player: ${humanScore} | Computer: ${computerScore}`;

    if (humanScore === 5) {
        resultsDiv.textContent = "You won the game!";
    }

    if (computerScore === 5) {
        resultsDiv.textContent = "Computer won the game!";
    }
}

document.querySelector("#rock").addEventListener("click", () => handleClick(0));
document.querySelector("#paper").addEventListener("click", () => handleClick(1));
document.querySelector("#scissors").addEventListener("click", () => handleClick(2));
