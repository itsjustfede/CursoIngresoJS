function Mostrar()
{
var edad = document.getElementById("edad").value;

if (edad >= 18) {
    alert("sos mayor de edad");
}else if (edad >= 13){
    alert("sos adolescente");
}else if (edad < 13)
    alert("sos un niño")
}