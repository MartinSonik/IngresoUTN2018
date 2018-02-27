/*2.	Para el departamento de Construcción:
A.	 Mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	Mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    var largo;
    var ancho;
    var terreno;
    var cantAlambre;

    largo = parseFloat(document.getElementById("Largo").value);
    ancho = parseFloat(document.getElementById("Ancho").value);
    terreno = largo* 2 + ancho*2;
    cantAlambre = terreno*3;

alert("Se debe comprar "+cantAlambre+" Mts");
}
function Circulo () 
{
    var radio;
    var diametro;
    var circunferencia;
    var cantAlambre;

    radio = parseFloat(document.getElementById("Radio").value);
    diametro = radio *2;
    circunferencia = diametro*3.14;
    cantAlambre = circunferencia*3;

alert("Se debe comprar "+cantAlambre+" Mts");
}
function Materiales () 
{
	var largo;
    var ancho;
    var terreno;
    var cantAlambre;
    var cemento;
    var cal;
    largo = parseFloat(document.getElementById("Largo").value);
    ancho = parseFloat(document.getElementById("Ancho").value);
    terreno = largo*ancho;
    cemento = terreno*2;
    cal = terreno*3
    
    alert("Se debe comprar "+cemento+" bolsas de cemento y "+cal+" bolsas de cal");
}