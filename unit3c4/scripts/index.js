/*
Save the user to local storage with key "user", in following format:- 
{
name: "",
image: "",
email: "",
country: "" (store country code "in", "ch", "nz", "us", "uk")
}
*/


let userArr =JSON.parse(localStorage.getItem("users")) || [];

function submit(){

    // event.preventDefault();

    let userobj = {

        
        image:document.querySelector("#user_image").value,
        name:document.querySelector("#user_name").value,
        email:document.querySelector("#user_email").value,
        country:document.querySelector("#user_country").value,

    }
    userArr.push(userobj);
    console.log("boom")
    localStorage.setItem("users", JSON.stringify(userArr));

    window.location.reload()
}

// function getData(n,p,e,c){
//     this.name=n;
//     this.image=p;
//     this.email=e;
//     this.country=c;
//  }
// let userData=JSON.parse(localStorage.getItem("userData"))||[]

// // let submit=document.getElementById("submit").addEventListener("click",getUserData)
// function getUserData(event){
//     event.preventDefault()

//     let pic=document.getElementById("user_pic").value;
//     let name=document.getElementById("user_name").value;
//     let email=document.getElementById("user_email").value;
//     let country=document.getElementById("user_country").value;
//     let data= new getData(name,pic,email,country)
//     userData.push(data)
//     // console.log(data)
//     localStorage.setItem("userData",JSON.stringify(data))
//     // console.log(pic,name,email,country)
//     window.location.reload();
// }