let box = document.createElement("div");
box.classList.add("box");
let main = document.querySelector("main");
let btn = document.querySelector("button");
let timer = document.querySelector("#timer")
let overlay = document.querySelector(".overlay");
let scoree = document.querySelector("#score");
let time = 0;
let interval;
let random = ()=>{
  main.append(box);
  box.style.backgroundColor = randomColor();
  let mainH = main.clientHeight - box.offsetHeight;
  let MainW = main.clientWidth - box.offsetWidth;
  let rX = Math.random()* MainW;
  let rY = Math.random()* mainH;
  box.style.top = `${rY}px`
  box.style.left = `${rX}px`
}
let randomColor = ()=>{
  let r = Math.floor(Math.random()*256);
  let g = Math.floor(Math.random()*256);
  let b = Math.floor(Math.random()*256);
  return `rgb(${r}, ${g}, ${b})`
  
}
btn.addEventListener("click", ()=>{
  clearInterval(interval);
  random()
  interval = setInterval(()=>{
  random();
  time +=1;
  timer.textContent = time;
  },1000)
  setTimeout(()=>{
    clearInterval(interval);
    overlay.style.display = "flex"
    time =0;
  
  },10000)
});
let score = 0;
box.addEventListener("click", ()=>{
  score += 1;
  scoree.textContent = score;
});