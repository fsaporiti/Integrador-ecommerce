window.addEventListener("load", function (){

    let formulario = document.querySelector("form.formulario-registrarse");
    let botonCrearUsuario = document.querySelector(".boton-login-registrar");
    
    formulario.addEventListener("submit", function(e){

        e.preventDefault()
        let errorNombre = []
        let errorApellido = []
        let errorEmail = []
        let errorPassword = []
        let errorPassword2 = []

        //Nombre
        let campoNombre = document.querySelector("input.nombre")

        if (campoNombre.value == ""){
            errorNombre.push("El campo nombre es obligatorio")
        } else if (campoNombre.value.length < 4) {
            errorNombre.push("El campo nombre debe tener al menos 4 letras")
        } 

        if (errorNombre.length > 0){
            let ulErrorNombre = document.querySelector("div.errorNombre")
            for (let i = 0; i < errorNombre.length; i++){
                ulErrorNombre.innerHTML = errorNombre[i] 
                ulErrorNombre.style.color = "red"
            }
        }

        //Apellido
        let campoApellido = document.querySelector("input.apellido")

        if (campoApellido.value == ""){
            errorApellido.push("El campo apellido es obligatorio")
        } 

        if (errorApellido.length > 0){
            let ulErrorApellido = document.querySelector("div.errorApellido")
            for (let i = 0; i < errorApellido.length; i++){
                ulErrorApellido.innerHTML = errorApellido[i] 
                ulErrorApellido.style.color = "red"
            }
        }

        //Email
        let campoEmail = document.querySelector("input.email")

        if ((campoEmail.value == "") || (!campoEmail.value.includes("@")) ){
            errorEmail.push("Complete el email en un formato correspondiente")
        } else if (campoEmail.value.length < 10){
            errorEmail.push("El email debe tener una longitud minima de 10 caracteres")
        }

        if (errorEmail.length > 0){
            let ulErrorEmail = document.querySelector("div.errorEmail")
            for (let i = 0; i < errorEmail.length; i++){
                ulErrorEmail.innerHTML = errorEmail[i] 
                ulErrorEmail.style.color = "red"
            }
        }

        //Contraseña
        let campoContraseña = document.querySelector("input.contraseña")

        if (campoContraseña.value == ""){
            errorPassword.push("La contraseña es obligatoria")
        } else if (campoContraseña.value.length < 8){
            errorPassword.push("La contraseña debe tener al menos 8 caracteres")
        }

        if (errorPassword.length > 0){
            let ulErrorContraseña = document.querySelector("div.errorContraseña")
            for (let i = 0; i < errorPassword.length; i++){
                ulErrorContraseña.innerHTML = errorPassword[i] 
                ulErrorContraseña.style.color = "red"
            }
        }

        //Repetir Contraseña
        let campoContraseña2 = document.querySelector("input.contraseña2")

        if ((campoContraseña2.value == "") || (campoContraseña2.value != campoContraseña.value)){
            errorPassword2.push("Las contraseñas no coinciden")
        } else if (campoContraseña.value.length < 8){
            errorPassword2.push("La contraseña debe tener al menos 8 caracteres")
        }

        if (errorPassword2.length > 0){
            let ulErrorContraseña2 = document.querySelector("div.errorContraseña1")
            for (let i = 0; i < errorPassword2.length; i++){
                ulErrorContraseña2.innerHTML = errorPassword2[i] 
                ulErrorContraseña2.style.color = "red"
            }
        }

        if ((errorNombre.length == 0) && (errorApellido.length == 0) && (errorEmail.length == 0) && (errorPassword.length == 0) && (errorPassword2.length == 0)){
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Usuario creado correctamente',
                showConfirmButton: false,
                timer: 1500
            })
            formulario.submit()
        }


    })
    
    
})