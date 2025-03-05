function calcularCostoPaquete(operador, minutos) {
    let cargoFijo, valorMinuto, valorPaquete;
    
    if (operador.toLowerCase() === "tigo") {
        cargoFijo = 45000;
        valorMinuto = 200;
        valorPaquete = 12000;
    } else if (operador.toLowerCase() === "claro") {
        cargoFijo = 30000;
        valorMinuto = 100;
        valorPaquete = 18000;
    } else if (operador.toLowerCase() === "movistar") {
        cargoFijo = 40000;
        valorMinuto = 250;
        valorPaquete = 8000;
    } else {
        console.log("Operador no válido");
        return;
    }
    
    let costoTotal = cargoFijo + (minutos * valorMinuto) + valorPaquete;
    console.log(`El costo total de su plan con ${operador} es: $${costoTotal}`);
}

