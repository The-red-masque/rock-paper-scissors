// The program that does the rock-paper-scissors

// Starting counts
let playerScore = 0;
let computerScore = 0;
let round = 1;
  
  // Creating button choices in DOM
const btnDiv = document.createElement("div");
  const rockBtn = document.createElement("BUTTON");
  rockBtn.textContent = "Rock";
  btnDiv.appendChild(rockBtn);
  const paperBtn = document.createElement("BUTTON");
  paperBtn.textContent = "Paper";
  btnDiv.appendChild(paperBtn);
  const scissorsBtn = document.createElement("BUTTON");
  scissorsBtn.textContent = "Scissors";
  btnDiv.appendChild(scissorsBtn);
document.body.appendChild(btnDiv);

const resultDiv = document.createElement("div");
const resultTemplate = `Round: ${round} Player score: ${playerScore} Computer score: ${computerScore}`;
const playerScoreLimit = playerScore < 6

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

function playRound(humanSelection) {

  const computerSelection = getComputerChoice();
  // const humanSelection = getHumanChoice();
  const playerChoosesRock = humanSelection === "rock";
  const playerChoosesScissors = humanSelection === "scissors";
  const playerChoosesPaper = humanSelection === "paper";
  
  const computerChoosesRock = computerSelection === "rock";
  const computerChoosesScissors = computerSelection === "scissors";
  const computerChoosesPaper = computerSelection === "paper";
  
  const playerAndComputerChooseSame = humanSelection === computerSelection;
  
  let result = "";
  // Checks for tie.
  
  if (playerAndComputerChooseSame) {
    result = Tie();
    console.log(result);
    return result;
  }
  // Check who won.
  else if (playerChoosesRock && computerChoosesPaper) {
    result = computerWin();
    return result;
  } else if (playerChoosesRock && computerChoosesScissors) {
    result = playerWin();
    return result;
  } else if (playerChoosesPaper && computerChoosesScissors) {
    result = computerWin();
    return result;
  } else if (playerChoosesPaper && computerChoosesRock) {
    result = playerWin();
    return result;
  } else if (playerChoosesScissors && computerChoosesRock) {
    result = computerWin();
    return result;
  } else if (playerChoosesScissors && computerChoosesPaper) {
    result = playerWin();
    return result;
  } else {
    // Error triggered.
    result = console.log("Error in playRound function.");
    return result;
  }
}

function getComputerChoice() {
  
  // Produces a randomish percentage in decimal.
  const computerChoice = Math.round(Math.random() * 100) + 1;
  
  // What to display when there is an unexpected outcome.
  const unexpectedOutcome = "There has been an unexpected outcome in the getComputerChoice function.";
  const computerChoosesRock = computerChoice >= 1 && computerChoice <= 33;
  const computerChoosesPaper = computerChoice >= 34 && computerChoice <= 66;
  const computerChoosesScissors = computerChoice >= 67 && computerChoice <= 100;

  if (computerChoosesRock) {
    computerSelects = "rock";
    return computerSelects;
  } else if (computerChoosesPaper) {
    computerSelects = "paper";
    return computerSelects;
  } else if (computerChoosesScissors) {
    computerSelects = "scissors";
    return computerSelects;
  } else {
    // Checks for unexpected outcomes.
    return console.log(unexpectedOutcome);
    //break;
  }
}

rockBtn.addEventListener("click", function() {playRound( humanSelection = "rock" )});
paperBtn.addEventListener("click", function() {playRound( humanSelection = "paper" );});
scissorsBtn.addEventListener("click", function() {playRound( humanSelection = "scissors" );});