        let can = document.getElementById("canvas"),ctx = can.getContext("2d"),arr = [];
        can.style.position ="absolute";
        can.width =document.getElementById("home").offsetWidth;
        can.height = document.getElementById("home").offsetHeight;

       fetch("https://api.coingecko.com/api/v3/simple/price?ids=sweatcoin&vs_currencies=usd&include_market_cap=true&include_24hr_vol=true&include_24hr_change=true")
        .then((data)=>{
          return data.json()
        }).then((data)=>{
            let num = new String(data.sweatcoin.usd_24h_change);
            document.getElementById("price").innerHTML= data.sweatcoin.usd + "$";
            document.getElementById("mktcap").innerHTML= Math.floor(data.sweatcoin.usd_market_cap) + "$";
            document.getElementById("vol").innerHTML= Math.floor(data.sweatcoin.usd_24h_vol) + "$";
            document.getElementById("change").innerHTML="+"+ num.split(".")[0].concat(num.match(/.\d{3}/g)[0]) + "%";
        }).catch(err =>{
            document.getElementById("price").innerHTML= "undifiend" + "$";
            document.getElementById("mktcap").innerHTML= "undifiend" + "$";
            document.getElementById("vol").innerHTML=  "undifiend" + "$";
            document.getElementById("change").innerHTML= "undifiend" + "%";
        })
        window.addEventListener("scroll",(e)=>{
            if(this.scrollY > 450 ){
                document.getElementById("sweatHand").style.right = "14.5vw";
            }
        })
      let left_arrow = document.getElementById("left-arrow"),right_arrow = document.getElementById("right-arrow"),reviews = document.querySelectorAll(".reviews"),pos = 5;
      let circles = document.querySelectorAll(".circles");
      circles.forEach((circle,i) => {
        circle.addEventListener("click",(e)=>{
           circles.forEach(element => {
            element.classList.remove("active")
           });
           for (let g = 0; g < 5; g++) {
            reviews[g].style.display="none"; 
           }
           reviews[i].style.display="block"; 
           pos = i+1;
           circle.classList.add("active");
        })
      });
      left_arrow.addEventListener("click",()=>{
        circles.forEach(e => {
           pos > 1 ? e.classList.remove("active"):false
        });
    for (let i = 0; i <= reviews.length; i++) {
        if (pos === i+1 && pos > 1) {
        reviews[i].style.display="none" 
        circles[i-1].classList.add("active")
        pos -= 1;
       }
    }
      })
      right_arrow.addEventListener("click",()=>{
        circles.forEach(e => {
            pos < 5 ? e.classList.remove("active"):false
        });
      for (let j = reviews.length; j > 0; j--) {
       if (pos === j) {
        console.log(j)
        reviews[j].style.display="block";
        circles[j].classList.add("active")
        pos += 1;
    }}})

    
