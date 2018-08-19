# Word-Guess-Game
Homework #3

Caddyshack Hangman!

Below is the array of the guessable words for easy reference (they are also console logged on each page refresh):
--CARLSPACKLER
--DANNYNOONAN
--JUDGESMAILS
--ALCZERVIK
--TYWEBB
--THEGOPHER
--THEBISHOP

On this assignment, the javascript was really challenging for me, and this submission is nowhere near what I wanted. But after going through several iterations of code, I was most comfortable submitting this version.

At first, I began pseudocoding the logic that I found to make the most sense. At a high level, what I had originally wanted to do was the following:
--Create all my necessary variables
--Define a separate function for each action that needed to take place in the game (gameStart, makeGuess, checkGuess, checkWin, checkLoss, resetGame)
--Then call each function in the proper order

I've left this original version of code (commented out) at the bottom of my current javascript file so that you can see what my approach was. I felt I had defined most of the functions correctly, but there were a few critical functions that I could not get to work.

As the eleventh hour approach, I mostly abandoned the "function-centric" design, and finally got my javascript code to a more functional state.

But here are the main issues that remain (there are many, but these are the ones that come to mind right now):
--Repeat characters in the hangman word are only pushed in the first instance, so the only word you can complete is "ALCZERVIK" because all the characters are unique.
--I did not manage to reset the game when you win or lose
--Commas remain in both the hangman word and the guessed letters field
--User guess keys are not isolated to A-Z

For what it's worth, I think I nailed the HTML and CSS portion!

I hope to be able to revisit this game as my skills improve, and get it working flawlessly.

