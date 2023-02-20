//clase 9 

//3 maneras de crear eventos

//1

/*let boton=document.getElementById("btn")
boton.addEventListener("click",funcionClick)
function funcionClick(){
    alert ("hola soy un evento ")
}

let texto = document.getElementById("texto")
function mostrarComentario(){
    console.log ("si el doble click se lanzo")
}
texto.addEventListener("dblclick",mostrarComentario)
// ver y practicar lo del border*/

//2 con prefijo on
//funcion modo flecha
let boton=document.getElementById("btn")
//boton.onclick=()=>console.log("segundo evento con prefijo on")


//funcion modo clasico

boton.ondblclick=function () {
    console.log("segundo evento usando el prefijo on ")
    
}

//3 mal practica

//practica formulario




    
