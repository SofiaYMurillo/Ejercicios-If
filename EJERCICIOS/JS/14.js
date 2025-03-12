function calcularCostos(tamaño) {
  let cb = 0;
  
  if (tamaño === "pequeño") {
      cb = 6000;
  } else if (tamaño === "grande") {
      cb = 12000;
  } else {
      alert('Tamaño incorrecto.');
  }
  
  return cb;
}

function obtenerAdicionales(ingredientes) {
  let adicionales = 0;

  if (ingredientes.tocineta === "si") {
      adicionales += 3000;
  }
  if (ingredientes.pavo === "si") { 
      adicionales += 3000;
  }
  if (ingredientes.queso === "si") {
      adicionales += 2500;
  }
  // Jalapeño es gratis, no se suma costo

  return adicionales;
}

// Ejecutamos las funciones para obtener la orden y calcular el costo total
let pedido = crearPedidoDeSandwich();
let costoBase = calcularCostos(pedido.tamaño);
let costoAdicionales = obtenerAdicionales(pedido);

if (costoBase > 0) {
  let costoTotal = costoBase + costoAdicionales;
  console.log(`El costo total de su sándwich es de $${costoTotal}`);
} else {
  console.log("No se pudo calcular el precio debido a un error en el tamaño del sándwich.");
}