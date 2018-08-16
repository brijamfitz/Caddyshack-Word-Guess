// GOLFER'S HANGMAN

// GLOBAL VARIABLES
// ============================================================

// Word list
var golfers = [
  "CARLSPACKLER",
  "DANNYNOONAN",
  "JUDGESMAILS",
  "ALCZERVIK",
  "TYWEBB",
  "THEBISHOP",
];
// Maximum number of incorrect guesses
var maxTries = 10;
// Incorrect guesses remaining
var guessesLeft = 0;
// Numer of wins accrued
var wins = 0;
// Index of current word in array
var chosenWordIndex;
// Stores the letters the user has already guessed
var guessedLetters = [];
// Stores the correct letters of the word we are building
var guessingWord = [];
// Used to tell if the game has finished
var gameEnd = false;

// Game sounds
var winSound = new Audio("./assets/sounds/win-sound.wav");
var loseSound = new Audio("./assets/sounds/lose-sound.wav");


// GAME FUNCTIONS
// ============================================================

// Reset game functionality
function resetGame() {
  guessesLeft = maxTries;

  //Use Math.floor to select random word from 'golfers' array
  chosenWordIndex = Math.floor(Math.random() * golfers.length);

  // Clear out arrays
  guessedLetters = [];
  guessingWord = [];

  // Build/rebuild the chosen word and clear it out
  for (var i = 0; i < golfers[chosenWordIndex].length; i++) {
    guessingWord.push("_");
  }

  // Hide game over and win images/text
  document.getElementById("pressKeyTryAgain").style.cssText = "display: none";
  document.getElementById("game-over").style.cssText = "display: none";
  document.getElementById("you-win").style.cssText = "display: none";

  // Update the display
  updateDisplay();
};


// Define the update display function to reset the HTML page
function updateDisplay() {
  document.getElementById("totalWins").innerText = wins;

  var guessingWordText = "";
  for (var i = 0; i < guessingWord.length; i++) {
    guessingWordText += guessingWord[i];
  }

  // Display the correct letters we've guessed
  document.getElementById("currentWord").innerText = guessingWordText;
  document.getElementById("remainingGuesses").innerText = guessesLeft;
  document.getElementById("guessedLetters").innerText = guessedLetters;
};


// Creates function that takes the correct letter and finds all instances of its appearance in our chosen word string and replaces them
function checkGuess(letter) {
  // Creates array to store the positions of the letters in our chosen word
  var positions = [];

  // Loop through our chosen word and look for all cases of guessed letter, and store in array
  for (var i = 0; i < golfers[chosenWordIndex].length; i++) {
    if (golfers[chosenWordIndex][i] === letter) {
      positions.push(i);
    }
  }

  // If there are no matching letters, decrease guesses left by one
  if (positions.length <= 0) {
    guessesLeft--;
  } else {
    // Loop through all letters and replace the underscore with the correct letter
    for (var i = 0; i < positions.length; i++) {
      guessingWord[positions[i]] = letter;
    }
  }
};


// Check for a win!
function checkWin() {
  if (guessingWord.indexOf("_") === -1) {
    document.getElementById("you-win").style.cssText = "display: block";
    document.getElementById("pressKeyTryAgain").style.cssText = "display: block";
    wins++;
    winSound.play();
    gameEnd = true;
  }
};


// Check for a loss
function checkLoss() {
  if (guessesLeft <= 0) {
    document.getElementById("game-over").style.cssText = "display: block";
    document.getElementById("pressKeyTryAgain").style.cssText =
      "display: block";
      loseSound.play();
      gameEnd = true;
  }
};


// Define makeGuess functionality
function makeGuess(letter) {
  if (guessesLeft > 0) {
    // Make sure the letter wasn't already used
    if (guessedLetters.indexOf(letter) === -1) {
      guessedLetters.push(letter);
      checkGuess(letter);
    }
  }
};


// Event listener - captures user keypress between a-z and converts to uppercase
document.onkeydown = function(event) {
  // If we finish a game, drop a keystroke and reset
  if (gameEnd) {
    resetGame();
    gameEnd = false;
  } else {
    // Check and isolate that keys a-z were pressed
    if (event.keyCode >= 65 && event.keyCode <= 90) {
      makeGuess(event.key.toUpperCase());
      updateDisplay();
      checkWin();
      checkLoss();
    }
  }
};

// ISSUES
// ============================================================
// 1. Need to isolate keys A-Z
// 2. Remove commas
// 3. Don't overwrite field titles post-dom manipulation
// 4. Increase wins
// 5. Decrease attempts - but not if repreat keystroke
// 6. Make all dom letters uppercase, but take both lower and uppercase key inputs
// 7. Restart game (alert after final dom manip)
// 8. Place correct letters in correct order

// ADDITIONAL NOTES
// ============================================================
// Use use document.eventKey to establish keypress of only keys A-Z
// Use document.getElementsbyClass to manipulate dom instead of inner.html (this will blow away what is there)
// Use a function/method that we've covered to create underscores when the page loads
// Add CSS styling and golfer images
// Reference class activities!!!
