window.addEventListener("load", function (){

    let formulario = document.querySelector("form.formulario-create")
    let botonCrearProducto = document.querySelector(".button-edit")
    
    formulario.addEventListener("submit", function(e){
       // e.preventDefault()
        let errorNombreP = []
        let errorPrecioP = []
        let errorFechaP = []
       // let errorImagenP = []
        let errorDescripcionP = []

        //Nombre
        let campoNombre = document.querySelector("input.nombreP")

        if (campoNombre.value == ""){
            errorNombreP.push("El campo nombre es obligatorio")
        } else if (campoNombre.value.length < 4) {
            errorNombreP.push("El campo nombre debe tener al menos 4 letras")
        } 

        if (errorNombreP.length > 0){
            let ulErrorNombreP = document.querySelector("div.errorNombreP")
            for (let i = 0; i < errorNombreP.length; i++){
                ulErrorNombreP.innerHTML = errorNombreP[i] 
                ulErrorNombreP.style.color = "red"
            }
        }

        //Precio
        let campoPrecio = document.querySelector("input.precio")

        if (campoPrecio.value == ""){
            errorPrecioP.push("El campo precio es obligatorio")
        } 

        if (errorPrecioP.length > 0){
            let ulErrorPrecioP = document.querySelector("div.errorPrecioP")
            for (let i = 0; i < errorPrecioP.length; i++){
                ulErrorPrecioP.innerHTML = errorPrecioP[i] 
                ulErrorPrecioP.style.color = "red"
            }
        }

        //Fecha de creacion
        let campoFecha = document.querySelector("input.fecha")

        if (campoFecha.value == ""){
            errorFechaP.push("Complete con la fecha de registro de alta")
        } 

        if (errorFechaP.length > 0){
            let ulErrorFechaP = document.querySelector("div.errorFechaP")
            for (let i = 0; i < errorFechaP.length; i++){
                ulErrorFechaP.innerHTML = errorFechaP[i] 
                ulErrorFechaP.style.color = "red"
            }
        }

        //Imagen
        // let campoImagen = document.querySelector("input.imagen")

        // if (campoImagen.value == ""){
        //     errorImagenP.push("La imagen del producto es obligatoria")
        // }

        // if (errorImagenP.length > 0){
        //     let ulErrorImagenP = document.querySelector("div.errorImagenP")
        //     for (let i = 0; i < errorImagenP.length; i++){
        //         ulErrorImagenP.innerHTML = errorImagenP[i] 
        //         ulErrorImagenP.style.color = "red"
        //     }
        // }

        //descripcion
        let campoDescipcion = document.querySelector("input.descripcion")

        if (campoDescipcion.value == ""){
            errorDescripcionP.push("Debes ingresar una descripcion del producto")
        } else if (campoDescipcion.value.length < 8){
            errorDescripcionP.push("La descripcion debe tener al menos 8 caracteres")
        }

        if (errorDescripcionP.length > 0){
            let ulErrorDescripcionP = document.querySelector("div.errorDescripcionP")
            for (let i = 0; i < errorDescripcionP.length; i++){
                ulErrorDescripcionP.innerHTML = errorDescripcionP[i] 
                ulErrorDescripcionP.style.color = "red"
            }
        }

        if ((errorNombreP.length == 0) && (errorPrecioP.length == 0) && (errorFechaP.length == 0) && (errorDescripcionP.length == 0)) {
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'El nuevo producto fue añadido correctamente',
                showConfirmButton: false,
                timer: 1500
            })

            formulario.submit()
        }



    }) 

    })