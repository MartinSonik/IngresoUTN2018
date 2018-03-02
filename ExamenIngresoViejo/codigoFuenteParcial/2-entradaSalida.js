//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
    var importe;
    var importeFinal;

    importe = prompt("Ingrese Importe: ");
    importeFinal = importe*1.21;

    alert("El importe mas IVA es: "+importeFinal);
    
}

