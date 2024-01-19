//#PALINDROMA
// CHIEDO UNA PAROLA ALL'UTENTE CON IL PROPMPT
// const word = prompt('Dimmi una parola', 'marco').toLowerCase().trim();

//!VALIDAZIONE
// if(!isNaN(word) || !word || word.length < 2 ){
//     alert('Devi inserire una parola');
// }else{
    //DICHIARAZIONE FUNZIONE
    // function reverseWord(word){
        //CICLO FOR PER SCOMPORRE LA PAROLA AL CONTRARIO
        // let reversedWord = '';
        // let message = '';
        // for(let i = word.length -1; i >= 0; i--){
        //     reversedWord += (word[i]);
        // }
        // if(reversedWord === word){
        //     message = `La parola ${word} al contratio è: ${reversedWord} quindi è palindroma`;
        // }else{
        //     message = `La parola ${word} al contrario è: ${reversedWord} quindi non è palindroma`;
        // }
        //STAMPO IN CONSOLE
//         console.log(message);
//         return message;
//     }
// }
//INVOCAZIONE FUNZIONE
// reverseWord(word);

//#PARI E DISPARI
// CHIEDO DI SCEGLIERE UN  NUMERO DA 1 A 5 E SE PARI O DISPARI
// const userNumber = parseInt(prompt('Dimmi un numero da 1 a 5', 4));
console.log('numero utente', userNumber);

//! VALIDAZIONE
if(isNaN(userNumber)|| userNumber < 1|| userNumber > 5){
    alert('Attenzione devi inserire un numero maggiore di 1 e minore di 5');
}else{
    const userChoice = prompt('Scegli pari o dispari', 'pari').trim();
    console.log('SCELTA', userChoice);

    //! VALIDAZIONE
    if(userChoice !== 'pari' && userChoice !== 'dispari'){
        alert('Attenzione devi scegliere o pari o dispari');
    }else{
        /**
         * Generates a random number between min and max(included or not)
         * @param {number} min Minimum number to be randomize
         * @param {number} max Maximum number to be randomize
         * @param {boolean} isMaxIncluded Whether the maximum should be included
         * @returns The randomized number
         */
        // FUNZIONE CHE GENERA UN NUMERO RANDOM DA 1 A 5
        function getRandomNumber(min,max,isMaxIncluded){
           let randomNumber = Math.floor(Math.random() * max - min ) + min;
           console.log('numero random', randomNumber);
           return randomNumber;
        }
        // SOMMO I DUE NUMERI
        let sum = getRandomNumber(1,5,true) + userNumber;
        console.log('SOMMA', sum);
        let message;
        // FUNZIONE CHE STABILISCE SE E' PARI O DISPARI
        function isEvenOrOdd(number){
            if(number % 2 === 0 && userChoice === 'pari'){
                message = 'il numero è pari ha vinto l\'utente';
            }else if(number % 2 !== 0 && userChoice === 'dispari'){
                message = 'il numero è dispari a vinto l\'utente';
            }else if(number % 2 === 0 && userChoice === 'dispari'){
                message = 'il numero è pari ha vinto il computer'
            }else if(number % 2 !== 0 && userChoice === 'pari'){
                message = 'Il numero è dispari ha vinto il computer';
            }
            return message;
        }
        isEvenOrOdd(sum);
        console.log('sono il messaggio ---', message);
    }
    }
