// //Declaracion de una funcion a la que quiero
// //llamar cuando hagan click sobre el h1
// //Antes usaba onclick="manejarClick();"
// //en el html
// //ahora consigo lo mismo activando un
// //addEventListener en el h1
//
// function manejarClick() {
//   alert("Me has hecho click.");
// }
//
// //Ahora le añado al elemento h2 una "oreja"/addEventListener
// //que escucha a ver si se produce un click sobre el h1
// document.querySelector("h1").addEventListener("click", manejarClick);
//
// document.querySelector("h1").addEventListener("mouseout", function noTeVayas() {
//                                                                               alert("Porfa, no te quites de encima mio");
//                                                                             });


//Quiero añadir ahora addEventListenera todos los botones
//para que me avise que le hacen click a cualquiera de ellos

//Seleciono y guardo todos los botones en un array
var arrayConLosBotones = document.querySelectorAll(".caja");

//Averiguo la longitud del arrayConLosBotones
//Osea el numero de botone que habia

var numeroDeBotones = arrayConLosBotones.length;

//Ahora recorro uno por uno los numeroDeBotones
//Usando un bucle de tipo for y en cada
//repeticion añado un addEventListener a el boton que corresponda

for (var i = 0; i < numeroDeBotones; i++) {
  //aqui añado el addEventListener
  arrayConLosBotones[i].addEventListener("click", function tocarTOM1() {
    // var tom1=new Audio("sonidos/tom-1.mp3");
    // tom1.play();

    // //esta alerta detecta el click e invoca el elemente detectado
    // alert(this.innerHTML);

    //Extraemos la letra del boton para saber que sonido reproducir
    var letraBoton=this.innerHTML;
    //Ahora uso la letra en un switch
    //para reflejar los 7 casos posibles

    switch(letraBoton){
      case "w": var tom1=new Audio("sonidos/tom-1.mp3");
                tom1.play();
                break;
      case "s": var tom2=new Audio("sonidos/tom-2.mp3");
                tom2.play();
                break;
      case "d": var tom3=new Audio("sonidos/tom-3.mp3");
                tom3.play();
                break;
      case "a": var tom4=new Audio("sonidos/tom-4.mp3");
                tom4.play();
                break;
      case "j": var snare=new Audio("sonidos/snare.mp3");
                snare.play();
                break;
      case "k": var crash=new Audio("sonidos/crash.mp3");
                crash.play();
                break;
      case "l": var kick=new Audio("sonidos/kick-bass.mp3");
                kick.play();
                break;
    }
});
}
