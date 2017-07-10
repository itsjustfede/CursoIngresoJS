function Mostrar()
{
var max;
var min;
var respuesta = true;
var num;
var primera = true;

while(respuesta == true){
	num = prompt("Ingrese un número");
	if (primera){
		max = num;
		min = num;
		primera = false;
		}
		else{
			if (num < min){
			min = num;
			}
			if (num > max){
			max = num;
			}
respuesta = confirm("¿Queres seguir agregando números?");
	
}
}
document.getElementById('maximo').value=max;
document.getElementById('minimo').value=min;
}