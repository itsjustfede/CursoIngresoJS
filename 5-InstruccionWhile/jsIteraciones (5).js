function Mostrar()
{
var sexo = prompt("ingrese f ó m .");

while (sexo != "f" && sexo != "m") {
    var sexo = prompt("ingrese f ó m .");
}
document.getElementById('Sexo').value=sexo;
}