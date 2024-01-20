//#PALINDROMA
const formElement = document.querySelector('form');
const inputElement = document.querySelector('input');
console.log(formElement,inputElement)
const paragraph = document.getElementById('paragraph');


formElement.addEventListener('submit',(e) =>{
    e.preventDefault(formElement);
    const word = inputElement.value.trim();
    // !VALIDAZIONE
    if(!isNaN(word) || !word || word.length < 2 ){
        alert('Devi inserire una parola');
    }else{
        // DICHIARAZIONE FUNZIONE
        function reverseWord(word){
            // CICLO FOR PER SCOMPORRE LA PAROLA AL CONTRARIO
            let reversedWord = '';
            let message = '';
            for(let i = word.length -1; i >= 0; i--){
                reversedWord += (word[i]);
            }
            if(reversedWord === word){
                message = `La parola <strong>${word}</strong> al contratio è: <strong>${reversedWord}</strong> quindi è palindroma`;
            }else{
                message = `La parola <strong>${word}</strong> al contrario è: <strong>${reversedWord}</strong> quindi non è palindroma`;
            }
            // FACCIO SPARIRE IL FORM AL CLICK
            formElement.classList.add('d-none');
            return message;
        }
    }
    // INVOCAZIONE FUNZIONE
    paragraph.innerHTML = reverseWord(word);
})

//#PARI E DISPARI
    /**
     * Generates a random number between min and max(included or not)
     * @param {number} min Minimum number to be randomize
     * @param {number} max Maximum number to be randomize
     * @returns The randomized number
     */

//#FUNZIONI
// FUNZIONE CHE GENERA UN NUMERO RANDOM DA 1 A 5
// const getRandomNumber = (min,max)=>{
//    let randomNumber = Math.floor(Math.random() * max - min +min ) + min;
//    return randomNumber;
// }
// FUNZIONE CHE DETERMINA SE LA SOMMA è PARI O DISPARI
// const isEven = (num)=>{
//     return (num % 2 === 0);
// }

// FUNZIONE CHE TRASFORMA LA PRIMA LETTERE DI UNA STRINGA IN MAIUSCOLA
// const capitalizeFirstLetter = (stringa)=>
// stringa.charAt(0).toUpperCase() + stringa.slice(1);


//#RECUPERO GLI ELEMENTI    
// const formElement = document.querySelector('form');
// const inputElement = document.querySelector('input');
// const selectElement = document.querySelector('select');
// console.log(formElement,inputElement,selectElement)
// const messageElement = document.getElementById('message');
//CREO ADD EVENT LISTNER SUL FORM
// formElement.addEventListener('submit', (event)=>{
//     event.preventDefault();
    //RECUPERO VALORE DELL'INPUT
    // const inputValue = parseInt(inputElement.value);
    // console.log('valore input', inputValue)
    // if(inputValue < 1 || inputValue > 5 || isNaN(inputValue)){
    //     alert ('Devi inserire un numero compreso tra 1 e 5');
    // }else{
        //RECUPERO VALORE DELLA SELECT
//         const userChoice = selectElement.value;
//         console.log('valore select', userChoice)
        //INVOCO LA FUNZIONE CHE GENERA IL NUMERO RANDOM
//         const randomNumber = getRandomNumber(1,5);
//         console.log('numero random', randomNumber)
        // SOMMO IL NUMERO DELL'UTENTE E IL RANDOM NUMBER
//         const sum = randomNumber + inputValue;
//         console.log('sono la somma', sum)
        // dichiaro la funzione che determina se la somma è pari o dispari
//         const rightChoice = isEven(sum) ? 'pari' : 'dispari'
//         console.log(rightChoice);
//         console.log('sono da capitalizzare',userChoice);
//         const capitalizedUserChoice =  capitalizeFirstLetter(userChoice);
        //CREO UNA CONDIZIONE PER DICHIARARE CHI HA VINTO
//         if(userChoice === rightChoice){
//             messageElement.innerText = `Hai scelto ${capitalizedUserChoice} e il numero è ${sum}. Hai vinto!`;
//         }else{
//             messageElement.innerText = `Hai scelto ${capitalizedUserChoice} e il numero è ${sum}. Hai perso!`;
//         }
//         formElement.classList.add('d-none');
//     }
// });
