function Mostrar()
{
var diashabiles = 24;
var contadordias = 1;
var importe;
var max;
var min;
var bandera = true;


for (var dias = 1; dias <= diashabiles; dias++) {
    importe = prompt("Ingrese el importe del día " + contadordias);
    importe = parseInt(importe);
    max = parseInt(max);
    min = parseInt(min);

    if (importe < 0) {
        alert("Ingrese otro número.");
        continue;
    }
    contadordias++;
    if (bandera) {
        bandera = false;     
        max = importe;
        min = importe;   
    }
    else{
        
        if (importe > max){
            max = importe; 
            }
        if (importe < min){
            min = importe;
            } 
        }
}
alert("El importe máximo fue: " + max + " y el importe mímimo fue: " + min);
}