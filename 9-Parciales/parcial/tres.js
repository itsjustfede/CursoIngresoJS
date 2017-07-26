function Mostrar()
{
var largo = document.getElementById("largo").value;
var ancho = document.getElementById("ancho").value;
var num;
num = parseInt(num);
largo = parseInt(largo);
ancho = parseInt(ancho);

num = (largo * ancho) * 3;

alert("Se necesitan " + num + "m de alambre");
}
