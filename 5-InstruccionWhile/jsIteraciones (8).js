function Mostrar()
{
	var numero
	var flag = 0;
	var positivo=0;
	var negativo=1;
	var respuesta;
		do
	{ 
		numero = parseInt(prompt("Ingrese un numero: "));
		if ( numero >= 1) 
		{
			positivo = positivo + numero;
		}
		else
		{
			negativo = negativo * numero;
			flag = 1;
		}		 		
				respuesta = prompt("Desea continuar?: si/no");
	}
	while ( respuesta == "si" );

document.getElementById('suma').value=positivo;
if (flag == 0)
{ 
	negativo = 0;
}
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN