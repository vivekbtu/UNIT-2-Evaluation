

let newsData = JSON.parse(localStorage.getItem("news")) || [];
// console.log(data.url);

display(newsData)

function display(newsData){
    
    // newsresult.innerHTML = null;
    newsData.forEach((el) => {

        let container=document.getElementById("detailed_news");

        let div1=document.createElement("div")
        
        let image=document.createElement("img")
        image.src=el.urlToImage

        let p=document.createElement('h3')
        p.innerHTML=el.title; // .source
        
        let des = document.createElement('h4')
        des.innerText = el.description;
        // let div = document.createElement("div")
        div1.setAttribute("class", "news");

        div1.append(image,p,des);

        container.append(div1)
    });
}
