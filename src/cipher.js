//window.Laboratoria = {
//  cipherMessage: () => {
//    console.log("hola")
//  },
//  hola: "hola",
//  uno: 1
//};

window.cipher = {
  encode: (y, mensaje) => {

  let arreglo= [];

  for (let i = 0; i < mensaje.length; i++){

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

  let mensajeCodificadoR= arreglo.join("");

  //document.getElementById("mensajePrincipal1").value=mensajeCodificadoR;
  }
  },

  //FUNCION DECODIFICAR
decode: (y, mc) => {
//cipherMesaje1: function(){
//ecode: function(){

  let arreglo2= [];
  for (let j = 0; j<mc.length; j++){

  if (mc.charCodeAt(j)===32){
    arreglo2.push(" ");

  }else if (mc.charCodeAt(j)===46){
    arreglo2.push(".");

  }else if(mc.charCodeAt(j)===44){
    arreglo2.push(",");

  }else if(mc.charCodeAt(j)===58){
    arreglo2.push(":");

  }else if(mc.charCodeAt(j)===48){
    arreglo2.push(0);

  } else if (mc.charCodeAt(j)===49){
    arreglo2.push(1);

  } else if (mc.charCodeAt(j)===50){
    arreglo2.push(2);

  } else if (mc.charCodeAt(j)===51){
    arreglo2.push(3);

  } else if (mc.charCodeAt(j)===52){
    arreglo2.push(4);

  } else if (mc.charCodeAt(j)===53){
    arreglo2.push(5);

  }else if (mc.charCodeAt(j)<97){

      let aski2= (mc.charCodeAt(j)+65-y)%26+65;
      //let aski2= (mc.charCodeAt(j)+65-y)%26+65;
      arreglo2.push(String.fromCharCode(aski2));

      }else{

      let aski2=(mc.charCodeAt(j)+97-y+14)%26+97;
    //  let aski2= (mc.charCodeAt(j)+97-y+14)%26+97;
      arreglo2.push(String.fromCharCode(aski2));
      }

      let mensajeDecod= arreglo2.join("");
      document.getElementById("mostrando").value=mensajeDecod;
      }
      }
      };



//FUNCION CODIFICAR
//function encode(){
//let mensaje= document.getElemen"tById("texto").value;
//let arreglo= [];
//let y= 10;

//for (let i = 0; i <mensaje.length; i++){

//if (mensaje.charCodeAt(i)===32){
//  arreglo.push(" ");

//}else if (mensaje.charCodeAt(i)===46){
//arreglo.push(".");

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
//arreglo.push(String.fromCharCode(aski));
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
//arreglo2.push(0);

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

//  let aski2= (mc.charCodeAt(j)-65+y)%26+65;
//    arreglo2.push(String.fromCharCode(aski2));

//    }else{

//    let aski2=(mc.charCodeAt(j)-97+y)%26+97;
//    arreglo2.push(String.fromCharCode(aski2));
//    }

//    let mensajeDecod= arreglo2.join("");
//    document.getElementById("mostrando").value=mensajeDecod;
//    }
//    }
