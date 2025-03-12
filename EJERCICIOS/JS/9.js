let A1 = parseInt(prompt("Ingrese el primer angulo: "))
    let A2 = parseInt(prompt("Ingrese el segundo angulo: "))
    let A3 = parseInt(prompt("Ingrese el tercer angulo: "))

    let SA = A1 + A2 + A3;

    if (SA === 180) {
        console.log(`El triangulo es valido`)
    } else{
       
        console.log(`el triangulo es invalido`)
    }
