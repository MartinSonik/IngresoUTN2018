//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
    var numero1 = (prompt("ingrese un numero: "));
    var numero2 = (prompt("Ingrese otro numero: "));
    var resultado

    if ( numero1 == numero2 )
    {
                resultado = numero1+numero2;
    }
    else if( parseInt(numero1) > parseInt(numero2))
    {
        parseInt(numero1);
        parseInt(numero2);
        resultado = numero1-numero2;
    }
    else
    {
        parseInt(numero1);
        parseInt(numero2);
        resultado = numero1+numero2;
    }
    document.write("El resultado es "+resultado);
}


