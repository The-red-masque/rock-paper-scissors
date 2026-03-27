// The program that does the rock-paper-scissors
// Connection tested

function getResult(humanChoice, computerChoice) {
  let playerWin = "The player won.";
  let playerLoss = "The player lost.";
  let tie = "The player tied with the computer.";
  let resultError = "There has been an error in the result checker.";
  // Checks for tie.
  if (humanChoice === computerChoice) {
    result = tie;
    console.log(result);
    alert(result);
    return result;
  } // Check who won.
    else if (humanChoice === "rock" && computerChoice === "paper") {
    result = playerLoss;
    console.log(result);
    alert(result);
    return result;
  } else if (humanChoice === "rock" && computerChoice === "scissors") {
    result = playerWin;
    console.log(result);
    alert(result);
    return result;
  } else if (humanChoice === "paper" && computerChoice === "scissors") {
    result = playerLoss;
    console.log(result);
    alert(result);
    return result;
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    result = playerWin;
    console.log(result);
    alert(result);
    return result;
  } else if (humanChoice === "scissors" && computerChoice === "rock") {
    result = playerLoss;
    console.log(result);
    alert(result);
    return result;
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    result = playerWin;
    console.log(result);
    alert(result);
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

//console.log(getHumanChoice());
//console.log(getComputerChoice());
getResult(getHumanChoice(), getComputerChoice());
//alert(getResult());  // referenceError: Can't find computerChoice. Scoping might be the problem.
//getHumanChoice
