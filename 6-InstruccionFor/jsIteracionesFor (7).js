function Mostrar()
{
var cantidad = prompt("Ingrese la cantidad");
var contadordivisores = 0;

for (var num = 1; num < cantidad; num++) {
    if (cantidad % num == 0){
        alert(num);
        contadordivisores++;
    }
}
    alert("La cantidad de divisores encontrados fueron " + contadordivisores);

}//FIN DE LA FUNCIÓN