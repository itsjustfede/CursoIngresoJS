function Mostrar()
{
var edad = document.getElementById("edad").value;

if (edad < 13 || edad > 17) {
    alert("no sos adolescente");
}
}