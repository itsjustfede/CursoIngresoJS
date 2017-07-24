/*Al comenzar el juego generaremos un número 
RANDOM del 1 al 3 para la selección de la máquina, 
siendo 1 para “piedra”, el 2 para “papel” y 3 para “tijera”.
El jugador seleccionará una imagen correspondiente 
a su opción  y le informaremos si ganó, empató o perdió.
*/
var eleccionMaquina;
var num;
function comenzar()
{
num = Math.floor (Math.random () * (3 - 1)) + 1;
console.log(num);

}//FIN DE LA FUNCIÓN
function piedra()
{
if (num == 3) {
    alert("Ganaste, era tijera");
} else if (num == 1) {
    alert("Empataste, era piedra");
}	
else {
    alert("Perdiste, era papel")
}
}//FIN DE LA FUNCIÓN
function papel()
{
{
if (num == 3) {
    alert("Ganaste, era tijera");
} else if (num == 1) {
    alert("Empataste, era piedra");
}	
else {
    alert("Perdiste, era papel")
}
}//FIN DE LA FUNCIÓN
function tijera()
{
	

}//FIN DE LA FUNCIÓN