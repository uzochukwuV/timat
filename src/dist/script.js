document.getElementById("menu").addEventListener("focusin", function(e){
    e.preventDefault();
    console.log("focused");
    
    var menubar = document.getElementById("menubar");
    menubar.classList.toggle("animateIn");
    menubar.classList.toggle("hidden");
    console.log("click");
    
})

document.getElementById("menu").addEventListener("focusout", (e)=> {

    e.preventDefault();
    var menubar = document.getElementById("menubar");
    menubar.classList.toggle("animateIn");
    menubar.classList.toggle("hidden");
    console.log("focus out");
})


