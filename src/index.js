
//DECLARAR MENSAJE PRINCIPAL
let mensajePrincipal=document.getElementById("mensajePrincipal");
let introduceMensaje=document.getElementById("introduceMensaje");

//DECLARAR BOTON CODIFICAR
let botonCodificar=document.getElementById("botonCodificar");

//CAMBIO DE PANTALLA AL CLICK EN BOTON CODIFICAR
botonCodificar.addEventListener("click", function() {
  pagina2.style.display="block"
  pagina1.style.display="none"
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
}

function showPantalla3A(event){
  event.preventDefault();
  pagina1.style.display="none";
  pagina2.style.display="none";
  pagina3.style.display="block";
  document.querySelector("body").style.background = "yellow";
}

function showPantalla3Az(event){
  event.preventDefault();
  pagina1.style.display="none";
  pagina2.style.display="none";
  pagina3.style.display="block";
  document.querySelector("body").style.background = "blue";
}

function showPantalla3N(event){
  event.preventDefault();
  pagina1.style.display="none";
  pagina2.style.display="none";
  pagina3.style.display="block";
  document.querySelector("body").style.background = "black";
}

//FUNCION DE LOS BOTONES DE COLORES
botonRojo.addEventListener("click", showPantalla3R);

botonAmarillo.addEventListener("click", showPantalla3A);

botonAzul.addEventListener("click", showPantalla3Az);

botonNegro.addEventListener("click", showPantalla3N);
