window.addEventListener("load", function(){
    let formu = document.querySelector('.formulario-eliminar');
    let botonBorrado = document.querySelector('#botonBorrado')

    formu.addEventListener("submit", function(event){
        event.preventDefault()
        Swal.fire({
            title: '¿Estas seguro?',
            text: "No lo podras revertir",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, borralo'
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire(
                'Eliminado',
                'El usuario ha sido eliminado',
                'success'
              )
              formu.submit();
            }
        })

        
    })
})