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
const userNumber = parseInt(prompt('Dimmi un numero da 1 a 5', 4));
console.log('numero utente', userNumber);
const userChoice = prompt('Scegli pari o dispari', 'pari').trim();
console.log('SCELTA', userChoice);
// FUNZIONE CHE GENERA UN NUMERO RANDOM DA 1 A 5
function getRandomNumber(){
   let randomNumber = Math.floor(Math.random() * 5) + 1;
   console.log('numero random', randomNumber);
   return randomNumber;
}
// SOMMO I DUE NUMERI
let sum = getRandomNumber() + userNumber;
console.log('SOMMA', sum);
let message;
// FUNZIONE CHE STABILISCE SE E' PARI O DISPARI
function isEvenOrOdd(number){
    if(number % 2 === 0){
        message = 'il numero è par';
    }else{
        message = 'il numero è dispari';
    }
    return message;
}
isEvenOrOdd(sum);
console.log('sono il messaggio ---', message);
