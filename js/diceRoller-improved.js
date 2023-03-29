// Obtener el elemento del DOM donde se mostrarán los dados
const diceContainer = document.getElementById("dice-container");
const sumContainer = document.getElementById("sum-container");
let isEmpty = true;
// Función para generar un número aleatorio entre 1 y 6

function rollDice(dice) {
  if (dice && dice.classList) {
    // Generar un número aleatorio del 1 al 6
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    // Agregar la clase correspondiente al elemento del dado
    dice.classList.remove("dice-1", "dice-2", "dice-3", "dice-4", "dice-5", "dice-6");
    dice.classList.add("dice-" + randomNumber);
    console.log("RandomNumber :");
  }
}

// Función para generar una posición aleatoria en el contenedor de dados
function getRandomPosition() {
  const containerRect = diceContainer.getBoundingClientRect();
  const diceSize = 50;
  const x = Math.floor(Math.random() * (containerRect.width - diceSize));
  const y = Math.floor(Math.random() * (containerRect.height - diceSize));
  return { x, y };
}

  
// Función para crear un elemento de dado con un valor dado
function createDiceElement(value) {
  const dice = document.createElement("div");
  dice.classList.add("dice");
  const diceValue = document.createElement("div");
  diceValue.textContent = value;
  dice.appendChild(diceValue); // Añadir el valor del elemento creado al dado
  const { x, y } = getRandomPosition();
  dice.style.left = `${x}px`;
  dice.style.top = `${y}px`;
  return dice;

}

function createDiceElements() {
  const diceElements = [];

  for (let i = 0; i < numDice; i++) {
    const dice = document.createElement("div");
    dice.classList.add("dice");
    dice.classList.add(`dice-${i}`);
    createDice(dice); // llamada a la función createDice(dice)
    diceElements.push(dice);
    diceContainer.appendChild(dice);
  }

  return diceElements;
}

function createDice(dice) {
  // Crear el elemento del dado
  const diceElement = document.createElement("div");
  diceElement.classList.add("dice");
  diceElement.setAttribute("data-value", dice); // Agregar el valor del dado como atributo
  // Agregar los puntos según el valor del dado
  for (let i = 0; i < dice; i++) {
    const dot = document.createElement("div");
    dot.classList.add("dot");
    diceElement.appendChild(dot);
  }
  return diceElement;
}

// Función para lanzar los 6 dados y mostrar los resultados

function rollAllDice() {
  diceContainer.innerHTML = "";  // Limpiar los dados antiguos
  // Lanzar los 6 dados y agregarlos al contenedor
  for (let i = 0; i < 6; i++) {
    const value = Math.floor(Math.random() * 6) + 1;
    const dice = createDiceElement(value);
    rollDice(dice); // Llamar a rollDice con el elemento creado
    // Establecer valores aleatorios para la posición y la rotación del dado
    dice.style.left = Math.random() * (window.innerWidth - 50) + "px";
    dice.style.top = Math.random() * (window.innerHeight - 50) + "px";
    dice.style.transform = "rotate(" + Math.floor(Math.random() * 360) + "deg)";
    diceContainer.appendChild(dice);
  }
}

// Función para volver a lanzar los 6 dados y mostrar los nuevos resultados
function reRollAllDice() {
  // Obtener los elementos de los dados del contenedor
  const diceElements = diceContainer.querySelectorAll(".dice");

  let sum = 0;
  diceElements.forEach((dice) => {
    const value = rollDice();
    dice.textContent = value;
    sum += parseInt(value);
  });

  const sumElement = document.createElement("div");
  sumElement.textContent = "Suma: " + sum;
  sumContainer.innerHTML = "";
  sumContainer.appendChild(sumElement);

  shuffleDice();
}
function shuffleDice() {
  const diceElements = diceContainer.querySelectorAll(".dice");
  diceElements.forEach((dice) => {
    const { x, y } = getRandomPosition();
    dice.style.left = `${x}px`;
    dice.style.top = `${y * rollDice() + 300}px`;
  });
}

// Llamar a la función rollAllDice para lanzar los dados por primera vez
rollAllDice();