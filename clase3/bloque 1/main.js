
/* 
function saludar(){
    console.log("hola");
}

saludar() */

/* function saludar (nombre, saludo){
    let mensaje = `${nombre} ${saludo}`;
    console.log(mensaje)
}

saludar("kevin", "bienvenido") */


/* function sumar(numero1, numero2){
    return numero1 + numero2;
}

let resultado = sumar(4, 5);


console.log(resultado) */

/// Funcion Anonima

//const suma = function(a, b){return a + b};
//const resta = function(a, b){return a - b}

//funcion anonima
/* 
const suma = (a, b) => a + b;
const resta = (a, b) => a - b;
const dividir = (a, b) => a / b;
const iva = x => x * 0.21;

let precioProducto = parseInt(prompt("ingrese el precio del producto"));
let descuento = parseInt(prompt("Ingrese el descuento"))

let nuevoPrecio = resta(suma(precioProducto, iva(precioProducto)), descuento)

let mensaje = `El precio del producto es ${nuevoPrecio}` ;
alert(mensaje) */

///  

/* const suma = (a, b) => a + b;
const resta = (a, b) => a - b;
const dividir = (a, b) => a / b;
const multiplicar = (a, b) => a * b;


let ancho = parseInt(prompt("Ingrese el ancho en cm"));
let alto = parseInt(prompt("ingrese el alto en cm"))
let cantidad = parseInt(prompt("Ingrese cantidad de etiquetas"))

let totalMetros = multiplicar(dividir(multiplicar(ancho, alto), 10000), cantidad);

let mensaje = `El total de mts2 es ${totalMetros}`;
alert(mensaje);

if(totalMetros => 5000){
    alert("cliente objetivo")
} else if(totalMetros => 1000){
    alert("cliente potencial")
} else if(totalMetros < 1000){
    alert("cliente bajo consumo")
}

 */


const suma = (a, b) => a + b;
const resta = (a, b) => a - b;
const dividir = (a, b) => a / b;
const multiplicar2 = (a, b) => a * b;
const multiplicar3 = (a, b, C) => a * b * C;
const precioMts2 = 0.39;
const ganancia = 1.2;


let ancho = parseFloat(prompt("Ingrese el ancho en cm"));
let alto = parseInt(prompt("ingrese el largo en mts"));
let cantidad = parseInt(prompt("Ingrese cantidad de rollos"))

let precioDeventa = dividir(multiplicar2(multiplicar2(multiplicar3(ancho,alto,cantidad), precioMts2), ganancia), cantidad)

console.log(`El precio de venta de cada rollo es U$S ${precioDeventa}`)




