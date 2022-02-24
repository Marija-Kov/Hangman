let miss = 0;
let got = 0;
let canvas = document.querySelector('#canvas');
let ctx = canvas.getContext('2d');


ctx.strokeStyle = 'grey';
ctx.lineWidth = 3;

let hanger = () => {
 ctx.moveTo(30, 295);
 ctx.lineTo(80, 295);
 ctx.moveTo(55, 295);
 ctx.lineTo(55, 20);
 ctx.lineTo(150, 20);
 ctx.lineTo(150, 75);
 ctx.moveTo(55, 80);
 ctx.lineTo(100 , 20)
 ctx.stroke();
 
}

hanger();


let head = () => {
    ctx.arc(150, 100, 25, 0, 2 * Math.PI); 
    ctx.stroke();
}

let torso = () => {
    ctx.moveTo(150, 125);
    ctx.lineTo(150, 190);
    ctx.stroke();
}

let arm1 = () => {
    ctx.moveTo(150, 140);
    ctx.lineTo(180, 150);
    ctx.stroke(); 
}

let arm2 = () => {
    ctx.moveTo(150, 140);
    ctx.lineTo(120, 150);
    ctx.stroke(); 
}

let leg1 = () => {
    ctx.moveTo(150, 190);
    ctx.lineTo(180, 220);
    ctx.stroke(); 
}

let leg2 = () => {
    ctx.moveTo(150, 190);
    ctx.lineTo(120, 220);
    ctx.stroke(); 
}

let face = () => {
    ctx.moveTo(140, 95);
    ctx.lineTo(150, 105);
    ctx.moveTo(150, 95);
    ctx.lineTo(140, 105);
    
    ctx.moveTo(155, 95);
    ctx.lineTo(165, 105);
    ctx.moveTo(165, 95);
    ctx.lineTo(155, 105);
    
    ctx.moveTo(145, 115);
    ctx.quadraticCurveTo(155, 105, 165, 115);
    ctx.stroke();
}



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
