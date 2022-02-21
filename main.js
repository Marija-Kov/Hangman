

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
    let key = document.createElement('span');
    key.classList.add('key');
    key.innerHTML = keys[i];
    document.body.appendChild(key);
    key.addEventListener('click', () => {
        let miss = 0;
        key.setAttribute('class', 'tried');
        let guess = document.querySelectorAll('span');
        guess.forEach(g => { 
          if (g.classList == `${keys[i]}` || g.classList == `${keys[i].toUpperCase()}`){
              key.innerHTML != g.classList ? g.innerHTML = keys[i].toUpperCase() : g.innerHTML = keys[i];
              console.log(g.innerHTML + '--CORRECT')
            } else if (g.classList == key.innerHTML ){ // needs another condition to isolate the case for incorrect!
                console.log(g.innerHTML + '--incorrect')
            }
                       
          
           
    })
    
    })
    
    }
}