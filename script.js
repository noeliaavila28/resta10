function sumar() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const num3 = parseFloat(document.getElementById("num3").value);

    if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
        document.getElementById("resultadoSuma").innerText = "Por favor, ingresa los tres números.";
    } else {
        const suma = num1 + num2 + num3;
        document.getElementById("resultadoSuma").innerText = "La suma es " + suma;
    }
}

function restar() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);

    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById("resultadoResta").innerText = "Por favor, ingresa ambos números.";
    } else {
        const resultado = num1 - num2;
        document.getElementById("resultadoResta").innerText = "La resta es " + resultado;
    }
}


