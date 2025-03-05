
        let TipoDeLavadora = (prompt("Ingrese el tipo de lavadora (1 Grande, 2 Pequeña"));
        let cantidad = (prompt("Ingrese cantidad de lavadoras"));
        let horas = parseInt(prompt("Ingrese las horas de alquiler"));

        let CostoPorHora;
        if (TipoDeLavadora === 1) {
            CostoPorHora = 4000;

        }else if (TipoDeLavadora === 2) {
            CostoPorHora = 3000;
        } else {
            alert("Tipo de Lavadora Inválido, por favor ingrese 1 o 2.")

        }
        let costoBase = cantidad * horas * CostoPorHora;

        if (cantidad > 3) {
            costoBase *= 0.97;
        }

        alert('Costo total por alquilar {cantidad} lavadora tipo {1-2} por {horas}: $ {costobase}')
  