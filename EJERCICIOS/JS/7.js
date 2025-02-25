<h1>Ayudas económicas</h1>

let genero = prompt("Ingrese su genero (F o M)")
let edad = parseInt(prompt("Ingrese su edad"))
let ayuda;

if (genero === "F") {
    if (edad > 50){
        ayuda = $120000;
} else if (edad >= 30 && edad <=50) {
    ayuda = $100000;
} else {
    ayuda = 0
}
} else if (genero === "M") {
    ayuda = $40000;
} else {
    ayuda = "Genero invalido";
}
alert('La ayuda mensual es: {ayuda}')