//-------------- ACTIVIDAD 1 --------------//
const URLIMG = 'https://res.cloudinary.com/hdsqazxtw/image/upload/v1559681445/logo_coderhouse_2_bmqbet.png';

$('body').append(`<img id="logoCoder" src="${URLIMG}" width="150" height="150">`);
$('#logoCoder')
    .fadeOut(2000)
        .fadeIn(2000);

//-------------- ACTIVIDAD 2 --------------//
const DURACION = 2000;
$('body').append(`<div>
                    <img id="logoBanner" src="${URLIMG}" width="150" height="150"  style="float: left">
                    <h2 id="textBanner">APRENDE</h2>
                  </div>`);
$('#logoBanner')
    .fadeOut(DURACION,() => { $("#textBanner").html("PROGRAMACIÓN") })
        .fadeIn( DURACION,()  =>  { $("#textBanner").html("CON JAVASCRIPT") })
            .animate({ opacity: 0.75,  margin: "+=50"} , DURACION, ()  => { $("#textBanner").html("EN CODERHOUSE")});
//-------------- ACTIVIDAD 3 --------------//
$('body').append(`<div>
                    <img id="logoUI" src="${URLIMG}" width="150" height="150"  style="float: left">
                    <input id="entradaUI" type="text">
                    <h3 id="salidaUI"></h3>
                  </div>`);

$('#entradaUI').keyup(function (e) { 
    $('#salidaUI')
        .hide()
            .html(e.target.value.toUpperCase())
                .slideDown(400);
    $('#logoUI')
        .animate({ opacity: .75} , 100)
            .animate({ opacity: 1 } , 100);
});
//-------------- ACTIVIDAD 4 --------------//
$('body').append(`<div>
                    <img id="logoGUI" src="${URLIMG}" width="150" height="150"  style="float: left">
                    <button id='btnSi'>SI</button>
                    <button id='btnNo'>NO</button>
                    <h2 id="salidaGUI"></h2>
                  </div>`);

$('#btnSi').click(function (e) { 
    $('#btnNo').prop("disabled", true);
    $('#btnSi').prop("disabled", true);
    $('#salidaGUI')
            .html('ACEPTADO')
                .fadeIn(500)
                    .delay(400)
                        .fadeOut(500,()=>{
                            $('#btnNo').prop("disabled", false);
                            $('#btnSi').prop("disabled", false);
                        });
});

$('#btnNo').click(function (e) { 
    $('#btnNo').prop("disabled", true);
    $('#btnSi').prop("disabled", true);
    $('#salidaGUI')
            .html('RECHAZADO')
                .fadeIn(500)
                    .delay(400)
                        .fadeOut(500,()=>{
                            $('#btnNo').prop("disabled", false);
                            $('#btnSi').prop("disabled", false);
                        });
});

//-------------- ACTIVIDAD 5 --------------//
$('body').append("<h1 id='reloj'></h1><button id='btnStop'>DETENER</button>");
let detener = false;
let inicio = 0;

function cronometro(selector){
    $(selector)
            .delay(900)
                .fadeOut(500)
                    .html(inicio)
                        .fadeIn(500, () =>{
                            if(!detener){
                                inicio++;
                                cronometro('#reloj');
                            }
                        })
}

$('#btnStop').click(function (e) { 
    detener = !detener;
    if(detener){
        $('#btnStop').html('CONTINUAR');
    }else{
        cronometro('#reloj');
        $('#btnStop').html('DETENER');
    }
});

cronometro('#reloj');