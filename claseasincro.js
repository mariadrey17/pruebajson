




function calculando (nota1,nota2,nota3)

{  nota1 = Number (document.getElementById("nota1").value) ;
nota2=Number (document.getElementById("nota2").value );
nota3= Number  (document.getElementById("nota3").value);
let p = nota1 + nota2 +nota3 ;

let spanNota =document.getElementById("notaLetra")
//este setout es sincronico

    setTimeout (( )=>{
    spanNota.innerHTML='el promedio es ' + p;
    },2000)




//document.getElementById("promedio");"el promedio es " + p ;
/*console.log (p)}*/}



//probando promesas 


//ver en ñas listas de materias esta disponible l que el alumno eligio 

let datosMesa ="Anotate en las mesas de Examenes"
 impresionMesaExamen=document.getElementById("datosMesa")
impresionMesaExamen.innerHTML=datosMesa
console.log (impresionMesaExamen)
//los alumnos se anotan para rendir el examen y les sale por html el nombre apellido materia y  dia que rinden 



function quieroRendir (nombreYApellido,materia,fecha)

{  nombreYApellido =  (document.getElementById("nombreYApellido").value) ;
materia= (document.getElementById("materia").value );
fecha=  (document.getElementById("fecha").value);
let anotarse = materia  + fecha

document.getElementById("rindo").innerHTML= "yo  " +  nombreYApellido +  "  rindo   " +   anotarse ;
console.log (nombreYApellido  ,  anotarse )}



//los alumnos ya se anotan materias para cursar en el año 


//listas de materias por el dom 
