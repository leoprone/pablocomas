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
    $albumtapa.classList.add("movimiento-alternado");
 
} 
  


 /*  
const $albumdramaticoynocturno=document.getElementById("album-dramatico-y-nocturno"),
$dramaticoynocturnocontenedortotal=document.getElementById("dramatico-y-nocturno-contenedor-total"),
$abrirdramaticoynocturno=document.getElementById("abrir-dramatico-y-nocturno"),
$btndramaticoynocturno=document.getElementById("btn-dramatico-y-nocturno"),
$discodramaticoynocturnocontenedor=document.getElementById("disco-dramatico-y-nocturno-contenedor"),
$listadramaticoynocturno=document.getElementById("lista-dramatico-y-nocturno");

 */
const $album=document.querySelector(".album"),
$albumcontenedorfondotapa=document.querySelector(".album__contenedorFondoTapa"),
$albumtapa=document.querySelector(".album__tapa"),
$albumbtntapa=document.querySelector(".album__btnTapa"),
$albumcontenedorvinilo=document.querySelector(".album__contenedor-vinilo"),
$listadeslizante=document.querySelector(".lista__deslizante");


//_--------------------------------------------------------------------

document.addEventListener("click", (e)=>{

      if(e.target.matches(".album__btnTapa")){
         $albumbtntapa.classList.remove("movimiento-alternado");
         $albumtapa.classList.add("abrir-tapa");
         $albumbtntapa.classList.add("abrir-tapa");
         $albumcontenedorvinilo.classList.add("disc-animation");
         $albumcontenedorfondotapa.classList.add("visited-disc-2"); 
         $album.classList.add("album-activado");  
         

         // que se detenga la animación de la lista de temas a los 15s de abrir el album
         setTimeout(function() {
           $listadeslizante.classList.remove("animacion-lista");
         }, 11000);
       }

});





///////////////////////////////  fin album DRAMÁTICO Y NOCTURNO ///////////////////////////////////////////////////////





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
   
   
   
   