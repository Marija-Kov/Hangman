let miss = 0;
let got = 0;

import { hanger, head, torso, arm1, arm2, leg1, leg2, face } from '/body_parts.js';

hanger();

let bodyParts = [ '0', head, torso, arm1, arm2, leg1, leg2, face ];

let animals = fetch ('animals.json')
              .then(response => response.json())
              .then(data => getRandom(data))
              .catch(err => console.log(err.message));

let qwerty = fetch ('qwerty.json')
             .then(response => response.json())
             .then(data => setKeys(data))
             .catch(err => console.log(err.message));
             
function getRandom(array) {
        let animal = document.createElement('span');
        let random = Math.floor( Math.random() * array.length);
        animal.innerHTML = `${array[random]}`;
        let letters = array[random].split('');
        console.log(letters);
        empties(letters)
        
    }

function empties(chars) {
    for (let i = 0; i < chars.length; i++){
        let field = document.createElement('span');
        field.classList.add(`${chars[i]}`);
        document.querySelector('#word').appendChild(field);
    }
}


function setKeys(keys) {
    for (let i = 0; i < keys.length; i++){
    let key = document.createElement('button');
    key.classList.add('key');
    key.innerHTML = keys[i];
    document.querySelector('#keys').appendChild(key);
    key.addEventListener('click', () => {
        key.setAttribute('class', 'tried');
        key.setAttribute('disabled', 'true');
        let guess = document.querySelectorAll(`.${keys[i]} , .${keys[i].toUpperCase()}`);
        //   ^   makes sure uppercase letter class is included
         if ( guess.length === 0 ) { 
             miss++; 
             bodyParts[miss]();
             miss === 7 ? console.log (`you lost !`) : console.log (`${miss} missed !`);
             if (miss ===7) { setTimeout(() => { window.location.reload() }, 1000) }
        } else if ( guess.length != 0 ) {
            guess.forEach(g => {
                g.classList.contains(`${keys[i].toUpperCase()}`) ? 
                g.innerHTML = keys[i].toUpperCase() : g.innerHTML = keys[i]; 
                //  ^  makes sure first letter is displayed in uppercase 
            })
            got += guess.length; console.log(`got ${got} !`) // divide guess.length by itself if multiple-letter guess is to be counted as 1 got
            let word = document.querySelectorAll('span');
            let str = '';
            word.forEach( w => { str += w.innerHTML });
            if ( got === word.length ) { 
                console.log(`yes, you guessed it: ${str} !`)
                setTimeout(() => { window.location.reload() }, 500);
            } 
         }  
                            
    
    })
    
    }
}
