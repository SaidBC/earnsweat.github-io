
        var valid = false,email = document.getElementById("email"),newDiv = document.createElement("div"),home = document.getElementById("home"),newP = document.createElement("p");
        document.getElementById("submit").addEventListener("click", (e)=>{
          if( email.value !== "" ){ 
            event.preventDefault()
           if (valid == true) {
            home.style.filter = "blur(5px)"
            document.querySelector("footer").style.filter = "blur(5px)"
            newDiv.innerHTML=`<div class="container done">
        <img src="https://cdn-icons-png.flaticon.com/512/5625/5625810.png" alt="">
        <p> Please Now Check Your Email  </p>
    </div>`
           home.after(newDiv)
           }else{
            newP.innerHTML = "!! This Email Have not registered Yet !!"
            newP.style.color = "#f56"
            document.querySelector("label").before(newP)
           }
        }
        });

    
