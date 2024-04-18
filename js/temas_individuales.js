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
$discinsecta=document.querySelector(".disc-rotate-translate"),
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
        
        $pletrachica.classList.remove("paused");
        video.playVideo(); 
       
    }else if(!btn.classList.contains("play")&& !btn.classList.contains("stop")){
        btn.value="play"; 
        btn.classList.add("play");
        btn.classList.add("red");
        video.pauseVideo(); 
        $pletrachica.classList.add("paused");
       
    }else{
        btn.classList.add("play");
        btn.classList.remove("red");
        $pletrachica.classList.add("paused");
        video.stopVideo(); 
    }
 
} 




function movimientosTocadiscos(){

$plato.classList.toggle("paused");
$discinsecta.classList.toggle("paused"); 
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

        $pletrachica.classList.add("animacion-letra");
        
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



