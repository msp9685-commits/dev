let createBtn = document.querySelector("#createbtn");
let formDiv = document.querySelector(".form");
let formClose = document.querySelector("#close");
let form = document.querySelector("form");
let productsDiv = document.querySelector(".products");
createBtn.addEventListener("click", ()=>{
  formDiv.style.display = "flex";
})
formClose.addEventListener("click", ()=>{
  formDiv.style.display = "none";
})
let productArr = JSON.parse(localStorage.getItem("products")) || []
let updateIndex = null;
let ui = ()=>{
  productsDiv.innerHTML = "";
  productArr.forEach((elem, index)=>{
    productsDiv.innerHTML += `<div class="product_card">
        <div class="img">
          <img src="${elem.url}" alt="">
        </div>
        <div class="text">
          <h3>${elem.name}</h3>
          <p>${elem.des}</p>
          <p>${elem.price}</p>
        </div>
        <div class="btns">
          <button onclick="updateBtn('${elem.name}')">Update</button>
          <button onclick = "del('${index}')">Delete</button>
        </div>
      </div>`
  })
}
ui();
form.addEventListener("submit", (e)=>{
  e.preventDefault();
  console.log(e)
  let name = e.target[0].value;
  let des = e.target[1].value;
  let price = e.target[2].value;
  let url = e.target[3].value;
  form.reset();
  obj = {
    name,
    des,
    price,
    url,
  }
  if(name.trim() === "" || des.trim() === "" || price.trim() === "" || url.trim() === ""){
    alert("please fill all the fields");
    return;
  }
  if(updateIndex !==null){
    productArr[updateIndex] = obj;
    localStorage.setItem("products", JSON.stringify(productArr));
    updateIndex = null;
    ui();
  }
  else{
    productArr.push(obj);
    localStorage.setItem("products", JSON.stringify(productArr));
    ui();
  }
  formDiv.style.display = "none";
})
let updateBtn =(match)=>{
  let data =productArr.find((elem)=>{
    return elem.name === match;
  });
  let index =productArr.findIndex((elem)=>{
    return elem.name === match;
  });
  updateIndex = index;
  formDiv.style.display = "flex";
  form[0].value = data.name;
  form[1].value = data.des;
  form[2].value = data.price;
  form[3].value = data.url;
}
let del = (index) =>{
  productArr.splice(index, 1);
  localStorage.setItem("products", JSON.stringify(productArr));
  ui();
}