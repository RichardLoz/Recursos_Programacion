//-------------- ACTIVIDAD 1 --------------//
//FUNCION CALLBACK PARA EL GET DE PUBLICACIONES
function callbackGetPublicaciones(respuesta,estado){
    //NOS PREGUNTAMOS SI EL ESTADO RESPONDIDO POR EL SERVIDOR ES SUCCESS.
    if(estado === "success"){
        //SI ES SUCCESS ENTONCES EN LA RESPUESTA TENEMOS EL JSON DE PUBLICACION.
        for (const publicacion of respuesta) {
            //AGREGAMOS UNA ESTRUCTURA HTML POR PUBLICACION EN LA RESPUESTA.
            $("#domGenerado").append(`<div>
                                        <h2>${publicacion.title}</h2>
                                        <p>${publicacion.body}</p>
                                     </div></hr>`);
        }
    }
}
//ESTA URL ES PARA OBTENER TODAS LAS PUBLICACIONES
const URLGETPUBLICACIONES = "https://jsonplaceholder.typicode.com/posts";
//AGREGAMOS CONTENEDOR A GENERAR EL CONTENIDO
$('body').append("<div id='domGenerado'></div>");
//LLAMADA ASINCRONA GET CON EL METODO .get DE JQUERY
$.get(URLGETPUBLICACIONES,callbackGetPublicaciones);
//-------------- ACTIVIDAD 2 --------------//
function selectLista(array, id){
    let innerSelect = '';
    array.forEach(provincia => innerSelect += `<option value="${provincia.id}">${provincia.nombre}</option>`)
    return `<select id="${id}">${innerSelect}</select>`;
}

const APIPROVINCIAS = "https://apis.datos.gob.ar/georef/api/provincias";
const provincias = [{id:-1, nombre: "SELECCIONAR PROVINCIA"}];

$(document).ready(function () {
    //LLAMAR AL API DE PROVINCIAS
    $.get(APIPROVINCIAS, function(datos,estado){
        if(estado === "success"){
            provincias.push(...datos.provincias);
            //AGREGAMOS SELECT,ESCUCHAMOS EL EVENTO CHANGE Y FILTRAMOS LA SALIDA
            $('body').prepend(`<div>PROVINCIAS: ${selectLista(provincias,'provinciasSelect')}</div>`);
            $('body').prepend("<h4 id='salidaProvincias'></h4>");
            $('#provinciasSelect').change(function (e) { 
                const seleccionado = provincias.find(obj => obj.id == e.target.value);
                //$('#salidaProvincias').html(`SELECCIONADA ${seleccionado.nombre.toUpperCase()}`);
                cargarMunicios(seleccionado);
            });
        }
    });
});
//-------------- ACTIVIDAD 3 --------------//
let municipios = [];
$('body').append(`<div id="municipios"></div><hr>`);

function cargarMunicios(provincia){
    let apiMunicipios = `https://apis.datos.gob.ar/georef/api/municipios?provincia=${provincia.id}&campos=id,nombre&max=100`
    //SE REALIZA LA LLAMADA GET Y SE CARGAR EL SELECT
    $.get(apiMunicipios, function(datos,estado){
        if(estado === "success"){
            municipios = datos.municipios;
            $('#municipios').html(`<hr>PROVINCIAS: ${selectLista(municipios,'municipioSelect')}`);            
            $('#municipioSelect').change(function (e) { 
                const seleccionado = municipios.find(obj => obj.id == e.target.value);
                $('#salidaProvincias').html(`PROVINCIA ${provincia.nombre.toUpperCase()}
                                             MUNICIPIO ${seleccionado.nombre.toUpperCase()}`);

            });
        }
    });
}
//-------------- ACTIVIDAD 4 --------------//
const estudiantes   = [];
$(document).ready(function () {
    $.get("http://hp-api.herokuapp.com/api/characters/students", (respuesta, estado ) => {
        if(estado === "success"){
            estudiantes.push(...respuesta);
            $('body').append("<div id='contenidoGenerado'></div>");
            $('body').prepend("<div id='notificacion'></div><hr>");
            for (const estudiante of estudiantes) {
                let idGenerado = estudiante.name.replace(" ","-");
                $("#contenidoGenerado").append(`<div height="300" style="float:left">
                                                    <img src="${estudiante.image}" width="200" height="250"  style="margin:1">
                                                    <h3>${estudiante.name}</h3>
                                                    <button id=${idGenerado} class="btnEstudiante">SELECCIONAR</button>
                                                </div>`);
            }
            $(".btnEstudiante").click(function (e) {
                $('#notificacion').html(`SELECCIONADO ${e.target.id.replace("-"," ").toUpperCase()}`);
            });

        }
    });
});
//-------------- ACTIVIDAD 5 --------------//
$('body').prepend("<div>BUSCAR: <input id='busqueda' type='text'></div><hr>");

function generarEstudiantes(lista){
    $("#contenidoGenerado").empty();
    for (const estudiante of lista) {
        let idGenerado = estudiante.name.replace(" ", "-");
        $("#contenidoGenerado").append(`<div height="300" style="float:left">
                                            <img src="${estudiante.image}" width="200" height="250"  style="margin:1">
                                            <h3>${estudiante.name}</h3>
                                            <button id=${idGenerado} class="btnEstudiante">SELECCIONAR</button>
                                        </div>`);
    }
    $(".btnEstudiante").click(function (e) {
        $('#notificacion').html(`SELECCIONADO ${e.target.id.replace("-", " ").toUpperCase()}`);
    });
}
$('#busqueda').keyup(function (e) { 
    if(estudiantes.length > 0){
        let value = e.target.value;
        let filtrados = estudiantes.filter(estudiante =>
                                            estudiante.name.includes(value) ||
                                            estudiante.gender.includes(value) ||
                                            estudiante.house.includes(value));
        if(filtrados.length > 0){
            generarEstudiantes(filtrados);
        }else{
            generarEstudiantes(estudiantes);
        }
    }
});