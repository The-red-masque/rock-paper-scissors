// The program that does the rock-paper-scissors

// javascript can't be normal and do if (0 > x < 1) {
// console.log(why don't you logic like almost every other language I've tried.)}

// Starts multiple rounds.
// function multipleRounds() {
// Starting counts
// let playerScore = 0;
// let computerScore = 0;
// let round = 1;
// Template strings.
// do {
// Formulas that don't change.
// const resultTemplate = `Round: ${round} Player score: ${playerScore} Computer score: ${computerScore}`;
// const humanSelection = getHumanChoice();
// const computerSelection = getComputerChoice();

// playRound(humanSelection, computerSelection);  // Displays who won.
// console.log(resultTemplate);
// }  while (round < 6)
// }


// Function that should run when a tie is true.
// function Tie() { 
// const tie = "You tied with the computer.";
// computerScore;
// playerScore;
// round++;
// console.log(tie);
// return {computerScore, playerScore, round};    
// }

// Function that triggers when a playerWin is True.
// function playerWin () {  // Uncaught ReferenceError: computerScore is not defined.
// const playerWin = "You won!";
// computerScore;
// playerScore++;
// round++;
// console.log(playerWin);
// return {computerScore, playerScore, round};
// }

// Function that triggers when a computerWin is true.
// function computerWin () {
// const computerWin = "You lost to the computer.";
// computerScore++;
// playerScore;
// round++;
// console.log(computerWin);
// return {computerScore, playerScore, round};
// }

// function playRound(humanChoice, computerChoice) {
// let result = "";
// Checks for tie.
// if (humanChoice === computerChoice) {
// result = Tie();
// console.log(result);
// return result;
// }
// Check who won.
// else if (humanChoice === "rock" && computerChoice === "paper") {
// result = computerWin();
// console.log(result);
// return result;
// } else if (humanChoice === "rock" && computerChoice === "scissors") {
// result = playerScore();
// console.log(result);
// return result;
// } else if (humanChoice === "paper" && computerChoice === "scissors") {
// result = computerWin();
// console.log(result);
// return result;
// } else if (humanChoice === "paper" && computerChoice === "rock") {
// result = playerWin();
// console.log(result);
// return result;
// } else if (humanChoice === "scissors" && computerChoice === "rock") {
// result = computerWin();
// console.log(result);
// return result;
// } else if (humanChoice === "scissors" && computerChoice === "paper") {
// result = playerWin(); 
// console.log(result);
// } else {
// result = console.log("Error in playRound function.");
// return result;
// };
// }

// Function to get the semi-rng and return the computer's choice as a string of "rock", "paper", or "scissors".


function getComputerChoice() {
  // Computer's choice semi-RNG
  let computerChoice = Math.random();
  // What to display when there is an unexpected outcome.
  let computerChoiceUnexpectedOutcome = "There has been an unexpected outcome in the getComputerChoice function.";
  // The if statement converts the RNG computerChoice to "rock","paper", or "scissors". 
  if (0 >= computerChoice && computerChoice <= .33) {
    computerChoice = "rock";
    return computerChoice;
  } else if (.34 >= computerChoice && computerChoice <= .66) {
    computerChoice = "paper";
    return computerChoice;
  } else if (.67 >= computerChoice && computerChoice <= 1) {
    computerChoice = "scissors";
    return computerChoice;
  } else {
    // Checks for unexpected outcomes.
    // I only seem to get scissors or undefined as a result.
    console.log(computerChoiceUnexpectedOutcome);
  }
}

const computerSelection = getComputerChoice();
console.log(computerSelection);

// function getHumanChoice() {
// let input = prompt("Which option do you chose \(Rock, Paper, or Scissors\)").toLowerCase();

// do {
// if (input === "rock") {
// let humanChoice = "rock";
// console.log(humanChoice);
// return humanChoice;
// } else if (input  === "paper") {
// let humanChoice = "paper";
// console.log(humanChoice);
// return humanChoice;
// } else if (input === "scissors") {
// let humanChoice = "scissors";
// console.log(humanChoice);
// return humanChoice;
// }
// } while (input === "rock"||"paper"||"scissors" && input !== null && input !== undefined) 
// }

// Trickle down error from computerScore is not defined.
// multipleRounds();
