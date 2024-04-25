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


