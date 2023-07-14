window.addEventListener("load", function (){
    
    let contenedor = document.querySelector("#contenedorCarrito")
    let productos = JSON.parse(sessionStorage.getItem("carrito"));
   
    contenedor.style.display = "flex"
    contenedor.style.flexDirection = "Column"
    
    
    for (let prod of productos){
        let div1 = document.createElement("div")
        div1.setAttribute("class", "main-detalle-edit")

        let h31 = document.createElement("h3")
        h31.setAttribute("class", "titulo-producto-detail")
        
        let div2 = document.createElement("div")
        div2.setAttribute("class", "descripcion-prod-detail")

        let p1 = document.createElement("p")
       
        let div3 = document.createElement("div")
        div3.setAttribute("class", "div-detail-2")

        let imgCarro = document.createElement("img")
        imgCarro.setAttribute("class", "imagenCarrito")

        let contenedor1 = document.createElement("div")
        contenedor1.setAttribute("class", "botones-productos")

        let cont1 = document.createElement("button")
        cont1.setAttribute("class", "button")

        imgCarro.style.width = "150px"
        imgCarro.style.height = "120px"

        imgCarro.src = prod.imagen
        h31.innerText = prod.nombre
        p1.innerText = prod.precio
        cont1.innerText = "Eliminar"
        
        contenedor.appendChild(div3)
        contenedor.appendChild(div1)
        contenedor.appendChild(div2)
        contenedor.appendChild(contenedor1)
        div3.appendChild(imgCarro)
        div2.appendChild(p1)
        div1.appendChild(h31)
        contenedor1.appendChild(cont1)
               
    }
 
})

         