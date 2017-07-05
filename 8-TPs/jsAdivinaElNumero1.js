/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
var numeroSecreto; 
var contadorIntentos = 0;
var numeroingresado;

function comenzar()
{
  numeroSecreto = Math.floor (Math.random () * (101 - 1)) + 1; //incluye el minimo pero no el maximo ["maximo" - "minimo")
  console.log (numeroSecreto);
}

function verificar()
{
	  contadorIntentos = contadorIntentos + 1

    numeroingresado = document.getElementById("numero").value;

	  if (numeroingresado == numeroSecreto) 
  {
    alert("Usted ha ganado!!! en tan solo " + contadorIntentos + " intentos");
    contadorIntentos = 0;
  }
    else if (numeroingresado >= numeroSecreto) 
    {
      alert("se pasó...");
    }
    else
    {
      alert("falta...");
    }
    document.getElementById("intentos").value = contadorIntentos;
}