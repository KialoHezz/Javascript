/* 
Rock Paper Scissors

Concept covered in this project

1. For Loops
2. DOm manipulation
3. Variable
4. Conditional (if else if)
5. Template literals
6. Event Listeners
7. Higher orf=der functions(Math.radom())

*/

const totalScores = {computerScore: 0, playerScore: 0}

// ** getComputer randomly selct between `Rock`, `Paper`, `Scissors` and returns that as string **

// getComputerChoice() => 'Rock'
// getCOmputerChoice() => 'Scissors'

function getComputerChoice(){
  const rpsChoice = ['Rock', 'Paper', 'Scissors'];
  const randomNumber = Math.floor(Math.random() * 3);

  return rpsChoice[randomNumber]
}

// console.log(getComputerChoice());

// ** getResult compares playeChoices & computerChoices and returns the scores accordingly **
//  HUman wins - getResult('Rock', 'Scissors' ) => 1
// human loses - getResult('Scissors', "Rock") => 1
//  human draws - getResult('Rock', 'Rock') => 0

function getResult(playerChoice, computerChoices){ 
  let score;
  // return the result of score base on if you won, drew or lost
  // All situations where human f=draws, set `score` to 0
  if(playerChoice == computerChoices){
    score = 0;

  //All situations where human wins, set `score` to 1
  // make sure to use else iss here
  }else if(playGame == 'Rock' && computerChoices == 'Scissors'){
    score = 1
  }else if(playGame == 'Paper' && computerChoices == 'Rock'){
    score = 1
  }else if(playGame == 'Scissors' && computerChoices == 'Paper'){
    score = 1
  }else {
    // Otherwise human loses (aka set score to -1)
    score = -1
  }

  return score

}

// console.log(getResult("rock", "Scissors"))

// ** ShowResult update the DOM to `You Win` `You loose` or
//  It's a Draw based on the score. ALso show player choice vs computer choice
function showResult(score, playerChoice, computerChoices){
  //  Hint: on score of -1
  //  You shld do result.innerText ="You lose!"
  // DOn't forget the div with the 'result' id!
  const resultDiv = document.getElementById("result");
  const handsDiv = document.getElementById("hands");
  const playerScoreDiv = document.getElementById("playe-score");
  if (score == -1){
    resultDiv.innerText = "You Lose";
  }else if(score == 0){
    resultDiv.innerText = "It's s tie";
  }else{
    resultDiv.innerText = "You won";
  }
  handsDiv.innerText = `Human :${playerChoice} vs Computer: ${computerChoices}`
  playerScoreDiv.innerText = `Your score: ${totalScores['playerScore']}`;
}

//  ** Calc. who won and show it on the screen
// call showResult func and getResult func.
function onClickRPS(playerChoice){
  console.log({playerChoice});
  const computerChoices = getComputerChoice()
  console.log({computerChoices});

  const score = getResult(playerChoice, computerChoices);
  totalScores['playerScore'] += score


  console.log({score});
  console.log(totalScores);

  showResult(score, playerChoice, computerChoices);
}

// ** Make the RPS buttons active listen for a click and do sthg once a click is detected **

function playGame(){
  // use querySelector to select all RPS btn
  const rpsBtns = document.querySelectorAll(".rpsButton");
  rpsBtns[0].onclick = () => console.log(rpsBtns[0].value);

  // console.log(rpsBtn);
  //  * Adds an on click event listener to each RPS btn and every time you click it, it clicks the onclicksRPS func. with RPS btn that was last clicked *
  //  1. looop through the btn using forEach loop
  // 2. Add a click event listener to each btn
  //  3. Call the onClickRPS func. every times someone clicks
  //  4. Make sure to pass the current  selected RPS btn as an arqument

  rpsBtns.forEach(rpsBtn => {
    rpsBtn.onclick = () => onClickRPS(rpsBtn.value)
  })

  const endGameButton = document.getElementById("endGameButton");

  endGameButton.onclick = () => endGame(totalScores)
  // add a click listener to the end gamebtn that runs the endGae() func. on click

}


// **  endGame func. clear all the text on the DOM  **
function endGame(totalScores){
  totalScores['playerScore'] = 0;
  totalScores['ComputerScore'] = 0;

  const resultDiv = document.getElementById("result");
  const handsDiv = document.getElementById("hands");
  const playerScoreDiv = document.getElementById("playe-score");

  resultDiv.innerText = '';
  handsDiv.innerText = '';
  playerScoreDiv.innerText = '';
}


playGame()
