function calcularCosto(dias) {
    let costo;
    
    if (dias === 15) {
        costo = 18000;
    } else if (dias === 30) {
        costo = 35000;
    } else if (dias === 90) { // 3 meses = 90 días
        costo = 86000;
    } else {
        return "Cantidad de días no válida. Por favor, elija entre 15, 30 o 90 días.";
    }
    
    return `El costo de la mensualidad para ${dias} días es de $${costo}.`;
}
