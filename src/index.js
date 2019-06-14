

let mensaje= document.getElementById("texto").value;
let mc=document.getElementById("mensajePrincipal1").value;
let y= 2;
let mensajeCodificadoR=document.getElementById("mensajePrincipal1");
let mensajeDecod=document.getElementById("mostrando");
//DECLARAR BOTON CODIFICAR Y DECODIFICAR
let botonCodificar=document.getElementById("botonCodificar");
let botonDecodificar=document.getElementById("botonDecodificar");



//CAMBIO DE PANTALLA AL CLICK EN BOTON CODIFICAR
botonCodificar.addEventListener("click",function(){
pagina2.style.display="block";
pagina1.style.display="none";
document.getElementById("mostrando").value = "";
});


//DECLARAR PANTALLAS
let pagina1=document.getElementById("pagina1");
let pagina2=document.getElementById("pagina2");
let pagina3=document.getElementById("pagina3");


//DECLARAR LOS BOTONES DE COLORES
let botonRojo=document.getElementById("botonRojo");
let botonAmarillo=document.getElementById("botonAmarillo");
let botonAzul=document.getElementById("botonAzul");
let botonNegro=document.getElementById("botonNegro");


function showPantalla3R(event){
event.preventDefault();
pagina1.style.display="none";
pagina2.style.display="none";
pagina3.style.display="block";
document.querySelector("body").style.background = "red";
window.cipher.encode(y, mensaje);

}

function showPantalla3A(event){
event.preventDefault();
pagina1.style.display="none";
pagina2.style.display="none";
pagina3.style.display="block";
document.querySelector("body").style.background = "yellow";
window.cipher.encode(y, mensaje);

}

function showPantalla3Az(event){
event.preventDefault();
pagina1.style.display="none";
pagina2.style.display="none";
pagina3.style.display="block";
document.querySelector("body").style.background = "blue";
window.cipher.encode(y, mensaje);

}

function showPantalla3N(event){
event.preventDefault();
pagina1.style.display="none";
pagina2.style.display="none";
pagina3.style.display="block";
document.querySelector("body").style.background = "black";
window.cipher.encode(y, mensaje);
}

function showDecod(event){
  pagina1.style.display="none";
  pagina2.style.display="none";
  pagina3.style.display="block";
  window.cipher.decode(y, mc);



}

//FUNCION DE LOS BOTONES DE COLORES
botonRojo.addEventListener("click", showPantalla3R);

botonAmarillo.addEventListener("click", showPantalla3A);

botonAzul.addEventListener("click", showPantalla3Az);

botonNegro.addEventListener("click", showPantalla3N);

botonDecodificar.addEventListener("click", showDecod);   //("click", decodificarMensaje());





//let y= -33;
//FUNCION CODIFICAR
//function encode(){
//let mensaje= document.getElementById("texto").value;
//let arreglo= [];
//let y= 10;

//for (let i = 0; i <mensaje.length; i++){

//if (mensaje.charCodeAt(i)===32){
//  arreglo.push(" ");

//}else if (mensaje.charCodeAt(i)===46){
//  arreglo.push(".");

//}else if(mensaje.charCodeAt(i)===44){
//  arreglo.push(",");

//}else if(mensaje.charCodeAt(i)===58){
//  arreglo.push(":");

//}else if(mensaje.charCodeAt(i)===48){
//  arreglo.push(0);

//} else if (mensaje.charCodeAt(i)===49){
//  arreglo.push(1);

//} else if (mensaje.charCodeAt(i)===50){
//  arreglo.push(2);

//} else if (mensaje.charCodeAt(i)===51){
//  arreglo.push(3);

//} else if (mensaje.charCodeAt(i)===52){
//  arreglo.push(4);

//} else if (mensaje.charCodeAt(i)===53){
//  arreglo.push(5);

//}else if (mensaje.charCodeAt(i)<97){

//      let aski= (mensaje.charCodeAt(i)-65+y)%26+65;
//arreglo.push(String.fromCharCode(aski));

//}else{

//      let aski=(mensaje.charCodeAt(i)-97+y)%26+97;
//  arreglo.push(String.fromCharCode(aski));
//}

//let mensajeCodificadoR= arreglo.join(""); console.log(mensajeCodificadoR);
//document.getElementById("mensajePrincipal1").value=mensajeCodificadoR;
//}
//}

//FUNCION DECODIFICAR

//function decodificarMensaje(){
//let mc=document.getElementById("mensajePrincipal1").value;
//let arreglo2= [];
//let y= -10;

//for (let j = 0; j<mc.length; j++){

//if (mc.charCodeAt(j)===32){
//  arreglo2.push(" ");

//}else if (mc.charCodeAt(j)===46){
//  arreglo2.push(".");

//}else if(mc.charCodeAt(j)===44){
//  arreglo2.push(",");

//}else if(mc.charCodeAt(j)===58){
//  arreglo2.push(":");

//}else if(mc.charCodeAt(j)===48){
//  arreglo2.push(0);

//} else if (mc.charCodeAt(j)===49){
//  arreglo2.push(1);

//} else if (mc.charCodeAt(j)===50){
//  arreglo2.push(2);

//} else if (mc.charCodeAt(j)===51){
//  arreglo2.push(3);

//} else if (mc.charCodeAt(j)===52){
//  arreglo2.push(4);

//} else if (mc.charCodeAt(j)===53){
//  arreglo2.push(5);

//}else if (mc.charCodeAt(j)<97){

//    let aski2= (mc.charCodeAt(j)-65+y)%26+65;
//    arreglo2.push(String.fromCharCode(aski2));

//    }else{

//  let aski2=(mc.charCodeAt(j)-97+y)%26+97;
//  arreglo2.push(String.fromCharCode(aski2));
//    }

//    let mensajeDecod= arreglo2.join("");
//    document.getElementById("mostrando").value=mensajeDecod;
//    }
//    }


//FUNCION Inicio
let botonInicio=document.getElementById("botonInicio");

botonInicio.addEventListener("click", limpiar);

function limpiar(){
  pagina1.style.display="block";
  pagina2.style.display="none";
  pagina3.style.display="none";
  document.getElementById("texto").value = "";
  }

window.cipher.encode(y, mensaje);
window.cipher.decode(y, mc);
