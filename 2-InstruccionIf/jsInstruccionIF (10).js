function Mostrar()
{
	var nota;
	
		nota = Math.floor (Math.random()*10 ) + 1 ;
		if(nota < 4 )
		{
			alert(nota + " Vamos, la proxima se puede");
		}
		else if (nota < 9 )
		{
			alert(nota + " Aprobaste");
		}
		else
		{
			alert(nota + " Excelente");
		}
	

}