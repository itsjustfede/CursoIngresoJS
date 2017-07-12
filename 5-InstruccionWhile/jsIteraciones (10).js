function Mostrar()
{
var contador0 = 0;
var contadorpos = 0;
var contadorneg = 0;
var contadorpares = 0;
var acumuladorneg = 0;
var acumuladorpos = 0;
var acumuladorsuma = 0;
var acumuladormulti = 1;
var num;
var resultadoneg;
var resultadopos;
var respuesta = true;
var dif;

while (respuesta == true) {
	num = prompt("Ingrese un número");
	num = parseInt(num);
	while (isNaN(num)) {
		num = prompt("Ingrese un verdadero número");
		num = parseInt(num);
	}	
	if (num < 0){ //cuenta los numeros negativos
		acumuladorneg += num;
		contadorneg ++;
		}
	else if (num > 0){ //cuenta los numeros positivos
		acumuladorpos += num;
		contadorpos ++;
	}
	else{ // cuenta los ceros
		contador0 ++;
	}
	if (num % 2 == 0 ){ // cuenta los pares
		contadorpares ++;
	}

	dif = contadorneg - contadorpos;
	if (dif < 0){
		dif = dif * -1;
		}
	if (contadorneg > 0) {
		resultadoneg = acumuladorneg / contadorneg; //hay numeros negativos los cuenta
	}
	else{
		resultadoneg = "No hay numeros negativos"; // si no avisa
	}
	if (contadorpos > 0) {
		resultadopos = acumuladorpos / contadorpos;
	}
	else{
		resultadopos = "No hay numeros positivos";
	}
respuesta = confirm("¿Queres seguir agregando números?")
}

document.write("1) " + acumuladorneg + "<br>");
document.write("2) " + acumuladorpos + "<br>");
document.write("3) " + contadorpos + "<br>");
document.write("4) " + contadorneg + "<br>");
document.write("5) " + contador0 + "<br>");
document.write("6) " + contadorpares + "<br>");
document.write("7) " + resultadopos + "<br>");
document.write("8) " + resultadoneg +  "<br>");
document.write("9) " + dif);
}