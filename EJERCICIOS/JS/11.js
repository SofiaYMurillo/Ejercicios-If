function determinarEstadoDeComputadora() {
   let EP = prompt("¿El equipo emite un pitido al iniciarse? (si/no)").toLowerCase();
   let DG = prompt("¿El disco duro gira? (si/no)").toLowerCase();

   let M;

   if (EP === "si" && DG === "si") {
       M = "Póngase en contacto con el técnico";
   } else if (EP === "si" && DG === "no") {
       M = "Verificar contactos de la unidad";
   } else if (EP === "no" && DG === "no") {
       M = "Lleve a la central el equipo para reparación";
   } else if (EP === "no" && DG === "si") {
       M = "Compruebe la conexión de los altavoces";
   } else {
       return "Información inválida";
   }

   return M;
}

// Llamamos a la función y guardamos el resultado
let estadoComputadora = determinarEstadoDeComputadora();

