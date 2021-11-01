"use strict";

// Selecting Elements
const scoreP0 = document.querySelector("#score--0"),
  scoreP1 = document.getElementById("score--1"),
  currentP0 = document.querySelector("#current--0"),
  currentP1 = document.querySelector("#current--1"),
  nameP0 = document.querySelector("#name--0"),
  nameP1 = document.querySelector("#name--1"),
  player0 = document.querySelector(".player--0"),
  player1 = document.querySelector(".player--1"),
  dice = document.querySelector(".dice"),
  buttonNew = document.querySelector(".btn--new"),
  buttonRoll = document.querySelector(".btn--roll"),
  buttonHold = document.querySelector(".btn--hold"),
  // Switching players according to the reason
  switchStyle = function (playernew) {
    player.classList.remove("player--active");
    player = playernew;
    player.classList.add("player--active");
  },
  switchPlayer = function () {
    if (currentPlayer === currentP0) {
      {
        switchStyle(player1);

        currentScore = scoreP1;
        return currentP1;
      }
    } else {
      switchStyle(player0);

      currentScore = scoreP0;
      return currentP0;
    }
  },
  // Checking if the dice is 1 or not /  if 1 then return the value to 0
  checkDice = function () {
    if (diceNumber !== 1) {
      currentPlayer.textContent =
        Number(currentPlayer.textContent) + diceNumber;
    } else {
      currentPlayer.textContent = 0;
      currentPlayer = switchPlayer();
    }
    return currentPlayer;
  },
  // Starting values
  starting = function () {
    currentP0.textContent = 0;
    currentP1.textContent = 0;
    scoreP0.textContent = 0;
    scoreP1.textContent = 0;
    currentPlayer = currentP0;
    currentScore = scoreP0;
    player = player0;
    player0.classList.add("player--active");
    player1.classList.remove("player--active");
    player0.classList.remove("player--winner");
    player1.classList.remove("player--winner");
    diceNumber = 0;
    diceNumberStr = "";
    dice.classList.add("hidden");
  };
let currentPlayer, currentScore, player, diceNumber, diceNumberStr;
// Starting Conditions
starting();

// Rolling Dice When clicked
buttonRoll.addEventListener("click", function () {
  // Creating a random variable
  diceNumber = Math.trunc(Math.random() * 6) + 1;
  diceNumberStr = `dice-${diceNumber}.png`;
  // Calling an image and revealing dice
  dice.src = diceNumberStr;
  dice.classList.remove("hidden");

  // Run function to check if dice is not 1
  currentPlayer = checkDice();
});

// Holding Score
buttonHold.addEventListener("click", function () {
  currentScore.textContent =
    Number(currentScore.textContent) + Number(currentPlayer.textContent);
  currentPlayer.textContent = 0;
  if (Number(currentScore.textContent) >= 100) {
    player.classList.add("player--winner");
    dice.classList.add("hidden");
  } else currentPlayer = switchPlayer();
});

// Newgame
buttonNew.addEventListener("click", starting);
