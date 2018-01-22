//pick a random word
var words = [
	"ford",
	"chevrolet",
	"mazda",
	"nissan",
	"audi",
	"buick",
	"toyota",
	"bentley",
	"jaguar",
	"lexus"
];
var chosenWord = words[Math.floor(Math.random()*words.length)];
console.log(chosenWord);
var answerArray = [];
var remainingLetters = chosenWord.length;
console.log(remainingLetters);
var guessesLeft = 10;
var letterGuessed = [];
var correctLetter;
var duplicateLetter = [];

for (var i = 0; i < chosenWord.length; i++) {
	answerArray[i] = "_";
	console.log(answerArray[i]);
}
window.addEventListener("load", function() {
	document.getElementById("wordGuess").innerHTML = answerArray.join(" ");
	
  	console.log('All assets are loaded');
});
window.addEventListener("load", function() {
	document.getElementById("guessesRemaining").innerHTML = guessesLeft;
});

//document.getElementById("wordGuess").innerHTML = answerArray.join(" ");

//while (remainingLetters > 0) {
document.onkeyup = function(event) {
	var userGuess = event.key;
	console.log(remainingLetters);
	//letterGuessed.push(userGuess.toUpperCase());
	//document.getElementById("lettersGuessed").innerHTML = letterGuessed.join(" ");
	
	if (guessesLeft > 0 && remainingLetters > 0) {
		for (var j = 0; j < chosenWord.length; j++) {
			if (chosenWord[j] === userGuess) {
				answerArray[j] = userGuess;
				correctLetter = userGuess;
				duplicateLetter.push(userGuess);
				//remainingLetters--;
				document.getElementById("wordGuess").innerHTML = answerArray.join(" ");
			}
			
		}

	}
		if (correctLetter !== userGuess) {
			letterGuessed.push(userGuess.toUpperCase());
			document.getElementById("lettersGuessed").innerHTML = letterGuessed.join(", ");
			guessesLeft--;
		}

	else if (remainingLetters === 0) {
		alert("Congratulation you won")
	}
	else if (guessesLeft === 0) {
		alert("You lost, good luck next time!");
	}
	//get a guess from the player
	//document.onkeyup = function(event) {

		//var userGuess = event.key;


		/*if the player wants to quit the game(guess === null) {
			//quit the game
			break;
		} */

		/*else if the guess is not a single letter(guess.length !== 1 ) {
			//tell the player to pick a single letter
			alert("Please enter a single letter.");
		}*/
		
}
//}

//congratuate the player on guessing the word
//alert(answerArray.join(" "));
//alert("Good job! The answer was " + word);




