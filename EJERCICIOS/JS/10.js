function calcularPrecioPorCopia(cantidad_copias) {
    let precio_por_copia = 0;

    if (cantidad_copias > 0 && cantidad_copias < 500) {
        precio_por_copia = 120;
    } else if (cantidad_copias >= 500 && cantidad_copias < 750) {
        precio_por_copia = 100;
    } else if (cantidad_copias >= 750 && cantidad_copias < 1000) {
        precio_por_copia = 80;
    } else {
        alert("Cantidad de copias inválida");
        return 0; // Retornar 0 si la cantidad de copias no es válida
    }

    return precio_por_copia;
}

// Pedir al usuario la cantidad de copias y convertir a número
let cantidad_copias;
do {
    cantidad_copias = parseInt(prompt("Ingrese la cantidad de copias a imprimir"), 10);
} while (isNaN(cantidad_copias) || cantidad_copias < 0);

// Calcular el precio por copia
let precio_por_copia = calcularPrecioPorCopia(cantidad_copias);

// Calcular el total
let total = cantidad_copias * precio_por_copia;

console.log(`El precio por copia es: $${precio_por_copia}`);
console.log(`Su total es: $${total}`);
