// The program that does the rock-paper-scissors

function multipleRounds() {
  // Starting counts
  let round = 0;
  let playerScore = 0;
  let computerScore = 0;
  // Template strings.
  const roundTemplate = `Round: ${round}`;
  const scoreTemplate = `Player score: ${playerScore} Computer score: ${computerScore}`;
  do {
    console.log(roundTemplate);
    playRound();
    console.log(scoreTemplate);
  }
  while (round < 5 );
}

// Function that runs when a tie is true.
// Browser console displays: "Uncaught SyntaxError: missing ) after formal parameters."
function Tie(result === "tie") { // ';' expected. Why is it expecting a semicolon here?  
  const tie = "You tied with the computer.";
  computerScore;
  playerScore;
  round++;
  console.log(tie);
  // This is more readable for me.
  return {computerScore, playerScore, round};    
}

// Function that triggers when a playerWin is True.
function playerWin (result === "playerWin") {  // ';' expected. Why is it expecting a semicolon here?
  const playerWin = "You won!";
  computerScore;
  playerScore++;
  round++;
  console.log(playerWin);
  // This is more readable for me.
  return {computerScore, playerScore, round};
}

// Function that triggers when a computerWin is true.
function computerWin (result === "computerWin") {  // ';' expected. Why is it expecting a semicolon here?
  const computerWin = "You lost to the computer.";
  computerScore++;
  playerScore;
  round++;
  console.log(computerWin);
  // This is more readable for me.
  return {computerScore, playerScore, round};
  
}

function playRound(humanChoice, computerChoice) {
  let result ="";
  // Checks for tie.
  if (humanChoice === computerChoice) {
    result = "tie";
    console.log(result);         // You tied with the computer.
    return result;
  }
     // Check who won.
  else if (humanChoice === "rock" && computerChoice === "paper") {
    result = "computerWin";
    console.log(result);
    return result;
  } else if (humanChoice === "rock" && computerChoice === "scissors") {
    result = "playerWin";
    console.log(result);         // You won!
    return result;
  } else if (humanChoice === "paper" && computerChoice === "scissors") {
    result = "computerWin";
    console.log(result);
    return result;
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    result = "playerWin";
    console.log(result);
    return result;
  } else if (humanChoice === "scissors" && computerChoice === "rock") {
    result = "computerWin";
    console.log(result);
    return result;
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    result = "playerWin"; 
    console.log(result);
}
  do {
    computerWin(result);
    playerWin(result);
    Tie(result);
  } while (result)
}

function getComputerChoice() {
  /* Function should uses a semi-RNG to decide what the choice represents. */
  // Computer's choice RNG
  let computerChoice = Math.random();
  let computerChoiceError = "There has been an error in the getComputerChoice function.";
  // The if statement converts the RNG computerChoice to "rock","paper", or "scissors". 
  if (computerChoice <= .33) {
    computerChoice = "rock";
    console.log(computerChoice);
    return computerChoice;
  } else if(.33 > computerChoice <= .66) {
    computerChoice = "paper";
    console.log(computerChoice);
    return computerChoice;
  } else if (computerChoice > .66) {
    computerChoice = "scissors";
    console.log(computerChoice);
    return computerChoice;
  } else {
    // Error checker
    alert(computerChoiceError);
  }
}

function getHumanChoice() {
  // Prompt not defined when using nodejs ignore that.
  let input = prompt("Which option do you choose \(Rock, Paper, or Scissors\)").toLowerCase();
  do {
    if (input === "rock") {
      let humanChoice = "rock";
      console.log(humanChoice);
      return humanChoice;
    } else if (input  === "paper") {
      let humanChoice = "paper";
      console.log(humanChoice);
      return humanChoice;
    } else {
      let humanChoice = "scissors";
      console.log(humanChoice);
      return humanChoice;
    }
  } while (input === "rock"||"paper"||"scissors")
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

multipleRounds();
