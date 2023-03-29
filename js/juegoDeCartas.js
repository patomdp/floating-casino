// Crear un array con los números del 1 al 9
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Crear un contenedor para las cartas
// const contenedor = document.createElement('div');
// contenedor.classList.add('contenedor');
// contenedor.classList.add('contenedor');
// if(document.body != null){
//     // document.body.appendChild(element);
//     console.log('Here');
//     document.body.appendChild(contenedor);
// }

// Crear una carta por cada número y agregarla al contenedor
// numeros.forEach(numero => {
//   const carta = document.createElement('div');
//   carta.classList.add('carta');
//   carta.dataset.numero = numero;
//   contenedor.appendChild(carta);
// });

// Obtener todas las cartas
const cartas = document.querySelectorAll('.carta');

// Agregar un evento clic a cada carta
cartas.forEach(carta => {
  carta.addEventListener('click', () => {
    // Obtener el número de la carta
    const numero = carta.dataset.numero;

    // Voltear la carta y mostrar el número
    carta.classList.toggle('volteada');
    carta.textContent = numero;
  });
});


// const cardsValues = shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9]); 
console.log('Cartas mezcladas: ', shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9]));