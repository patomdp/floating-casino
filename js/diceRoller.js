// Obtener el elemento del DOM donde se mostrarán los dados
const diceContainer = document.getElementById("dice-container");
const sumContainer = document.getElementById("sum-container");
let isEmpty = true;
// Función para generar un número aleatorio entre 1 y 6

function rollDice(dice) {
    // Generar un número aleatorio del 1 al 6
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    // Agregar la clase correspondiente al elemento del dado
    dice.classList.remove("dice-1", "dice-2", "dice-3", "dice-4", "dice-5", "dice-6");
    dice.classList.add("dice-" + randomNumber);
    console.log("RandomNumber :")
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
    dice.textContent = value;
    const { x, y } = getRandomPosition();
     dice.style.left = `${x}px`;
    dice.style.top = `${y}px`;
    //return dice;
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
  
    // Agregar el valor del dado como atributo
    diceElement.setAttribute("data-value", dice);
  
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
    // Limpiar los dados antiguos
    diceContainer.innerHTML = "";
    //sumContainer.innerHTML = "";

    // Lanzar los 6 dados y agregarlos al contenedor
    for (let i = 0; i < 6; i++) {
        const value = rollDice();
        const dice = createDiceElement(value);
        // Establecer valores aleatorios para la posición y la rotación del dado

        //dice.style.top = Math.floor(Math.random() * (window.innerHeight - dice.offsetHeight)) + "px";
        //dice.style.left = Math.floor(Math.random() * (window.innerWidth - dice.offsetWidth)) + "px";
        /*
        diceContainer.appendChild(dice);
        */
       dice.style.left = Math.random() * (window.innerWidth - 50) + "px";
       dice.style.top = Math.random() * (window.innerHeight - 50) + "px";
       dice.style.transform = "rotate(" + Math.floor(Math.random() * 360) + "deg)";        
        diceContainer.appendChild(dice);
    }

    // Distribuir y rotar los dados aleatoriamente
    //distributeDice();

    // Sumar los valores de los dados y mostrar el resultado
    //sumDiceResults();
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
    // Lanzar los 6 dados nuevamente y actualizar los valores de los elementos de dado
    // diceElements.forEach((dice) => {
    //     const value = rollDice();
    //     dice.textContent = value;
    // });

    // Sumar los valores de los dados y mostrar el resultado
    //sumDiceResults();



    
}
function shuffleDice() {
    const diceElements = diceContainer.querySelectorAll(".dice");
    diceElements.forEach((dice) => {
        const { x, y } = getRandomPosition();
        dice.style.left = `${x}px`;
        dice.style.top = `${y*rollDice()+300}px`;
      });
    // diceElements.forEach((dice) => {
    //   dice.style.left = Math.random() * (window.innerWidth - 50) + "px";
    //   dice.style.top = Math.random() * (window.innerHeight - 50) + "px";
    // });
  }


// Función para sumar los valores de los dados y mostrar el resultado
// function sumDiceResults() {
//     // Obtener los elementos de los dados del contenedor
//     const diceElements = diceContainer.querySelectorAll(".dice");

//     // Sumar los valores de los dados
//     let sum = 0;
//     diceElements.forEach((dice) => {
//         sum += parseInt(dice.textContent);
//     });

//     // Crear un nuevo elemento en el DOM que muestre el resultado de la suma
//     const sumElement = document.createElement("div");
//     sumElement.textContent = "Suma: " + sum;
//     sumContainer.appendChild(sumElement);
//     console.log("Works");
// }


// Función para distribuir y rotar los dados aleatoriamente
// function distributeDice() {
//     const diceElements = diceContainer.querySelectorAll(".dice");
//     const containerWidth = diceContainer.clientWidth;
//     const containerHeight = diceContainer.clientHeight;

//     diceElements.forEach((dice) => {
//         const diceWidth = dice.offsetWidth;
//         const diceHeight = dice.offsetHeight;

//         // Calcular posiciones y ángulos aleatorios
//         const posX = Math.floor(Math.random() * (containerWidth - diceWidth));
//         const posY = Math.floor(Math.random() * (containerHeight - diceHeight));
//         const angle = Math.floor(Math.random() * 360);

//         // Aplicar transformaciones CSS para distribuir y rotar el dado
//         dice.style.position = "absolute";
//         dice.style.left = `${posX}px`;
//         dice.style.top = `${posY}px`;
//         dice.style.transform = `rotate(${angle}deg)`;
//     });
// }

// Llamar a la función rollAllDice para lanzar los dados por primera vez
rollAllDice();