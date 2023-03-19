//-------------- ACTIVIDAD 1 --------------//
const ciudades = [  "Springfield",
                    "Shelbyville",
                    "Capital City",
                    "Cypress Creek",
                    "Ogdenville"];

for (const ciudad of ciudades) {
    $('body').append(`<h2>${ciudad}</h2>`);
}
//-------------- ACTIVIDAD 2 --------------//
//DECLARAMOS ARRAY DE CANALES
const canales = ['FOX', 'FXX', 'The WB', 'Channel 6'];
//DECLARAMOS VARIABLE Y CON FOREACH GENERAMOS LA LISTA DE OPCIONES
let innerSelect = '';
canales.forEach((canal, index) => innerSelect += `<option value='${index}'>${canal}</option>`)
//AGREGAMOS SELECT Y ESCUCHAMOS EL EVENTO CHANGE
$('body').prepend(`<select id="selectCanal">${innerSelect}</select>`);
document.getElementById('selectCanal').onchange = (e) => {
    $('body').append(`<h5>SELECCIONADO ${canales[e.target.value]}</h5>`);
}
const generos = ['COMEDIA', 'DRAMA', 'ACCION', 'CIENCIA FICCION'];
//-------------- ACTIVIDAD 3 --------------//
//DECLARAMOS UN ARRAY VACIO Y LA CLASE ACTOR
const actores = []
class Actor {
    constructor(literal) {
        this.id = actores.length;
        this.nombre   =  literal.nombre;
        this.edad     =  literal.edad;
        this.manager  =  literal.manager;
        this.genero   =  literal.genero;
    }
}
//FORMULARIO DESTINADO AL ALTA DE ACTOR
$('body').append(`<form id='altaActor'>
                    <input type="text">
                    <input type="number">
                    <input type="text">
                    ${generoSelect('formSelect')}
                    <input type="submit">
                  </form>`);
//MANEJO DEL EVENTO SUMBMIT SOBRE EL FORMULARIO
document.getElementById('altaActor').onsubmit = (e) => {
    e.preventDefault();
    const inputs = e.target.children;
    actores.push(new Actor({ nombre: inputs[0].value, edad: inputs[1].value, manager: inputs[2].value,  genero: inputs[3].value }));
    //console.log(actores);
    //$('body').prepend(`<p>ACTOR ${inputs[0].value} REGISTRADO</p>`);
    generarActores(actores);
    eventosActores();
}
//-------------- ACTIVIDAD 4 --------------//
//AGREGAMOS CONTENEDORES PARA LAS SALIDAS DE ACTORES Y NOTIFICACION
$('body').append("<div id='actoresGenerados'></div>");
$('body').prepend("<div id='notificacion'></div>");
//FUNCION PARA GENERAR UN DIV POR CADA ACTOR
function generarActores(listaActores){
    $('#actoresGenerados').empty();
    listaActores.forEach(actor => $('#actoresGenerados').append(crearDiv(actor)));
}
//FUNCION PARA DETERMINAR LA ESTRUCTURA DEL DIV
function crearDiv(actor){
    return `<div>
                <h2 class="miClase">${actor.nombre}</h2>
                <p>${actor.edad} - ${actor.manager}</p>
                <p>Genero ${generos[actor.genero]}</p>
                <button id='${actor.id}' class='btnActor'>SELECCIONAR</button>
            </div>`
}
//FUNCION PARA ASOCIAR LOS EVENTOS A LOS BOTONES GENERADOS
function eventosActores(){
    let btnActores = document.getElementsByClassName('btnActor');
    for (const boton of btnActores) {
        boton.onclick = (e) => {
            const seleccionado = actores.find(obj => obj.id == e.target.id);
            $('#notificacion').html(`<h6>Actor ${seleccionado.nombre} -  Edad ${seleccionado.edad}</h6>`);
        }
    }
}
//-------------- ACTIVIDAD 5 --------------//
//DECLARAMOS UNA FUNCIÓN PARA CREAR EL SELECT Y LLAMARLA EN DOS LUGARES (FORMULARIO DE ALTA Y FILTRO)
function generoSelect(id){
    let innerSelect = '';
    generos.forEach((genero, index) => innerSelect += `<option value='${index}'>${genero}</option>`)
    return `<select id="${id}">${innerSelect}</select>`;
}
//AGREGAMOS SELECT,ESCUCHAMOS EL EVENTO CHANGE Y FILTRAMOS LA SALIDA
$('body').append(`<div>FILTRO: ${generoSelect('filtroSelect')} </div>`);
document.getElementById('filtroSelect').onchange = (e) => {
    let filtrados = actores.filter(actor => actor.genero == e.target.value);
    generarActores(filtrados);
    eventosActores();
}
