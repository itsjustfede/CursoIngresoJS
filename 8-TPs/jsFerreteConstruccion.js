/*2.	Para el departamento de Construcción:
A.	 Mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	Mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/
    var largo;
    var ancho;
    var radio;
    var resultado;

function Rectangulo () 
{
    var largo = document.getElementById("Largo").value;
    var ancho = document.getElementById("Ancho").value;

    var largo = parseInt(largo);
    var ancho = parseInt(ancho);

    resultado = ((largo + ancho) * 2) * 3;
    alert("Necesitas " + resultado + "m de hilo de alambre.");
}
function Circulo () 
{
    var radio = document.getElementById("Radio").value;

    var radio = parseInt(radio);

    resultado = (radio * radio * Math.PI) * 3;
    resultado = parseInt(resultado);
    alert("Necesitas " + resultado + "m de hilo de alambre.");
}
function Materiales () 
{
	var largo = document.getElementById("Largo").value;
    var ancho = document.getElementById("Ancho").value;
    var cemento = 2;
    var cal = 3;

    var largo = parseInt(largo);
    var ancho = parseInt(ancho);
    var cemento = parseInt(cemento);
    var cal = parseInt(cal);
 
    cemento = (largo * ancho) * 2;
    cal = (largo * ancho) * 3
    alert("Necesitas " + cemento + " bolsas de cemento y " + cal + " bolsas de cal");
}