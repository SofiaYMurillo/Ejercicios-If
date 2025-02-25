<h1>Determinar el estado de la computadora</h1> 

     let EP = prompt("¿El equipo emite un pitido al iniciarse? (si/no)")
     let DG = prompt("¿El disco duro gira? (si/no)")

     let M;

     if (EP === "si" && DG === "si"){
        M = "Pongase en contacto con el tecnico";

     }else if (EP === "si" && DG === "no"){
        M = "Verificar contactos de la unidad";

     }else if (EP === "no" && DG === "no"){
        M = "Lleve a la central el equipo para reparación";

     }else if (EP === "no" && DG === "si"){
        M = "Compruebe la conexión de los altavoces";

     }else {
        M = "Información invalida.";

     }
     alert(M);