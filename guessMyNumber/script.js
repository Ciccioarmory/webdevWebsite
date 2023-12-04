'use strict';

/* console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'Correct Number!';

console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;

document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;

console.log(document.querySelector('.guess').value);
 */

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highscore = 0;

console.log(secretNumber);

function displayMessage(message) {
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function () {
    // Getting the guess from the class guess
    const guess = Number(document.querySelector('.guess').value);

    console.log(guess);

    // if guess is null then
    if (!guess) {
        displayMessage('🚫 No Number !');
        return;
    }

    // If score is less or equal to 0
    if (score <= 0) {
        displayMessage('💥 You lost the game!');
        return;
    }

    // if the guess is equal to the secret number
    if (guess === secretNumber) {
        displayMessage('🎉 Correct Number!');

        document.querySelector('.number').textContent = secretNumber;

        document.querySelector('body').style.backgroundColor = '#60b347';

        document.querySelector('.number').style.width = '30rem';

        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }

        // If the guess is higher than the secret number
    } else {
        displayMessage(guess > secretNumber ? '📈 Too High!' : '📉 Too low!');
        score--;
        document.querySelector('.score').textContent = score;
    }
});

document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    console.log(secretNumber);
    displayMessage('Start guessing...');
    document.querySelector('.number').textContent = '?';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.guess').value = '';
    document.querySelector('.score').textContent = score;
});
