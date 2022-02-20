

let animals = fetch ('animals.json')
              .then(response => response.json())
              .then(data => getRandom(data))
              .catch(err => console.log(err.message));
             
function getRandom(array) {
        let animal = document.createElement('span');
        let random = Math.floor( Math.random() * array.length);
        animal.innerHTML = `${array[random]}`;
        let letters = array[random].split('');
        console.log(letters, letters.length);

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