function esBisiesto(anio) {
    if (anio % 400 === 0) {
        return true; //es biciesto
    }
    if (anio % 100 === 0) {
        return false; //no es biciesto
    }
    return anio % 4 === 0;
}


function celsiusAFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}


function mayorDeDos(n1, n2) {
    if (n1 > n2) {
        return n1;
    } else {
        return n2;
    }
}


function convertirMinutos(minutos) {
    let horas = Math.floor(minutos / 60); 
    let minutosRestantes = minutos % 60; 
    return `${horas} horas y ${minutosRestantes} minutos`;
}


const estaEnRango = (numero, inicio, fin) => {
    return numero >= inicio && numero <= fin;
};


function calcularPrecioFinal(precioInicial, descuento) {
    const cantidadDescuento = (descuento / 100) * precioInicial;
    const precioFinal = precioInicial - cantidadDescuento;
    return precioFinal;
}


function puedeVotar(edad) {
    return edad >= 18;
}


function calcularAreaTriangulo(base, altura) {
    return (base * altura) / 2;
}
  


console.log(esBisiesto(2020));
console.log(celsiusAFahrenheit(0)); 
console.log(mayorDeDos(5, 10));
console.log(convertirMinutos(125));
console.log(estaEnRango(5, 1, 10));
console.log(calcularPrecioFinal(100, 20));
console.log(puedeVotar(18));
console.log(calcularAreaTriangulo(10, 5));