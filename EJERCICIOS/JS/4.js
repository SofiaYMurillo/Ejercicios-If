<h1>Determinar si un numero ingresado por el usuario es par o impar.</h1>

    let Numero = prompt("Ingrese un numero")
    let R;

    switch (Numero % 2){
        case 0:
            R = "El numero es par";
            break;
        case 1:
            R = "El numero es impar";
            break;
        default:
            R = "El numero es invalido"; 
    }
    alert(R);