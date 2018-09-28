// VARIABLES AND GAME COUNTERS
// =============================================================
var words = [
  "carlspackler",
  "dannynoonan",
  "judgesmails",
  "alczervik",
  "tywebb",
  "thegopher",
  "thebishop"
];
var wordToGuess = '';
var lettersInWord = [];
var wrongGuesses = [];
var numBlanks = 0;
var blanksAndSuccesses = [];
var guessesLeft = 10;
var wins = 0;

// Start game function
function startGame() {
  // Randomly choose word to guess
  wordToGuess = words[Math.floor(Math.random() * words.length)];
  console.log(wordToGuess);
  // Split word to guess into individual letters
  lettersInWord = wordToGuess.split('');
  console.log(lettersInWord);
  // Create correct number of blanks
  numBlanks = wordToGuess.length;
  console.log(numBlanks);

  // Empty arrays and counters
  blanksAndSuccesses = [];
  wrongGuesses = [];
  guessesLeft = 10;

  // Create underscores
  for (var i = 0; i < numBlanks; i++) {
    blanksAndSuccesses.push('_');
  }
  console.log(blanksAndSuccesses);

  // Update HTML
  document.getElementById('you-win').style.display = 'none';
  document.getElementById('game-over').style.display = 'none';
  document.getElementById('pressKeyTryAgain').style.display = 'none'; 
  document.getElementById('word-to-guess').innerHTML = blanksAndSuccesses.join(' ');
  document.getElementById('guesses-left').innerHTML = guessesLeft;
  document.getElementById('wins').innerHTML = wins;
  document.getElementById('wrong-guesses').innerHTML = wrongGuesses.join(' ');
}

// Check guess function
function checkGuess(letter) {
  var isLetterInWord = false;

  // Check if letter is in word and flip flag
  for (var i = 0; i < numBlanks; i++) {
    if (wordToGuess[i] === letter) {
      isLetterInWord = true;
    }
  }

  if (isLetterInWord) {
    for (var j = 0; j < numBlanks; j++) {
      if (wordToGuess[j] === letter) {
        blanksAndSuccesses[j] = letter;
      }
    }
  } else {
    wrongGuesses.push(letter);
    guessesLeft--;
  }
  console.log(blanksAndSuccesses);
}

// End game function
function endGame() {
  // Update HTML
  document.getElementById('guesses-left').innerHTML = guessesLeft;
  document.getElementById('word-to-guess').innerHTML = blanksAndSuccesses.join(' ');
  document.getElementById('wrong-guesses').innerHTML = wrongGuesses.join(' ');

  if (lettersInWord.toString() === blanksAndSuccesses.toString()) {
    wins++;
    document.getElementById('wins').innerHTML = wins;
    alert('You win!');
    startGame();
  }
  else if (guessesLeft === 0) {
    alert('You lose!');
    startGame();
  }
}

// MAIN
// =============================================================
startGame();
// On keypress event
document.onkeyup = function(event) {
  var userKey = String.fromCharCode(event.keyCode).toLowerCase();
    console.log(userKey);
  checkGuess(userKey);
  endGame();
}












































// // GAME LOGIC================================================

// // I could not get ANY dom manipulation to work until I discovered I needed this function!!!
// window.onload = function() {
//   // ORIGINAL APPROACH================================================

//   // DEFINE FUNCTIONS FOR EACH GAME ACTION

//   // function for computer to choose random word from characters array and push correct number of underscores
//   function gameStart() {
//     // choose random word from characters array
//     computerWord =
//       caddyShackCharacters[
//         Math.floor(Math.random() * caddyShackCharacters.length)
//       ];
//     console.log(computerWord);
//     console.log(computerWord.length);

//     // create underscores based off the computer's random word and push to dom
//     for (var i = 0; i < computerWord.length; i++) {
//       guessedWord.push("_");
//     }
//     console.log(guessedWord);

//     // display correct dom elements
//     document.getElementById("currentWord").innerText = guessedWord;
//     document.getElementById("remainingGuesses").innerText = maxAttempts;
//     document.getElementById("totalWins").innerText = wins;
//     document.getElementById("guessedLetters").innerText = guessedLetters;

//     // hide win/loss and press any key alerts
//     document.getElementById("you-win").style.cssText = "display: none";
//     document.getElementById("game-over").style.cssText = "display: none";
//     document.getElementById("pressKeyTryAgain").style.cssText = "display: none";
//   } // end gameStart function

//   // function for when a user makes guess and isolated to a-z. also store it in guessedLetters array
//   function makeGuess() {
//     document.onkeyup = function(event) {
//       if (event.keyCode >= 65 && event.keyCode <= 90) {
//         userGuess = event.key;
//         console.log("You pressed " + userGuess);
//         guessedLetters.push(userGuess);
//         console.log(guessedLetters);
//         checkGuess();
//       } else {
//         console.log("user did not press a valid character");
//         return;
//       }
//     };
//   } // end makeGuess function

//   // function to check guess - if correct, push to replace correct underscore and not decrease attempts; if incorrect, push letter to already guessed field/array and decrease attempts by 1
//   function checkGuess() {
//     // if the userGuess matches letter in computerWord, replace the underscore in all instances of that letter appearing
//     for (var i = 0; i < computerWord.length; i++) {
//       if (computerWord[i].toLowerCase() === userGuess) {
//         console.log("found it");
//         // console.log(guessedLetters);
        
//         document.getElementById("currentWord").innerText = guessedLetters;
      
//       }
//       else {
//         // guessedLetters = [];
//         // guessedLetters.push(userGuess);
//         // document.getElementById("guessedLetters").innerText = userGuess.join(" ");
//         console.log("did not find it");
//         document.getElementById("guessedLetters").innerHTML = userGuess;
//       }
//     }

//   } // end checkGuess function

//   // function to check for a win and increase wins count by 1
//   function checkWin() {
//     // check to see if there are no more underscores left. If true:
//     if (guessedWord.indexOf("_") === -1) {
//       document.getElementById("you-win").style.cssText = "display: block";
//       document.getElementById("pressKeyTryAgain").style.cssText =
//         "display: block";
//       wins++;
//       resetGame();
//     }
//   } // end checkWin function

//   // function to check for a loss
//   function checkLoss() {
//     if (guessesLeft === 0) {
//       document.getElementById("game-over").style.cssText = "display: block";
//       document.getElementById("pressKeyTryAgain").style.cssText =
//         "display: block";
//       resetGame();
//     }
//   } // end checkLoss function

//   // function to reset game after both a win or a loss
//   function resetGame() {
//     // choose random word from characters array
//     var computerWord =
//       caddyShackCharacters[
//         Math.floor(Math.random() * caddyShackCharacters.length)
//       ];

//     // create underscores based off the computer's random word and push to dom
//     // for (var i = 0; i < computerWord.length; i++) {
//     //   guessedWord.push("_");
//     // }

//     // clear out arrays
//     var guessedLetters = [];
//     var guessedWord = [];
//     var underScore = [];
//   } // end resetGame function

//   // I will then need to call these various functions in the correct order for the game to function properly. Most likely will need to call functions within functions

//   gameStart();
//   makeGuess();
//   resetGame();
// };

//     // choose random word from characters array
//     var computerWord = caddyShackCharacters[Math.floor(Math.random() * caddyShackCharacters.length)];
//     console.log(computerWord);
//     console.log(computerWord.length);

//     // create underscores based off the computer's random word and push to dom
//     for (var i = 0; i < computerWord.length; i++) {
//     guessedWord.push("_");
//     }
//     console.log(guessedWord);

//     // display correct dom elements
//     document.getElementById("currentWord").innerText = guessedWord;
//     document.getElementById("remainingGuesses").innerText = maxAttempts;
//     document.getElementById("totalWins").innerText = wins;
//     document.getElementById("guessedLetters").innerText = guessedLetters;

//     // hide win/loss and press any key alerts
//     document.getElementById("you-win").style.cssText = "display: none";
//     document.getElementById("game-over").style.cssText = "display: none";
//     document.getElementById("pressKeyTryAgain").style.cssText = "display: none";

//     document.addEventListener("keypress", event => {
//     var keyword = String.fromCharCode(event.keyCode);

//     // If user guess is true
//     if (computerWord.indexOf(keyword.toUpperCase()) > -1) {
//       // Add to the rightWord array
//       guessedLetters.push(keyword.toUpperCase());

//       // Replace underscore with right letter
//       guessedWord[computerWord.indexOf(keyword.toUpperCase())] = keyword.toUpperCase();
//       document.getElementById("currentWord").innerHTML = guessedWord.join(" ");
//       document.getElementById("currentWord").innerHTML = guessedWord;

//       // Checks to see if user word matches guesses
//       if (guessedWord.join("") === computerWord) {
//         wins++;
//         document.getElementById("totalWins").innerHTML = wins;
//         alert("You win!");
//       }
//       } else {
//         guessedLetters.push(keyword.toUpperCase());
//         document.getElementById("guessedLetters").innerHTML = guessedLetters;
//         maxAttempts--;
//         document.getElementById("remainingGuesses").innerHTML = maxAttempts;
//     }

//     if (maxAttempts === 0) {
//       alert("You lose!");
//     }
//   });
// };
