

/*let listaAprobados="Lista de Aprobados"
impresionListaTitulo=document.getElementById("listaAprobados")
impresionListaTitulo.innerHTML=listaAprobados
console.log (impresionListaTitulo)



const estudiantesPass=[ "Ignacio nota= 22",  "Sofia nota=19", "gabriel nota= 26","Belen =19" ,"Agustín nota=21 ","María nota =30", "Fernando nota=22","Soledad nota=18"]
let aprobados=document.getElementById("aprobados")

for (const pass of estudiantesPass){
    let li =document.createElement("li")
    li.innerHTML=pass
    aprobados.appendChild(li)}


    const calificacionAprobados = [
        {
            nombre: "Ignacio",
            elemento: "estudiante",
            calificacionFinal: 22,
        },
        {
            nombre: "Gabriel",
            elemento: "estudiante",
            calificacionFinal: 26,
    
        },
        {
            nombre: "Sofia",
            elemento: "estudiante",
            calificacionFinal: 19,
        },
        {
            nombre: "Belen",
            elemento: "estudiante",
            calificacionFinal: 19,
    
        },
        {
            nombre: "Agustin",
            elemento: "estudiante",
            calificacionFinal: 21,
        },
        {
            nombre: "Maria",
            elemento: "estudiante",
            calificacionFinal: 30,
    
        },
        {
            nommbre: "Fernando",
            elemento: "estudiante",
            calificacionFinal: 22,
        },
        {
            nombre: "Soledad",
            elemento: "estudiante",
            calificacionFinal: 18,
    
        }
    ]
    let calificacionFinal=""
    
    
    const calificacionJSON=JSON.stringify(calificacionAprobados)
    localStorage.setItem ( "calificacionAprobados",calificacionJSON)*/

    /*let titleMaterias="Mesas de examen"
    impresionTituloExamen=document.getElementById("titleMaterias")
   impresionTituloExamen.innerHTML=titleMaterias
   console.log (impresionTituloExamen)*/
   
   
   
   
   //array para materias de exmen final ,los alumnos van a ver en está lista que materias están disponibles para rendir finl
   const subject=["Actuación teatral  1  fechas 9 y 10/2/2023 a las 18hs ", "Actuacion cinetv 2  fechas 6 y 8/2/2023 a las 19:30hs","Educacionvocal 1  fechas 6/2/2023  las 17hs y 19hs ","Lenguaje de cine    fechas  12 y 13 /2/2023  a las 18hs","Historia de la danza 28/2/2023 a las 18hs y 20hs  ","Análisis de texto 1  26/2/2023  las 17 hs y 19:30hs"]
   
   

       const subjectlistJSON=JSON.stringify(subject)
       localStorage.setItem( "subject",subjectlistJSON)


       //api propia
      /*const  conseguirDatos =fetch ("./jason.js")
      .then ((resp)=>resp.json())
      .then ((info)=>console.log(info))
      .catch ((err)=>console.log("error",err))*/
/*function conseguirDatos () {
fetch ("/.json.js")
.then (resp=>resp.json ())
.then (info=>console.log(info))
.catch (err=>console.log(err))
}*/
function conseguirDatos () {
    fetch ("file:///F:/coder%20belen/clase%209-js/subject.json ")
    .then (resp=>resp.json ())
    .then (info=>(console.log(info)))
    .catch (err=>(console.log(err)))

    }
 
conseguirDatos (console.log(subjectlistJSON))
/*let materiasFinal=document.getElementById ("materiasFinal")
   
for (const estudianteA of subject){

    let li =document.createElement("li")
    li.innerHTML=estudianteA
    
    materiasFinal.appendChild(li)}*/


