function calcularCalificacion() {
    let fisica = parseFloat(prompt("Ingrese su calificación de Física (0 a 10):"));
    let quimica = parseFloat(prompt("Ingrese su calificación de Química (0 a 10):"));
    let biologia = parseFloat(prompt("Ingrese su calificación de Biología (0 a 10):"));
    let matematicas = parseFloat(prompt("Ingrese su calificación de Matemáticas (0 a 10):"));
    let informatica = parseFloat(prompt("Ingrese su calificación de Informática (0 a 10):"));

    // Validación de entrada
    if ([fisica, quimica, biologia, matematicas, informatica].some(isNaN)) {
        console.log("Error: Ingrese solo números válidos.");
        return;
    }

    let suma = fisica + quimica + biologia + matematicas + informatica;
    let porcentaje = (suma / 50) * 100;

    let calificacion = (porcentaje <= 59.9) ? "Mala" :
                       (porcentaje <= 80) ? "Buena" :
                       "Excelente";

    console.log(`Su porcentaje es ${porcentaje.toFixed(2)}% y su calificación es ${calificacion}`);
}

// Llamar a la función
calcularCalificacion();
