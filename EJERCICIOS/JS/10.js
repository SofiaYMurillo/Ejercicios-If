<h1>Precio de fotocopias</h1>

    let numerodecopias = parseInt(prompt("Ingrese l numero de copias que desea imprimir: "))
    let precioporcopia

    switch (verdadero) {
        case (numerocopias >= 0 && numerocopias <=499):
            precioporcopia = $120;
            break;
        case (numerodecopias >= 500 && numerodecopias <= 749):
            precioporcopia = $100;
            break;
        case (numerodecopias >= 750 && numerodecopias <= 999):
            precioporcopia = $80;
        case (numerodecopias >= 100):
            precioporcopia = $50;
            break;
        default:
            precioporcopia = NaN;
    }

    let precio = precioporcopia * numerodecopias;

    alert('El precio por copia es {PpC} y el precio total de copias es {Pt}')
