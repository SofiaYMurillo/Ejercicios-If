let N1 = Numero(prompt("Ingrese el primer numero: "))
let N2 = Numero(prompt("Ingrese el segundo numero: "))
let N3 = Numero(prompt("Ingrese el tercer numero:"))
let NM;

if (N1 >= N2 && N1 >= N3){
    NM = N1;
} else if (N2 >= N1 && N2 >= N3) {
    NM = N2;
} else {
    NM = N3;
}

alert("El numero mas largo es: {NM}") 