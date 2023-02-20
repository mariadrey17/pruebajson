

let titleMaterias="Mesas de examen"
 impresionTituloExamen=document.getElementById("titleMaterias")
impresionTituloExamen.innerHTML=titleMaterias
console.log (impresionTituloExamen)

let materiasFinal=document.getElementById ("materiasFinal")
for (const estudianteA of subject){

    let li =document.createElement("li")
    li.innerHTML=estudianteA
    
    materiasFinal.appendChild(li)}









//hacer pagos con api de paypal y mercado pago


const pagos =" Pago  examenes finales "
impresionPago1=document.getElementById("pagos")
impresionPago1.innerHTML=pagos
console.log (impresionPago1)







function FormasDePago(){

materiaPaga =  (document.getElementById("materiaPaga").value) ;
const pagoRealizado = materiaPaga
    
    document.getElementById("pagado").innerHTML= "pago realizado" + pagoRealizado ;
    console.log (materiaPaga ,  pagoRealizado )


}





