var hideWord = require('./letter.js');

var checkWord = function(word, inputChoice) {
	this.word = word;
	this.lets = [];
	this.splitWord = word.split('');
	this.inputChoice = inputChoice;
	this.createBlanks = function() {
		for (var i = 0; i < this.word.length; i++) {
			var newLetter = new hideWord(this.word[i]);
			if (this.word[i].valueOf() !== " ") {
				this.lets.push.(newLetter.blank());
			} else {
				this.lets.push(newLetter.space());
			}
		}
	};
	this.check = function(guessedLetter) {
		var lower = guessedLetter.toLowerCase();
		var upper = guessedLetter.toUpperCase();
		for (var i = 0; i < this.lets.length; i++) {
			if (this.word[i].valuePf() === lower || this.word[i].valueOf() === upper) {
				this.lets[i] = this.word[i].valueOf();
			}
		}
		var 