function Mostrar()
{
var numero;
var contador=0;
var acumulador=0;
var respuesta;
var promedio;
	    do
		{
		numero = parseInt(prompt("Ingrese un numero: "));
		acumulador = acumulador + numero;
		contador++;
		respuesta = prompt("Desea continuar?: si/no");
		}
        while ( respuesta == "si");
		promedio = acumulador/contador;

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=promedio;

}//FIN