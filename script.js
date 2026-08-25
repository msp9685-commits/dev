let input = document.querySelector("#input");
let btn = document.querySelector("#btn");
let todoList = document.querySelector(".todolist")


function perform(){
    if(input.value.trim() === ""){
        return;
    }
    let div = document.createElement("div");
    let h3 = document.createElement("h3");
    let editBtn =document.createElement("button");
    let delBtn = document.createElement("button");
    todoList.append(div);
    div.append(h3, editBtn, delBtn);
    editBtn.textContent = "Edit";
    delBtn.textContent = "Delete";
    div.setAttribute("class", "li")
    h3.textContent = `${input.value}`
    input.value =""
    delBtn.addEventListener("click",()=>{
    div.remove();
    })
}

btn.addEventListener("click",()=>{
    perform();
})
