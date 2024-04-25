
//import{presionar} from "./frio.js"


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




//////////////////////////////////////   función de INICIO   ////////////////////////////////////

 //si hay animación inicial, hacemos que el movimiento
 //alternado de los albumes no comience hasta
 //que dicha animación termine
 
 // Cuando carga la página
/*  window.addEventListener('load', animacionAlbum, false);  */




 function animacionAlbum(){
  
   setTimeout(()=>{
       //poner acá la línea correspondiente a CADA ALBUM
        $abrirNOMBREALBUM.classList.add("movimiento-alternado");
       
   }, 0); // el movimiento del album no empieza hasta que 
              //  termine la animación del fondo con balas
 } 
 
 
//////////////////////////////////////////////////////////////////////////

 




//////////////////  uno por cada ALBUM  ////////////////////////////////////////////

//BOTON ABRIR TAPAS DISCOS (index.html)


const $abrirNOMBREALBUM=document.getElementById("abrir-NOMBRE-ALBUM"),
$btnNOMBREALBUM=document.getElementById("btn-NOMBRE-ALBUM"),
$NOMBREALBUMcontainertotal=document.getElementById("NOMBRE-ALBUM-container-total"),
$discNOMBREALBUMcontainer=document.getElementById("disc-NOMBRE-ALBUM-container"),
$albumNOMBREALBUM=document.getElementById("album-NOMBRE-ALBUM");




//_--------------------------------------------------------------------

document.addEventListener("click", (e)=>{

       if(e.target.matches(".btn-abrir-NOMBRE-ALBUM")){
     
          $btnNOMBREALBUM.classList.remove("movimiento-alternado");
          $abrirNOMBREALBUM.classList.add("abrir-tapa");
          $btnNOMBREALBUM.classList.add("abrir-tapa");
          $discNOMBREALBUMcontainer.classList.add("disc-animation");
          $NOMBREALBUMcontainertotal.classList.add("visited-disc-2"); 
          $albumNOMBREALBUM.classList.add("album-activado");   
        }

});

///////////////////////////////  fin ALBUM  ///////////////////////////////////////////////////////






















  
  //BOTON ABRIR TAPAS DISCOS (index.html)
  
  
  const $abrirgrtapa=document.getElementById("abrir-gr-tapa"),
  $abririnsecta=document.getElementById("abrir-insecta"),
  $abririnfinito1=document.getElementById("abrir-infinito1"),
  $abrir3=document.getElementById("abrir-3"),
  $abrirdiaslime=document.getElementById("abrir-dias-lime"),
  $btninsecta=document.getElementById("btn-insecta"),
  $btntachfelino=document.getElementById("btn-tach-felino"),
  $btndiaslime=document.getElementById("btn-dias-lime"),
  $discdiaslimecontainer=document.getElementById("disc-dias-lime-container"),
  $disctachfelino=document.getElementById("disc-tach-felino"),
  $discinsecta=document.getElementById("disc-insecta"),
  $galeria=document.getElementById("galeria"),
  $galery=document.getElementById("galery"),
  $galery2=document.getElementById("galery2"),
  $insectacontainertotal=document.getElementById("insecta-container-total"),
  $discinsectacontainer=document.getElementById("disc-insecta-container"),
  $diaslimecontainertotal=document.getElementById("dias-lime-container-total"),
  $rotateinsecta=document.getElementById("rotate-insecta"),
  $insectah3=document.getElementById("insecta-h3"),
  $disctachfelinocontainer=document.getElementById("disc-tach-felino-container"),
  $tachfelinocontainertotal=document.getElementById("tach-felino-container-total"),
  $rotatetachfelino=document.getElementById("rotate-tach-felino"),
 $rotatediaslime=document.getElementById("rotate-dias-lime"),
 $puainsecta=document.getElementById("pua-insecta"),
 $puatachfelino=document.getElementById("pua-tach-felino"),
 $puadiaslime=document.getElementById("pua-dias-lime"),
  $abrirtachfelino=document.getElementById("abrir-tach-felino"),
  $carrouselgrandechico=document.getElementById("carrousel-grande-chico"),
  $carrouselcontainergrandechico=document.getElementById("carrousel-container-grande-chico"),
  $hoja1=document.getElementById("hoja-1"),
  $hoja2=document.getElementById("hoja-2"),
  $hoja3=document.getElementById("hoja-3"),
  //$music=document.getElementById("music"),
  //$tocadiscos=document.getElementById("tocadiscos"),
  $tituloinsecta=document.getElementById("titulo-insecta"),
  $titulotachfelino=document.getElementById("titulo-tach-felino"),
  $titulodiaslime=document.getElementById("titulo-dias-lime"),
  $albumindividualinsecta=document.getElementById("album-individual-insecta"),
  
  $albumindividualtachfelino=document.getElementById("album-individual-tach-felino"),
  $albumindividualdiaslime=document.getElementById("album-individual-dias-lime"),
  $discography=document.getElementById("discography"),
  $lasbanderas=document.getElementById("las-banderas");
  
  
  
 
  
  
  document.addEventListener("click", (e)=>{
  
  /*
         if(e.target.matches(".btn-abrir-gr")){
         $abrirgrtapa.classList.toggle("running");
         
           }
  */

/* ..............SINGLES---------------*/
         


           //------INSECTA--------------
         if(e.target.matches(".btn-abrir-insecta")){

         // $tituloinsecta.classList.add("visibility-hidden");
         // $titulotachfelino.classList.remove("visibility-hidden");
          
         // $tocadiscos.classList.add("tocadiscos-activo");
          //$music.classList.add("music-activo");
            $abririnsecta.classList.add("running");
          $btninsecta.classList.add("running");
         
          $discinsectacontainer.classList.add("disc-animation");
          //$insectacontainertotal.classList.add("z-index-20");
           
           $insectacontainertotal.classList.add("visited-disc-2");
           $albumindividualinsecta.classList.add("album-activado");   
          // $rotateinsecta.classList.add("rotatex-50");
           
          //$puainsecta.classList.add("pua-animation");
          
          }
  
      //-----------TACH FELINO---------------
  
        if(e.target.matches(".btn-abrir-tach-felino")){



         // $insectacontainertotal.classList.add("disco-devuelto");

         //$discinsectacontainer.classList.remove("disc-animation");
         //$insectacontainertotal.classList.remove("visited-disc");
         //$insectacontainertotal.classList.add("visited-disc-2");
        
       
         // $btninsecta.classList.add("cerrar-tapa");
         // $abririnsecta.classList.add("cerrar-tapa");

          //$insectacontainertotal.classList.add("disco-devuelto");
         // $btninsecta.classList.remove("cerrar-tapa");
          //$abririnsecta.classList.remove("cerrar-tapa");
         

         // $titulotachfelino.classList.add("visibility-hidden");
          //$titulodiaslime.classList.remove("visibility-hidden");


          $abrirtachfelino.classList.toggle("running");
          $btntachfelino.classList.toggle("running");
 
         // $tachfelinocontainertotal.classList.add("z-index-22");
         // $disctachfelinocontainer.classList.add("z-index-32");
          $disctachfelinocontainer.classList.add("disc-animation");
  
          $tachfelinocontainertotal.classList.add("visited-disc-2");
          $albumindividualtachfelino.classList.add("album-activado");
        // $galeria.classList.add("margin-top");
         
          
        //  $rotatetachfelino.classList.add("rotatex-50");
         // $puatachfelino.classList.add("pua-animation");
         
      
       
        }

        //-------------DÍAS LIME----------------

        if(e.target.matches(".btn-abrir-dias-lime")){
          $abrirdiaslime.classList.toggle("running");
          $btndiaslime.classList.toggle("running");
          $discdiaslimecontainer.classList.add("disc-animation");
 
          
          $diaslimecontainertotal.classList.add("visited-disc-2");
        // $albumindividualdiaslime.classList.add("dias-lime-activado");
          //$discography.classList.add("discography-grande");
          //$rotatediaslime.classList.add("rotatex-50");
          //$puadiaslime.classList.add("pua-animation");
        
          
        }

                   //------------GALERÍA-------------
  
        if(e.target.matches(".transp-foto")){
          $galery.classList.toggle("normal-galery");
         $galeria.classList.toggle("galeria-grande1");
          
        }
  
        if(e.target.matches(".transp2-foto")){
          $galery2.classList.toggle("normal-galery");
          $galeria.classList.toggle("galeria-grande2");
          
        }
       
  
        //-------------TEMAS INDIVIDUALES--------------

        if(e.target.matches(".p")){
    
              $hoja1.classList.remove("chico-1");
         $hoja2.classList.remove("chico-2-3");
          $hoja3.classList.remove("chico-2-3");

          $hoja1.classList.remove("carrousel-slide-chico");
      
          
         
          $hoja2.classList.remove("carrousel-slide-chico");
          
        
          $hoja3.classList.remove("carrousel-slide-chico");
          $hoja1.classList.remove("animation-hoja1"); 
          
          $hoja3.classList.remove("animation-hoja3");

          $carrouselcontainergrandechico.classList.remove("carrousel-container-cd-chico");
          $carrouselgrandechico.classList.remove("carrousel-cd-chico");


          $carrouselgrandechico.classList.add("carrousel-grande");
          $carrouselcontainergrandechico.classList.add("carrousel-container-grande");
          $hoja1.classList.add("carrousel-slide-grande");
        

          $hoja2.classList.add("carrousel-slide-grande");
           
          $hoja3.classList.add("carrousel-slide-grande");
         /* $hoja1.classList.add("animation-carrousel-slide");
          $hoja2.classList.add("animation-carrousel-slide");
          $hoja3.classList.add("animation-carrousel-slide");*/
          $hoja1.classList.add("grande-1");
          $hoja2.classList.add("grande-2-3");
          $hoja3.classList.add("grande-2-3");
              
         
        
          
        }
       
  
  });
  
  
  
