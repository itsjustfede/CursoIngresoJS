function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var nota;
	nota = parseInt(Math.random() * (10 - 1)) + 1;

if (nota >= 9)
{
	alert("Tu nota es " + nota + "; Excelente.");
}
else
{
	if (nota >= 4)
	{
		alert("Tu nota es " + nota + "; Aprobaste.");
	}
	else 
	alert("Tu nota es " + nota + "; Desaprobaste.");
}
}//FIN DE LA FUNCIÓN