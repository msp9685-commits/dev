let inp1 = document.querySelector("#name");
let inp2 = document.querySelector("#email");
let url = document.querySelector("#url")
let form = document.querySelector("form")
let btn = document.querySelector("#btn");
let users = document.querySelector(".users")
let userData = [{
    id: 1,
    name: "Aarav Sharma",
    email: "aarav.sharma@example.com",
    image: "https://randomuser.me/api/portraits/men/11.jpg",
    dob: "1998-04-15",
  },
  {
    id: 2,
    name: "Priya Verma",
    email: "priya.verma@example.com",
    image: "https://randomuser.me/api/portraits/women/22.jpg",
    dob: "1996-09-28",
  },
  {
    id: 3,
    name: "Rohan Mehta",
    email: "rohan.mehta@example.com",
    image: "https://randomuser.me/api/portraits/men/35.jpg",
    dob: "2000-01-12",
  },
  {
    id: 4,
    name: "Sneha Kapoor",
    email: "sneha.kapoor@example.com",
    image: "https://randomuser.me/api/portraits/women/48.jpg",
    dob: "1997-07-03",
  },
  {
    id: 5,
    name: "Karan Malhotra",
    email: "karan.malhotra@example.com",
    image: "https://randomuser.me/api/portraits/men/59.jpg",
    dob: "1995-12-19",
  },];
  const ui =()=>{
    users.innerHTML = "";
    userData.forEach((elem, index) => {
        users.innerHTML += `<div class="user_card">
    <div class="img_box">
            <img src="${elem.image}" alt="">
        </div>
        <div class="text">
            <h3>Name - ${elem.name}</h3>
            <p>Mail Id -${elem.email}-</p>
        </div>
        <div class = "actions">
        <button>Edit</button>
        <button onclick="deleteCard(${index})">Delete</button>
        </div> 
        </div>`
    })
  }
  ui();

form.addEventListener("submit", (event)=>{
    event.preventDefault();
    let name = inp1.value;
    let email = inp2.value;
    let image = url.value;
    userData.push({
        name,
        email,
        image,
    })
    ui();
    form.reset();
});
let deleteCard = (index)=>{
    userData.splice(index, 1);
    ui();
}
