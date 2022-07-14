const whatsapp = document.querySelector(".whatsapp");
const msjeContacto = document.querySelector(".msjeContacto");

whatsapp.onmouseover = function(){
    msjeContacto.style.display = "flex";
    msjeContacto.style.justifyContent = "center";
};

whatsapp.onmouseleave = function(e){ 
    msjeContacto.style.display = "none";
};
    
