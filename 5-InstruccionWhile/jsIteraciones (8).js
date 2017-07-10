function Mostrar()
{
var acumuladorsuma=0;
var acumuladormulti=1;
var respuesta=true;
var num;

while (respuesta == true) {
	num = prompt("Ingrese un numero");
	num = parseInt(num);
	while (isNaN(num)) {
		num = prompt("Ingrese un verdadero número");
		num = parseInt(num);	
		}
	if (num >= 0) {
		acumuladorsuma += num;
	} else {
		acumuladormulti *= num;
	}
respuesta = confirm("¿Queres seguir agregando números?")
}
document.getElementById('suma').value=acumuladorsuma;
document.getElementById('producto').value=acumuladormulti;
}