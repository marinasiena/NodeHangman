var wordBank = [
	"moist", "scrumptious", "delicious", "creamy", "phlegm", "curd", "fetus", "panties", "orifice", "mouthwatering", "secrete", "jowls"
	];

	var randomizeWord = function(wordSelect) {
		this.wordSelect = wordBank[Math.floor(Math.random()) * 12];
		console.log('the random word', wordSelect);
	};

module.exports = randomizeWord;