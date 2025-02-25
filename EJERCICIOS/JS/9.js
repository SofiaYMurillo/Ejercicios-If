<h1>Verificar si un triangulo es valido o no</h1>

    let A1 = parseInt(prompt("Ingrese el primer angulo: "))
    let A2 = parseInt(prompt("Ingrese el segundo angulo: "))
    let A3 = parseInt(prompt("Ingrese el tercer angulo: "))

    let SA = A1 + A2 + A3;

    if (SA === 180) {
        alert('El triangulo es valido')
    } else{
       
        alert('el triangulo es invalido')
    }
