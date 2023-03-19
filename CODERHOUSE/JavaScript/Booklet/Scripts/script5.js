//-------------- ACTIVIDAD 1 --------------//

class Tienda{
    constructor(nombre, direccion, propietario, rubro){
        this.nombre = nombre;
        this.direccion = direccion;
        this.propietario = propietario;
        this.rubro = rubro;
    }
    
    esPropietario(nombre){
        return this.propietario == nombre;
    }

    estaAbierto(hora){
        if (((hora  >= 8) && (hora  <= 12))||((hora  >= 15) && (hora  <= 19))) {
            return true;
        }
        return false;
    }
}
const tienda1 = new Tienda("Kwik-E-Mart", "Park 123", "Apu","Almacen");
const tienda2 = new Tienda("Edna's Edibles", "PEREZ 323", "Edna Krabappel","Panaderia");
const tienda3 = new Tienda("Springfield Mall", "Hall 231", "Mr. Burns","Shopping");
console.log(tienda1);
console.log(tienda2);
console.log(tienda3);
//-------------- ACTIVIDAD 2 --------------//
let ingresados = '';
for (let index = 0; index < 5; index++) {
    let tienda =  new Tienda(prompt("NOMBRE"), 
                             prompt("DIRECCION"), 
                             prompt("PROPIETARIO"),
                             prompt("RUBRO"));

    ingresados+= "Tienda: "+tienda.nombre+" "+
             "Direccion: "+tienda.direccion+" "+
             "Propitario: "+tienda.propietario+" "+
             "rubro: "+tienda.rubro+"\n";
}
alert(ingresados);

//-------------- ACTIVIDAD 3 --------------//
const tienda4 = new Tienda("33 cents Store", "Cheap 231", "Barato SRL","Ropa");
for (let index = 0; index < 3 ; index++) {
    let entrada = parseInt(prompt("INGRESAR HORA EN PUNTO"));
    if(tienda4.estaAbierto(entrada)){
        alert("LA TIENDA ESTA ABIERTA A LAS "+entrada)
    }else{
        alert("LA TIENDA ESTA CERRADA A LAS "+entrada)
    }
}
//-------------- ACTIVIDAD 4 --------------//
const tienda1 = new Tienda("Kwik-E-Mart", "Park 123", "Apu", "Almacen");
const tienda2 = new Tienda("Edna's Edibles", "PEREZ 323", "Edna Krabappel", "Panaderia");
const tienda3 = new Tienda("Springfield Mall", "Hall 231", "Mr. Burns", "Shopping");
for (let index = 0; index < 5; index++) {
    let entrada = prompt("INGRESAR NOMBRE DE PROPITARIO");
    if (tienda1.esPropietario(entrada)){
        alert(entrada + " ES PROPIETARIO DE LA TIENDA " + tienda1.nombre);
    }
    if (tienda2.esPropietario(entrada)){
        alert(entrada + " ES PROPIETARIO DE LA TIENDA " + tienda2.nombre);
    }
    if (tienda3.esPropietario(entrada)){
        alert(entrada + " ES PROPIETARIO DE LA TIENDA " + tienda3.nombre);
    }
}
//-------------- ACTIVIDAD 5 --------------//
class Cliente{
    constructor(nombre,presupuesto,tarjeta,telefono){
        this.nombre = nombre;
        this.presupuesto = parseFloat(presupuesto);
        this.tarjeta = tarjeta;
        this.telefono = telefono;
    }

    transferirDinero(valor){
        if((this.presupuesto > 0)&&(valor < this.presupuesto)){
            this.presupuesto -= valor;
            console.log(this.presupuesto);
            return valor
        }else{
            return 0;
        }
    }
}
const cliente1 = new Cliente("Homero", 2000, true, "1234560");
const cliente2 = new Cliente("Carlos", "1000", false, "21234560");
const cliente3 = new Cliente("Barny", "50", false, "231234560");
for (let index = 0; index < 5; index++) {
    let entrada = parseFloat(prompt("INGRESAR MONTO"));
    if (cliente1.transferirDinero(entrada)){
        alert("EL CLIENTE " + cliente1.nombre+ " TE PUEDE PAGAR "+entrada);
    }
    if (cliente2.transferirDinero(entrada)){
        alert("EL CLIENTE " + cliente2.nombre+ " TE PUEDE PAGAR "+entrada);
    }
    if (cliente3.transferirDinero(entrada)){
        alert("EL CLIENTE " + cliente3.nombre+ " TE PUEDE PAGAR "+entrada);
    }
}