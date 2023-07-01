        var loaded = window.sessionStorage.getItem("loaded")
        window.addEventListener("load",()=>{
         var header = document.querySelector("header"),form = document.querySelector("form"),div = document.querySelector("div")
         if(loaded != "false"){
             form.style.animation="toRight 1s ease-in-out 1"
             div.style.animation="toRight 1.5s ease-in-out 1"
             header.style.animation="toTop 1s ease-out 1"
             window.sessionStorage.setItem("loaded",false)
         }
     })
