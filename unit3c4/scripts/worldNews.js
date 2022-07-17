
// import {users,a} from "../scripts/sidebar.js";
// document.getElementById("sidebar").innerHTML = users;

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
  
   

/////////////////////// search option ////////////

let search = async(event)=>{
    event.preventDefault;

    let query = document.getElementById("search_box").value;
    let data = await getNew(query);
    q=query
    append(data);
}
let getNew=async(query)=>{
    
        let url1=`https://masai-mock-api.herokuapp.com/news?q=${query} `
        let res= await fetch(url1)
        let data=await res.json()

        console.log(data.articles)
        // append(data.articles)
        return data.articles
    
}

////////////////conutry option ///////////////

// https://masai-mock-api.herokuapp.com/news/top-headlines?country={country code}

// let a = users.length-1
const country = users[a].country;
// function countryNews(){
//     this.id
//     return
// }
// countryNews(this.id) = country

let getNews=async()=>{
    try{
        let url=`https://masai-mock-api.herokuapp.com/news/top-headlines?country=${country}`
        let res= await fetch(url)
        let data=await res.json()
        console.log(data.articles)
        append(data.articles)
    }catch(err){
        console.log(err)
    }
}

getNews();


let append=(data)=>{

    if(!data){
        return
    }

    let newsresult=document.getElementById("news_result")
    newsresult.innerHTML = null;
    data.forEach((element) => {
        let div1=document.createElement("div")
        // div1.addEventListener("click",function(){
        //     element.url
        div1.onclick = ()=>{
            savenews(element);
        }
        // })
        let image=document.createElement("img")
        image.src=element.urlToImage
        let p=document.createElement('p')
        p.innerHTML=element.title;
        
        // let div = document.createElement("div")
        div1.setAttribute("class", "news");

        div1.append(image,p);

        newsresult.append(div1)
    });
}
let newsData = JSON.parse(localStorage.getItem("news"))||[];
let savenews = (data) => {
    localStorage.setItem("news", JSON.stringify(data));
    window.location.href = "news.html";
}

// onkeypress= "debounce(search(event),1000)" in html
// let id;
// function debounce(delay){
//     if(id){
//         clearInterval(id);  
//     }
//     id=setTimeout(function(){
//         // search();
//     },delay);
// }


