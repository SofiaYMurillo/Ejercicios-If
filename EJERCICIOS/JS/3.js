function calcularCostoAlquiler() {
    let TipoDeLavadora = parseInt(prompt("Ingrese el tipo de lavadora (1: Grande, 2: Pequeña)"));
    let cantidad = parseInt(prompt("Ingrese la cantidad de lavadoras"));
    let horas = parseInt(prompt("Ingrese las horas de alquiler"));

    // Validar entradas
    if (isNaN(TipoDeLavadora) || isNaN(cantidad) || isNaN(horas) || cantidad <= 0 || horas <= 0) {
        alert("Error: Ingrese valores numéricos válidos.");
        return;
    }

    let CostoPorHora;
    if (TipoDeLavadora === 1) {
        CostoPorHora = 4000;
    } else if (TipoDeLavadora === 2) {
        CostoPorHora = 3000;
    } else {
        alert("Tipo de Lavadora Inválido, por favor ingrese 1 o 2.");
        return;
    }

    let costoBase = cantidad * horas * CostoPorHora;

    // Aplicar descuento si se alquilan más de 3 lavadoras
    if (cantidad > 3) {
        costoBase *= 0.97;
    }

    alert(`Costo total por alquilar ${cantidad} lavadora(s) tipo ${TipoDeLavadora} por ${horas} horas: $${costoBase.toFixed(2)}`);
}

// Llamar a la función
calcularCostoAlquiler();
