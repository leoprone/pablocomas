/* ********** Menu ********** */

((d) => {
    const $btnMenu = d.querySelector(".menu-btn"),
      $menu = d.querySelector(".menu");
  
  
    $btnMenu.addEventListener('click', (e) => {
      $btnMenu.firstElementChild.classList.toggle("none");
      $btnMenu.lastElementChild.classList.toggle("none");
      $menu.classList.toggle("is-active");
    });
  /*esconder el menu cuando ya se seleccionó una sección
   (por delegación de eventos, asignando el click a un
    elem. de nivel superior, en este caso, el document)*/ 
  d.addEventListener("click", (e) => {
      if (!e.target.matches(".menu a")) return false;/*no pasa nada ahí*/
  
      $btnMenu.firstElementChild.classList.remove("none");
      $btnMenu.lastElementChild.classList.add("none");
      $menu.classList.remove("is-active");
    });
  })(document);
  
  
  


      //-------------TEMAS INDIVIDUALES--------------

const $plato=document.getElementsByClassName("plato")[0],
$discinsecta=document.getElementById("disc-insecta"),
$agujerochico=document.getElementsByClassName("agujero-chico")[0],
$imgetiqueta=document.getElementsByClassName("img-etiqueta")[0],
$hoja1=document.getElementById("hoja-1"),
$hoja2=document.getElementById("hoja-2"),
$hoja3=document.getElementById("hoja-3"),
$carrouselgrandechico=document.getElementById("carrousel-grande-chico"),
$carrouselcontainergrandechico=document.getElementById("carrousel-container-grande-chico"),
$pletra=document.getElementById("p-letra"),
$pua=document.querySelector(".pua"),
$btnprueba=document.getElementById("btn-prueba");


// 4. The API will call this function when the video player is ready.
/* function onPlayerReady() {
    var pauseButtonRight = document.querySelector(".pause");
    pauseButtonRight.addEventListener("click", function() {
        movimientosTocadiscos();
        player.pauseVideo(); 
        player.stopVideo(); 
});

var pauseButtonLeft = document.querySelector(".play");
pauseButtonLeft.addEventListener("click", function() {
    movimientosTocadiscos();
    player.playVideo();
});
    }

 */






function onPlayerReady(){

 const $btnplaypause=document.querySelector(".btn-play-pause"),
 $btnstop=document.querySelector(".btn-stop"),
 $videoplayer=document.querySelector(".video-player");

 function playPause(){
    if($btnplaypause.classList.contains("arranque-tema")){
        $btnplaypause.classList.toggle("red");
        setTimeout(pausar, 5000, player, $btnplaypause);
       /* setTimeout(function(){
            player.playVideo();
       }, 6000); */
        $btnplaypause.classList.remove("arranque-tema");
        $btnplaypause.style.backgroundColor="rgba(255, 60, 60, 0.368)";
        
        
    //vinculando audio y movimientos
        $pua.classList.remove("paused"); 

        movimientosTocadiscos();

      
        $btnplaypause.onclick=function(){
            $btnplaypause.classList.toggle("red");
             pausar(player, $btnplaypause); 

          /*player.pauseVideo();*/
        //vinculando audio y movimientos
           /*  $pua.classList.remove("paused"); */  
            movimientosTocadiscos();
        }
            
}
 }





 $btnplaypause.addEventListener("click", playPause, false);
/*     if($btnplaypause.classList.contains("arranque-tema")){
        $btnplaypause.classList.toggle("red");
        setTimeout(pausar, 5000, player, $btnplaypause);
      
        $btnplaypause.classList.remove("arranque-tema");
        $btnplaypause.style.backgroundColor="rgba(255, 60, 60, 0.368)";
        
        
    //vinculando audio y movimientos
        $pua.classList.remove("paused"); 

        movimientosTocadiscos();

      
        $btnplaypause.onclick=function(){
            $btnplaypause.classList.toggle("red");
             pausar(player, $btnplaypause); 
 
            movimientosTocadiscos();
        }
            
}
 }); */
    
/* 
$btnstop.addEventListener("click", function(){
            pausar(player, $btnstop);
            movimientosTocadiscos();
            $pua.classList.remove("track-1"); */
           /*  $btnplaypause.classList.add("arranque-tema");
            $btnplaypause.classList.remove("red");
            $pua.classList.add("paused");
            $btnplaypause.removeEventListener("click", playPause, false);
             */
           /*  $btnplaypause.addEventListener("click", function(){
                if($btnplaypause.classList.contains("arranque-tema")){
                    $pua.classList.remove("paused"); 
                    $btnplaypause.classList.toggle("red");
                    setTimeout(pausar, 5000, player, $btnplaypause);
             
                    $btnplaypause.classList.remove("arranque-tema");
                    $btnplaypause.style.backgroundColor="rgba(255, 60, 60, 0.368)";
                    
                    
                //vinculando audio y movimientos
               
                    $pua.classList.add("track-1");
                    

                    movimientosTocadiscos();

                
                    $btnplaypause.onclick=function(){
                        $btnplaypause.classList.toggle("red");
                        pausar(player, $btnplaypause); 

                      
                        movimientosTocadiscos();
                    }
                        
            }
            }); */
/*             

}); */

}



/* 
function pausar(audio, boton) { 

    if(!audio.paused && !audio.ended){ 
        audio.pause(); 
        boton.value="start"; 
            
    }else{
            audio.play(); 
            boton.value="pause";
        } 

} 

   */
 function pausar($videoplayer, btn) { 

 
        if (btn.classList.contains("play") && !btn.classList.contains("stop")) {
            btn.value="pause"; 
            btn.classList.remove("play");
            btn.classList.remove("red");
            $videoplayer.playVideo(); 
           
        }else if(!btn.classList.contains("play")&& !btn.classList.contains("stop")){
            btn.value="play"; 
            btn.classList.add("play");
            btn.classList.add("red");
            $videoplayer.pauseVideo(); 
           
        }else{
            btn.classList.add("play");
            btn.classList.remove("red");
            $videoplayer.stopVideo(); 
        }
        
        
} 
 
  
  
  
function movimientosTocadiscos(){
    
    $plato.classList.toggle("paused");
    $discinsecta.classList.toggle("paused"); 
    $imgetiqueta.classList.toggle("paused");
    $agujerochico.classList.toggle("paused"); 
    }

   
  


////////////////////// MOVIMIENTO Y AUDIO TOCADISCOS ///////////////////////////
/* const $audiovoyafrecuentarte=document.getElementById("audio-voy-a-frecuentarte"),
$botonvoyafrecuentarte=document.getElementById("boton-voy-a-frecuentarte"),
$iframe=document.querySelector("iframe");

$botonvoyafrecuentarte.onclick=function(){
    $botonvoyafrecuentarte.style.backgroundColor="red";
    $iframe.removeAttribute("controls");
    if ($iframe.paused) {
       
        $iframe.play();
      } else {
      
        $iframe.pause();
      }
} */
 /*
document.addEventListener("mouseover", (e)=>{
   

    if (e.target.matches("#play-stop-video")) {
        e.target.play(); 
        $botonvoyafrecuentarte.classList.toggle("red");
        setTimeout(pausar, 6000, e.target, $botonvoyafrecuentarte);
        e.target.classList.remove("arranque-tema");
        
    //vinculando audio y movimientos
        $pua.classList.toggle("paused");  
        movimientosTocadiscos();

        $botonvoyafrecuentarte.onclick=function(){
            $botonvoyafrecuentarte.classList.toggle("red");
            pausar(e.target, $botonvoyafrecuentarte);

            //vinculando audio y movimientos
            $pua.classList.toggle("paused");  
            movimientosTocadiscos(); 
                    
        } 
    }
*/
        // ...........................VOY A FRECUENTARTE.......................

       /* 
        if(e.target.matches(".boton-voy-a-frecuentarte") && e.target.matches(".arranque-tema")){
                $botonvoyafrecuentarte.classList.toggle("red");
                setTimeout(pausar, 6000, $audiovoyafrecuentarte, $botonvoyafrecuentarte);
                $botonvoyafrecuentarte.classList.remove("arranque-tema");
                
            //vinculando audio y movimientos
                $pua.classList.toggle("paused");  
                movimientosTocadiscos();

                $botonvoyafrecuentarte.onclick=function(){
                    $botonvoyafrecuentarte.classList.toggle("red");
                    pausar($audiovoyafrecuentarte, $botonvoyafrecuentarte);

                    //vinculando audio y movimientos
                    $pua.classList.toggle("paused");  
                    movimientosTocadiscos(); 
                            
                }
                    
                }






        // ...........................  EVA  .......................


        const $audioeva=document.getElementById("audio-eva"),
        $btnplaypause=document.getElementById("boton-eva");

        
        if(e.target.matches(".boton-eva") && e.target.matches(".arranque-tema")){
                $botoneva.classList.toggle("red");
                setTimeout(pausar, 6000, $audioeva, $botoneva);
                $botoneva.classList.remove("arranque-tema");
                
            //vinculando audio y movimientos
                $pua.classList.toggle("paused");  
                movimientosTocadiscos();

                $botoneva.onclick=function(){
                    $botoneva.classList.toggle("red");
                    pausar($audioeva, $botoneva);

                //vinculando audio y movimientos
                    $pua.classList.toggle("paused");  
                    movimientosTocadiscos();
                }
                    
        }




        // ...........................SOLO POR CONOCER   .......................

        const $audiosoloporconocer=document.getElementById("audio-solo-por-conocer"),
        $botonsoloporconocer=document.getElementById("boton-solo-por-conocer");

        
        if(e.target.matches(".boton-solo-por-conocer") && e.target.matches(".arranque-tema")){
                $botonsoloporconocer.classList.toggle("red");
                setTimeout(pausar, 6000, $audiosoloporconocer, $botonsoloporconocer);
                $botonsoloporconocer.classList.remove("arranque-tema");
                
            //vinculando audio y movimientos
                $pua.classList.toggle("paused");  
                movimientosTocadiscos();

                $botonsoloporconocer.onclick=function(){
                    $botonsoloporconocer.classList.toggle("red");
                    pausar($audiosoloporconocer, $botonsoloporconocer);

                    //vinculando audio y movimientos
                    $pua.classList.toggle("paused");  
                    movimientosTocadiscos();
                }
                    
        }



        // ...........................SOLO POR CONOCER   .......................

        const $audiodecime=document.getElementById("audio-decime"),
        $botondecime=document.getElementById("boton-decime");

        
        if(e.target.matches(".boton-decime") && e.target.matches(".arranque-tema")){
                $botondecime.classList.toggle("red");
                setTimeout(pausar, 6000, $audiodecime, $botondecime);
                $botondecime.classList.remove("arranque-tema");
                
            //vinculando audio y movimientos
                $pua.classList.toggle("paused");  
                movimientosTocadiscos();

                $botondecime.onclick=function(){
                    $botondecime.classList.toggle("red");
                    pausar($audiodecime, $botondecime);

                    //vinculando audio y movimientos
                    $pua.classList.toggle("paused");  
                    movimientosTocadiscos();
                }
                    
        }


        
        // ........................... ASÍ NOMÁS  .......................

        const $audioasinomas=document.getElementById("audio-asi-nomas"),
        $botonasinomas=document.getElementById("boton-asi-nomas");

        
        if(e.target.matches(".boton-asi-nomas") && e.target.matches(".arranque-tema")){
                $botonasinomas.classList.toggle("red");
                setTimeout(pausar, 6000, $audioasinomas, $botonasinomas);
                $botonasinomas.classList.remove("arranque-tema");
                
            //vinculando audio y movimientos
                $pua.classList.toggle("paused");  
                movimientosTocadiscos();

                $botonasinomas.onclick=function(){
                    $botonasinomas.classList.toggle("red");
                    pausar($audioasinomas, $botonasinomas);

                    //vinculando audio y movimientos
                    $pua.classList.toggle("paused");  
                    movimientosTocadiscos();
                }
                    
        }

});


 */

//---------------------------------------------------------








document.getElementsByClassName("agrande")[0].addEventListener("click", (e)=>{
        
        //......... SWITCH  ver / cerrar libro grande ........................
        document.getElementsByClassName("agrande")[0].classList.toggle("switch");
        
        if (document.getElementsByClassName("agrande")[0].classList.contains("switch")) {
            document.getElementsByClassName("agrande")[0].innerHTML="X";
        } else {
            document.getElementsByClassName("agrande")[0].innerHTML="ver";
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


