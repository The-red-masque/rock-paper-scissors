// The program that does the rock-paper-scissors
// Connection tested
// function scoreChanger() {
  // let result = playRound(); // causes "Uncaught InternalError: too much recurssion."
  // if (result === tie) {
    // playerScore;
    // computerScore;
  // } else if (result === computerWin) {
    // playerScore;
    // computerScore++;
  // } else if (result === playerWin) {
    // playerScore++;
    // computerScore;
  // }
// }
function multipleRounds() {
  // Starting info
  let round = 0;
  let playerScore = 0;
  let computerScore = 0;
  const roundTemplate = `Round: ${round}`;
  const scoreTemplate = `Player score: ${playerScore} Computer score: ${computerScore}`;
  do {
    round++;
    console.log(roundTemplate);
    playRound();//humanSelection, computerSelection);
    console.log(scoreTemplate);
  }
  while (round < 5 );
}

function playRound(humanChoice, computerChoice) {
  const playerWin = "You won!";
  const computerWin = "You lost to the computer.";
  const tie = "You tied with the computer.";
  const resultError = "There has been an error in the result checker.";
  // Starting score of 0
  
  // Checks for tie.
  if (humanChoice === computerChoice) {
    result = tie;

    console.log(result);         // You tied with the computer.

      // Player score: 0 Computer score: 0
    return result;
  }
     // Check who won.
  else if (humanChoice === "rock" && computerChoice === "paper") {
    result = computerWin;
    
    console.log(result);         // You lost to the computer!

      // Player score: 0 Computer score: 1
    return result;
  } else if (humanChoice === "rock" && computerChoice === "scissors") {
    result = playerWin;

    console.log(result);         // You won!
    return result;
  } else if (humanChoice === "paper" && computerChoice === "scissors") {
    result = computerWin;

    console.log(result);
    return result;
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    result = playerWin;

    console.log(result);

    console.log(scoreTemplate);
    return result;
  } else if (humanChoice === "scissors" && computerChoice === "rock") {
    result = computerWin;
    console.log(result);


    return result;
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    result = playerWin; 
    console.log(result);


  {
    alert(resultError);
  }
}}

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
  // Prompt not defined when using nodejs
  let input = prompt("Which option do you choose \(Rock, Paper, or Scissors\)").toLowerCase();
  let inputError = "The player entered an invalid input for rock paper scissors.\nPlease only use \"Rock\", \"Paper\" or \"Scissors\".";
  // Check that input is valid. If it isn't valid display inputError.
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
    if (!(input === "rock"||"paper"||"scissors")) {
      console.log(inputError);
      getHumanChoice();
  }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

multipleRounds();
