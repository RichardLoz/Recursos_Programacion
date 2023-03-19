//-------------- ACTIVIDAD 1 --------------//
/*
//CREANDO EL BOTÓN DESDE JS
const btnNucleo = document.createElement("button");
//ASIGNAR ID AL BOTÓN
btnNucleo.id = 'btnNucleo';
//ASIGNAR EL INTERIOR DEL BOTÓN
btnNucleo.innerHTML = 'BOTON DEL NUCLEO';
//ESCUCHAR EL EVENTO CLICK
btnNucleo.addEventListener('click', function () {
    const h3 = document.createElement('h3');
    h3.innerHTML = 'HOLA CODER';
    document.body.appendChild(h3);
})
//AGREGAR EL BOTON AL DOM
document.body.appendChild(btnNucleo);
//-------------- ACTIVIDAD 2 --------------//
const materias = ['MATEMATICA', 'LENGUA', 'PROGRAMACION', 'HISTORIA'];
let select = document.createElement("select");
for (let index = 0; index < materias.length; index++) {
    select.innerHTML +=  `<option value='${index}'>${materias[index]}</option>`;
}
//ESCUCHAR EL EVENTO CHANGE
select.addEventListener('change', function (e) {
    const h3 = document.createElement('h3');
    h3.innerHTML = materias[e.target.value];
    document.body.appendChild(h3);
})
document.body.appendChild(select);
*/
//-------------- ACTIVIDAD 3 --------------//
const estudiantes = []
class Estudiante {
    constructor(literal) {
        this.id = estudiantes.length;
        this.nombre = literal.nombre;
        this.edad = literal.edad;
        this.curso = literal.curso;
        this.suspendido = false;
    }

    suspender(){
        this.suspendido = true;
    }
}
const formulario = document.createElement("form");
formulario.innerHTML = `<input type="text">
                        <input type="number">
                        <input type="text">
                        <input type="submit">`;
/*
formulario.onsubmit = (e) => {
    e.preventDefault();
    const inputs = e.target.children;
    estudiantes.push(new Estudiante({ nombre: inputs[0].value, edad: inputs[1].value, curso: inputs[2].value }));
    document.body.append(' ALUMNO REGISTRADO ');
}
*/
//-------------- ACTIVIDAD 4 --------------//
/*
formulario.onsubmit = (e) => {
    e.preventDefault();
    const inputs = e.target.children;
    estudiantes.push(new Estudiante({ nombre: inputs[0].value, edad: inputs[1].value, curso: inputs[2].value }));
    mostrarEstudiantes(estudiantes);
    const btnEstudiantes = document.getElementsByClassName('btnEstudiante');
    for (const boton of btnEstudiantes) {
        boton.onclick = (e) => {
            const seleccionado = estudiantes.find(obj => obj.id == e.target.id);
            let notificacion = document.createElement("h6");
            notificacion.innerHTML = `Nombre ${seleccionado.nombre} -  Edad ${seleccionado.edad}`;
            salida.prepend(notificacion);
        }
    }
}

function mostrarEstudiantes(estudiantes) {
    salida.innerHTML = '';
    for (const estudiante of estudiantes) {
        let divEstudiante = document.createElement("div");
        divEstudiante.innerHTML = `<h2>${estudiante.nombre}</h2>
                                   <p>${estudiante.edad} / ${estudiante.curso} </p>
                                   <button id='${estudiante.id}' class='btnEstudiante'>Seleccionar</button>`
        salida.appendChild(divEstudiante);
    }
}
const salida = document.createElement("div");
document.body.appendChild(formulario);
document.body.appendChild(salida);
*/
//-------------- ACTIVIDAD 5 --------------//
formulario.onsubmit = (e) => {
    e.preventDefault();
    const inputs = e.target.children;
    estudiantes.push(new Estudiante({ nombre: inputs[0].value, edad: inputs[1].value, curso: inputs[2].value }));
    mostrarEstudiantes(estudiantes);
    const btnEstudiantes = document.getElementsByClassName('btnEstudiante');

    for (const boton of btnEstudiantes) {
        boton.onclick = (e) => {
            const seleccionado = estudiantes.find(obj => obj.id == e.target.id);
            let notificacion = document.createElement("h6");
            notificacion.innerHTML = `Nombre ${seleccionado.nombre} -  Edad ${seleccionado.edad}`;
            salida.prepend(notificacion);
        }
    }

    const btnSuspender = document.getElementsByClassName('btnSuspender');
    for (const boton of btnSuspender) {
        boton.onclick = (e) => {
            const seleccionado = estudiantes.find(obj => obj.id == e.target.id);
            seleccionado.suspender();
            console.log(seleccionado);
            let notificacion = document.createElement("h6");
            notificacion.innerHTML = `Nombre ${seleccionado.nombre} -  SUSPENDIDO`;
            salida.prepend(notificacion);
        }
    }
}

function mostrarEstudiantes(estudiantes) {
    salida.innerHTML = '';
    for (const estudiante of estudiantes) {
        let divEstudiante = document.createElement("div");
        divEstudiante.innerHTML = `<h2>${estudiante.nombre}</h2>
                                   <p>${estudiante.edad} / ${estudiante.curso} </p>
                                   <button id='${estudiante.id}' class='btnEstudiante'>Seleccionar</button>
                                   <button id='${estudiante.id}' class='btnSuspender'>Suspender</button>`
        salida.appendChild(divEstudiante);
    }
}

const salida = document.createElement("div");
document.body.appendChild(formulario);
document.body.appendChild(salida);