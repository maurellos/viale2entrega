



/* 
let numero = 10;

if(numero ===5){
    console.log("el numero es 5")
} else{
    console.log("error")

}


 */

/* let respuesta = prompt("terminaste la tarea")

if (respuesta === "si"){
    console.log("puede salir")

} else{
    console.log("no puede salir")
} */

/* let edad = parseInt(prompt("Ingrese su edad"));

if(edad < 14){
    alert("no puedes entrar")
} else if (edad < 18){
    alert("puedes entrar con adulto")
} else{
    alert("puedes entrar. Bienvenido a los juegos de azar ")

}


 */

let usuario = prompt("Ingrese Usuario").toLocaleLowerCase();
let contraseña = parseInt(prompt("Ingrese Contraseña"));

if (usuario === "mauro" && contraseña === "123"){
    alert("Ingreso correcto")
} else{
    alert("Ingreso denegado")
}