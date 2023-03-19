//-------------- ACTIVIDAD 1 --------------//
let usuario = localStorage.getItem('nombre');
if (usuario == null) {
    localStorage.setItem('nombre', prompt('INGRESAR NOMBRE'));
} else {
    alert('EL NOMBRE ES ' + usuario);
}
//-------------- ACTIVIDAD 2 --------------//
let comidas = localStorage.getItem('comidas');
if (comidas == null) {
    const menu = [];
    for (let index = 0; index < 5; index++) {
        menu.push(prompt('INGRESAR COMIDA'))
    }
    localStorage.setItem('comidas', menu);
} else {
    let menu = '';
    const arrayComidas = comidas.split(',');
    for (const nombreComida of arrayComidas) {
        menu += nombreComida + '\n';
    }
    alert(menu);
}
//-------------- ACTIVIDAD 3 --------------//
class Hamburgesa {
    constructor(nombre, precio, ingredientes, combo) {
        this.nombre = nombre;
        this.precio = parseFloat(precio);
        this.ingredientes = ingredientes;
        this.combo = parseInt(combo);
    }
}
const hamburgesas = [];
hamburgesas.push(new Hamburgesa("Krusty Burger", 150, ['Carne', 'Queso'], 1));
hamburgesas.push(new Hamburgesa("Krusty Doble", 250, ['Carne', 'Queso', 'Panceta'], 0));
hamburgesas.push(new Hamburgesa("Krusty Pollo", 150, ['Pollo', 'Queso'], 2));
hamburgesas.push(new Hamburgesa("Super Krusty", 150, ['Carne', 'Queso', 'huevo'], 5));
hamburgesas.push(new Hamburgesa("Krusty Vegan", 150, ['Espinaca', 'Soja'], 7));
localStorage.setItem('hamburgesas', JSON.stringify(hamburgesas));
//-------------- ACTIVIDAD 4 --------------//
let almacenadas = localStorage.getItem('hamburgesas');
if (almacenadas != null) {
    let array = JSON.parse(almacenadas);
    let salida = 'SELECCIONAR HAMBURGUESA \n';
    for (let index = 0; index < array.length; index++) {
        salida += index + ' -> ' + array[index].nombre + ' ' + array[index].ingredientes + ' $ ' + array[index].precio + '\n';
    }
    alert(salida);
    let eleccion = parseInt(prompt('INGRESAR HAMBURGUESA'));
    if ((eleccion >= 0) && (eleccion < array.length)) {
        alert("HAMBURGUESA SELECCIONADA " + array[eleccion].nombre)
    } else {
        alert("ERROR DE SELECCION");
    }
}
//-------------- ACTIVIDAD 5 --------------//
let guardadas = localStorage.getItem('hamburgesas');
if (guardadas != null) {
    let array = JSON.parse(guardadas);
    array.forEach(hamburgesa => { hamburgesa.precio += (hamburgesa.precio * 0.3) });
    localStorage.setItem('hamburgesas', JSON.stringify(array));
}