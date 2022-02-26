# Hangman
 A classic hangman game.

DONE* 1. Pick a random word 
   -Find an API ex. animal names, or create JSON to source words from

DONE 2. Display corresponding number of empty character spaces
   -create array out of the string
   -string.length * span ; each span with [class = corresponding letter]

DONE 3. Try letters clicking on alphabet table / keyup
   -for every letter in the alphabet: addEventListener(click, step4()), 
DONE 4. Mark letters tried
   -change style in some way
   -go through the array from step 2. for the next 2 steps
DONE 5. If word contains tried letter, fill the corresponding span with its id value (letter)
     5.a. keyup/keydown triggers a click on a corresponding letter
     JavaScript Keyboard Events: https://www.youtube.com/watch?v=5-koI06rmcA
   
DONE 6. 
  -on each miss, a different shape is drawn on canvas in a predefined order

DONE 7. Game over when all body parts are drawn (i.e. after bodyPart.length number of misses) 
  

DONE 8. Win when all empty char. spaces are filled

