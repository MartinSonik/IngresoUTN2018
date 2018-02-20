function Mostrar()
{
	var numero;
	var max;
	var min;
	var flag = 0?
	var respuesta='s';

	numero = parseInt(prompt("ingrese un numero"));
	do
	{
		if (numero < min || flag ==0 )
		{
			min = numero;
		}
		if (numero > max || flag ==0 )
		{
			max = numero;
			flag = 1;
		}
		
		respuesta = prompt("Desea continuar?: s/n");
	}
	while ( respuesta == "s" );
	document.getElementById('maximo').value=max;

	document.getElementById('minimo').value=min;

}//FIN DE LA FUNCIÓN