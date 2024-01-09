// CHIEDO UNA PAROLA ALL'UTENTE CON IL PROPMPT
const word = prompt('Dimmi una parola', 'anna').trim();
console.log(word, word.length);


//!VALIDAZIONE
if(!isNaN(word) || !word || word.length < 2 ){
    alert('Devi inserire una parola');
}
