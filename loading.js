        var loaded = window.sessionStorage.getItem("loaded"),loaded2 = window.sessionStorage.getItem("loaded2");
        window.addEventListener("load",()=>{
         var header = document.querySelector("header"),form = document.querySelector("form"),div = document.querySelector("div")
         if(loaded != "false" && window.location.href == "https://saidbc.github.io/earnsweat.github-io/login.html"){
             form.style.animation="toRight 1s ease-in-out 1"
             div.style.animation="toRight 1.5s ease-in-out 1"
             header.style.animation="toTop 1s ease-out 1"
             window.sessionStorage.setItem("loaded",false)
         }else if(loaded2 != "false" && window.location.href == "https://saidbc.github.io/earnsweat.github-io/register.html"){
             form.style.animation="toRight 1s ease-in-out 1"
             div.style.animation="toRight 1.5s ease-in-out 1"
             header.style.animation="toTop 1s ease-out 1"
             window.sessionStorage.setItem("loaded2",false)
         }
     })
