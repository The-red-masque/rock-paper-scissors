// The program that does the rock-paper-scissors

// Starts multiple rounds.
// function multipleRounds() {
  // Starting counts
  let playerScore = 0;
  let computerScore = 0;
  let round = 1;
  // Template strings.
  do {
    // Formulas that don't change.
    const resultTemplate = `Round: ${round} Player score: ${playerScore} Computer score: ${computerScore}`;
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);  // Displays who won.
    console.log(resultTemplate);
  } while (round < 6)
// }


// Function that should run when a tie is true.
function Tie() {
  const tie = "You tied with the computer.";
  computerScore; // No change
  playerScore;  // No change
  round++;  // Increases round counter.
  console.log(tie);
  return { computerScore, playerScore, round };
}

// Function that triggers when a playerWin is True.
function playerWin() {  // Uncaught ReferenceError: computerScore is not defined.
  const playerWin = "You won!";
  computerScore;  // No change
  playerScore++;  // Player score goes up.
  round++;  // Increases round counter.
  console.log(playerWin);
  return { computerScore, playerScore, round };
}

// Function that triggers when a computerWin is true.
function computerWin() {
  const computerWin = "You lost to the computer.";
  computerScore++;  // Computer score goes up.
  playerScore;  // No change
  round++;  // Increases round counter.
  console.log(computerWin);
  return { computerScore, playerScore, round };
}

function playRound(humanSelection, computerSelection) {
  let result = "";
  // Checks for tie.
  if (humanSelection === computerSelection) {
    result = Tie();
    console.log(result);
    return result;
  }
  // Check who won.
  else if (humanSelection === "rock" && computerSelection === "paper") {
    result = computerWin();
    return result;
  } else if (humanSelection === "rock" && computerSelection === "scissors") {
    result = playerWin();
    return result;
  } else if (humanSelection === "paper" && computerSelection === "scissors") {
    result = computerWin();
    return result;
  } else if (humanSelection === "paper" && computerSelection === "rock") {
    result = playerWin();
    return result;
  } else if (humanSelection === "scissors" && computerSelection === "rock") {
    result = computerWin();
    return result;
  } else if (humanSelection === "scissors" && computerSelection === "paper") {
    result = playerWin();
  } else {
    // Error triggered.
    result = console.log("Error in playRound function.");
    return result;
  }
}

// Function to get the semi-rng and return the computer's choice as a string of "rock", "paper", or "scissors".
function getComputerChoice() {
  
  // Computer's choice semi-RNG
  let computerChoice = Math.random();
  
  // What to display when there is an unexpected outcome.
  let computerChoiceUnexpectedOutcome = "There has been an unexpected outcome in the getComputerChoice function.";
  
  // The if statement converts the RNG computerChoice to "rock","paper", or "scissors". 
  if (computerChoice >= 0 && computerChoice <= .33) {
    computerChoice = "rock";
    return computerChoice;
  } else if (computerChoice >= .34 && computerChoice <= .66) {
    computerChoice = "paper";
    return computerChoice;
  } else if (computerChoice >= .67 && computerChoice <= 1) {
    computerChoice = "scissors";
    return computerChoice;
  } else {
    // Checks for unexpected outcomes.
    // Occasionally returns an undefined choice.
    return console.log(computerChoiceUnexpectedOutcome);
  }
}

function getHumanChoice() {
  let input = prompt("Which option do you chose \(Rock, Paper, or Scissors\)").toLowerCase();

  do {
    if (input === "rock") {
      let humanChoice = "rock";
      return humanChoice;
    } else if (input === "paper") {
      let humanChoice = "paper";
      return humanChoice;
    } else if (input === "scissors") {
      let humanChoice = "scissors";
      return humanChoice;
    }
  } while (input === "rock" && input !== null && input !== undefined || input === "paper" && input !== null && input !== undefined || input === "scissors" && input !== null && input !== undefined)
}
playRound(humanSelection, computerSelection);
// displays choices:
// multipleRounds();
