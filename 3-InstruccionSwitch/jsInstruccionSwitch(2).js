function Mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;
switch(mesDelAño){
    case "Enero":
    case "Febrero":
    case "Marzo":
    case "Abril":
    case "Mayo":
    case "Junio":
    alert("Falta para el invierno.");
    break;
    case "Julio":
    case "Agosto":
    alert("Abrigate que hace frio.");
    break
    default:
    alert("Ya pasamos el frio, ahora calor!!!.");
}

}
// en esos case no es necesario un break porque lo que importa son los meses, no el orden
}