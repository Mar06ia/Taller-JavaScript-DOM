const formulario = document.getElementById('formulario');
const radio = document.getElementById('inputCirculo');
const resultado = document.getElementById('resultado');
formulario.addEventListener('submit',(evento)=>{
    evento.preventDefault();
    //typeof: nos dice el tipo de dato.
    //alert(typeof(radio));
    let area = Math.PI*(parseInt(radio.value)*parseInt(radio.value));
    // innerHtml: Permite modificar el valor del elemento html
    resultado.innerHTML = area;
});