function Mostrar()
{
	var numero = prompt("ingrese un número entre 0 y 10.");
while (numero < 0 || numero > 9) {
	var numero = prompt("ingrese un número entre 0 y 10.");
}
	document.getElementById("Numero").value = numero;
}