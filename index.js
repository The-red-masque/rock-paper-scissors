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
  } else {
    // Error triggered.
    result = console.log("Error in playRound function.");
    return result;
  }
}

// Generates computer's choice.
function getComputerChoice() {
  
<<<<<<< HEAD
  // Computer's choice semi-RNG
  let computerChoice = Math.random();
  
  // What to display when there is an unexpected outcome.
  const unexpectedOutcome = "There has been an unexpected outcome in the getComputerChoice function.";
  const computerChoosesRock = computerChoice >= 0 && computerChoice <= .33;
  const computerChoosesScissors = computerChoice >= .67 && computerChoice <= 1;
  const computerChoosesPaper = computerChoice >= .34 && computerChoice <= .66;
  // The if statement converts the RNG computerChoice to "rock","paper", or "scissors". 
  if (computerChoosesRock) {
=======
  let computerChoice = Math.floor(Math.random() * 100);
  let computerChoiceUnexpectedOutcome = "There has been an unexpected outcome in the getComputerChoice function.";
  
  if (computerChoice >= 0 && computerChoice <= 33) {
>>>>>>> e46a0926d7ad7a16673a2910c4330391af6aecd4
    computerChoice = "rock";
    console.log(computerChoice);
    return computerChoice;
<<<<<<< HEAD
  } else if (computerChoosesPaper) {
=======
  } else if (computerChoice >= 34 && computerChoice <= 66) {
>>>>>>> e46a0926d7ad7a16673a2910c4330391af6aecd4
    computerChoice = "paper";
    console.log(computerChoice);
    return computerChoice;
<<<<<<< HEAD
  } else if (computerChoosesScissors) {
=======
  } else if (computerChoice >= 67 && computerChoice <= 100) {
>>>>>>> e46a0926d7ad7a16673a2910c4330391af6aecd4
    computerChoice = "scissors";
    console.log(computerChoice);
    return computerChoice;
  } else {
<<<<<<< HEAD
    // Checks for unexpected outcomes.
    // Occasionally returns an undefined choice.
    return console.log(unexpectedOutcome);
=======
	  // TODO: See if there's something more elegant than (Math.floor(Math.random * 100))?
    return console.log(computerChoiceUnexpectedOutcome);
>>>>>>> e46a0926d7ad7a16673a2910c4330391af6aecd4
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