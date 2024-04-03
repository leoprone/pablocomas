
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


















// ///////////   CÓDIGO QUE HAY QUE HACER POR CADA ALBUM (index.html)  ////////////////////////////////


//BOTON ABRIR TAPA DISCO (index.html)


const $albumNOMBREALBUM=document.getElementById("album-NOMBRE-ALBUM"),
$NOMBREALBUMcontenedortotal=document.getElementById("NOMBRE-ALBUM-contenedor-total"),
$abrirNOMBREALBUM=document.getElementById("abrir-NOMBRE-ALBUM"),
$btnNOMBREALBUM=document.getElementById("btn-NOMBRE-ALBUM"),
$discoNOMBREALBUMcontenedor=document.getElementById("disco-NOMBRE-ALBUM-contenedor"),
$listadeslizante=document.querySelector(".lista__deslizante");





window.addEventListener('load', animacionAlbum, false); 




 function animacionAlbum(){
  
   setTimeout(()=>{
   
        $abrirNOMBREALBUM.classList.add("movimiento-alternado");
       
   }, 3000); // el movimiento del album no empieza hasta que 
              //  termine la animación del fondo con balas
 } 
 







//_--------------------------------------------------------------------

document.addEventListener("click", (e)=>{

       if(e.target.matches("#btn-NOMBRE-ALBUM")){
          $btnNOMBREALBUM.classList.remove("movimiento-alternado");
          $abrirNOMBREALBUM.classList.add("abrir-tapa");
          $btnNOMBREALBUM.classList.add("abrir-tapa");
          $discoNOMBREALBUMcontenedor.classList.add("disc-animation");
          $NOMBREALBUMcontenedortotal.classList.add("visited-disc-2"); 
          $albumNOMBREALBUM.classList.add("album-activado");  
          

          // que se detenga la animación de la lista de temas a los 15s de abrir el album
          setTimeout(function() {
            $listadeslizante.classList.remove("animacion-lista");
          }, 15000);
        }

});





///////////////////////////////  fin album  ///////////////////////////////////////////////////////




////////////////////////    ANIMACIÓN PRENDE Y APAGA   //////////////////////

const $ext=document.querySelector(".ext"),
$div2=document.querySelector(".div-2"),
$div3=document.querySelector(".div-3"),
$nube4=document.querySelector(".nube-4"),
$sol=document.querySelector(".sol"),
$piso=document.querySelector(".piso");


//  falta terminarlo

////////////////////////////////////////////////////////////////







//------------GALERÍA-------------

const $galeria=document.getElementById("galeria"),
$galery=document.getElementById("galery"),
$galery2=document.getElementById("galery2");



document.addEventListener("click", (e)=>{

  if(e.target.matches(".transp-foto")){
    $galery.classList.toggle("normal-galery");
  $galeria.classList.toggle("galeria-grande1");
    
  }

  if(e.target.matches(".transp2-foto")){
    $galery2.classList.toggle("normal-galery");
    $galeria.classList.toggle("galeria-grande2");
    
  }

});
    