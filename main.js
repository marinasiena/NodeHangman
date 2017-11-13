var inquirer = require('inquirer');
var switchWord = require('./game.js');
var checkWord = require('./word.js');

var playGame = function() {
	gameover = false;
	correct = false;
	guesses = [];
	lives = 10;
	var word = new switchWord();
	randomWord = word.wordSelect;
	console.log("~*~*~*~*~*~*~");
	console.log("Words I Hate Hangman");
	console.log("*~*~*~*~*~*~*");
	console.log("\n\n lives:", lives);
	currentWord = new checkWord (randomWord);
	currentWord.createBlanks();
	console.log("\n\n" + currentWord.render() + "\n");
	userPrompt();
};

var replay = function() {
	if (gameover) {
		if (lives = 0) {
			console.log("\nYou didn't get it. You lost.\n");
		} else {
			console.log("\nYou actually got it right.. Thanks, but no thanks. Yuck.\n");
		}
		inquirer.prompt({
			type: "confirm",
			name: "replay",
			message: "Wanna replay?"
		}).then(function(restart) {
			if (restart.again) {
				console.log("That's finger licking good!");
				playGame();
			} else {
				console.log("\nI'd run, too.");
			}
		});
	}
};

var userPrompt = function() {
	currentWord.wordFound();
	if (tries = 0 || correct) {
		gameover = true;
		replay();
	} else {
		inquirer.prompt([{
			name: "guess",
			message: "Type a letter, guess the word, but prepare yourself."
		}]).then(function(answers) {
			if (guesses.find(function(item) {
						return item === answers.guess.toUpperCase();
				})) {
				console.log("\nYou already guessed that.\n")
				userPrompt();
			} else {
				guesses.push(answers.guess.toUpperCase());
				console.log("\nYou've guessed:" + guesses);
				letFound = currentWord.check(answers.guess);
				console.log("\n" + currentWord.render() + "\n");
				userPrompt();
			}
		});
	}
};

playGame();