'use strict';

//text content of message element
//for classes we use .
//for ids we use #
//console.log(document.querySelector('.message').textContent);
//what is DOM?
//it's a document object model.It's a structured representation of HTML Documents.Allows js to access html elements & styles to manipulate them.
//the documen is the entry point to the DOM like above

//////////////////////selecting and manipulating elements
//bellow we are doing some DOM manipulation
// document.querySelector('.message').textContent = '🎉 Correct Number!';
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;
// //with the input field to get the actual value, we use value property
// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

/////////////////////////Handle clicking events

const secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

//in addEventListener('') method,the first parameter is the name of the event & as the second argument we have function value
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  //when there is no input
  if (!guess) {
    // document.querySelector('.message').textContent = '⛔️ No number!';
    displayMessage('⛔️ No number!');
    //when player wins
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = '🎉 Correct Number!';
    displayMessage('🎉 Correct Number!');
    document.querySelector('.number').textContent = secretNumber;
    //how to access html element
    //the value of the style should always be in a string
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } //the guess is different
  else if (guess !== secretNumber) {
    if (score > 0) {
      // document.querySelector('.message').textContent =
      //   guess > secretNumber ? '📈Too high!' : '📉Too low!';
      displayMessage(guess > secretNumber ? '📈Too high!' : '📉Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = '💥You lost the game!';
      displayMessage('💥You lost the game!');
    }
  }
  //DRY
  // //the the guess is too low
  // else if (guess < secretNumber) {
  //   if (score > 0) {
  //     document.querySelector('.message').textContent = '📉Too low!';
  //     score--;
  //   } else {
  //     document.querySelector('.message').textContent = '💥You lost the game!';
  //   }

  //   document.querySelector('.score').textContent = score;
  //   //when the guess is too high
  // } else if (guess > secretNumber) {
  //   if (score > 0) {
  //     document.querySelector('.message').textContent = '📈Too high!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '💥You lost the game!';
  //   }
  // }
});
//again button
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  highScore = 0;
  const secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.guess').value = '';
  // document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.highscore').textContent = highScore;
});
