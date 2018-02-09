function Mostrar()
{
    var edad;
    edad = document.getElementById("edad").value;
    if(edad < 13)
    {
        alert("Es un niño");
    }
    else if (edad >17)
    {
        alert("Es un adulto");
    }
    else
    {
        alert("es un adolecente");
    }



}//FIN DE LA FUNCIÓN