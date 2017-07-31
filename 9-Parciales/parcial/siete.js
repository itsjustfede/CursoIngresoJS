function Mostrar()
{
var totalalumnos = 5;
var alumnos = 0;
var nota;
var varones = 0;
var sexoalumno;
var contadoralumno = 1;
var acumuladornota = 0;
var bandera = true;
var notamin;
var promedio;
/*for (var alumno = 1; alumno < alumnos; alumno++) {
    nota = prompt("Ingrese nota del alumno " + alumno);
    sexoalumno = prompt("Ingrese sexo del alumno " + alumno);   
}*/



while (alumnos < totalalumnos) {
    nota = prompt("Ingrese la nota del alumno " + contadoralumno);

    if (nota < 0 || nota > 10){
        alert("Ingrese una nota entre el 0 y el 10.");
        continue
    } 
    sexoalumno = confirm("¿Es el alumno " + contadoralumno + " varón?");
    
    contadoralumno++;
    alumnos++;

    if (sexoalumno == true)
        varones++;
    if (bandera){
        notamin = nota;
        bandera = false;
    }
    else
        if (nota < notamin){
            notamin = parseInt(notamin);
            notamin = nota;
        }
    acumuladornota = parseInt(acumuladornota);
    nota = parseInt(nota);
    acumuladornota = acumuladornota + nota;
}
promedio = parseInt(promedio);
promedio = acumuladornota / totalalumnos;
alert("El promedio de las notas totales es: " + promedio + ". La nota más baja es: " + notamin + ". La cantinad de varones es: " + varones);
}
