

async function getData(){

    let url = `https://masai-vouchers-api.herokuapp.com/api/vouchers`;

    try {
        let res = await fetch(url);
        let data = await res.json();
        console.log(data);
        append(data[0].vouchers);
    }

    catch(err) {
        console.log(err);
    }
}
getData();


let myVoucherData = JSON.parse(localStorage.getItem("purchase")) || [];

function append (data) {

    let container = document.getElementById("voucher_list");
    // container.innerHTML = null;

        data.forEach(function(el){

         let img = document.createElement('img');
            img.src = el.image;

         let name = document.createElement("h2")
            name.innerText = el.name;
         
         let p2 = document.createElement("p");
            p2.innerText= el.price;
        
         let btn = document.createElement("button")
            btn.innerText = "Buy";
            
            btn.addEventListener("click", ()=>{
                voucherAdd(el)
                window.location.reload();
            })

         let div = document.createElement("div")

            div.append(img,name,p2,btn)
            container.append(div);

        })
    
}

    function voucherAdd(el){
        myVoucherData.push(el);
     localStorage.setItem("purchase", JSON.stringify(myVoucherData));
}

let dataFromLS = JSON.parse(localStorage.getItem("user"));

dataFromLS.forEach(function(el){
    let balance = el.amount;
    // console.log(balance);

    // let FinalBal = document.getElementById("wallet_balance")
    // FinalBal.innerText = balance-sum;

    let sum = 0;
    
    for(let i=0; i<myVoucherData.length; i++)
    {
        sum=sum+myVoucherData[i].price;
    }
    let Final = balance-sum;
    let FinalBal = document.getElementById("wallet_balance")
    FinalBal.innerText = balance;

        if(Final<0)
        {
            alert("Sorry! insufficient balance")
        }
        else{
            alert("Hurray! purchase successful")
        }
})

