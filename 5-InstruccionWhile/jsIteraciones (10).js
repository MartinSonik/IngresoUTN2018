function Mostrar()
{
var acumPositivos =0;
var acumNegativos =0;
var contPositivos =0;
var contNegativos =0;
var contPares =0;
var contCeros =0;
var promedioPositivos =0;
var promedioNegativos =0;
var diferencia;
var numero;
var seguir;


do
{
	numero = parseInt(prompt("ingrese un numero: "));
			
		if (numero > 0)
		{
		acumPositivos = acumPositivos + numero;
		contPositivos++;
			if( numero%2 == 0)
			{
			contPares++;
			}
		}
		else if( numero < 0)
		{
		acumNegativos = acumNegativos + numero;
		contNegativos++;
			if( numero%2 == 0)
			{
			contPares++;
			}
		}
		else
		{
		contCeros++;
		}

seguir = prompt("Desea continuar?: s/n");
}	while( seguir == 's')

if (contNegativos != 0)
{
promedioNegativos = acumNegativos/contNegativos;
}
if (contPositivos != 0)
{
promedioPositivos = acumPositivos/contPositivos;	
}
diferencia = acumPositivos-acumNegativos;

document.write("1-Suma de los negativos: " + acumNegativos + "<br/>");
document.write("2-Suma de los positivos: " + acumPositivos + "<br/>");
document.write("3-Cantidad de positivos: " + contPositivos + "<br/>");
document.write("4-Cantidad de negativos:  " + contNegativos + "<br/>");
document.write("5-Cantidad de ceros: " + contCeros + "<br/>");
document.write("6-Cantidad de números pares: " + contPares + "<br/>");
document.write("7-Promedio de positivos: " + promedioPositivos + "<br/>");
document.write("8-Promedios de negativos: " + promedioNegativos + "<br/>");
document.write("9-Diferencia entre positivos y negativos: " + diferencia + "<br/>");

}//FIN