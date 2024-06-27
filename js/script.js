// 1- Creo il layout in css della chessboard dei quadratini
//2- Crep il ciclo For (stringa) let i=1; i<=100 ; i++ in questo modo avro 100 quadratini
//3- vado a recuperare chessboard con il const chessboard = document.queryselector(''.chessboard)









// DOPPIO CILO FOR CON SCHACCHIERA CHESS

//------------------------------------------------------------------------------------------------------------->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// // recupero la scacchiera
// const chessboard = document.querySelector('.chessboard');
// //dichiaro variabile che mi serve per mostrare i numeri da 1 a 100
// let num = 1;

// //Il pri,o for è per le righe 
// for (let i = 1; i <= 10; i++) {
//     //Il secondo for è per le colonne 
//     for (let j = 1; j <= 10; j++) {

//         //creo il quadrato e gli applico la classe square e controllo
//         const square = document.createElement('div');
//         square.classList.add('square');
//         //se il valore del numero contattore rappresemtamte la riga (i) è pari mostro il testo e mostro la classe è pari casella mult_3
//         if (i % 2 == 0) {
//             square.innerText = `${num}\n pari`;
//             // casella 
//             if (j % 2 == 0) {
//                 square.classList.add('multiplo_3');
//             }
//             else {
//                 square.classList.add('multiplo_5');
//             }

//         }

//         //Altrimenti se la riga è dispari (stesso discorso con le etichette invertite)
//         else {
//             square.innerText = `${num}\n dipari`;
//             if (j % 2 == 0) {
//                 square.classList.add('multiplo_5');
//             }


//             else {
//                 square.classList.add('multiplo_3');

//             }

//         }

//         num++;

//         chessboard.append(square);

//     }
// }





// ESERCIZIO 27-06 FIZZ BUZZ

// recupero la scacchiera
const chessboard = document.querySelector('.chessboard');
 

//Il pri,o for è per le righe 
for (let i = 1; i <= 100; i++)  {

         const square = document.createElement('div');
        square.classList.add('square');
        
    

    if (i % 3 === 0 && i % 5 === 0) {
            square.innerText = `FizzBuzz `;
            square.classList.add('mu-3-red');
    } 
    else if (i % 3 === 0) {

        square.innerText = `Fizz `;
        square.classList.add('mu-3-red');

    }
    else if (i % 5 === 0) {

        square.innerText = `Buzz `;
        square.classList.add('mu-3-red');

    }
    else {
        square.innerText = `${i}\n  `;

    }
        
  
    
        chessboard.append(square);

  }   
