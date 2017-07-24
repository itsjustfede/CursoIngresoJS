function Mostrar()
{
var num = prompt("Ingrese un número");
var primo = true;

for (var i = 2; i < num; i++) {
    if (num % i == 0) {
        primo = false;
        break
    }
}
if (!primo) {
    alert("No es primo");
}
else{
    alert("Es primo");
}
}//FIN DE LA FUNCIÓN