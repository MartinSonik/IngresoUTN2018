function Mostrar()
{
    var mesDelAño = document.getElementById('mes').value;
    switch(mesDelAño)
    {   
        case"Febrero":
        alert ("tiene 28 días");
        break;
        case "Enero":
        case "Marzo":
        case "Mayo":
        case "julio":
        case "Agosto":
        case "Octubre":
        case "Diciembre":
        alert ("tiene 31 días");
        break
        default:
        alert ("tiene 30 días");
        break
	}
}//FIN