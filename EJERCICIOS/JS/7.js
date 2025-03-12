function calcularAyuda(genero, edad) {
    let ayuda = 0;

    if (genero === "F") {
        if (edad > 50) {
            ayuda = 120000;
        } else if (edad >= 30 && edad <= 50) {
            ayuda = 100000;
        }
    } else if (genero === "M") {
        ayuda = 40000;
    } else {
        return "Género inválido";
    }

    return `La ayuda mensual es: $${ayuda}`;
}

// Función para solicitar datos al usuario
function solicitarDatos() {
    let genero = prompt("Ingrese su género (F o M)").toUpperCase();
    let edad = parseInt(prompt("Ingrese su edad"), 10);

    if (isNaN(edad) || edad <= 0) {
        console.log("Edad inválida. Inténtelo de nuevo.");
        return;
    }

    console.log(calcularAyuda(genero, edad));
}

// Llamar a la función principal
solicitarDatos();
