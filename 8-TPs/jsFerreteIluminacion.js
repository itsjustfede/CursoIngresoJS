/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $precio pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
var cantidad;
var marca;
var precio = 35;
var descuento;
var preciofinal;
var impuesto;

cantidad = document.getElementById("Cantidad").value;
marca = document.getElementById("Marca").value;

cantidad = parseInt(cantidad);
descuento = parseInt(descuento);
precio = parseInt(precio);
preciofinal = parseInt(preciofinal);
impuesto = parseInt(impuesto);

if (cantidad >= 6){
        descuento = (cantidad * precio) * 0.50;
        preciofinal = (cantidad * precio) - descuento;
    }
else if (cantidad == 5 && marca == "ArgentinaLuz"){
        descuento = (cantidad * precio) * 0.40; 
        preciofinal = (cantidad * precio) - descuento;
    }
else if (cantidad == 5 && marca != "ArgentinaLuz") {
        descuento = (cantidad * precio) * 0.30;
        preciofinal = (cantidad * precio) - descuento; 
    }
else if (cantidad == 4 && marca == "ArgentinaLuz" || cantidad == 4 && marca == "FelipeLamparas"){
        descuento = (cantidad * precio) * 0.25;
        preciofinal = (cantidad * precio) - descuento;
    }
else if (cantidad == 4 && marca != "ArgentinaLuz" || cantidad == 4 && marca != "FelipeLamparas"){ 
        descuento = (cantidad * precio) * 0.20;
        preciofinal = precio - descuento;
        preciofinal = (cantidad * precio) - descuento;
    }
else if (cantidad == 3 && marca == "ArgentinaLuz"){
        descuento = (cantidad * precio) * 0.15;
        preciofinal = (cantidad * precio) - descuento;
    }
else if (cantidad == 3 && marca == "FelipeLamparas"){
        descuento = (cantidad * precio) * 0.10;
        preciofinal = (cantidad * precio) - descuento;
    }
else if (cantidad == 3 && marca != "FelipeLamparas" || cantidad == 3 && marca != "ArgentinaLuz"){
        descuento = (cantidad * precio) * 0.05;
        preciofinal = (cantidad * precio) - descuento;
    }
else if (cantidad < 3){
        preciofinal = (cantidad * precio);
        }
if (preciofinal > 120){
    impuesto = preciofinal * 0.10;
    preciofinal += impuesto;
    alert("IIBB usted pagó " + preciofinal + " siendo " + impuesto + " el impuesto que se pagó");
    document.getElementById("precioDescuento"). value  = preciofinal; 
}
else{
document.getElementById("precioDescuento"). value  = preciofinal;
}
} 
