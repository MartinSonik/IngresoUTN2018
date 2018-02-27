function Mostrar()
{
   var numero = parseInt(prompt("ingrese un numero:"));
   var esPrimo = true;

   for (var i=2 ; i<numero ; i++)
    {
        if(numero%i == 0 )
        {
        esPrimo = false;
        break;
        }	
    }   

    if (esPrimo == true)
    {
        alert(numero+" es Primo");
    }
    else
    {
        alert(numero+" no es primo");
    }
}//FIN