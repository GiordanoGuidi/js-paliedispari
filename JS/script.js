//#PALINDROMA
// CHIEDO UNA PAROLA ALL'UTENTE CON IL PROPMPT
const word = prompt('Dimmi una parola', 'marco').toLowerCase().trim();

//!VALIDAZIONE
if(!isNaN(word) || !word || word.length < 2 ){
    alert('Devi inserire una parola');
}else{
    //DICHIARAZIONE FUNZIONE
    function reverseWord(word){
        //CICLO FOR PER SCOMPORRE LA PAROLA AL CONTRARIO
        let reversedWord = '';
        let message = '';
        for(let i = word.length -1; i >= 0; i--){
            reversedWord += (word[i]);
        }
        if(reversedWord === word){
            message = `La parola ${word} al contratio è: ${reversedWord} quindi è palindroma`;
        }else{
            message = `La parola ${word} al contrario è: ${reversedWord} quindi non è palindroma`;
        }
        //STAMPO IN CONSOLE
        console.log(message);
        return message;
    }
}
//INVOCAZIONE FUNZIONE
reverseWord(word);

//#PARI E DISPARI

