import { hanger, head, torso, arm1, arm2, leg1, leg2, face } from '/body_parts.js';
import {animals} from './animals.js'


const bodyParts = [ '0', head, torso, arm1, arm2, leg1, leg2, face ];
const keys = [
      "q",
      "w",
      "e",
      "r",
      "t",
      "y",
      "u",
      "i",
      "o",
      "p",
      "a",
      "s",
      "d",
      "f",
      "g",
      "h",
      "j",
      "k",
      "l",
      "z",
      "x",
      "c",
      "v",
      "b",
      "n",
      "m",
];
let miss = 0;
let got = 0;
const guessedP = document.querySelector('.words-guessed');

let guessed = localStorage.getItem('guessed');
if(guessed){
    guessedP.innerHTML = `Guessed words count: ${guessed}`;
} else {
    guessedP.innerHTML = `Guessed words count: 0`;
}

const reset = document.querySelector('.reset');
reset.addEventListener('click', () => {
    if (guessed){
      localStorage.removeItem('guessed');
      guessedP.innerHTML = `Guessed words count: 0`; 
    } 
})

document.body.addEventListener("keyup", keyboardControl);

hanger();
setKeys();
getRandom();
           
function getRandom() {
        let animal = document.createElement('span');
        let random = Math.floor( Math.random() * animals.length);
        animal.innerHTML = `${animals[random]}`;
        let letters = animals[random].split('');
        empties(letters)
        
    }

function setKeys() {
 for (let i = 0; i < keys.length; i++){
      let keyEl = document.createElement('button');
      keyEl.classList.add('key');
      keyEl.innerHTML = keys[i];
      document.querySelector('#keys').appendChild(keyEl);
      keyEl.addEventListener('click', ()=>clicked(keyEl, i));
  }

}  

function keyboardControl(ev) {
 let char = ev.char || ev.charCode || ev.which;
 let s = String.fromCharCode(char);
 let keys = document.querySelectorAll('.key');
 for (let i = 0; i < keys.length; i++){
  if (keys[i].innerHTML === s || keys[i].innerHTML === s.toLowerCase()){
      keys[i].click();
  }
 }  
}

function clicked(key, i) {
 key.setAttribute('class', 'tried');
 key.setAttribute('disabled', 'true');
 let guess = document.querySelectorAll(`.${keys[i]} , .${keys[i].toUpperCase()}`);
  if ( guess.length === 0 ) { 
      miss++; 
      bodyParts[miss]();
      if (miss === bodyParts.length - 1) { setTimeout(() => { window.location.reload() }, 1000) }
 } else if ( guess.length != 0 ) {
     guess.forEach(g => {
         g.classList.contains(`${keys[i].toUpperCase()}`) ? 
         g.innerHTML = keys[i].toUpperCase() : g.innerHTML = keys[i]; 
     })
     got += guess.length; console.log(`got ${got} !`) // divide guess.length by itself if multiple-letter guess is to be counted as 1 got
     let word = document.querySelectorAll('span');
     let str = '';
     word.forEach( w => { str += w.innerHTML });
     if ( got === word.length ) { 
         guessed++;
         localStorage.setItem('guessed', guessed);
         guessedP.innerHTML = `Guessed words count: ${guessed}`;
         setTimeout(() => { window.location.reload() }, 1000);
     } 
   }                    
 }  

function empties(chars) {
    for (let i = 0; i < chars.length; i++){
        let field = document.createElement('span');
        field.classList.add(`${chars[i]}`);
        document.querySelector('#word').appendChild(field);
    }
}




