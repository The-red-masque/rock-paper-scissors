// The program that does the rock-paper-scissors
// Connection tested

function getResult(humanChoice, computerChoice) {
  const playerWin = "The player won.";
  const computerWin = "The player lost.";
  const tie = "The player tied with the computer.";
  const resultError = "There has been an error in the result checker.";
  // Starting score of 0
  let playerScore = 0;
  let computerScore = 0;
  const scoreString = `\nPlayer score: ${playerScore} Computer score: ${computerScore}`;

  // Checks for tie.
  if (humanChoice === computerChoice) {
    result = tie;
    console.log(result,scoreString,playerScore,computerScore);
    return result;
  }
     // Check who won.
  else if (humanChoice === "rock" && computerChoice === "paper") {
    result = computerWin;
    computerScore++;
    console.log(result,scoreString,playerScore,computerScore);
    return result;
  } else if (humanChoice === "rock" && computerChoice === "scissors") {
    result = playerWin; playerScore++;
    console.log(result,scoreString,playerScore,computerScore);
    return result;
  } else if (humanChoice === "paper" && computerChoice === "scissors") {
    result = computerWin; computerScore++;
    console.log(result,scoreString,playerScore,computerScore);
    return result;
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    result = playerWin; playerScore++;
    console.log(result,scoreString,playerScore,computerScore);
    return result;
  } else if (humanChoice === "scissors" && computerChoice === "rock") {
    result = computerWin; computerScore++;
    console.log(result,scoreString,playerScore,computerScore);
    return result;
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    result = playerWin; playerScore++;
    console.log(result,scoreString,playerScore,computerScore);
  } else {
    alert(resultError)
  }
}
// Reference Error.
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
  let input = prompt("Which option do you choose \(Rock, Paper, or Scissors\)").toLowerCase();
  let inputError = "The player entered an invalid input for rock paper scissors.\nPlease only use \"Rock\", \"Paper\" or \"Scissors\".";
  if (input === "rock"||"paper"||"scissors") {
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
  } else {
    alert(inputError);
  }
}

//getScore()
  getResult(getHumanChoice(), getComputerChoice())
  // getScore();
