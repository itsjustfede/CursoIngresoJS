function Mostrar()
{
var contador0 = 0;
var contadorpos = 0;
var contadorneg = 0;
var acumuladorneg = 0;
var acumuladorpos = 0;
var acumuladorsuma = 0;
var acumuladormulti = 1;
var num;
var respuesta = true;

while (respuesta == true) {
	num = prompt("Ingrese un número");
	num = parseInt(num);
	while (isNaN(num)) {
		num = prompt("Ingrese un verdadero número");
		num = parseInt(num);
	}	
	if (num < 0){
		acumuladorneg += num;
		contadorneg ++;
		}
	else
	if (num > 0){
		acumuladorpos += num;
		contadorpos ++;
	}
	else{
		contador0 ++;
	}
	respuesta = confirm("¿Queres seguir agregando números?")
}
document.write("1) " + acumuladorneg + " 2) " + acumuladorneg + " 3) ");
}