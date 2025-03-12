let NM = parseInt(prompt("Ingrese el número del modelo del carro: "));

function verificarDefecto(modelo) {
    const modelosDefectuosos = [119, 179, 189, 190, 191, 192, 193, 194, 195, 221, 780];
    
    if (modelosDefectuosos.includes(modelo)) {
        return "El vehículo está defectuoso, llevar a garantía.";
    } else {
        return "Su vehículo no está defectuoso.";
    }
}

let mensaje = verificarDefecto(NM);
console.log(mensaje);