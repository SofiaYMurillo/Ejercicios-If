 let precio_por_copia = 0;

    if (cantidad_copias > 0 && cantidad_copias < 500) {
        precio_por_copia = 120;
    }else if (cantidad_copias > 499 && cantidad_copias < 750) {
        precio_por_copia = 100;
    }else if (cantidad_copias > 749 && cantidad_copias < 1000) {
        precio_por_copia = 80;
    }else {
        alert("cantidad de copias inválida");
    }

   
    alert("El precio por copia es " + precio_por_copia);
    alert("Su total es: " + cantidad_copias + precio_por_copia);
