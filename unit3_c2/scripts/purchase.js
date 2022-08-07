
let myVoucher = JSON.parse(localStorage.getItem("purchase"))

append(myVoucher);

function append (myVoucher) {

    let container = document.getElementById("purchased_vouchers");
    // container.innerHTML = null;

    myVoucher.forEach(function(el,index){

         let img = document.createElement('img');
            img.src = el.image;

         let name = document.createElement("h2")
            name.innerText = el.name;
         
         let p2 = document.createElement("p");
            p2.innerText= el.price;
        
         let btn = document.createElement("button")
            btn.innerText = "Remove";
            
            btn.addEventListener("click", ()=>{
                deleteVoucher(index)
                // window.location.reload();
            })

         let div = document.createElement("div")

            div.append(img,name,p2,btn)
            container.append(div);

        })
    
}

function deleteVoucher(index){
    myVoucher.splice(index,1)

    localStorage.setItem("purchase", JSON.stringify(myVoucher))
    window.location.reload();
}

let dataFromLS = JSON.parse(localStorage.getItem("user"));

dataFromLS.forEach(function(el){
    let balance = el.amount;
    console.log(balance);

    // let FinalBal = document.getElementById("wallet_balance")
    // FinalBal.innerText = balance-sum;

    let sum = 0;
    
    for(let i=0; i<myVoucher.length; i++)
    {
        sum=sum + myVoucher[i].price;
    }
    let Final = balance-sum;
    let FinalBal = document.getElementById("wallet")
    FinalBal.innerText = Final;

        // if(Final<0)
        // {
        //     alert("bomm")
        // }
        // else{
        //     alert("Hurray ! Keep Shopping")
        // }
})