// VARIABLES================================================

var caddyShackCharacters = [
  "CARLSPACKLER",
  "DANNYNOONAN",
  "JUDGESMAILS",
  "ALCZERVIK",
  "TYWEBB",
  "THEGOPHER",
  "THEBISHOP"
];

var wins = 0;
var guessesLeft = 0;
var maxAttempts = 10;
var computerWord;
var guessedLetters = [];
var guessedWord = [];
var underScore = [];
var computerWord;
var gameEnd = false;

// GAME LOGIC================================================

window.onload = function() {
  
    // choose random word from characters array
    var computerWord = caddyShackCharacters[Math.floor(Math.random() * caddyShackCharacters.length)];
    console.log(computerWord);
    console.log(computerWord.length);

    // create underscores based off the computer's random word and push to dom
    for (var i = 0; i < computerWord.length; i++) {
    guessedWord.push("_");
    }
    console.log(guessedWord);

    // display correct dom elements
    document.getElementById("currentWord").innerText = guessedWord;
    document.getElementById("remainingGuesses").innerText = maxAttempts;
    document.getElementById("totalWins").innerText = wins;
    document.getElementById("guessedLetters").innerText = guessedLetters;

    // hide win/loss and press any key alerts
    document.getElementById("you-win").style.cssText = "display: none";
    document.getElementById("game-over").style.cssText = "display: none";
    document.getElementById("pressKeyTryAgain").style.cssText = "display: none";


    document.addEventListener("keypress", event => {
    var keyword = String.fromCharCode(event.keyCode);

    // If user guess is true
    if (computerWord.indexOf(keyword.toUpperCase()) > -1) {
      // Add to the rightWord array
      guessedLetters.push(keyword.toUpperCase());

      // Replace underscore with right letter
      guessedWord[computerWord.indexOf(keyword.toUpperCase())] = keyword.toUpperCase();
      document.getElementById("currentWord").innerHTML = guessedWord.join(" ");
      document.getElementById("currentWord").innerHTML = guessedWord;

      // Checks to see if user word matches guesses
      if (guessedWord.join("") === computerWord) {
        wins++;
        document.getElementById("totalWins").innerHTML = wins;
        alert("You win!");
      }
      } else {
        guessedLetters.push(keyword.toUpperCase());
        document.getElementById("guessedLetters").innerHTML = guessedLetters;
        maxAttempts--;
        document.getElementById("remainingGuesses").innerHTML = maxAttempts;
    }

    if (maxAttempts === 0) {
      alert("You lose!");
    }
  });
};





// ORIGINAL APPROACH================================================

// DEFINE FUNCTIONS FOR EACH GAME ACTION

// I could not get ANY dom manipulation to work until I discovered I needed this function!!!

// function for computer to choose random word from characters array and push correct number of underscores
// function gameStart () {
// choose random word from characters array
//   var computerWord =
//   caddyShackCharacters[
//     Math.floor(Math.random() * caddyShackCharacters.length)
//   ];
// console.log(computerWord);
// console.log(computerWord.length);

// // create underscores based off the computer's random word and push to dom
// for (var i = 0; i < computerWord.length; i++) {
//   guessedWord.push("_");
// }
// console.log(guessedWord);

// // display correct dom elements
// document.getElementById("currentWord").innerText = guessedWord;
// document.getElementById("remainingGuesses").innerText = maxAttempts;
// document.getElementById("totalWins").innerText = wins;
// document.getElementById("guessedLetters").innerText = guessedLetters;

// // hide win/loss and press any key alerts
// document.getElementById("you-win").style.cssText = "display: none";
// document.getElementById("game-over").style.cssText = "display: none";
// document.getElementById("pressKeyTryAgain").style.cssText = "display: none";

// } // end gameStart function

// // function for when a user makes guess and isolated to a-z. also store it in guessedLetters array
// function makeGuess () {
//     document.onkeydown = function(event) {
//         userGuess = event.keyCode >= 65 && event.keyCode <= 90;
//         console.log("You pressed " + userGuess);
//         guessedLetters.push(userGuess);
//         console.log(guessedLetters);
//     if (guessesLeft > 0) {
//         checkGuess();
//     }

// }
// } // end makeGuess function

// // function to check guess - if correct, push to replace correct underscore and not decrease attempts; if incorrect, push letter to already guessed field/array and decrease attempts by 1
// function checkGuess () {

// } // end checkGuess function

// // function to check for a win and increase wins count by 1
// function checkWin () {
// // check to see if there are no more underscores left. If true:
// if (guessedWord.indexOf("_") === -1) {
//     document.getElementById("you-win").style.cssText = "display: block";
//     document.getElementById("pressKeyTryAgain").style.cssText = "display: block";
//     wins++;
//     resetGame();
// }

// } // end checkWin function

// // function to check for a loss
// function checkLoss () {
//     if (guessesLeft === 0) {
//         document.getElementById("game-over").style.cssText = "display: block";
//         document.getElementById("pressKeyTryAgain").style.cssText = "display: block";
//         resetGame();
//     }
// } // end checkLoss function

// // function to reset game after both a win or a loss
//   function resetGame() {
//     // choose random word from characters array
//     var computerWord =
//       caddyShackCharacters[
//         Math.floor(Math.random() * caddyShackCharacters.length)
//       ];

//     // create underscores based off the computer's random word and push to dom
//     for (var i = 0; i < computerWord.length; i++) {
//       guessedWord.push("_");
//     }

//     // clear out arrays
//     var guessedLetters = [];
//     var guessedWord = [];
//     var underScore = [];
//   } // end resetGame function

// // I will then need to call these various functions in the correct order for the game to function properly. Most likely will need to call functions within functions

// gameStart();
// makeGuess();
// checkGuess();
// checkWin();
// checkLoss();
// resetGame();
