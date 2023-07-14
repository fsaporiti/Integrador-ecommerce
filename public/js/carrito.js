// const { render } = require("ejs")

window.addEventListener("load", function (){

let botonComprar = document.querySelector("#botonComprar")
//  let botonAgregarCarrito = document.querySelector(".button");


botonComprar.addEventListener("click", function(){

    let imagenProducto = document.querySelector("#imagenCarro").src
    let nombreProducto = document.querySelector("#nombreCarrito").innerHTML
    let precioProducto = document.querySelector("#precio-base").innerHTML
    let botonEliminar = document.querySelector(".button").innerHTML
    //let botonEliminarTodo = document.querySelector("#botonEliminarTodo").innerHTML

    let productoNuevo = {nombre: nombreProducto, precio: precioProducto, imagen: imagenProducto, boton: botonEliminar};
    let productos = JSON.parse(sessionStorage.getItem("carrito"));

    if (productos == undefined || productos == null) {

        productos = []

    }

    productos.push(productoNuevo)
    sessionStorage.setItem("carrito", JSON.stringify(productos))
    
    alert("Agregado al carrito correctamente!")    
     
        
    })


})

   // Swal.fire({
        //         title: '¿Desea agregar al carrito?',
        //         icon: 'warning',
        //         showCancelButton: true,
        //         confirmButtonColor: '#3085d6',
        //         cancelButtonColor: '#d33',
        //         confirmButtonText: 'Si',
        //         timer: 4000
        // }).then((result) => {
        //     if (result.isConfirmed) {
        //         Swal.fire(
        //         'Agregado!',
        //         'El producto ha sido agregado',
        //         'success'
        //     )
                
        //     }
        // })
        // Swal.fire({
        //     position: 'center',
        //     icon: 'success',
        //     title: 'Agregado al carrito correctamente',
        //     showConfirmButton: true,
        //     timer: 4000
        // })