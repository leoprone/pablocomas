
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













//////////////////   CÓDIGO GENERAL PARA TODOS LOS ÁLBUMES   ///////////////////////////////






window.addEventListener('load', animacionAlbum, false); 




 function animacionAlbum(){
  
   setTimeout(()=>{
      //  poner TODOS las tapas (1 por CADA ÁLBUM)
        $abrirdramaticoynocturno.classList.add("movimiento-alternado"),
        $abrirhambre.classList.add("movimiento-alternado");
       
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
          }, 15000);
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
          }, 15000);
        }

});





///////////////////////////////  fin album  HAMBRE  ///////////////////////////////////////////////////////








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
    