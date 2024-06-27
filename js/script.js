// 1- Creo il layout in css della chessboard dei quadratini
//2- Crep il ciclo For (stringa) let i=1; i<=100 ; i++ in questo modo avro 100 quadratini
//3- vado a recuperare chessboard con il const chessboard = document.queryselector(''.chessboard)



// recupero la scacchiera
const chessboard = document.querySelector('chessboard')
//Ciclo i numeri da 1 a 100
for (let i = 1; i <= 100; i++){


    //creo il quadratino
    const square = document.createElement('div');
    square.classList.add('square')

//se il valore il numero è pari mostro il testo e mostro laclasse multiplo 3
if (i % 2 == 0){
    square.inenerText = `$(i)\n pari`;
    square.classList.add('multiplo_3')

 }else{
    square.inenerText = `$(i)\n pari`;
    square.classList.add('multiplo_5')

}

chessboard.append(square);

}
