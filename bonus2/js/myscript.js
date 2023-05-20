"use strict";


// ciclo per stampare numeri da 1 a 100
for(let i=1 ; i<=100 ; i++) {

    //creo elemento div 
    let cella = document.createElement("div");
    cella.classList.add("box");

    //Se il numero è un multiplo di 3 e 5 stampa FizzBuzz
    if ( (i % 3 === 0) && (i % 5 === 0)) {
        console.log( " FizzBuzz"); 
        cella.innerHTML =" FizzBuzz";
        cella.classList.add("bg-1");
    }

    //Se il numero è un multiplo di 3 stampa Fizz
    else if( i % 3 === 0) {
        console.log( " Fizz");
        cella.innerHTML = " Fizz";
        cella.classList.add("bg-2");
    }

    //Se il numero è un multiplo di 5 stampa Buzz
    else if ( i % 5 ===0) {
        console.log( " Buzz");
        cella.innerHTML =" Buzz";
        cella.classList.add("bg-3");
    } 
    
    //Altrimenti stampa gli altri numeri
    else {
        console.log (i);
        cella.innerHTML = i ;
        cella.classList.add("bg-4");
    }

    //visualizzo a video nel container i numeri e le stringhe
    document.getElementById("container");
    container.append(cella);

    document.getElementById("row");
    row.append(cella);
   
}