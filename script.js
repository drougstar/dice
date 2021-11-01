'use strict';

// Selecting Elements
const scoreP0 = document.querySelector('#score--0'),
  scoreP1 = document.getElementById('score--1'),
  currentP0 = document.querySelector('#current--0'),
  currentP1 = document.querySelector('#current--1'),
  dice = document.querySelector('.dice'),
  buttonRoll = document.querySelector('.btn--roll'),
  checkDice = function (diceNumber, current) {
    // Checking if the dice is 1 or not /  if 1 then return the value to 0
    if (diceNumber !== 1) {
      current.textContent = Number(current.textContent) + diceNumber;
    } else {
      current.textContent = 0;
      current = switchPlayer(current);
    }
    return current;
  },
  switchPlayer = function (current) {
    if (current === currentP0) {
      return currentP1;
    } else return currentP0;
  };
let currentPlayer = currentP0;

// Starting Conditions
currentP0.textContent = 0;
currentP1.textContent = 0;
scoreP0.textContent = 0;
scoreP1.textContent = 0;
dice.classList.add('hidden');

// Rolling Dice When clicked
buttonRoll.addEventListener('click', function () {
  // Creating a random variable
  let diceNumber = Math.trunc(Math.random() * 6) + 1,
    diceNumberStr = `dice-${diceNumber}.png`;
  // Calling an image and revealing dice
  document.querySelector('.dice').src = diceNumberStr;
  dice.classList.remove('hidden');

  // Run function to check if dice is not 1
  currentPlayer = checkDice(diceNumber, currentPlayer);
});
