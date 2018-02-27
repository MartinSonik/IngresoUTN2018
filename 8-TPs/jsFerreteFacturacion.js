/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    var precio1;
    var precio2;
    var precio3;
    var suma;

    precio1 = parseFloat(document.getElementById("PrecioUno").value);
    precio2 = parseFloat(document.getElementById("PrecioDos").value);
    precio3 = parseFloat(document.getElementById("PrecioTres").value);
    suma = precio1+precio2+precio3;
    alert("La suma de los precios es: "+ suma);
}
function Promedio () 
{
    var precio1;
    var precio2;
    var precio3;
    var suma;
    var promedioPrecios;

    precio1 = parseFloat(document.getElementById("PrecioUno").value);
    precio2 = parseFloat(document.getElementById("PrecioDos").value);
    precio3 = parseFloat(document.getElementById("PrecioTres").value);
    suma = precio1+precio2+precio3;
    promedioPrecios = suma/3;
    alert("El promedio de los precios es: "+ promedioPrecios);
}
function PrecioFinal () 
{
	var precio1;
    var precio2;
    var precio3;
    var suma;
    var precioFinal;

    precio1 = parseFloat(document.getElementById("PrecioUno").value);
    precio2 = parseFloat(document.getElementById("PrecioDos").value);
    precio3 = parseFloat(document.getElementById("PrecioTres").value);
    suma = precio1+precio2+precio3;
    precioFinal = suma*1.21;
    alert("El precio final de los productos es: "+ precioFinal);
}