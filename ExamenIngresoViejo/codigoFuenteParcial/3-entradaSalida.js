//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
    var ancho;
    var largo;
    var perimetro;
    var cantidadAlambre;

    ancho = parseInt(document.getElementById("ancho").value);
    largo = parseInt(document.getElementById("largo").value);
    perimetro = ancho*2 + largo*2;
    cantidadAlambre = perimetro *6;

    alert("La cantidad de alambre necesaria es: "+cantidadAlambre);

}

