"use strict";

//To reset game
function reset() {
  document.querySelector(".again").classList.toggle("active");
}
//To display message
const displayMessage = function (message) {
  document.querySelector("#guess").textContent = message;
};
//To display score
const displayScore = function (showScore) {
  document.querySelector("#display_score").textContent = showScore;
};

let number = Math.trunc(Math.random() * 20) + 1;
displayScore("?");
// document.querySelector("#display_score").textContent = "?";

let score = 20;
let highscore = 0;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".number").value);

  //When a player does not make a guess
  if (!guess) {
    displayMessage("No number!");

    //When the guess made by the player is the same as the secret number and the game is won
  } else if (guess === number) {
    displayMessage("You guessed right!");
    displayScore(number);
    //Set a new highscore is there is one
    if (score > highscore) {
      highscore = score;
      document.querySelector("#highscore").textContent = highscore;
    }
    //Play Again button appears to restart the game
    reset();
    //When the guess is not the same as the secret number
  } else if (guess !== number) {
    if (score > 1) {
      displayMessage(guess > number ? "Guess lower... " : "Guess higher");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("You lost the game!");
      document.querySelector(".score").textContent = "0";
      displayScore(number);
      reset();
    }
  }
});

//Resetting everything to default while maintaining highscore
document.querySelector(".again").addEventListener("click", function () {
  number = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector(".score").textContent = score;
  displayScore("?");
  document.querySelector(".number").value = "";
  displayMessage("Guess the number!");
  reset();
});
