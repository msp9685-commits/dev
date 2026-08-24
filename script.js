let blub = document.getElementById("blub");
let btn = document.querySelector("button")
btn.addEventListener("click", ()=>{
    if(blub.classList.toggle("lightup")){
        btn.textContent = "Off";
    }
    else{
        btn.textContent = "On";
    }
})