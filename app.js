/*let ropa = prompt (`Que prende le gustaria adquirir?
Las opciones son: 
buzo
pantalon
remera
buzo y remera
pantalon y remera
combo completo (25% off)`);*/
/*
class producto {
    constructor(nombre , precio){
        this.nombre = nombre.toUpperCase();
        this.precio = parseFloat(precio)
    }
    sumaiva(){
        this.precio = this.precio * 1.21;
    }

}


const producto1 = new producto ("buzo", "7000");
const producto2 = new producto ("pantalon", "5500");
const producto3 = new producto ("remera", "3500");

let productos = [producto]
*/

const producto1 = {
    nombre:"buzo",
    precio:"7000"
}

const productobd = JSON.stringify(producto1)
console.log(productobd)

/*switch (ropa){
    case "buzo":
        producto1.sumaiva(); 
        console.log(producto1);
        console.log("su total es : ", producto1.precio);
        break;
    case "pantalon":
        producto2.sumaiva(); 
        console.log(producto2);
        console.log("su total es : ", producto2.precio);
        break;
    case "remera":
        producto3.sumaiva(); 
        console.log(producto3);
        console.log("su total es : ", producto3.precio);
        break;
    case "buzo y remera":
        producto1.sumaiva();
        producto3.sumaiva(); 
        console.log(producto1,producto3);
        total = parseFloat(producto1.precio + producto3.precio);
        console.log("su total es : ", total);
        break;
    case "pantalon y remera":
        producto2.sumaiva();
        producto3.sumaiva(); 
        console.log(producto2,producto3);
        total = parseFloat(producto2.precio + producto3.precio);
        console.log("su total es : ", total);
        break;
    case "combo completo":
        producto1.sumaiva();
        producto2.sumaiva();
        producto3.sumaiva(); 
        console.log(producto1,producto2,producto3);
        descuento = 25
        total = parseFloat(producto1.precio + producto2.precio + producto3.precio);
        total = parseFloat(total - (descuento/100*total))
        console.log("su total es : ", total);
        break;                      
}*/
let agregar = 0 ;
function capturar(){
    
    
    var nombreproducto = document.getElementById("Nombre").value;
    
    var carrito = [];
    

    switch (nombreproducto){
        case "buzo":
            producto1.sumaiva(); 
            console.log(producto1);
            console.log("su total es : ", producto1.precio);
            for(a of productos){
                let contenedor = document.createElement("div");
                contenedor.innerHTML = `<h3>Producto: ${producto1.nombre}</h3>
                <p>Precio: ${producto1.precio}</p>
                `
                document.body.appendChild(contenedor);
            }
            agregar = producto1.precio
            break;
        case "pantalon":
            producto2.sumaiva(); 
            console.log(producto2);
            console.log("su total es : ", producto2.precio);
            for(a of productos){
                let contenedor = document.createElement("div");
                contenedor.innerHTML = `<h3>Producto: ${producto2.nombre}</h3>
                <p>Precio: ${producto2.precio}</p>
                `
                document.body.appendChild(contenedor);
            }
            break;
        case "remera":
            producto3.sumaiva(); 
            console.log(producto3);
            console.log("su total es : ", producto3.precio);
            for(a of productos){
                let contenedor = document.createElement("div");
                contenedor.innerHTML = `<h3>Producto: ${producto3.nombre}</h3>
                <p>Precio: ${producto3.precio}</p>
                `
                document.body.appendChild(contenedor);
            }
            break;
        case "buzo y remera":
            producto1.sumaiva();
            producto3.sumaiva(); 
            console.log(producto1,producto3);
            total = parseFloat(producto1.precio + producto3.precio);
            console.log("su total es : ", total);
            break;
        case "pantalon y remera":
            producto2.sumaiva();
            producto3.sumaiva(); 
            console.log(producto2,producto3);
            total = parseFloat(producto2.precio + producto3.precio);
            console.log("su total es : ", total);
            break;
        case "combo completo":
            producto1.sumaiva();
            producto2.sumaiva();
            producto3.sumaiva(); 
            console.log(producto1,producto2,producto3);
            descuento = 25
            total = parseFloat(producto1.precio + producto2.precio + producto3.precio);
            total = parseFloat(total - (descuento/100*total))
            console.log("su total es : ", total);
            break;                      
    }
    
}
fetch("data.json")
  .then((response) => response.json())
  .then((data) => (data.forEach((productos) => {
    const li = document.createElement('li')
    li.innerHTML = `
        <h4>${productos.nombre}</h4>
        <p>${productos.precio}</p>
    `
    lista.append(li)
}
  )));
    
