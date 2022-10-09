function display(val) {
    document.getElementById('result').value += val;
}

function clearScreen() {
    document.getElementById('result').value = "";
}

function solve() {
    let x = document.getElementById('result').value;
    let y = eval(x);
    document.getElementById('result').value = y;
    return y;
}

/*
var operandoA;
var operandoB;
var operacion; 

function init(){
var siete = document.getElementById("result"); 
var siete = document.getElementById("clean");
var siete = document.getElementById("division");
var siete = document.getElementById("multiplicacion");
var siete = document.getElementById("siete");
var siete = document.getElementById("ocho");
var siete = document.getElementById("nueve");
var siete = document.getElementById("resta");
var siete = document.getElementById("cuatro");
var siete = document.getElementById("cinco");
var siete = document.getElementById("seis");
var siete = document.getElementById("suma");
var siete = document.getElementById("uno");
var siete = document.getElementById("dos");
var siete = document.getElementById("tres");
var siete = document.getElementById("tres");
var siete = document.getElementById("calculate");
var siete = document.getElementById("cero");
}

//Efectos de click
uno.onclick = function(e){
    resultado.textContent = resultado.textContent  +"1"; //llamar-traer element
} 
dos.onclick = function(e){
    resultado.textContent = resultado.textContent  +"2"; //llamar-traer element
} 
tres.onclick = function(e){
    resultado.textContent = resultado.textContent  +"3"; //llamar-traer element
} 
cuatro.onclick = function(e){
    resultado.textContent = resultado.textContent  +"4"; //llamar-traer element
} 
cinco.onclick = function(e){
    resultado.textContent = resultado.textContent  +"5"; //llamar-traer element
} 
seis.onclick = function(e){
    resultado.textContent = resultado.textContent  +"6"; //llamar-traer element
} 
siete.onclick = function(e){
    resultado.textContent = resultado.textContent  +"7"; //llamar-traer element
} 
ocho.onclick = function(e){
    resultado.textContent = resultado.textContent  +"8"; //llamar-traer element
} 
nueve.onclick = function(e){
    resultado.textContent = resultado.textContent  +"9"; //llamar-traer element
} 
cero.onclick = function(e){
    resultado.textContent = resultado.textContent  +"0"; //llamar-traer element
} 

//operadores
clean.onclick = function(e){
    reset();
 }
sum.onclick = function(e){
   operandoA = resultado.textContent;
   operacion = "+";
   cleanUp();
} 
substract.onclick = function(e){
    operandoA = resultado.textContent;
    operacion = "-";
    cleanUp();
} 
multiply.onclick = function(e){
    operandoA = resultado.textContent;
    operacion = "*";
    cleanUp();
} 
divide.onclick = function(e){
    operandoA = resultado.textContent;
    operacion = "/";
    cleanUp();
} 
equal.onclick = function(e){
    operandoB = resultado.textContent;
    calculate();
} 


//automatizar funcion cleanUp-reset
function cleanUp(){
    resultado.textContent = "";
} 
function reset(){
    resultado.textContent = "";
    operandoA = 0;
    operandoB = 0;
    operacion = "";
}

//Calcular
function calculate(){
    var result = 0;
    switch(operacion){
        case "+":
            result = parseFloat(operandoA) + parseFloat(operandoB);
            break;

        case "-":
            result = parseFloat(operandoA) - parseFloat(operandoB);
            break;

        case "*":
            result = parseFloat(operandoA) * parseFloat(operandoB);
            break;

        case "/":
            result = parseFloat(operandoA) / parseFloat(operandoB);
            break;
    }
    reset();
    resultado.textContent = result;
}*/
