document.getElementById("menu").addEventListener("focusin", function(e){
    e.preventDefault();
   
    
    var menubar = document.getElementById("menubar");
    menubar.classList.toggle("animateIn");
    menubar.classList.toggle("hidden");
   
    
})

document.getElementById("menu").addEventListener("focusout", (e)=> {

    e.preventDefault();
    var menubar = document.getElementById("menubar");
    menubar.classList.toggle("animateIn");
    menubar.classList.toggle("hidden");
    
})


