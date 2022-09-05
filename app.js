let ropa = prompt (`Que prende le gustaria adquirir?
Las opciones son: 
buzo
pantalon
remera
buzo y remera
pantalon y remera
combo completo (25% off)`);


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

switch (ropa){
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
}