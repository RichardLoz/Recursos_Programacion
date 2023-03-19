//-------------- ACTIVIDAD 1 --------------//
let nombre   = "Homero";
let apellido = "Simpsons";
let edad     =  39;
console.log(nombre);
console.log(apellido);
console.log(edad);
//-------------- ACTIVIDAD 2 --------------//
const ciudad1 = "Springfield";  
const ciudad2 = "Shelbyville";  
const ciudad3 = "Capital City";  
const ciudad4 = "Cypress Creek";  
const ciudad5 = "Ogdenville";  
console.log(ciudad1);
console.log(ciudad2);
console.log(ciudad3);
console.log(ciudad4);
console.log(ciudad5);
//-------------- ACTIVIDAD 3 --------------//
let persona    = "BART SIMPSON";
let domicilio  = "742 EVERGREEN";
let pais       = "USA";
let nacimiento = "02-11-70";
const codigo   = "B47U89RE243";
let carnet = "Codigo: "+codigo+" "+
             "Nombre: "+persona+" "+
             "Pais: "+pais+" "+
             "Nacimiento: "+nacimiento+" "+
             "Domicilio: "+domicilio;
console.log(carnet);
//-------------- ACTIVIDAD 4 --------------//
let integrante1 = prompt('INGRESAR 1er INTREGANTE');
let integrante2 = prompt('INGRESAR 2do INTREGANTE');
let integrante3 = prompt('INGRESAR 3er INTREGANTE');
let integrante4 = prompt('INGRESAR 4to INTREGANTE');
let integrante5 = prompt('INGRESAR 5to INTREGANTE');
let familia =   "1) "+integrante1+" "+
                "2) "+integrante2+" "+
                "3) "+integrante3+" "+
                "4) "+integrante4+" "+
                "5) "+integrante5;
console.log(familia);
//-------------- ACTIVIDAD 5 --------------//
let precio = parseFloat(prompt('INGRESAR PRECIO'));
let descuento20 = precio - (precio  * 0.2);
let descuento30 = precio - (precio  * 0.3);
console.log(descuento20);
console.log(descuento30);