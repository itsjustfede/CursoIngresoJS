/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
    var preciouno;
    var preciodos;
    var preciotres;
    var resultado;

function Sumar () 
{
    var preciouno = document.getElementById("PrecioUno").value;
    var preciodos = document.getElementById("PrecioDos").value;
    var preciotres = document.getElementById("PrecioTres").value;

    var preciouno = parseInt(preciouno);
    var preciodos = parseInt(preciodos);
    var preciotres = parseInt(preciotres);

    resultado = preciouno + preciodos + preciotres;

    alert(resultado);
}
function Promedio () 
{
	var preciouno = document.getElementById("PrecioUno").value;
    var preciodos = document.getElementById("PrecioDos").value;
    var preciotres = document.getElementById("PrecioTres").value;

    var preciouno = parseInt(preciouno);
    var preciodos = parseInt(preciodos);
    var preciotres = parseInt(preciotres);

    resultado = (preciouno + preciodos + preciotres) / 3;

    alert(resultado);
}
function PrecioFinal () 
{
	var preciouno = document.getElementById("PrecioUno").value;
    var preciodos = document.getElementById("PrecioDos").value;
    var preciotres = document.getElementById("PrecioTres").value;

    var preciouno = parseInt(preciouno);
    var preciodos = parseInt(preciodos);
    var preciotres = parseInt(preciotres);

    resultado = (preciouno + preciodos + preciotres) * 1.21;

    alert(resultado);
}