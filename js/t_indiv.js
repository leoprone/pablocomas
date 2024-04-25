/* ********** Menu ********** */

((d) => {
    const $btnMenu = d.querySelector(".menu-btn"),
      $menu = d.querySelector(".menu");
  
  
    $btnMenu.addEventListener('click', (e) => {
      $btnMenu.firstElementChild.classList.toggle("none");
      $btnMenu.lastElementChild.classList.toggle("none");
      $menu.classList.toggle("is-active");
    });



  /*  PARA QUE SE REPLIEGUE EL MENÚ AL TOCAR EN CUALQUIER PARTE AFUERA DEL MISMO
  esconder el menu cuando ya se seleccionó una sección
   (por delegación de eventos, asignando el click a un
    elem. de nivel superior, en este caso, el document)*/ 

  d.addEventListener("click", (e) => {
      if (e.target.matches(".menu-btn svg")) return false;/*no pasa nada ahí*/
  
      $btnMenu.firstElementChild.classList.remove("none");
      $btnMenu.lastElementChild.classList.add("none");
      $menu.classList.remove("is-active");
    });
  })(document);
  
  
  


      //-------------TEMAS INDIVIDUALES--------------

const $plato=document.querySelector(".plato"),
$discrotatetranslate=document.querySelector(".disc-rotate-translate"),
$agujerochico=document.querySelector(".agujero-chico"),
$imgetiqueta=document.querySelector(".img-etiqueta"),
$hoja1=document.querySelector(".hoja-1"),
$hoja2=document.querySelector(".hoja-2"),
$hoja3=document.querySelector(".hoja-3"),
$carrouselgrandechico=document.querySelector(".carrousel-grande-chico"),
$carrouselcontainergrandechico=document.querySelector(".carrousel-container-grande-chico"),
$pletra=document.querySelector(".p-letra"),
$pua=document.querySelector(".pua");




const $btnplaypause=document.querySelector(".btn-play-pause"),
$pletrachica=document.querySelector(".p-letra-chica");





function pausar(video, btn) { 

 
    if (btn.classList.contains("play") && !btn.classList.contains("stop")) {
        btn.value="| |"; 
        btn.classList.remove("play");
        btn.classList.remove("red");
        /* 
        $pletrachica.classList.remove("paused"); */
        video.playVideo(); 
       
    }else if(!btn.classList.contains("play")&& !btn.classList.contains("stop")){
        btn.value="play"; 
        btn.classList.add("play");
        btn.classList.add("red");
        video.pauseVideo(); 
      /*   $pletrachica.classList.add("paused"); */
       
    }else{
        btn.classList.add("play");
        btn.classList.remove("red");
       /*  $pletrachica.classList.add("paused"); */
        video.stopVideo(); 
    }
 
} 




function movimientosTocadiscos(){

$plato.classList.toggle("paused");
$discrotatetranslate.classList.toggle("paused"); 
$imgetiqueta.classList.toggle("paused");
$agujerochico.classList.toggle("paused"); 
}






function playPause(){
    if($btnplaypause.classList.contains("arranque-tema")){
        $btnplaypause.classList.toggle("red");
        setTimeout(pausar, 5000, player, $btnplaypause);
        
        $btnplaypause.classList.remove("arranque-tema");
        $btnplaypause.style.backgroundColor="rgba(255, 60, 60, 0.368)";
        
        
        //vinculando audio y movimientos
        $pua.classList.remove("paused"); 

        movimientosTocadiscos();

     /*    $pletrachica.classList.add("animacion-letra"); */
        
        $btnplaypause.onclick=function(){
            $btnplaypause.classList.toggle("red");
                pausar(player, $btnplaypause); 
                movimientosTocadiscos();
        }
            
    }
}

    

// función disparada apenas se carga el JS de YT API

function onPlayerReady(){
   
    $btnplaypause.addEventListener("click", playPause, false);

}

















//////////////////   CÓDIGO GENERAL PARA TODOS LOS ÁLBUMES   ///////////////////////////////






window.addEventListener('load', animacionAlbum, false); 




 function animacionAlbum(){
  
   setTimeout(()=>{
      //  poner TODOS las tapas (1 por CADA ÁLBUM)
        $abrirdramaticoynocturno.classList.add("movimiento-alternado"),
        $abrirhambre.classList.add("movimiento-alternado"),
        $abrirdiasdefuerza.classList.add("movimiento-alternado"),
        $abrirlaultimarotaciondelsol.classList.add("movimiento-alternado");
       
   }, 3000); // el movimiento del album no empieza hasta que 
              //  termine la animación del fondo con balas
 } 
 











// ///////////   CÓDIGO QUE HAY QUE HACER POR CADA ÁLBUM (index.html)  ////////////////////////////////


//BOTON ABRIR TAPA DISCO (index.html)


const $albumdramaticoynocturno=document.getElementById("album-dramatico-y-nocturno"),
$dramaticoynocturnocontenedortotal=document.getElementById("dramatico-y-nocturno-contenedor-total"),
$abrirdramaticoynocturno=document.getElementById("abrir-dramatico-y-nocturno"),
$btndramaticoynocturno=document.getElementById("btn-dramatico-y-nocturno"),
$discodramaticoynocturnocontenedor=document.getElementById("disco-dramatico-y-nocturno-contenedor"),
$listadramaticoynocturno=document.getElementById("lista-dramatico-y-nocturno");




//_--------------------------------------------------------------------

document.addEventListener("click", (e)=>{

       if(e.target.matches("#btn-dramatico-y-nocturno")){
          $btndramaticoynocturno.classList.remove("movimiento-alternado");
          $abrirdramaticoynocturno.classList.add("abrir-tapa");
          $btndramaticoynocturno.classList.add("abrir-tapa");
          $discodramaticoynocturnocontenedor.classList.add("disc-animation");
          $dramaticoynocturnocontenedortotal.classList.add("visited-disc-2"); 
          $albumdramaticoynocturno.classList.add("album-activado");  
          

          // que se detenga la animación de la lista de temas a los 15s de abrir el album
          setTimeout(function() {
            $listadramaticoynocturno.classList.remove("animacion-lista");
          }, 11000);
        }

});





///////////////////////////////  fin album  ///////////////////////////////////////////////////////









//////////////////   ALBUM HAMBRE  /////////////////////////////////////////////////

const $albumhambre=document.getElementById("album-hambre"),
$hambrecontenedortotal=document.getElementById("hambre-contenedor-total"),
$abrirhambre=document.getElementById("abrir-hambre"),
$btnhambre=document.getElementById("btn-hambre"),
$discohambrecontenedor=document.getElementById("disco-hambre-contenedor"),
$listahambre=document.getElementById("lista-hambre");


//_--------------------------------------------------------------------

document.addEventListener("click", (e)=>{

       if(e.target.matches("#btn-hambre")){
          $btnhambre.classList.remove("movimiento-alternado");
          $abrirhambre.classList.add("abrir-tapa");
          $btnhambre.classList.add("abrir-tapa");
          $discohambrecontenedor.classList.add("disc-animation");
          $hambrecontenedortotal.classList.add("visited-disc-2"); 
          $albumhambre.classList.add("album-activado");  
          

          // que se detenga la animación de la lista de temas a los 15s de abrir el album
          setTimeout(function() {
            $listahambre.classList.remove("animacion-lista");
          }, 11000);
        }

});





///////////////////////////////  fin album  HAMBRE  ///////////////////////////////////////////////////////










//////////////////   ALBUM DÍAS DE FUERZA  /////////////////////////////////////////////////

const $albumdiasdefuerza=document.getElementById("album-dias-de-fuerza"),
$diasdefuerzacontenedortotal=document.getElementById("dias-de-fuerza-contenedor-total"),
$abrirdiasdefuerza=document.getElementById("abrir-dias-de-fuerza"),
$btndiasdefuerza=document.getElementById("btn-dias-de-fuerza"),
$discodiasdefuerzacontenedor=document.getElementById("disco-dias-de-fuerza-contenedor"),
$listadiasdefuerza=document.getElementById("lista-dias-de-fuerza");


//_--------------------------------------------------------------------

document.addEventListener("click", (e)=>{

       if(e.target.matches("#btn-dias-de-fuerza")){
          $btndiasdefuerza.classList.remove("movimiento-alternado");
          $abrirdiasdefuerza.classList.add("abrir-tapa");
          $btndiasdefuerza.classList.add("abrir-tapa");
          $discodiasdefuerzacontenedor.classList.add("disc-animation");
          $diasdefuerzacontenedortotal.classList.add("visited-disc-2"); 
          $albumdiasdefuerza.classList.add("album-activado");  
          

          // que se detenga la animación de la lista de temas a los 15s de abrir el album
          setTimeout(function() {
            $listadiasdefuerza.classList.remove("animacion-lista");
          }, 11000);
        }

});





///////////////////////////////  fin album  HAMBRE  ///////////////////////////////////////////////////////








//////////////////   ALBUM LA ÚLTIMA ROTACIÓN DEL SOL  /////////////////////////////////////////////////

const $albumlaultimarotaciondelsol=document.getElementById("album-la-ultima-rotacion-del-sol"),
$laultimarotaciondelsolcontenedortotal=document.getElementById("la-ultima-rotacion-del-sol-contenedor-total"),
$abrirlaultimarotaciondelsol=document.getElementById("abrir-la-ultima-rotacion-del-sol"),
$btnlaultimarotaciondelsol=document.getElementById("btn-la-ultima-rotacion-del-sol"),
$discolaultimarotaciondelsolcontenedor=document.getElementById("disco-la-ultima-rotacion-del-sol-contenedor"),
$listalaultimarotaciondelsol=document.getElementById("lista-la-ultima-rotacion-del-sol");


//_--------------------------------------------------------------------

document.addEventListener("click", (e)=>{

       if(e.target.matches("#btn-la-ultima-rotacion-del-sol")){
          $btnlaultimarotaciondelsol.classList.remove("movimiento-alternado");
          $abrirlaultimarotaciondelsol.classList.add("abrir-tapa");
          $btnlaultimarotaciondelsol.classList.add("abrir-tapa");
          $discolaultimarotaciondelsolcontenedor.classList.add("disc-animation");
          $laultimarotaciondelsolcontenedortotal.classList.add("visited-disc-2"); 
          $albumlaultimarotaciondelsol.classList.add("album-activado");  
          

          // que se detenga la animación de la lista de temas a los 15s de abrir el album
          setTimeout(function() {
            $listalaultimarotaciondelsol.classList.remove("animacion-lista");
          }, 11000);
        }

});





///////////////////////////////  fin album LA ÚLTIMA ROTACIÓN DEL SOL  ///////////////////////////////////////////////////////

















//---------------------------------------------------------




    //  LIBRO CON LETRA - MÚSICOS - GRABACIÓN

const $btnagrande=document.querySelector(".btn-agrande");

$btnagrande.addEventListener("click", (e)=>{
        
        //......... SWITCH  ver / cerrar libro grande ........................
        $btnagrande.classList.toggle("switch");
        
        if ($btnagrande.classList.contains("switch")) {
            $btnagrande.innerHTML="X";
        } else {
            $btnagrande.innerHTML="ver";
        }
        

                
            $hoja1.classList.toggle("chico-1");
            $hoja2.classList.toggle("chico-2-3");
            $hoja3.classList.toggle("chico-2-3");

            $hoja1.classList.toggle("carrousel-slide-chico");
            $hoja2.classList.toggle("carrousel-slide-chico");
            $hoja3.classList.toggle("carrousel-slide-chico");

            $hoja1.classList.toggle("animation-hoja1"); 
           

            $hoja3.classList.toggle("animation-hoja3");
            

            $carrouselcontainergrandechico.classList.toggle("carrousel-container-cd-chico");
            $carrouselgrandechico.classList.toggle("carrousel-cd-chico");



            $carrouselcontainergrandechico.classList.toggle("carrousel-container-grande");
           
           
            
            $hoja1.classList.toggle("carrousel-slide-grande");

            $pletra.classList.toggle("p-letra-grande");

            $hoja2.classList.toggle("carrousel-slide-grande");

            $hoja3.classList.toggle("carrousel-slide-grande");



            $hoja1.classList.toggle("grande-1");
            $hoja2.classList.toggle("grande-2-3");
            $hoja3.classList.toggle("grande-2-3");
            $hoja3.classList.toggle("img-grande-2-3");

            
                
}, false);



