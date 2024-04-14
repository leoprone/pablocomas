
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
  
  
  
  
  


//------------GALERÍA-------------

const $galeria=document.getElementById("galeria"),
$galery=document.getElementById("galery"),
$galery2=document.getElementById("galery2");



document.addEventListener("click", (e)=>{

  if(e.target.matches(".transp-foto")){
    $galery.classList.toggle("normal-galery");
  $galeria.classList.toggle("galeria-grande1");
  $galery.classList.toggle("animacion-pelicula-fotos");

    
  }

  if(e.target.matches(".transp2-foto")){
    $galery2.classList.toggle("normal-galery");
    $galeria.classList.toggle("galeria-grande2");
    $galery2.classList.toggle("animacion-pelicula-fotos");
   
    
  }

/* 

  if(e.target.matches(".boton-animacion")){
      setTimeout(() => {
      $tapaanimada.classList.toggle("opacity-cero"); 
      
    }, 10000); 
     
    $d5.classList.toggle("inicial");
    $d6.classList.toggle("inicial");
    $d7.classList.toggle("inicial");
    $d8.classList.toggle("inicial");
    $d9.classList.toggle("inicial");
    
    $d10.classList.toggle("inicial");
    $d11.classList.toggle("inicial");
    $d12.classList.toggle("inicial");
    $d13.classList.toggle("inicial");
    $d14.classList.toggle("inicial");
    $d15.classList.toggle("inicial");
  } */

});
    
window.onload=function (){
  setTimeout(() => {
    $tapaanimada.classList.toggle("opacity-cero"); 
    
  }, 3000); 
    
  $d5.classList.toggle("inicial");
  $d6.classList.toggle("inicial");
  $d7.classList.toggle("inicial");
  $d8.classList.toggle("inicial");
  $d9.classList.toggle("inicial");
  
  $d10.classList.toggle("inicial");
  $d11.classList.toggle("inicial");
  $d12.classList.toggle("inicial");
  $d13.classList.toggle("inicial");
  $d14.classList.toggle("inicial");
  $d15.classList.toggle("inicial");
}

    const $tapaanimada=document.querySelector(".tapa-animada"),
    $albumtapaprueba=document.querySelector(".album__tapa-prueba"),
    $d5=document.getElementById("d5"),
    $d6=document.getElementById("d6"),
    $d7=document.getElementById("d7"),
    $d8=document.getElementById("d8"),
    $d9=document.getElementById("d9");
    $d10=document.getElementById("d10"),
    $d11=document.getElementById("d11"),
    $d12=document.getElementById("d12"),
    $d13=document.getElementById("d13"),
    $d14=document.getElementById("d14"),
    $d15=document.getElementById("d15");






    

//---------------------------------------------------------


