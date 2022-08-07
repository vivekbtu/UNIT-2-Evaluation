
let users=JSON.parse(localStorage.getItem("users"))||[];

let a = users.length-1
  let sidebar=document.getElementById("sidebar")

    
    let image=document.createElement("img")
        image.src = users[a].image;
   
    let nam=document.createElement("h3")
    nam.innerText=users[a].name;

    let email=document.createElement("h4")
    email.innerHTML=users[a].email;

    sidebar.append(image,nam,email)
  
   

   export {users,a};
