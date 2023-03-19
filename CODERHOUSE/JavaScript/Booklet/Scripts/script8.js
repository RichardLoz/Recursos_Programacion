//-------------- ACTIVIDAD 1 --------------//
const ciudades = [  "Springfield",
                    "Shelbyville",
                    "Capital City",
                    "Cypress Creek",
                    "Ogdenville"];
for (const ciudad of ciudades) {
    let h2 = document.createElement('h2');
    h2.innerHTML = ciudad;
    document.body.appendChild(h2);
}
//-------------- ACTIVIDAD 2 --------------//
const tareas = []
for (let index = 0; index < 5; index++) {
   tareas.push(prompt('INGRESAR TAREA'));
}
let ul = document.createElement("ul");
let inner = '';
for (const tarea of tareas) {
    inner+= `<li>${tarea}</li>`;
}
ul.innerHTML = inner;
document.body.appendChild(ul);
//-------------- ACTIVIDAD 3 --------------//
const paises = ['ARGENTINA', 'URUGUAY', 'BRASIL', 'CHILE'];
let select = document.createElement("select");
for (let index = 0; index < paises.length; index++) {
    select.innerHTML +=  `<option value='${index}'>${paises[index]}</option>`;
}
document.body.appendChild(select);
//-------------- ACTIVIDAD 4 --------------//
/*
class Cantante{
    constructor(nombre, edad, pais){
        this.nombre = nombre;
        this.edad = edad;
        this.pais = pais;
    }
}
const cantantes = [];
cantantes.push(new Cantante('HOMERO',39,'USA'));
cantantes.push(new Cantante('BARNEY',40,'USA'));
cantantes.push(new Cantante('APU',42,'INDIA'));
cantantes.push(new Cantante('SKINNER',38,'USA'));

for (const cantante of cantantes) {
    let div = document.createElement("div");
    div.innerHTML = `<h2>${cantante.nombre}</h2>
                     <p>${cantante.edad} / ${cantante.pais}</p>
                     <hr>`;
    document.body.appendChild(div);
}
*/
//-------------- ACTIVIDAD 5 --------------//
class Cantante{
    constructor(id,nombre, edad, pais){
        this.id = id;
        this.nombre = nombre;
        this.edad = edad;
        this.pais = pais;
    }
}
const cantantes = [];
cantantes.push(new Cantante(1,'HOMERO',39,'USA'));
cantantes.push(new Cantante(2,'BARNEY',40,'USA'));
cantantes.push(new Cantante(3,'APU',42,'INDIA'));
cantantes.push(new Cantante(4,'SKINNER',38,'USA'));

for (const cantante of cantantes) {
    let div = document.createElement("div");
    div.innerHTML = `<h2>${cantante.nombre}</h2>
                     <p>${cantante.edad} / ${cantante.pais}</p>
                     <button id='${cantante.id}'>Contratar</button>
                     <hr>`;
    document.body.appendChild(div);
}