


//Acceso a la plataforma

let usuario = prompt("Ingrese nombre").toLocaleLowerCase();
let contraseña = prompt("Ingrese contraseña").toLocaleLowerCase();




if( usuario ==="mauro" && contraseña ==="mau"){
   alert("Hola Mauro")

//Switch
    let acciones = prompt("Cotizar o cargar cliente")

// Cotizador rollos o Cargar clientes:

    switch(acciones) {
// Cotizador rollos
        case "cotizar":

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

        break;

// cargar clientes


        case "Cargar cliente":
        console.log("Carga el cliente");

        alert("Carga el Cliente")


        class Cliente {
        constructor(nombre, producto, telefono) {
        this.nombre = nombre;
        this.producto = producto;
        this.telefono = telefono;
        }


}

let cliente1 = new Cliente (prompt("Ingrese Nombre"), prompt("ingrese Producto"), prompt("ingrese Telefono"))

console.log(cliente1)

   
}




} 

else if( usuario === "mauro" && contraseña !== "mau") {

    alert("Contraseña Incorrecta")

} else if (usuario !=="mauro" && contraseña ==="mau"){

    alert("Usuario incorrecto")
} else{
    alert("Acceso Denegado")

}











//////////////////////////////////////////////////////////////////////////



//Switch


//let acciones = prompt("Cotizar o cargar cliente")

// Cotizador rollos




/* switch(acciones) {
    case "cotizar":

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

        break;

    // cargar clientes


    case "Cargar cliente":
        console.log("Carga el cliente");
   
}





// Cargar clientes
 */


/* 
alert("Carga el Cliente")


class Cliente {
    constructor(nombre, producto, telefono) {
        this.nombre = nombre;
        this.producto = producto;
        this.telefono = telefono;
        

    }


}

let cliente1 = new Cliente (prompt("Ingrese Nombre"), prompt("ingrese Producto"), prompt("ingrese Telefono"))

console.log(cliente1)



 */






