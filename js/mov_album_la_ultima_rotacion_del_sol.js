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
  
  



//----------------------------------------------------------------------------

  window.addEventListener('load', animacionAlbum, false); 


function animacionAlbum(){
    $abrirlaultimarotaciondelsol.classList.add("movimiento-alternado");
 
} 
  



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




   //  LIBRO CON LETRA - MÚSICOS - GRABACIÓN

   const $btnagrande=document.querySelector(".btn-agrande"),
   $hoja1=document.querySelector(".hoja-1"),
   $hoja2=document.querySelector(".hoja-2"),
   $hoja3=document.querySelector(".hoja-3"),
   $carrouselgrandechico=document.querySelector(".carrousel-grande-chico"),
   $carrouselcontainergrandechico=document.querySelector(".carrousel-container-grande-chico"),
   $pletra=document.querySelector(".p-letra");
   
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
   
   
   
   