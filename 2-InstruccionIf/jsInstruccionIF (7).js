function Mostrar()
{
//tomo la edad  
var edad;
var ecivil;

edad = document.getElementById("edad").value;
ecivil = document.getElementById("estadoCivil").value;
	
if (edad <"18" && ecivil!= "Soltero")
{
    alert("Sos muy joven para no estar soltero");
}
}//FIN DE LA FUNCIÓN