# Hangman
 A classic hangman game.

1. Pick a random word 
   -Find an API ex. animal names.

2. Display corresponding number of empty character spaces
   -create array out of the string
   -string.length * span ; each span with [class = corresponding letter]

3. Try letters clicking on alphabet table / keyup
   -for every letter in the alphabet: addEventListener(click, step4()), 
4. Mark letters tried
   -change style in some way
   -go through the array from step 2. for the next 2 steps
5. If word contains tried letter, fill the corresponding span with its id value (letter)
   
6. If word doesn't contain tried letter, add a bodyPart = [head, torso, arm1, arm2, leg1, leg2, eyes, mouth]
  -use canvas API

7. Game over when all body parts are drawn (i.e. after bodyPart.length number of misses)
  

8. Win when all empty char. spaces are filled