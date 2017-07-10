function Mostrar()
{
var num;
var contador=0;
var acumulador=0;

while (contador < 5) {
	contador = contador + 1;
	num = prompt("Ingresar un número");
	num = parseInt(num);
	console.log(num); 
	while (isNaN(num)) {
		num = prompt("Ingrese un verdadero número");
		num = parseInt(num);
	}
	acumulador = acumulador + num;

}
document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;
}