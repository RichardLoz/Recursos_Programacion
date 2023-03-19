//-------------- ACTIVIDAD 1 --------------//
function entrada(){
    return prompt("INGRESAR DATO");
}

function procesamiento(valor){
    return "LA ENTRADA ES "+valor
}

function salida(valor){
    alert(valor);
}

salida(procesamiento(entrada()));
//-------------- ACTIVIDAD 2 --------------//
function redondeo(valor){
    return Math.round(valor)
}
for (let index = 0; index < 5; index++) {
    let entrada = prompt("INGRESAR NUMERO");
    alert(redondeo(entrada));
}
//-------------- ACTIVIDAD 3 --------------//
function impuesto(precio, porcentaje){
    return precio + ((precio * porcentaje)/100)
}
for (let index = 0; index < 5; index++) {
    let resultado = impuesto(parseFloat(prompt("INGRESAR PRECIO")),parseFloat(prompt("INGRESAR %")));
    alert(resultado);
}

//-------------- ACTIVIDAD 4 --------------//
const COTIZACION_DOLAR = 150;
const cotizarDolar = (pesos) => pesos / COTIZACION_DOLAR;
const cotizarPesos = (dolar) => dolar * COTIZACION_DOLAR;
let seleccion = prompt("SELECCIONAR COTIZACION \n 1 - DOLARES A PESOS \n 2 -  PESOS A DOLAR ");
let valor = prompt("VALOR");
switch (seleccion) {
    case "1":
        alert(cotizarPesos(valor));
        break;
    case "2":
        alert(cotizarDolar(valor));
        break;
    default:
        break;
}
//-------------- ACTIVIDAD 5 --------------//
function validacion(cadena){
    return cadena != '';
}
let entrada =  prompt("INGRESAR CADENA");
while (entrada != 'ESC') {
    alert(validacion(entrada));
    entrada = prompt("INGRESAR CADENA");
}