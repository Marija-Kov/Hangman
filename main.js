let miss = 0;

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
        //field.innerHTML = chars[i];
        document.body.appendChild(field);
    }
}

function setKeys(keys) {
    for (let i = 0; i < keys.length; i++){
    let key = document.createElement('button');
    key.classList.add('key');
    key.innerHTML = keys[i];
    document.body.appendChild(key);
    key.addEventListener('click', () => {
        key.setAttribute('class', 'tried');
        key.setAttribute('disabled', 'true');
        let guess = document.querySelectorAll(`.${keys[i]} , .${keys[i].toUpperCase()}`); //makes sure uppercase letter class is included
         if ( guess.length === 0 ) { 
             miss++; 
             miss === 7 ? console.log (`you lost !`) : console.log (`${miss} missed !`)
        } else if ( guess.length != 0 ) {
            guess.forEach(g => {
                g.classList.contains(`${keys[i].toUpperCase()}`) ? 
                g.innerHTML = keys[i].toUpperCase() : g.innerHTML = keys[i]  //makes sure first letter is displayed in uppercase
                
            })

         }                       
    
    })
    
    }
}
/*
let guess = document.querySelectorAll('.XX');
guess.forEach(g => { 
  if (g.classList.contains(`${keys[i]}`) || g.classList.contains(`${keys[i].toUpperCase()}`)){ //makes sure uppercase letter class is included
      g.classList.contains(key.innerHTML) ? g.innerHTML = keys[i] : g.innerHTML = keys[i].toUpperCase(); //makes sure first letter is displayed in uppercase
      console.log(g.innerHTML + '--CORRECT')
    } else if (!g.classList.contains(`${keys[i]}`) && !g.classList.contains(`${keys[i].toUpperCase()}`)) {// needs another condition to isolate the case for incorrect!
      console.log(key.innerHTML + '--incorrect') // this should log only once
        
    } */