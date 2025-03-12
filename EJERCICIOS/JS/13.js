function calcularCostoPaquete(operador, minutos) {
    let cargoFijo, valorMinuto, valorPaquete;

    switch (operador.toLowerCase()) {
        case "tigo":
            cargoFijo = 45000;
            valorMinuto = 200;
            valorPaquete = 12000;
            break;
        case "claro":
            cargoFijo = 30000;
            valorMinuto = 100;
            valorPaquete = 18000;
            break;
        case "movistar":
            cargoFijo = 40000;
            valorMinuto = 250;
            valorPaquete = 8000;
            break;
        default:
            console.log("Operador no válido");
            return; // Salimos de la función si el operador no es válido
    }

    let costoTotal = cargoFijo + (minutos * valorMinuto) + valorPaquete;
    console.log(`El costo total de su plan con ${operador} es: $${costoTotal}`);
}

// Ejemplo de uso:
calcularCostoPaquete("Tigo", 50);
calcularCostoPaquete("Claro", 100);
calcularCostoPaquete("Movistar", 30);
calcularCostoPaquete("Otro", 20); // Prueba con operador inválido