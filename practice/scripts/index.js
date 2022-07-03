// Add the coffee to local storage with key "coffee"

// async function coffeedata(){
   
//     let url = `https://masai-mock-api.herokuapp.com/coffee/menu`
// }
async function getdata(){

    let url=`https://masai-mock-api.herokuapp.com/coffee/menu`

    try{
      let res=await fetch(url);

      let data= await res.json();
       return(data.menu)
       
    }
    catch (err){
         console.log(err)
    }
   }
   
  async function main(){

    let data=await getdata()
     return(data.data)
   }

   async function final(){
    let data=await main()
     append(data)
   }

    final()
      let bucket=JSON.parse(localStorage.getItem("coffee"))||[];
      let j=0;
      for(let i=0;i<bucket.length;i++)
      {
           j++
      }

      document.querySelector("span").innerText = j;
   function append(data)
   {
      
     document.getElementById("coffee_count")
     menu.innerHTML=null

     data.forEach(function(el){

      let box=document.createElement("div");

      let img=document.createElement("img");
      img.src=el.image;

      let title=document.createElement("p");
       title.innerText=el.title

       let rs=document.createElement("p")
           rs.innerText= el.price;

      let btn=document.createElement("button");
        btn.innerText="Add to Bucket"

        btn.addEventListener("click",function(){
            addToBucket(el)
           
        })

        
       
        box.append(img,title,rs,btn)
        let div = document.querySelector("#menu")
            div.append(box);
       
     })
   }

   function addToBucket(el){
      bucket.push(el)
      localStorage.setItem("coffee",JSON.stringify(bucket))
      window.location.reload();
      
   }