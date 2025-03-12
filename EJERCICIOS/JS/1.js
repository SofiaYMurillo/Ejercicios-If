function calcularSalarioPorHoras() {
    let nombre = prompt("Digite su nombre completo");
    let horas = parseInt(prompt("Digite las horas trabajadas"));

    // Validar entrada
    if (isNaN(horas) || horas <= 0) {
        alert("Error: Ingrese un número válido de horas trabajadas.");
        return;
    }

    let tarifaPorHora = (horas >= 10) ? 30000 : 33000;
    let salario = horas * tarifaPorHora;

    alert(`Señor/a ${nombre}, el número de horas trabajadas es ${horas} y su salario equivale a $${salario.toLocaleString()}`);
}

// Llamar a la función
calcularSalarioPorHoras();
