/* 
	Debemos lograr tomar un dato por 'PROMPT' 
	y lo muestro por 'getElementById' al presionar el botón 'MOSTRAR'
*/
function Mostar()
{
	var dato = prompt ("Ingresa tu nombre");
	document.getElementById("elNombre").value = dato; //agregamos el valor de dato al getElementById
}

