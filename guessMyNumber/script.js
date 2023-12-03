"use strict";

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

document.querySelector(".check").addEventListener("click", function () {
	// Getting the guess from the class guess
	const guess = Number(document.querySelector(".guess").value);

	console.log(guess);

	// if guess is null then
	if (!guess) {
		document.querySelector(".message").textContent = "🚫 No Number !";

		// If score is less or equal to 0
	} else if (score <= 0) {
		document.querySelector(".message").textContent =
			"💥 You lost the game!";
	} else {
		// if the guess is equal to the secret number
		if (guess === secretNumber) {
			document.querySelector(".message").textContent =
				"🎉 Correct Number!";

			document.querySelector(".number").textContent = secretNumber;

			document.querySelector("body").style.backgroundColor = "#60b347";

			document.querySelector(".number").style.width = "30rem";

			if (score > highscore) {
				highscore = score;
				document.querySelector(".highscore").textContent = highscore;
			}

			// If the guess is higher than the secret number
		} else if (guess > secretNumber) {
			document.querySelector(".message").textContent = "📈 Too High!";
			score--;

			document.querySelector(".score").textContent = score;

			// If the guess is lower than the secret number
		} else if (guess < secretNumber) {
			document.querySelector(".message").textContent = "📉 Too low!";
			score--;
			document.querySelector(".score").textContent = score;
		}
	}
});

document.querySelector(".again").addEventListener("click", function () {
	score = 20;
	secretNumber = Math.trunc(Math.random() * 20) + 1;
	console.log(secretNumber);
	document.querySelector(".message").textContent = "Start guessing...";
	document.querySelector(".number").textContent = "?";
	document.querySelector("body").style.backgroundColor = "#222";
	document.querySelector(".number").style.width = "15rem";
	document.querySelector(".guess").value = "";
	document.querySelector(".score").textContent = score;
});

document.querySelector(".back").addEventListener("click", function () {
	window.location.href = "/";
});
