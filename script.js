"use strict";

let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highestScore = 0;
document.querySelector(".hiddenNumber").textContent = secretNumber;

document.querySelector(".check").addEventListener("click", function () {
  const myGuess = Number(document.querySelector(".myGuess").value);
  if (!myGuess) {
    document.querySelector(".message").textContent =
      "You have to type in a number!";
  } else if (myGuess === secretNumber) {
    document.querySelector(".message").textContent = "You win!";
    document.querySelector(".myHighestScore").textContent = score;

    if (score > highestScore) {
      document.querySelector(".myHighestScore").textContent = score;
    }
  } else if (myGuess > secretNumber) {
    if (score > 0) {
      score--;
      document.querySelector(".score").textContent = score;
      document.querySelector(".message").textContent = "Too High!";
    } else {
      document.querySelector(".message").textContent = "Game Over!";
      document.querySelector(".score").textContent = 0;
    }
  } else if (myGuess < secretNumber) {
    score--;
    if (score > 0) {
      document.querySelector(".score").textContent = score;
      document.querySelector(".message").textContent = "Too Low!";
    } else {
      document.querySelector(".message").textContent = "Game Over!";
      document.querySelector(".score").textContent = 0;
    }
  }
});

document.querySelector(".reset").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  document.querySelector(".hiddenNumber").textContent = secretNumber;
  document.querySelector(".message").textContent = "Start the Guessing...";
  document.querySelector(".score").textContent = score;
});
