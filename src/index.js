
//DECLARAR MENSAJE PRINCIPAL
let mensajePrincipal=document.getElementById("mensajePrincipal");
let introduceMensaje=document.getElementById("introduceMensaje");
let mensajeCodificadoInterno=document.getElementById("mensajeCodificadoInterno");
let textoVar=document.getElementById("texto");
let mensajeCodificadoR=document.getElementById("mensajeCodificado");

//DECLARAR BOTON CODIFICAR
let botonCodificar=document.getElementById("botonCodificar");


//CAMBIO DE PANTALLA AL CLICK EN BOTON CODIFICAR
botonCodificar.addEventListener("click",function(){
  pagina2.style.display="block";
  pagina1.style.display="none";
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
  encode();
  document.querySelector("body").style.background = "red";
}

function showPantalla3A(event){
  event.preventDefault();
  pagina1.style.display="none";
  pagina2.style.display="none";
  pagina3.style.display="block";
  document.querySelector("body").style.background = "yellow";
  document.getElementById("mensajePrincipal1").value=textoVar.value;
}

function showPantalla3Az(event){
  event.preventDefault();
  pagina1.style.display="none";
  pagina2.style.display="none";
  pagina3.style.display="block";
  document.querySelector("body").style.background = "blue";
  document.getElementById("mensajePrincipal1").value=textoVar.value;
}

function showPantalla3N(event){
  event.preventDefault();
  pagina1.style.display="none";
  pagina2.style.display="none";
  pagina3.style.display="block";
  document.querySelector("body").style.background = "black";
  document.getElementById("mensajePrincipal1").value=textoVar.value;
}

//FUNCION DE LOS BOTONES DE COLORES
botonRojo.addEventListener("click", showPantalla3R);


botonAmarillo.addEventListener("click", showPantalla3A);

botonAzul.addEventListener("click", showPantalla3Az);

botonNegro.addEventListener("click", showPantalla3N);


//FUNCION CODIFICAR
function encode(){
  let mensaje= document.getElementById("texto").value;
  let arreglo= [];
  let y= 10;

  for (let i = 0; i <mensaje.length; i++){

  if (mensaje.charCodeAt(i)===32){
  arreglo.push(" ");

}else if (mensaje.charCodeAt(i)===46){
      arreglo.push(".");

}else if(mensaje.charCodeAt(i)===44){
  arreglo.push(",");

}else if(mensaje.charCodeAt(i)===58){
    arreglo.push(":");

}else if(mensaje.charCodeAt(i)===48){
    arreglo.push(0);

} else if (mensaje.charCodeAt(i)===49){
    arreglo.push(1);

} else if (mensaje.charCodeAt(i)===50){
    arreglo.push(2);

} else if (mensaje.charCodeAt(i)===51){
    arreglo.push(3);

} else if (mensaje.charCodeAt(i)===52){
    arreglo.push(4);

} else if (mensaje.charCodeAt(i)===53){
    arreglo.push(5);

}else if (mensaje.charCodeAt(i)<97){



  let aski= (mensaje.charCodeAt(i)-65+y)%26+65;
arreglo.push(String.fromCharCode(aski));
}else{


  let aski=(mensaje.charCodeAt(i)-97+y)%26+97;
  arreglo.push(String.fromCharCode(aski));

}

let mensajeCodificadoR= arreglo.join(""); console.log(mensajeCodificadoR);
document.getElementById("mensajePrincipal1").value=mensajeCodificadoR;
}
}
