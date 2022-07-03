// On clicking remove button the item should be removed from DOM as well as localstorage.



let cart=JSON.parse(localStorage.getItem("coffee"))
   
  
displaydata(cart)

function displaydata(data){
  
   
  data.forEach(function(el,index){
     
    
let box=document.createElement("div");

  let img=document.createElement("img");
    img.src=el.image;

   let title=document.createElement("p");
    title.innerText=el.title

    let rs=document.createElement("p")
     rs.innerText= el.price;
    

     let btn=document.createElement("button");
         

         btn.addEventListener("click",function(){
         deletefromcart(index)
         this.style.backgroundColor="red";
      })
      btn.innerText="Remove"

     let btn2 = document.createElement("button");
     
      btn2.addEventListener("click", function(){
        addTocheckout(index)
        this.style.backgroundColor="yellow";
      });

      btn2.innerText="Checkout"
    box.append(img,title,rs,btn,btn2)
    let div = document.querySelector("#bucket")
      div.append(box)
});

  function deletefromcart(index){
  cart.splice(index,1)
  localStorage.setItem("coffee",JSON.stringify(cart))
  window.location.reload()
  }
}

function addTocheckout(elem){
    cart.push(elem);
    localStorage.setItem("addTocheckoutData",JSON.stringify(cart))
    window.location.reload()
}
   

       
    

