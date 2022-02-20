let para = document.querySelector('p');
let input = document.querySelector('input');
let btn = document.querySelector('#btn');


btn.addEventListener('click', async () => {
try {
    let word = input.innerText;
    let URL = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    let request = new Request(URL);
    let response = await fetch(request);
    let data = await response.text();
    return console.log(data);

} catch(err){
    console.log(err)
    }
})

