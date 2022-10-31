let precioT=0;
let productos=[];

function revisarProductos(){
    let p = JSON.parse(localStorage.getItem(`productos`)) || [];
    p.forEach(prod => {
        ingresarPrenda(p,prod.nombre.toUpperCase());
    });
}
revisarProductos();
function capturar(prenda){
    buscarPrenda(prenda);
}

function buscarPrenda(nProducto){
    fetch("data.json")
    .then((response) => response.json())
    .then((data) => { 
        ingresarPrenda(data,nProducto.toUpperCase())})
    }
   
  
 function ingresarPrenda(data,nProducto){
    for(a of data){
       
        if(a.nombre.toUpperCase()==nProducto){
            productos.push(a);
            let contenedor = document.createElement("div");
            contenedor.id=a.nombre;
            contenedor.innerHTML = `
                <h3>Producto: ${a.nombre}</h3>
                <p>Precio: ${a.precio}</p>
                <button onclick="borrarPrenda(event)"> X </button>`
            document.body.appendChild(contenedor);

            total(a.precio); 
        }
        
        }
        localStorage.setItem('productos',JSON.stringify(productos));
 }

 function total(precio){
    totalExiste()
    precioT += precio;
    let contenedor = document.createElement(`div`);
    contenedor.id="Total";
    contenedor.innerHTML=`

    <h3>Total</h3>
    <p >${precioT}</p>
    `
    document.body.appendChild(contenedor);     
    }
   

function totalExiste(){
        let total = document.getElementById("Total")
            if(total){
                total.remove();                               
            }
        }

function borrarPrenda(event){
    let precio = (event.target.previousElementSibling.textContent);
    let index = productos.findIndex(producto => producto.nombre === event.target.parentNode.id);
    productos.splice(index, 1);
    localStorage.setItem(`productos`,JSON.stringify(productos));
    event.target.parentNode.remove();
    total(-parseInt(precio.split(" ")[1]));
}

let boton = document.querySelectorAll(".carrito")
 boton.forEach(boton => {
    boton.addEventListener("click",() => {
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Producto agregado al carrito',
        showConfirmButton: false,
        timer: 1500
      })
})
   })


    // fetch("data.json") // => una promesa 
    // .then((response) => response.json())
    // .then((data) => {
    //     for(a of data){
    //         let contenedor = document.createElement("div");
    //         contenedor.innerHTML = `
    //             <h3>Producto: ${a.nombre}</h3>
    //             <p>Precio: ${a.precio}</p>`
    //         document.body.appendChild(contenedor);
    //     }
    
    
    
    
    
    //  }); 
    
     



//   fetch("test.json")
//   .then(response => response.json())
//   .then(json => console.log(json));

//   (data.forEach((productos) => {
//     const li = document.createElement('li')
//     li.innerHTML = `
//         <h4>${productos.nombre}</h4>
//         <p>${productos.precio}</p>
//     `
//     lista.append(li)
// }
//   )));
    
