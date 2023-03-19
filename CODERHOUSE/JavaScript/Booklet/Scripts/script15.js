//-------------- ACTIVIDAD 1 --------------//
const routes = [
    { path: '/enviar'  ,  action: 'enviar' },
    { path: '/enviados', action: 'listar' },
    { path: '/papelera', action: 'eliminados' },
];
//-------------- ACTIVIDAD 2 --------------//
const emails = [];
class Email{
    constructor(emisor,receptor, mensaje){
        this.id       = emails.length;
        this.emisor   = emisor;
        this.receptor = receptor;
        this.mensaje  = mensaje;
    }
}
function enviarHTML(){
    return `<form id='enviarEmail'>
                <input type="text">
                <input type="text">
                <textarea></textarea>
                <input type="submit">
            </form>`
}
function enviarEvents(){
    $("#enviarEmail").submit(function (e) { 
        e.preventDefault();
        const inputs = e.target.children;
        $.post( "https://jsonplaceholder.typicode.com/posts",
                {emisor: inputs[0].value ,receptor:inputs[1].value, detalle:inputs[2].value}, 
                (data,status)=>{
                    if(status === "success"){
                        let mail  = new Email(data.emisor, data.receptor, data.detalle) 
                        emails.push(mail);
                        console.log(emails);
                        $('#app').prepend(`<h4> EMAIL ENVIADO ${mail.id} A ${mail.receptor}</h4>`);
                        //enviadosRender('body');
                    }
                });
    });
}
function enviarRender(selector){
    $(selector).html(enviarHTML());
    enviarEvents();
}
//-------------- ACTIVIDAD 3 --------------//
function enviadoHTML(mail){
    return `<div>
                <h4>DE ${mail.emisor.toUpperCase()}</h4>    
                <h4> A ${mail.receptor.toUpperCase()}</h4>    
                <p>MENSAJE: ${mail.mensaje.toUpperCase()}</p>
                <button id='${mail.id}' class='btnDelete'>ELIMINAR</button>
            </div>`
}
function enviadosRender(selector) {
    $(selector).empty();
    for (const mail of emails) {
        $(selector).append(enviadoHTML(mail));
    }
    enviadosEvents();
}
//-------------- ACTIVIDAD 4 --------------//
const papelera = [];
function enviadosEvents(){
    console.log($(".btnDelete"));
    $(".btnDelete").click(function (e) { 
        console.log(e.target.id);
        const mail = emails.find(email => email.id == e.target.id);
        $.ajax({
            url: `https://jsonplaceholder.typicode.com/posts/${mail.id}`,
            type: 'DELETE',
            success: function(data) {
                const idMail  = emails.indexOf(mail);
                //USAMOS SPLICE PARA ELIMINAR UN OBJETO POR POSICION
                emails.splice(idMail, 1);
                papelera.push(mail);
                enviadosRender('#app');
            }
        });
    });
}

function elimnadosHTML(mail){
    return `<div>
                <h4>DE ${mail.emisor.toUpperCase()} - A ${mail.receptor.toUpperCase()}</h4>    
                <p>MENSAJE: ${mail.mensaje.toUpperCase()}</p>
            </div><hr>`
}

function eliminadosRender(selector) {
    $(selector).empty();
    for (const mail of papelera) {
        $(selector).append(elimnadosHTML(mail));
    }
}
//-------------- ACTIVIDAD 5 --------------//
//GENERAR HTML
$('body').prepend(` <nav>
                        <a href="#/enviar"          class="button">ENVIAR</a> 
                        <a href="#/enviados" class="button">ENVIADOS</a> 
                        <a href="#/papelera" class="button">PAPELERA</a>
                    </nav>`);
$('body').append(`<div  id="app" style="height: 1000px;"></div>`);
//FUNCIONES PARA OBTENER Y GENERAR LA RUTA
const parseLocation = () => location.hash.slice(1).toLowerCase() || '/';
const findActionByPath = (path, routes) => routes.find(r => r.path == path || undefined);
//FUNCION ROUTER
const router = () => {
    //OBTENER RUTA ACTUAL
    const path    = parseLocation(); 
    const { action = 'error' } = findActionByPath(path, routes) || {}; 
    // LLAMAMOS AL MÈTODO CORRESPONDIENTE PARA LA ACCIÒN ENCONTRADA
    switch (action) {
      case 'enviar':
        enviarRender('#app');
        break;
      case 'listar':
        enviadosRender('#app');
        break;
      case 'eliminados':
        eliminadosRender('#app');
        break;
      default:
        $('#app').html("ERROR 404 - PAGINA NO ENCONTRADA")
        break;
    }
};
//CADA VEZ QUE SE DETECTA LA CARGA DE LA VENTANA SE LLAMA A LA FUNCION ROUTER
$(window).on('load', function () {
    router();
});
//CADA VEZ QUE SE DETECTA UN CAMBIO EN EL HASH (EJEMPLO la URL CAMBIA DE #/pagina1 a #/pagina2) SE LLAMA A LA FUNCION ROUTER
$(window).on('hashchange', function () {
    router();
});
