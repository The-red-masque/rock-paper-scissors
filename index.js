// The program that does the rock-paper-scissors

// Starting counts
let playerScore = 0;
let computerScore = 0;
let round = 1;

  function gameOver() {
    const gameOver = "The game is over.";
    const leave = "You don't have to go home, but you can't stay here.";
    console.log(gameOver);
    console.log(leave);
  }

  do {
    // Formulas that don't change.
    const resultTemplate = `Round: ${round} Player score: ${playerScore} Computer score: ${computerScore}`;
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);  // Displays who won.
    console.log(resultTemplate);
  } while (round < 6)
  if (round >= 6) {
    gameOver();
  }

function Tie() {
  const tie = "You tied with the computer.";
  computerScore;
  playerScore;
  round++;
  console.log(tie);
  return { computerScore, playerScore, round };
}

function playerWin() {
  const playerWin = "You won!";
  computerScore;
  playerScore++;
  round++;
  console.log(playerWin);
  return { computerScore, playerScore, round };
}

function computerWin() {
  const computerWin = "You lost to the computer.";
  computerScore++;
  playerScore;
  round++;
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

// Generates computer's choice.
function getComputerChoice() {
  
  let computerChoice = Math.floor(Math.random() * 100);
  let computerChoiceUnexpectedOutcome = "There has been an unexpected outcome in the getComputerChoice function.";
  
  if (computerChoice >= 0 && computerChoice <= 33) {
    computerChoice = "rock";
    console.log(computerChoice);
    return computerChoice;
  } else if (computerChoice >= 34 && computerChoice <= 66) {
    computerChoice = "paper";
    console.log(computerChoice);
    return computerChoice;
  } else if (computerChoice >= 67 && computerChoice <= 100) {
    computerChoice = "scissors";
    console.log(computerChoice);
    return computerChoice;
  } else {
	  // TODO: See if there's something more elegant than (Math.floor(Math.random * 100))?
    return console.log(computerChoiceUnexpectedOutcome);
  }
}

function getHumanChoice() {
  let input = prompt("Which option do you chose \(Rock, Paper, or Scissors\)").toLowerCase();

  do {
    if (input === "rock") {
      let humanChoice = "rock";
      console.log(humanChoice);
      return humanChoice;
    } else if (input === "paper") {
      let humanChoice = "paper";
      console.log(humanChoice);
      return humanChoice;
    } else if (input === "scissors") {
      let humanChoice = "scissors";
      console.log(humanChoice);
      return humanChoice;
    }  // Checks for invalid result.
  } while (input === "rock" && input !== null && input !== undefined || input === "paper" && input !== null && input !== undefined || input === "scissors" && input !== null && input !== undefined)
}