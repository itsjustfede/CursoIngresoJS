function Mostrar()
{
var pedido = prompt("Ingrese el número de veces que quiera repetir");
var contador = 0;
var num2;
for (var num = 0; num < pedido ; num++) {
    num2 = prompt("Van " + contador);
    contador++;
    if (num2 == 9){
        break
    }
}

}//FIN DE LA FUNCIÓN