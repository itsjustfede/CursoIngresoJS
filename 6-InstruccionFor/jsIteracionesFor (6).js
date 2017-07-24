function Mostrar()
{
var cantidad = prompt("Ingrese la cantidad");
var contadorpares = 0;

for (var num = 1; num < cantidad; num = num + 2) { //puede ser num++
    if (num % 2 == 0){
        alert(num);
        contadorpares++;
    }
/*    else{
        alert(num + 1);
        contadorpares++;
    } */ //esto es innceserario
}
    alert("La cantidad de pares encontrados fueron " + contadorpares);
}//FIN DE LA FUNCIÓN