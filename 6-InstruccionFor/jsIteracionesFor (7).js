function Mostrar()
{
    var numero;
    var contDivi=0;
    
    numero = parseInt(prompt("ingrese un numero:"));
        for( var i=1;i<=numero;i++)
        {
           if(numero%i == 0)
           {
               console.log(i);
               contDivi++;
           }
        }
        console.log("Cantidad de Divisores: "+ contDivi);
}//FIN