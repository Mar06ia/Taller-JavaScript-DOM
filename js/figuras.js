/*-----------------------------AREA CIRCULO---------------------*/
const formulario = document.getElementById('formularioAC');
const radio = document.getElementById('inputAreaCirculo');
const resultado = document.getElementById('resultadoAreaCirculo');

formulario.addEventListener('submit',(evento)=>{
    evento.preventDefault();
    //math: Metodo Funciones Matematicas
    let area = Math.PI*(parseInt(radio.value)*parseInt(radio.value));
    // innerHtml: Permite modificar el valor del elemento html
    resultado.innerHTML = area;
});

/*-----------------------------PERÍMETRO CIRCULO---------------------*/
const formularioPC = document.getElementById('formularioPC');
const radioPC = document.getElementById('inputPC');
const resultadoPC = document.getElementById('resultadoPC');

formularioPC.addEventListener('submit',(evento)=>{
    evento.preventDefault();
    //typeof: nos dice el tipo de dato.
    //alert(typeof(radio));
    let perimetroc =2*Math.PI*(parseInt(radioPC.value)*parseInt(radioPC.value));
    // innerHtml: Permite modificar el valor del elemento html
    resultadoPC.innerHTML = perimetroc;
});


/*----------------------------AREA CUADRADO----------------------*/
const formularioAcu = document.getElementById('formularioACu');
const lado = document.getElementById('inputAreaCuadrado');
const resultadoAcu = document.getElementById('resultadoAreaCuadrado');

formularioAcu.addEventListener('submit',(evento)=>{
    evento.preventDefault();
    //math: Metodo Funciones Matematicas
    let areacu =parseInt((lado.value)*(lado.value));
    // innerHtml: Permite modificar el valor del elemento html
    resultadoAcu.innerHTML = areacu;
});

/*-----------------------------PERÍMETRO CUADRADO---------------------*/
const formularioPCu =document.getElementById('formularioPCu');
const ladoP = document.getElementById('inputPCu');
const resultadoPcu = document.getElementById('resultadoPCu');

formularioPCu.addEventListener('submit',(evento)=>{
    evento.preventDefault();
    //math: Metodo Funciones Matematicas
    let perimetrocu =parseInt(ladoP.value*4);
    // innerHtml: Permite modificar el valor del elemento html
    resultadoPcu.innerHTML = perimetrocu;
});


/*-------------------------AREA RECTANGULO-----------------------*/
const formularioARec = document.getElementById('formularioARec');
const base = document.getElementById('inputARectangulo1');
const altura = document.getElementById('inputARectangulo2');
const resultadoARec = document.getElementById('resultadoARec');

formularioARec.addEventListener('submit',(evento)=>{
    evento.preventDefault();
    //math: Metodo Funciones Matematicas
    let arearectangulo=parseInt((base.value)*(altura.value));
    // innerHtml: Permite modificar el valor del elemento html
    resultadoARec.innerHTML = arearectangulo;
});


/*--------------------PERIMETRO RECTANGULO-----------------------*/
const formularioPRec = document.getElementById('formularioPRec');
const baseP2 =document.getElementById('inputPRectangulo1');
const alturaP2 =document.getElementById('inputPRectangulo2');
const resultadoPRec = document.getElementById('resultadoPRec');

formularioPRec.addEventListener('submit',(evento)=>{
    evento.preventDefault();
    //math: Metodo Funciones Matematicas
    let perimetrorec=parseInt((2*(baseP2.value))+(alturaP2.value));
    //let perimetrorectangulo=2*Math(parseInt((baseP2.value))*(parseInt(alturaP2)));
    // innerHtml: Permite modificar el valor del elemento html
    resultadoPRec.innerHTML = perimetrorec;
});

/*--------------------------AREA TRIANGULO------------------------*/
const formularioATri = document.getElementById('formularioATri');
const baseTri = document.getElementById('inputATriangulo1');
const alturaTri = document.getElementById('inputATriangulo2');
const resultadoATri = document.getElementById('resultadoATri');

formularioATri.addEventListener('submit',(evento)=>{
    evento.preventDefault();
    //math: Metodo Funciones Matematicas
    let areatri=parseInt((baseTri.value)*(alturaTri.value)/2);
    // innerHtml: Permite modificar el valor del elemento html
    resultadoATri.innerHTML = areatri;
});


/*--------------------------PERIMETRO TRIANGULO------------------------*/
const formularioPTri =document.getElementById('formularioPTri');
const basePTri2 =document.getElementById('inputPTriangulo1');
const alturaPTri2 =document.getElementById('inputPTriangulo2');
const alturaPTri3 =document.getElementById('inputPTriangulo3');
const resultadoTri = document.getElementById('resultadoPTri');

formularioPTri.addEventListener('submit',(evento)=>{
    evento.preventDefault();
    //math: Metodo Funciones Matematicas
    //let perimetrotri=parseInt((basePTri2+alturaPTri2+alturaPTri3).value);
    let perimetrotri=(parseInt((basePTri2.value))+(parseInt(alturaPTri2.value))+(parseInt(alturaPTri3.value)));
    // innerHtml: Permite modificar el valor del elemento html
    resultadoPTri.innerHTML = perimetrotri;
});



