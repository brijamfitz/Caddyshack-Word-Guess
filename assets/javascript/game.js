// GLOBAL 
// ============================================================

        // Variables
        var golfers = ['woods', 'nicklaus', 'palmer', 'mickelson'];
        var wins = 0;
        var guessesLeft = 20;
        var rightWord = [];
        var wrongWord = [];
        var underscore = [];

        // Computer chooses word randomly from array of words
        var chosenWord = golfers[Math.floor(Math.random() * golfers.length)];
        console.log(chosenWord);

        // Dom manipulation
        var domWrong = document.getElementsByClassName('wrongGuess')
        var domUnderscore = document.getElementsByClassName('underscore');
        var domWins = document.getElementsByClassName('wins');
        var domGuessleft = document.getElementsByClassName('guessesLeft');

// MAIN
// ============================================================

        // Create underscores to match number of letters in chosen word
        var createUnderscore = () => {
            for (var i = 0; i < chosenWord.length; i++) {
                underscore.push('_');
            }
        return underscore;
        }

        // User chooses a character A-Z on keyboard
        document.addEventListener('keypress', (event) => {
            var keyword = String.fromCharCode(event.keyCode);

        // Compare if user guess equals any character in chosen word
            
        // If user guess equals any character in chosen word
        if (chosenWord.indexOf(keyword) > -1) {
            
            // Add to rightWord array
            rightWord.push(keyword);

            // Replace underscore with correct character
            underscore[chosenWord.indexOf(keyword)] = keyword;
            domUnderscore[0].innerHTML = underscore.join(' ');
            domUnderscore[0].innerHTML = rightWord;

            // Decrease number of attempts by 1
            domGuessleft[0].innerHTML = guessesLeft;
            guessesLeft--;

                // If user guesses complete word before number of attempts = 0
                if(underscore.join('') == chosenWord) {
                alert("You win!");

                // Increase wins by 1
                domWins[0].innerHTML = wins;
                wins++;

                // Display image and alert/message
        
                // Restart game

                }
        }

        // If userkey !== chosen word
        else {
                // Decrease number of attempts by 1
                guessesLeft--;

                // Populate letters guessed field with character
                wrongWord.push(keyword);
                domWrong[0].innerHTML = wrongWord;

                // Block user from choosing same character again

            // If number of attempts = 0

                // Game ends with alert/message

                // Restart game
        }
        });

        domUnderscore[0].innerHTML = createUnderscore().join(' ');
        


// ISSUES 
// ============================================================ 
// 1. Need to isolate keys A-Z
// 2. Remove commas
// 3. Don't overwrite field titles post-dom manipulation
// 4. Increase wins
// 5. Decrease attempts - but not if repreat keystroke
// 6. Make all dom letters uppercase, but take both lower and uppercase key inputs
// 7. Restart game (alert after final dom manip)



