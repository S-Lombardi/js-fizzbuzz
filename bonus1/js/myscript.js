"use strict";

// ciclo per stampare in console numeri da 1 a 100
for(let i=1 ; i<=100 ; i++) {
    //Se il numero è un multiplo di 3 e 5 stampa FizzBuzz
    if ( (i % 3 === 0) && (i % 5 === 0)) {
        console.log( " FizzBuzz") ; 
    }

    //Se il numero è un multiplo di 3 stampa Fizz
    else if( i % 3 === 0) {
        console.log( " Fizz");
    }

    //Se il numero è un multiplo di 5 stampa Buzz
    else if ( i % 5 ===0) {
     console.log( " Buzz");   
    } 
    
    //Altrimenti stampa gli altri numeri
    else {
        console.log (i);
    }
}