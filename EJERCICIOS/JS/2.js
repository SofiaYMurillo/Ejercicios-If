
    <h1>Verificar si un numero es par o impar</h1>


        let numero = prompt("Ingrese un número:");

        numero = parseInt(numero);

        if (numero % 2 === 0) {
            alert("El numero " + numero + " es par.")
        } else {
            alert("El número " + numero + " es impar.")

        }

switch (numero % 2) {
    case 0:
        resultado = "El numero es par";
        break;
    case 1:
        resultado = "El numero es impar";
        break;
    default:
        resultado = "Valor invalido";
}
alert(resultado);