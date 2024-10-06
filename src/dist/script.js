document.getElementById("menu").addEventListener("click", function(e){
    e.preventDefault();
   
    
    var menubar = document.getElementById("menubar");
    menubar.classList.toggle("animateIn");
    menubar.classList.toggle("hidden");
   
    
})

document.getElementById("menu").addEventListener("body", (e)=> {

    e.preventDefault();
    var menubar = document.getElementById("menubar");
    menubar.classList.toggle("animateIn");
    menubar.classList.toggle("hidden");
    
})


