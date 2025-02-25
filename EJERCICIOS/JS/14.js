<h1>SandwichOrder</h1>
    

    let tamaño = prompt("Ingrese el tamaño del que desea su sandwich")
    let tocineta = prompt("¿Deea tocineta? (si/no)")
    let jalapeño = prompt("¿Desea jalapeño? (si/no")
    let pavo = prompt("¿Desea pavo? (si/no)")
    let queso = prompt("¿Desea queso? (si/no)")

    let cb;
      if (tamaño === "pequeño") {
          
         cb = $6000;

    } else if (tamaño === "grande") {

        cb = $12000;

    } else {
        alert('Tamaño incorrecto.');
        cb = $0;
    }

    let ca = $0;
      if (tocineta === "si"){
        ca += $3000;

      }
      if (jalapeño === "si"){
          ca += $0;

      }
      if (pavo === "si"){
        ca += $3000;

      }
      if (queso === "si"){
        ca+= $2500;

      }

      let VT = VC + VA;
        if(cb !== 0){
            alert('El valor total del pedido es: {VT}')
        }