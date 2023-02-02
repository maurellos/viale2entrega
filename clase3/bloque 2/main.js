

// Objetos
/* alert("Base de Datos de Clienttes: Cargar los clientes")

function Cliente(info){
    this.nombre = info.nombre;
    this.producto = info.producto;
}

const cliente1 = new Cliente(
    {
    nombre: prompt("ingrese el nombre"),
    producto: prompt("ingrese producto"),
    telefono: parseInt(prompt("Ingrese Telefono")),

   
    }


)

console.log(cliente1) */

// Metodos con objetos

/* function Cliente(info){
    this.nombre = info.nombre;
    
    this.hablar = info.funtion ({console.log("hola ", this.nombre)})
}

const cliente1 = new Cliente(
    {
    nombre: prompt("ingrese el nombre"),
    

   
    }


) */

//CLASES





class Cliente {
    constructor(nombre, producto, telefono) {
        this.nombre = nombre;
        this.producto = producto;
        this.telefono = telefono;
        

    }


}

let cliente1 = new Cliente (prompt("Ingrese Nombre"), prompt("ingrese Producto"), prompt("ingrese Telefono"))


document.write(cliente2.nombre)





