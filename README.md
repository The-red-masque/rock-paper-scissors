# Rock Paper Scissors

A Rock paper scissors game with no GUI. I may add  a GUI latter.

## Pseudocode

WHILE game is running
players =["USER_PLAYER, COMPUTER_PLAYER"]
USER_PLAYER is active
COMPUTER_PLAYER is active
Function drawCheck:
IF USER_PLAYER && COMPUTER_PLAYER have the same response:
Display "A Draw!"
ENDIF

Function winCheck:
IF one players inputs ROCK and the other inputs PAPER:
player that inputs Paper wins.
ELIF one player inputs PAPER and the other inputs SCISSORS:
player that inputs SCISSORS wins.
ELIF one player inputs SCISSORS and the other inputs ROCK:
player that inputs ROCK wins

Function errorCheck:
IF input is NOT ROCK, PAPER, or SCISSOR
Display "Incorrect input you must enter Rock, Paper, or Scissors"

Function Win:
computerScore = 0
userScore = 0
IF player wins:
Display "Winning player wins."
add 1 to that player's score.

Display score
