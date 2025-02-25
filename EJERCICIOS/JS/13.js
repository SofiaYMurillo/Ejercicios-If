<h1>Paquete de promoción</h1>

     let O = prompt("Ingrese su operador (claro, tigo, movistar: ")
     let MI = parseInt(prompt("Ingrese la cantidad de minutos internacionales consumidos: "))

     let CF, VMI, VPD;

     switch(O) {
        case "clro":
            CF = $30000;
            VMI = $100;
            VPD = $18000;
            break;
        case "tigo":
            CF = $45000;
            VMI = $200;
            VPD = $12000;
            break;
        case "movistar":
            CF = $40000;
            VMI = $250;
            VPD = $8000;
            break;
        default:
            alert('operador no encontrado.');
            CF = $0;
            VMI = $0;
            VPD = $0;
     } {
        alert('El valor total del paquete de promoción es {Valor}')
     }

