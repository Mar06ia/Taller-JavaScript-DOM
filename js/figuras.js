/*-----------------------------CIRCULO---------------------*/
const areaCirculo = document.getElementById('area-circulo');
const perimetroCirculo = document.getElementById('perimetro-circulo');

areaCirculo.addEventListener("click",()=>{
    //alert('funciona:)');
    let radio=parseInt
        (prompt("Ingrese el valor del radio"));
    //math: Metodo Funciones Matematicas
    let areac=Math.PI*(radio*radio);
    Swal.fire({
        title: `El area del Circulo es: <br> ${areac}`,
        position: 'top'
    })

    //alert(`El area del Circulo es :${areac}`);
});

perimetroCirculo.addEventListener("click",()=>{
    //alert('funciona:)');
    let radio=parseInt(prompt("Ingrese el valor del radio"));
    let perimetroc=2*Math.PI*radio;
    Swal.fire({
        title: `El Perimetro del Circulo es:<br>${perimetroc}`,
        position: 'top'
    })
})


/*----------------------------CUADRADO----------------------*/
const areaCuadrado = document.getElementById('area-cuadrado');
const perimetroCuadrado = document.getElementById('perimetro-cuadrado');

areaCuadrado.addEventListener("click",()=>{
    //alert('funciona:)');
    let lado=parseInt(prompt("Ingrese el lado"));
    //math: Metodo Funciones Matematicas
    let areacu=lado*lado;
    Swal.fire({
        title: `El area del Cuadrado es :<br>${areacu}`,
        position: 'top'
    })
});

perimetroCuadrado.addEventListener("click",()=>{
    //alert('funciona:)');
    let lado=parseInt(prompt("Ingrese el valor del lado"));
    let perimetrocu=lado*4;
    Swal.fire({
        title: `El Perimetro del Cuadrado es :<br>${perimetrocu}`,
        position: 'top'
    })
})

/*-------------------------RECTANGULO-----------------------*/
const areaRectangulo = document.getElementById('area-rectangulo');
const perimetroRectangulo = document.getElementById('perimetro-rectangulo');

areaRectangulo.addEventListener("click",()=>{
    //alert('funciona:)');
    let base=parseInt(prompt("Ingrese el valor del primer lado"));
    let altura=parseInt(prompt("Ingrese el valor del segundo lado"));
    //math: Metodo Funciones Matematicas
    let arearec=base*altura;
    Swal.fire({
        title: `El area del Rectangulo es :<br>${arearec}`,
        position: 'top'
    })
});

perimetroRectangulo.addEventListener("click",()=>{
    //alert('funciona:)');
    let base=parseInt(prompt("Ingrese el valor del primer lado"));
    let altura=parseInt(prompt("Ingrese el valor del segundo lado"));
    let perimetrorec=2*(base+altura);
    Swal.fire({
        title: `El Perimetro del Rectangulo es: <br>${perimetrorec}`,
        position: 'top'
    })
})


/*--------------------------TRIANGULO------------------------*/
const areaTriangulo = document.getElementById('area-triangulo');
const perimetroTriangulo = document.getElementById('perimetro-triangulo');

areaTriangulo.addEventListener("click",()=>{
    //alert('funciona:)');
    let base=parseInt(prompt("Ingrese el valor del primer lado"));
    let altura=parseInt(prompt("Ingrese el valor del segundo lado"));
    //math: Metodo Funciones Matematicas
    let areatri=base*altura/2;
    Swal.fire({
        title: `El area del Triangulo es :<br>${areatri}`,
        position: 'top'
    })
});

perimetroTriangulo.addEventListener("click",()=>{
    //alert('funciona:)');
    let base=parseInt(prompt("Ingrese el valor de la base"));
    let altura=parseInt(prompt("Ingrese el valor del segundo lado"));
    let perimetrotri=(base+altura)*2;
    console.log(perimetrotri);
    Swal.fire({
        title: `El Perimetro del Triangulo es :<br>${perimetrotri}`,
        position: 'top'
    })

})

