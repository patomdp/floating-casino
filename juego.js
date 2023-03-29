// Crea un array con los números del 1 al 9.
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Crea un array vacío para las cartas.
var cartas = [];

const deckNumber = 9; // Dinamiza el numero de cartas a mezclar

// Crea una función para voltear una carta.
function voltearCarta(event) {
  // Obtiene la carta que se ha clickeado.
  var carta = event.target;
  
  // Obtiene el número de la carta.
  var numero = carta.dataset.numero;
  
  // Voltea la carta mostrando el número.
  carta.innerHTML = numero;
  
  // Quita el evento de clickeo para que no se pueda voltear de nuevo.
  carta.removeEventListener('click', voltearCarta);
}

// Crea una función para crear las cartas y agregarlas al contenedor.
function crearCartas() {
  // Mezcla los números para que no estén en orden.
  numeros = numeros.sort(function() { return Math.random() - 0.5 });
  
  // Crea las cartas.

}



const cards = document.querySelectorAll('.card');
const cardsValues = shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9]); 
// Función shuffle para mezclar los valores de las cartas

let firstCard = null;
let secondCard = null;


// cards.forEach(card => {
//     card.addEventListener('click', () => {
//         // if (!true) {}
//         console.log('Card clicked:');
//     })
// });