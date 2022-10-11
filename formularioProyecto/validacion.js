//Acceder al formulario por su id y sus campos
const form = document.getElementById('formulario'); //buscamos el id con nombre formulario
const  inputs= document.querySelectorAll('#formulario input'); //Selecciona todos las etiquetas input y las guarda en un array
//console.log(campos);



//Objeto con expresiones regulares
const reglas = {
    usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, 
    textos:  /^[a-zA-ZÀ-ÿ\s]{1,40}$/, 
    password: /^[a-zA-Z0-9\_\-]{4,16}$/, 
    correo: /^[a-zA- Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    numeros: /^\d{7,14}$/ 
}

// lista de los names de los input
const campos = {
    usuario: false,
    nombre: false,
    password: false,
    correo: false,
    telefono: false
};



/*-----------------------------------------------------------------------------------------
------------------------------------invocar función y enviarla-------------------------------------
------------------------------------------------------------------------------------------------ */
// función que va a validar los input de mi formulario
const validarFormulario = (e) => {
    // validar por medio de los names de los inputs
    // con la propiedad evento accedemos al name de los input

    switch(e.target.name){
        //como se observa en cada case haremos una validación
        case "nombre":
        //esto solo se ejecutará cuando el name input sea nombre(name="nombre")
        console.log("Funciona");
            validarInput(reglas.numeros,e.target,e.target.name);
        break;
        
        case "options":
            validarInput(reglas.textos,e.target,e.target.name);
        break;

        case "documento":
            validarInput(reglas.numeros,e.target,e.target.name);
        break;
        
        case "correo":
            validarInput(reglas.correo,e.target,e.target.name);
        break;
        
        case "telefono":
            validarInput(reglas.numeros,e.target,e.target.name);
        break;

        case "contrasena":
            validarInput(reglas.contrasena,e.target,e.target.name);
            validarPassword();
        break;
        
        case "repetircontraseña":
            validarPassword();//validar contrasena
        break;
    }   
}

// functión para valida campo(input) del formulario
const validarInput = (reglas, input, campo) => {
        // le paso por parametro la expresion que deseo usar del objeto expresiones puede ser nombre, usuario...
        // en segundo le paso el name del input que voy a validar 
        // el campo se usara para editar en el html el campo requerido


    // dentro del if, accedemos a la propiedad usuario del objeto expresiones
    //el metodo test comprueba si se cumple o no la expresion, osea si es valida o no
	if(reglas.test(input.value)){

        // 1. buscamos el div con el id grupo__usuario
        // 2. a ese div accedemos a su lista de clases con classlist
        // 3. con remove quitamos una clase en este caso formulario__grupo-incorrecto
		document.getElementById(`grupo__${inputs}`).classList.remove('msn-error');
		document.getElementById(`grupo__${inputs}`).classList.add('msn-succes');
		document.querySelector(`#grupo__${inputs} .msm-error`).classList.remove('msn-error-visible');
		inputs[campo] = true;
        console.log("correcto");
	} else {
		document.getElementById(`grupo__${inputs}`).classList.add('msn-error');
		document.querySelector(`#grupo__${inputs} .msm-error`).classList.add('msn-error-visible');
		inputs[campo] = false;
	}
}

// función que nos va a comparar que ambas contraseñas sean iguales
const validarContrasena = () => {

	const inputcontrasena1 = document.getElementById('contrasena');
	const inputcontrasena2 = document.getElementById('contrasena2');

	if(inputcontrasena1.value !== inputcontrasena2.value){
		document.getElementById(`grupo__contrasena2`).classList.add('msn-error');
		document.getElementById(`grupo__contrasena2`).classList.remove('msn-succes');
		document.querySelector(`#grupo__contrasena2 .msm-error`).classList.add('msn-error-visible');
		campos['contrasena'] = false;
	} else {
		document.getElementById(`grupo__contrasena2`).classList.remove('msn-error');
		document.getElementById(`grupo__contrasena2`).classList.add('msn-succes');
		document.querySelector(`#grupo__contrasena2 .msm-error`).classList.remove('msn-error-visible');
		campos['contrasena'] = true;
	}
}

inputs.forEach((campo )=>{//usamos método forEach para recorrer cada input del array

    //2.evento keyup=>activar
    campo.addEventListener('keyup', validarFormulario);
    //3. evento Clic fuera del input
    campo.addEventListener('blur', validarFormulario);
});

//evento tipo submit sobre el formulario con función para validar campos
form.addEventListener('submit', (e) =>{
    e.preventDefault (); //evitar envió 

});


