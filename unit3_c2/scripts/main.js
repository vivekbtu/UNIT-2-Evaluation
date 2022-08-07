

document.querySelector("form").addEventListener("submit", hairproduct)

let userData =JSON.parse(localStorage.getItem("user")) || [];

function hairproduct(event) {

    event.preventDefault()

    let data = {
        name:document.querySelector("#name").value,
        email:document.querySelector("#email").value,
        address:document.querySelector("#address").value,
        amount:document.querySelector("#amount").value

    }
    userData.push(data);

    localStorage.setItem("user", JSON.stringify(userData));

    window.location.href="voucher.html"
}