function Mostrar()
{
var sexo = prompt("ingrese f ó m .");
while( !(sexo == 'f' || 'm' ))
    {
	sexo = prompt("Error. Reingrese f ó m .");
	}

document.getElementById('Sexo').value=sexo;

}//FIN DE LA FUNCIÓN