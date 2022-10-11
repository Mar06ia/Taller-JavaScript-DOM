const formulario = document.getElementById('formulario'); 
const inputs = document.querySelectorAll('#formulario input'); 

//objeto expresiones regulares
const expresiones = {
    //usuario: /^[a-zA-Z0-9\_\-]{4,16}$/,
    documento: /^\d{10,15}$/,
    nombre: /^[a-zA-ZÁ-ÿ\s]{1,40}$/,
    apellido: /^[a-zA-ZÁ-ÿ\s]{1,40}$/,
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    password: /^.{4,12}$/,
    //telefono: /^\d{7,14}$/
}
//names de  inputs
const campos = {
    //usuario: false,
    documento: false,
    nombre: false,
    apellido: false,
    correo: false,
    password: false,
    //telefono: false
};

//VALIDAR INPUTS
const validarFormulario = (evento)=>{
    
    switch (evento.target.name) {
    case "documento":
            validarCampo(expresiones.documento, evento.target ,evento.target.name);
    break;

    //  propiedad evento permite acceder al name de los input
    case "nombre":
        //console.log("Funciona");
        validarCampo(expresiones.nombre, evento.target ,evento.target.name);
    break;

    case "apellido":
        validarCampo(expresiones.apellido, evento.target ,evento.target.name);
            
    break;
    case "correo":
        validarCampo(expresiones.correo, evento.target ,evento.target.name);
    break;
    case "password":
        validarCampo(expresiones.password, evento.target ,evento.target.name);
        validarPasswords();
    break;

    case "password2":
        validarPasswords();
    break;
    default:
    break;
    }
}

//VALIDAR CONTRASEÑA
const validarPasswords= ()=>{
    const inputPasswordFirst = document.getElementById('password')
    const inputPasswordSecond = document.getElementById('password2')

    if (inputPasswordFirst.value !== inputPasswordSecond.value) {
        document.getElementById(`grupo__password2`).classList.add('formulario__grupo-incorrecto');
        document.getElementById(`grupo__password2`).classList.remove('formulario__grupo-correcto');
        document.querySelector(`#grupo__password2 .formulario__input-error`).classList.add('formulario__input-error-activo');
        campos['password'] = false;
    } else {
        document.getElementById(`grupo__password2`).classList.remove('formulario__grupo-incorrecto');
        document.getElementById(`grupo__password2`).classList.add('formulario__grupo-correcto');
        document.querySelector(`#grupo__password2 .formulario__input-error`).classList.remove('formulario__input-error-activo');
        campos['password'] = true;
    }
}

//  VALIDAR CAMPO(input) del formulario
//constante-reglas-objeto-funcion
const validarCampo = (expresion, input, campo) => {

            //metodo test:comprueba si la expresion es valida
            if (expresion.test(input.value)) {
                // 1. buscamos el div con el id grupo__usuario
                // 2. a ese div accedemos a su lista de clases con classlist
                // 3. con remove quitamos una clase en este caso formulario__grupo-incorrecto
                document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
                // agregamos una clase que nos mostrara en color verde de correcto
                document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
                document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');

                // cambiar el estado si un campo esta bien o no
                campos[campo] = true;
            }else{
                // 1. buscamos el div con el id grupo__usuario
                // 2. a ese div accedemos a su lista de clases con classlist
                // 3. con add añadimos una clase que indicara al usuario que hay un error
                document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
                document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
            }
}

//metodo FOREACH
inputs.forEach((input)=>{
    //evento: keyup(activar)
    input.addEventListener('keyup', validarFormulario);
    //evento: blur(click fuera del input)
    input.addEventListener('blur', validarFormulario); 
})

//VALIDAR ENVIO
formulario.addEventListener('submit',(evento) => {
    evento.preventDefault(); //metodo evitar envio

    // TERMINOS Y CONDICIONES
    const terminos = document.getElementById('terminos');

    if (campos.usuario && campos.nombre && campos.password && campos.correo && campos.telefono && terminos.checked) {
        formulario.reset();
        document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');
        document.querySelectorAll('formulario__grupo-correcto').forEach((icono)=>{
            icono.classList.remove('formulario__grupo-correcto');
        })
    } else{
        document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo')
    }
})