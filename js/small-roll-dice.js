let isDot = false;

function convertirNumeros() {
    isDot = false;
    console.log('isDot: ' + isDot);
    lanzarDados();
}

function convertirPuntos() {
    isDot = true;
    console.log('isDot: ' + isDot);
    lanzarDados();
}
function lanzarDados() {

    // Obtener el contenedor donde se mostrarán los dados
    var contenedor = document.getElementById("dados");

    // Limpiar cualquier dado que ya esté en el contenedor
    contenedor.innerHTML = "";

    // Generar 6 números aleatorios entre 1 y 6 (representando el valor de cada dado)
    var valoresDados = [];
    for (var i = 0; i < 6; i++) {
        valoresDados.push(Math.floor(Math.random() * 6) + 1);
    }
    console.table(valoresDados);

    // Crear un elemento de dado para cada valor generado
    for (var i = 0; i < valoresDados.length; i++) {
        var dado = document.createElement("div");
        dado.classList.add("dice");

        // Agregar los puntos blancos correspondientes al valor del dado
        for (var j = 0; j < valoresDados[i]; j++) {
            var punto = document.createElement("div");
            if (isDot === true) {
                punto.classList.add("dot");
            } else {
                //dado.setAttribute("data-value", );
                dado.textContent = valoresDados[i];
                console.log("data-value: ", valoresDados[i]);
            }
            dado.appendChild(punto);
        }

        // Agregar el dado al contenedor
        contenedor.appendChild(dado);
    }
    console.log('////');
}