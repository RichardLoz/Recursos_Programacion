//-------------- ACTIVIDAD 1 --------------//

$('body').append("<button id='btnNucleo'>BOTON DEL NUCLEO</button>");
$('#btnNucleo').click(() => {
    $('body').prepend('<h3>HOLA CODER</h3>');
});

//-------------- ACTIVIDAD 2 --------------//
//DECLARACIÓN DE ARRAY DE VESTIDOS VACIO
const vestidos = [];
//DECLARACIÓN DE CLASE VESTIDO
class Vestido{
    constructor(marca,precio,color){
        this.id = vestidos.length;
        this.marca = marca.toUpperCase();
        this.precio = parseFloat(precio) ;
        this.color = color
    }
    detalle(){
        return `MARCA ${this.marca} $ ${this.precio}`;
    }
}

//INSTANCIADO DE OBJETOS VESTIDO Y REFERENCIA A LA COLECCIÓN
vestidos.push(new Vestido("Chanel",'20000'));
vestidos.push(new Vestido("Only",'10000'));
vestidos.push(new Vestido("Pepe Jeans",'7000'));
//FUNCIÓN PARA GENERAR EL SELECT
function vestidoSelect(id){
    let innerSelect = '';
    vestidos.forEach(vestido => innerSelect += `<option value='${vestido.id}'>${vestido.marca}</option>`)
    return `<select id="${id}">${innerSelect}</select>`;
}
//AGREGAR SELECT AL DOM Y DETECTA EVENTO
$('body').append(vestidoSelect('elegirVestido'));
$('#elegirVestido').change(function (e) { 
    const seleccionado = vestidos.find(obj => obj.id == e.target.value);
    $('body').prepend(`<h4>${seleccionado.detalle()}</h4>`);
});

//-------------- ACTIVIDAD 3 --------------//
const colores = ["ROJO", "VERDE", "AZUL", "ROSA"];

function selectLista(array, id){
    let innerSelect = '';
    array.forEach((elemento, index) => innerSelect += `<option value='${index}'>${elemento}</option>`)
    return `<select id="${id}">${innerSelect}</select>`;
}
//FORMULARIO DESTINADO AL ALTA DE VESTIDO
$('body').append(`<form id='altaVestido'>
                    <input type="text">
                    <input type="number">
                    ${selectLista(colores,'formSelect')}
                    <input type="submit">
                  </form>`);

$("#altaVestido").submit(function (e) { 
    e.preventDefault();
    const inputs = e.target.children;
    let vestido  = new Vestido(inputs[0].value, inputs[1].value, colores[inputs[2].value]) 
    vestidos.push(vestido);
    //$('body').prepend(`<h4> REGISTRO CREADO: ${vestido.detalle()}</h4>`);
    generarVestidos(vestidos);
});
//-------------- ACTIVIDAD 4 --------------//
//AGREGAMOS CONTENEDORES PARA LAS SALIDAS DE ACTORES Y NOTIFICACION
$('body').append("<div id='vestidosGenerados'></div>");
//FUNCION PARA GENERAR UN DIV POR CADA VESTIDO
function generarVestidos(listaVestidos){
    $('#vestidosGenerados').empty();
    listaVestidos.forEach(actor => $('#vestidosGenerados').append(crearDiv(actor)));
}
//FUNCION PARA DETERMINAR LA ESTRUCTURA DEL DIV
function crearDiv(vestido){
    return `<div>
                <h2 class="miClase">${vestido.detalle()}</h2>
                <p>${vestido.color}</p>
            </div>`
}
//AGREGAMOS SELECT,ESCUCHAMOS EL EVENTO CHANGE Y FILTRAMOS LA SALIDA
$('body').prepend(`<div>FILTRO: ${selectLista(colores,'filtroSelect')} </div><hr>`);
$('#filtroSelect').change(function (e) { 
    let filtrados = vestidos.filter(vestido => vestido.color == colores[e.target.value]);
    generarVestidos(filtrados);
});
//-------------- ACTIVIDAD 5 --------------//
$('body').prepend("<div>BUSCAR: <input id='busqueda' type='text'></div><hr>");

$('#busqueda').keyup(function (e) { 
    let value = e.target.value;
    let filtrados = vestidos.filter(vestido => 
                                        vestido.color.includes(value.toUpperCase()) ||
                                        vestido.marca.includes(value.toUpperCase()));
    generarVestidos(filtrados);
});