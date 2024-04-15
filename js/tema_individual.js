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
$pua=document.querySelector(".pua");




const $btnplaypause=document.querySelector(".btn-play-pause");





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




  
//--------------------------  MOSTRAR ACORDES DEL TEMA ................

const $acordes=document.querySelector(".acordes"),
$btnacordestema=document.querySelector(".btn-acordes-tema"),
$espaciadores=document.getElementsByClassName("espaciador");

document.addEventListener("click", (e)=>{

  if(e.target.matches(".btn-acordes-tema")){
    $acordes.classList.toggle("display-none");
   
    
    if (!$acordes.classList.contains("display-none")) {
        Array.prototype.forEach.call($espaciadores, function($espaciadores) {
          $espaciadores.classList.add("renglon-letra");
      });
      $btnacordestema.innerHTML="ocultar acordes";
      $btnacordestema.classList.add("bg-ocultar");
    }else{
        Array.prototype.forEach.call($espaciadores, function($espaciadores) {
          $espaciadores.classList.remove("renglon-letra");
      });
      $btnacordestema.innerHTML="Acordes";
      $btnacordestema.classList.remove("bg-ocultar");
    }
   
  }
});
