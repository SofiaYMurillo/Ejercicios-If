
function calcularCosto(dias) {
    // Asegurar que 'dias' sea un número entero
    dias = parseInt(dias, 10);

    // Definir precios en un objeto para facilitar cambios futuros
    const precios = {
        15: 18000,
        30: 35000,
        90: 86000
    };

    if (precios[dias] !== undefined) {
        return `El costo de la mensualidad para ${dias} días es de $${precios[dias]}.`;
    } else {
        return "Cantidad de días no válida. Por favor, elija entre 15, 30 o 90 días.";
    }
}

// Ejemplo de uso con `prompt`
let diasUsuario = prompt("Ingrese la cantidad de días (15, 30 o 90):");
console.log(calcularCosto(diasUsuario));
