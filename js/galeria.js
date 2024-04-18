

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
           