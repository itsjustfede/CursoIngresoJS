function Mostrar()
{
var contador=0;
var acumulador=0;
var respuesta=true;
var num;

while (respuesta == true) {
	contador ++;
	num = prompt("Ingrese un número");
	num = parseInt(num);
	while (isNaN(num)) {
		num = prompt("Ingrese un verdadero número");
		num = parseInt(num);
	}
	respuesta = confirm("¿Queres seguir agregando números?");
acumulador = acumulador + num;
}
document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;
}
