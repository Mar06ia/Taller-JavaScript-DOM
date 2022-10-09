
//PALABRAS
function letras(opcion){
    let palabra=document.getElementById('palabra').value;
    
    if(opcion=="mayuscula"){
        rta =palabra.toUpperCase();
        //Inicia Alerta
        Swal.fire({
            title: `Mayúsculas <br>${rta}`,
            position: 'top',
            confirmButtonText: 'Ok'
        })
        //Finaliza Alerta
    }else if(opcion=="minuscula"){
        rta =palabra.toLowerCase();
        //Inicia Alerta
        Swal.fire({
            title: `Minúsculas <br>${rta}`,
            position: 'top',
            confirmButtonText: 'Ok'
        })
        //Finaliza Alerta
    }else if(opcion=="longitud"){
        rta =palabra.length;
        //Inicia Alerta
        Swal.fire({
            title: `Longitud <br>${rta}`,
            position: 'top',
            confirmButtonText: 'Ok'
        })
        //Finaliza Alerta

    }else if(opcion=="caracter"){
        rta =palabra.charAt();
        //Inicia Alerta
        Swal.fire({
            title: `Caracter <br>${rta}`,
            position: 'top',
            confirmButtonText: 'Ok'
        })
        //Finaliza Alerta
        
    }else{
        //Inicia Alerta
        Swal.fire({
            title: `Error`,
            icon: 'error',
            position: 'top',
        })
        //Finaliza Alerta
    }
}
let mayuscula=document.getElementById('mayuscula').addEventListener('click',function fun(){letras("mayuscula")});
let minuscula=document.getElementById('minuscula').addEventListener('click',function fun(){letras("minuscula")});
let longitud=document.getElementById('longitud').addEventListener('click',function fun(){letras("longitud")});
let caracter=document.getElementById('caracter').addEventListener('click',function fun(){letras("caracter")});


