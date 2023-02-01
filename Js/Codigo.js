document.getElementById("boton").onclick = function(){trabajo(document.getElementById("oculto") )} 
document.getElementById("botonb").onclick = function(){trabajo(document.getElementById("ocultob") )} 
document.getElementById("botonc").onclick = function(){trabajo(document.getElementById("ocultoc") )} 

function trabajo (x) {
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
      }
          
          
