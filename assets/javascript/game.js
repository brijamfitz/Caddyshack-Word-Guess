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
var hasFinished = false;
var winSound = new Audio('./assets/sounds/win-sound.wav');
var loseSound = new Audio('./assets/sounds/lose-sound.wav');

// Start game function
function startGame() {
  // Randomly choose word to guess
  wordToGuess = words[Math.floor(Math.random() * words.length)];
  console.log(wordToGuess);
  // Split word to guess into individual letters
  lettersInWord = wordToGuess.split('');
  // Create correct number of blanks
  numBlanks = wordToGuess.length;

  // Empty arrays and counters
  blanksAndSuccesses = [];
  wrongGuesses = [];
  guessesLeft = 10;

  // Create underscores
  for (var i = 0; i < numBlanks; i++) {
    blanksAndSuccesses.push('_');
  }

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

  // Check if letter is in word and flip flag to true
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
}

// End game function
function endGame() {
  // Update HTML
  document.getElementById('guesses-left').innerHTML = guessesLeft;
  document.getElementById('word-to-guess').innerHTML = blanksAndSuccesses.join(' ').toUpperCase();
  document.getElementById('wrong-guesses').innerHTML = wrongGuesses.join(' ').toUpperCase();

  if (lettersInWord.toString() === blanksAndSuccesses.toString()) {
    wins++;
    document.getElementById('wins').innerHTML = wins;
    document.getElementById('you-win').style.display = 'block';
    document.getElementById('pressKeyTryAgain').style.display = 'block';
    winSound.play();
    hasFinished = true;
    // startGame();
  }
  else if (guessesLeft === 0) {
    document.getElementById('game-over').style.display = 'block';
    document.getElementById('pressKeyTryAgain').style.display = 'block';
    loseSound.play();
    hasFinished = true;
    // startGame();
  }
}

// MAIN
// =============================================================
startGame();
// On keypress event
document.onkeyup = function(event) {
  if (hasFinished) {
    startGame();
    hasFinished = false;
  } else {
    var userKey = String.fromCharCode(event.keyCode).toLowerCase();
    checkGuess(userKey);
    endGame();
  }
}
