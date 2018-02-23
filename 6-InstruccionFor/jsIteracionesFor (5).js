function Mostrar()
{
var num;

for( ;  ; )
{
num = parseInt(prompt("ingrese un numero:"));
    if(num == 9)
    {
    break;
    }
    alert("ingresaste un: "+ num );
}

alert("Salio. ingreso un 9");

}//FIN