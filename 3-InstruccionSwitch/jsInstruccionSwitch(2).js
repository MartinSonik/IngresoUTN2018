function Mostrar()
{
//tomo el mes 
var mesDelAño = document.getElementById('mes').value;
switch(mesDelAño)
{   
    case"Julio":
    alert ("Abrigate que hace frio");
    break;
    case "Agosto":
    alert ("Abrigate que hace frio");
    break;
    case "Junio":
    case "Abril":
    case "Mayo":
    alert ("Falta para el invierno")
    break;
    default:
    alert ("Ya pasamos el frio, ahora calor!!!");
    break
}

}//FIN DE LA FUNCIÓN