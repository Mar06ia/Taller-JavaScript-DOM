
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

//TEMPERATURA
function conversor (){
    let opcion=document.getElementById('opcion').value;
    let opcion2=document.getElementById('opcion2').value;
    let temperatura=parseFloat(document.getElementById('temperatura').value);
    
    if(opcion=="fahrenheit" && opcion2=="celsius"){
        rta=(temperatura-32)*5/9;
        //Inicia Alerta
        Swal.fire({
            title: `Su temperatura en Celsius es: <br>${rta}`,
            position: 'top',
            confirmButtonText: 'Ok'
        })
        //Finaliza Alerta

    }else if(opcion=="fahrenheit" && opcion2=="kelvin"){
        rta=((temperatura-32)*5/9)+273.15;
        //Inicia Alerta
        Swal.fire({
            title: `Su temperatura en Kelvin es: <br>${rta}`,
            position: 'top',
            confirmButtonText: 'Ok'
        })
        //Finaliza Alerta

    }else if(opcion=="celsius" && opcion2=="fahrenheit"){
        rta=(temperatura*9/5)+32;
        //Inicia Alerta
        Swal.fire({
            title: `Su temperatura en Fahrenheit es: <br>${rta}`,
            position: 'top',
            confirmButtonText: 'Ok'
        })
        //Finaliza Alerta

    }else if(opcion=="celsius" && opcion2=="kelvin"){
        rta=(temperatura+273.15);
        //Inicia Alerta
        Swal.fire({
            title: `Su temperatura en Kelvin es: <br>${rta}`,
            position: 'top',
            confirmButtonText: 'Ok'
        })
        //Finaliza Alerta

    }else if(opcion=="kelvin" && opcion2=="celsius"){
        rta=(temperatura-273.15);
        //Inicia Alerta
        Swal.fire({
            title: `Su temperatura en Celsius es: <br>${rta}`,
            position: 'top',
            confirmButtonText: 'Ok'
        })
        //Finaliza Alerta

    }else if(opcion=="kelvin" && opcion2=="fahrenheit"){
        rta=((temperatura-273.15)*9/5)+32;
        //Inicia Alerta
        Swal.fire({
            title: `Su temperatura en Fahrenheit es: <br>${rta}`,
            position: 'top',
            confirmButtonText: 'Ok'
        })
        //Finaliza Alerta

    }else{
        //Inicia Alerta
        Swal.fire({
            icon: 'warning',
            title: `¡Las temperaturas no pueden ser iguales!`,
            position: 'top',
        })
        //Finaliza Alerta
    }
}
let enviar=document.getElementById('enviar').addEventListener('click',conversor);


//TRIANGULO
function triangulo(){
    let lado1=document.getElementById('lado1').value;
    let lado2=document.getElementById('lado2').value;
    let lado3=document.getElementById('lado3').value;

    if(lado1 == lado2 & lado2 == lado3){
        //Inicia Alerta
        Swal.fire({
            title: `Triangulo Equilatero`,
            position: 'top',
            footer: 'Todos sus lados son Iguales'
        })
        //Finaliza Alerta

    }else if(lado1 == lado2 || lado1 == lado3 || lado2 == lado3){
        
        //Inicia Alerta
        Swal.fire({
            title: `Triangulo Isoceles`,
            position: 'top',
            footer: 'Dos lados son Iguales'
        })
        //Finaliza Alerta

    }else{
        //Inicia Alerta
        Swal.fire({
            title: `Triangulo Escaleno`,
            position: 'top',
            footer: 'Todos sus lados son Diferentes'
        })
        //Finaliza Alerta
    }

}
let calcular=document.getElementById('calcular').addEventListener('click',triangulo);


//INSTRUCTORES
function comprobar(){
    let nombre=document.getElementById('nombre').value;
    let apellido=document.getElementById('apellido').value;
    let competencia=document.getElementById('competencia').value;

    if(nombre=="Tatiana"  && apellido=="Cabrera" && competencia=="Front-end" ||nombre=="Tatiana"  && apellido=="Cabrera" && competencia=="Calidad" ){
        //Inicia Alerta
        Swal.fire({
            icon: 'success',
            title: `Respuesta Correcta`,
            position: 'top',
        })
        //Finaliza Alerta

    }else if(nombre=="Carolina"  && apellido=="Forero" && competencia=="Seguimiento"){
        //Inicia Alerta
        Swal.fire({
            icon: 'success',
            title: `Respuesta Correcta`,
            position: 'top',
        })
        //Finaliza Alerta

    }else if(nombre=="Adriana"  && apellido=="Duarte" && competencia=="Diseño"){
        //Inicia Alerta
        Swal.fire({
            icon: 'success',
            title: `Respuesta Correcta`,
            position: 'top',
        })
        //Finaliza Alerta

    }else if(nombre=="Yaneth"  && apellido=="Castillo" && competencia=="Ambiental"){
        //Inicia Alerta
        Swal.fire({
            icon: 'success',
            title: `Respuesta Correcta`,
            position: 'top',
        })
        //Finaliza Alerta

    }else if(nombre=="Jhonatan"  && apellido=="Espitia" && competencia=="Php"){
        //Inicia Alerta
        Swal.fire({
            icon: 'success',
            title: `Respuesta Correcta`,
            position: 'top',
        })
        //Finaliza Alerta


    }else if(nombre=="Luis"  && apellido=="Baquero" && competencia=="Cultura Fisica"){
        //Inicia Alerta
        Swal.fire({
            icon: 'success',
            title: `Respuesta Correcta`,
            position: 'top',
        })
        //Finaliza Alerta

    }else if(nombre=="Fernando"  && apellido=="Galindo" && competencia=="Base de Datos"){
        //Inicia Alerta
        Swal.fire({
            icon: 'success',
            title: `Respuesta Correcta`,
            position: 'top',
        })
        //Finaliza Alerta

    }else{
        //Inicia Alerta
        Swal.fire({
            icon: 'error',
            title: `Respuesta Incorrecta`,
            position: 'top',
        })
        //Finaliza Alerta
    }

}
let seleccionar=document.getElementById('seleccionar').addEventListener('click',comprobar);



