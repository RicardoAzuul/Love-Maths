// Wait for the DOM to finish loading before running the game
// Get the button elements and event listeners to them

document.addEventListener('DOMContentLoaded', function() {
  let buttons = document.getElementsByTagName('button');

  for (let button of buttons) {
    button.addEventListener('click', function() {
      if (this.getAttribute('data-type') === 'submit') {
        checkAnswer();
      }
      else {
        let gameType = this.getAttribute('data-type');
        runGame(gameType);
      }
    })
  }

  runGame('addition');
})

function runGame(gameType) {

  // Generate two random numbers between 1 and 25
  // Math.floor rounds down to the whole number
  // Math.random generates a number between 0 and 1
  let randomNumber1 = Math.floor(Math.random() * 25) + 1;
  let randomNumber2 = Math.floor(Math.random() * 25) + 1;

  if (gameType === 'addition') {
    displayAdditionQuestion(randomNumber1, randomNumber2);
  }
  else {
    alert(`Unknown game type ${gameType}`);
    throw `Unknown game type ${gameType}, aborting!`;
  }
}

function checkAnswer() {

// Checks the answer against the first element in the returned calculateCorrectAnswer array

let userAnswer = parseInt(document.getElementById('answer-box').value);
let calculatedAnswer = calculateCorrectAnswer();
let isCorrect = userAnswer === calculatedAnswer[0];

if (isCorrect) {
  alert('Hey! You got it right! :D');
  incrementScore();
}
else {
  alert(`Awww... you answered ${userAnswer}. The correct answer was ${calculatedAnswer[0]}!`);
  incrementWrongAnswer();
}

runGame(calculatedAnswer[1]);

}

function calculateCorrectAnswer() {
  // Gets the operands (the random numbers) and
  // the operator (plus, minus etc) directly from the
  // DOM

  let operand1 = parseInt(document.getElementById("operand1").innerText);
  let operand2 = parseInt(document.getElementById("operand2").innerText);
  let operator = document.getElementById('operator').innerText;

  if (operator === '+') {
    return [operand1 + operand2, 'addition'];
  }
  else {
    alert(`Unimplemented operator ${operator}`);
    throw `Unimplemented operator ${operator}, aborting!`;
  }
}

function incrementScore() {
  
  // Gets current score from DOM and increments it

  let oldScore = parseInt(document.getElementById('score').innerText);
  document.getElementById('score').innerText = ++oldScore;

}

function incrementWrongAnswer() {

  // Gets current tally of incorrect answers from DOM and increments it

  let oldScore = parseInt(document.getElementById('incorrect').innerText);
  document.getElementById('incorrect').innerText = ++oldScore;

}

function displayAdditionQuestion(operand1, operand2) {
  
  document.getElementById('operand1').textContent = operand1;
  document.getElementById('operand2').textContent = operand2;
  document.getElementById('operator').textContent = '+';

}

function displaySubtractQuestion() {

}

function displayMultiplyQuestion() {

}

function displayDivisionQuestion() {

}