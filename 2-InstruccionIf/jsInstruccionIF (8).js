function Mostrar()
{
var edad;
var estadoCivil;
    
    edad = document.getElementById("edad").value;
    estadoCivil = document.getElementById("estadoCivil").value;
    
    if (edad > 18 && estadoCivil == "Soltero")
    {
        alert ("Es soltero y No es menor");
    }

	
}