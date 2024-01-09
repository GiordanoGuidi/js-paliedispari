// CHIEDO UNA PAROLA ALL'UTENTE CON IL PROPMPT
const word = prompt('Dimmi una parola', 'marco').trim();
console.log(word, word.length);


//!VALIDAZIONE
if(!isNaN(word) || !word || word.length < 2 ){
    alert('Devi inserire una parola');
}else{
    //DICHIARAZIONE FUNZIONE
    function reverseWord(word){
        //CICLO FOR PER SCOMPORRE LA PAROLA AL CONTRARIO
        for(let i = word.length -1; i >= 0; i--){
            console.log(word[i])
        }

        return message = `La parola .. è palindroma`
    }
}

reverseWord(word);
