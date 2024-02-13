let btn = document.getElementById("btn")
let jockpara = document.getElementById("jock-para")
let spinner1 = document.getElementById("spinner")

function getandappendtext(text){
    spinner1.classList.remove("spinner")
      let {value} = text
      jockpara.textContent = value
    
}
btn.onclick = function(){
    let totals = {
        method:"GET"
    }
    fetch("https://apis.ccbp.in/jokes/random")
    .then(function(response) {
        return response.json()
    })
    .then(function(text){
       
        getandappendtext(text)
    })
    spinner1.classList.add("spinner")
}
