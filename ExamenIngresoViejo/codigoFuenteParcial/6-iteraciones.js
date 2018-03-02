//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
    var importeVentas;
    var mayorVentas;
    var menorVentas;
    var flag = 0;
    
    for (var i=0;i<7;i++)
    importeVentas = parseFloat(prompt("ingrese el importe de las ventas: "));
        while (venta <=0)
        {
            importeVentas = parseFloat(prompt("Error. Ingrese importe positivo: "));
        }
            if (importeVentas > mayorVentas || flag ==0 )
            {
                mayorVentas = importeVentas;
            }
            if (importeVentas < menorVentas || flag == 0)
            {
                menorVentas = importeVentas;
                flag = 1;
            }

                alert("El mayor importe de ventas fue "+mayorVentas+" y el menor fue "+menorVentas);
}

