"use strict";

let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highestScore = 0;
const messageDisplayed = function (message) {
  document.querySelector(".message").textContent = message;
};
document.querySelector(".check").addEventListener("click", function () {
  const myGuess = Number(document.querySelector(".myGuess").value);

  if (!myGuess) {
    messageDisplayed("You have to type in a number!");
  } else if (myGuess === secretNumber) {
    messageDisplayed("You win!");
    document.querySelector(".myHighestScore").textContent = score;
    document.querySelector(".hiddenNumber").textContent = secretNumber;
    if (score > highestScore) {
      document.querySelector(".myHighestScore").textContent = score;
    }
  } else if (myGuess !== secretNumber) {
    if (score > 1) {
      document.querySelector(".score").textContent = score;
      score--;
      messageDisplayed(myGuess > secretNumber ? "Too High!" : "Too Low");
    } else {
      document.querySelector(".message").textContent = "Game Over!";
      document.querySelector(".score").textContent = 0;
    }
  }
});

document.querySelector(".reset").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20 + 1);

  document.querySelector(".hiddenNumber").textContent = "?";
  messageDisplayed("Start the Guessing...");
  document.querySelector(".myGuess").value = "";
  document.querySelector(".score").textContent = score;
});
