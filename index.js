// The program that does the rock-paper-scissors

// Starting counts
let playerScore = 0;
let computerScore = 0;
let round = 0;
let message = "";

// Creates button choices in DOM
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

// Creates div to display results.
const resultDiv = document.createElement("div");
  const resultP = document.createElement("p");
    resultP.textContent = `Result: ${message}`;
  resultDiv.appendChild(resultP);
  const scoreBoard = document.createElement("p");
    scoreBoard.textContent = `Round: ${round} Player score: ${playerScore} Computer score: ${computerScore}`;
  resultDiv.appendChild(scoreBoard);
document.body.appendChild(resultDiv);

function decideWinner( computerScore, playerScore ) {
  if (computerScore > playerScore) {
    resultP.textContent = 'The computer has won!';
    resultDiv.appendChild(resultP);
    document.body.appendChild(resultDiv);
  } else if (computerScore < playerScore) {
    resultP.textContent = 'The player has won!';
    resultDiv.appendChild(resultP);
    document.body.appendChild(resultDiv);
  } else if (computerScore === playerScore) {
    resultP.textContent = 'The player and computer have tied.';
    resultDiv.appendChild(resultP);
    document.body.appendChild(resultDiv);
  }
}

// Function that runs when a tie is true.
function Tie() {
  const tie = "You tied with the computer.";
  round++;
  scoreBoard.textContent = `Round: ${round} Player score: ${playerScore} Computer score: ${computerScore}`;
  resultP.textContent = `Result: ${tie}`;
  resultDiv.appendChild(resultP);
  resultDiv.appendChild(scoreBoard);
  document.body.appendChild(resultDiv);
}

// Function that triggers when a playerWin is True.
function playerWin() {
  const playerWin = "You won!";
  playerScore++;
  round++;
  scoreBoard.textContent = `Round: ${round} Player score: ${playerScore} Computer score: ${computerScore}`;  // Player score goes up.
  resultP.textContent = `Result: ${playerWin}`;
  resultDiv.appendChild(resultP);
  resultDiv.appendChild(scoreBoard);
  document.body.appendChild(resultDiv);
}
// Function that triggers when a computerWin is true.
function computerWin() {
  const computerWin = "You lost to the computer.";
  computerScore++;  // Computer score goes up.
  round++;
  scoreBoard.textContent = `Round: ${round} Player score: ${playerScore} Computer score: ${computerScore}`;
  resultP.textContent = `Result: ${computerWin}`;
  resultDiv.appendChild(resultP);
  resultDiv.appendChild(scoreBoard);
  document.body.appendChild(resultDiv);
}

function playRound(humanSelection) {

  const computerSelection = getComputerChoice();

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
    return result;
  }
  // Check who won.
  else if (playerChoosesRock && computerChoosesPaper) {
    result = computerWin();
    return result;
  } else if (playerChoosesRock && computerChoosesScissors) {
      if (playerScore >= 5) {
      result = decideWinner(computerScore, playerScore);
      return result;
    } else {
      result = playerWin();
      return result;
    }
  } else if (playerChoosesPaper && computerChoosesScissors) {
    result = computerWin();
    return result;
  } else if (playerChoosesPaper && computerChoosesRock) {
          if (playerScore >= 5) {
      result = decideWinner(computerScore, playerScore);
      return result;
    } else {
      result = playerWin();
      return result;
    }
  } else if (playerChoosesScissors && computerChoosesRock) {
    result = computerWin();
    return result;
  } else if (playerChoosesScissors && computerChoosesPaper) {
    if (playerScore >= 5) {
      result = decideWinner(computerScore, playerScore);
      return result;
    } else {
      result = playerWin();
      return result;
    }
  } else {// Error triggered.
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
  
  let computerSelects = "";
  
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
