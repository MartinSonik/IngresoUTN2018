/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	var num1;
    var num2;
    var resto;

    num1 = parseInt(document.getElementById("numeroUno").value);
    num2 = parseInt(document.getElementById("numeroDos").value);
    resto = num1 % num2;

    alert("El resto es: "+ resto);
}
