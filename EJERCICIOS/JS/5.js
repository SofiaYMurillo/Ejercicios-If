<h1>Calcular El Rendimiento Académico</h1>

        let fisica = parseFloat(prompt("Ingrese su calificación (0 a 10):"))
        let quimica = parseFloat(prompt("Ingrese su calificación (0 a 10):"))
        let biologia = parseFloat(prompt("Ingrese su calificación (0 a 10):"))
        let matematicas = parseFloat(prompt("Ingrese su calificación (0 a 10):"))
        let informatica = parseFloat(prompt("Ingrese su calificación (0 a 10):"))


        let sumadecalificaciones = fisica + quimica + biologia + matematicas + informatica;
        let porcentajefinal = (sumadecalificaciones / 50) * 100;

        let calificacion;
        if (porcentajefinal >= 0 && porcentajefinal <= 59.9) {
            calificacion = "Mala";
        } else if (porcentajefinal >=60 && porcentajefinal <=80) {
            calificacion = "Buena";
        } else if (porcentajefinal > 80) {
            calificacion = "Excelente";
        }

        alert('Su porcentaje es {%} y su calificacion es {calificacin}');
