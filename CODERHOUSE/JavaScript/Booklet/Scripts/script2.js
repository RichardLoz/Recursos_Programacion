//-------------- ACTIVIDAD 1 --------------//
let entrada = prompt("INGRESAR UN  NOMBRE");
let nombre = "BART";
if (entrada == nombre) {
    alert("FUI YO");
} else {
    alert("YO NO FUI");
}
//-------------- ACTIVIDAD 2 --------------//
let entrada2 = prompt("INGRESAR UN  TECLA");
if ((entrada2 == "y") || (entrada2 == "Y")) {
    alert("CORRECTO");
} else {
    alert("ERROR");
}
//-------------- ACTIVIDAD 3 --------------//
let entrada3 = prompt("INGRESAR UN NUMERO");
if (entrada3 == 1) {
    alert("ELEGISTE A HOMERO");
}else if (entrada3 == 2) {
    alert("ELEGISTE A MARGE");
}else if (entrada3 == 3) {
    alert("ELEGISTE A BART");
}else if (entrada3 == 4) {
    alert("ELEGISTE A LISA");
}
else {
    alert("ERROR");
}
//-------------- ACTIVIDAD 4 --------------//
let entrada4 = parseFloat(prompt("INGRESAR UN NUMERO"));
if ((entrada4 >= 0) && (entrada4 <= 1000)) {
    alert("PRESUPUESTO BAJO");
} else if ((entrada4 >= 1001) && (entrada4 <= 3000)) {
    alert("PRESUPUESTO MEDIO");
} else if (entrada4 > 3000) {
    alert("PRESUPUESTO ALTO");
}
else {
    alert("ERROR");
}
//-------------- ACTIVIDAD 5 --------------//
let producto1 = prompt('INGRESAR 1er PRODUCTO');
let producto2 = prompt('INGRESAR 2do PRODUCTO');
let producto3 = prompt('INGRESAR 3er PRODUCTO');
let producto4 = prompt('INGRESAR 4to PRODUCTO');

if ((producto1 != "") && (producto2 != "") && (producto3 != "") && (producto4 != "")) {
    let heladera = "1) " + producto1 + " " +
        "2) " + producto2 + " " +
        "3) " + producto3 + " " +
        "4) " + producto4;
    console.log(heladera);
} else {
    console.log("ERROR: ES NECESARIO CARGAR TODOS LOS PRODUCTOS");
}

