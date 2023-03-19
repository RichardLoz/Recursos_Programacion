//-------------- ACTIVIDAD 1 --------------//
const equipo = ['HOMERO', 'APU', 'MOE', 'MR. BURNS'];
for (let index = 0; index < equipo.length; index++) {
    alert("POSICION " + index + " JUGADOR " + equipo[index]);
}
//-------------- ACTIVIDAD 2 --------------//
let entrada = prompt("INGRESAR JUGADOR");
const equipo = [];
while (entrada != 'ESC') {
    equipo.push(entrada);
    entrada = prompt("INGRESAR JUGADOR");
}
for (let index = 0; index < equipo.length; index++) {
    alert("POSICION " + index + " JUGADOR " + equipo[index]);
}
//-------------- ACTIVIDAD 3 --------------//
class Jugador {
    constructor(nombre, camiseta, edad, lesionado) {
        this.nombre = nombre;
        this.camiseta = camiseta;
        this.edad = edad;
        this.lesionado = lesionado;
    }
}
const jugadores = [];
jugadores.push(new Jugador("BART", 15 , 11, false));
jugadores.push(new Jugador("NELSON", 2 , 18, false));
jugadores.push(new Jugador("MILHOUSE", 68 , 12, true));
jugadores.push(new Jugador("MARTIN", 0 , 11, false));
jugadores.push(new Jugador("ROD", 98 , 12, false));
console.log(jugadores);
//-------------- ACTIVIDAD 4 --------------//
function buscarJugador(equipo, jugador){
    return equipo.find(objeto => objeto.nombre === jugador.toUpperCase());
}
for (let index = 0; index < 3; index++) {
    let busqueda = buscarJugador(jugadores, prompt('INGRESAR NOMBRE DE JUGADOR'));
    if(busqueda != undefined){
        alert('JUGADOR '+busqueda.nombre+' CAMISETA '+busqueda.camiseta+' EDAD '+busqueda.edad);
    }else{
        alert('NO EXISTE JUGADOR CON ESE NOMBRE');
    }
}
//-------------- ACTIVIDAD 5 --------------//
function filtroJugadores(equipo, edad) {
    return equipo.filter(objeto => objeto.edad == parseInt(edad));
}
function listaJugadores(jugadores) {
    let lista = '';
    for (const jugador of jugadores) {
        lista += 'JUGADOR ' + jugador.nombre + ' CAMISETA ' + jugador.camiseta + ' EDAD ' + jugador.edad + '\n'
    }
    return lista;
}
for (let index = 0; index < 5; index++) {
    let filtro = filtroJugadores(jugadores, prompt('INGRESAR NOMBRE DE JUGADOR'));
    if (filtro.length > 0) {
        alert(listaJugadores(filtro));
    } else {
        alert('NO EXISTE JUGADORES CON ESA EDAD');
    }
}