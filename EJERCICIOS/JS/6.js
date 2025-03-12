function encontrarNumeroMayor() {
    let N1 = parseFloat(prompt("Ingrese el primer número:"));
    let N2 = parseFloat(prompt("Ingrese el segundo número:"));
    let N3 = parseFloat(prompt("Ingrese el tercer número:"));

    if (isNaN(N1) || isNaN(N2) || isNaN(N3)) {
        console.log("Entrada inválida. Ingrese solo números.");
        return;
    }

    let NM = Math.max(N1, N2, N3);
    console.log(`El número más grande es: ${NM}`);
}

// Llamar a la función
encontrarNumeroMayor();
