document.getElementById("form").addEventListener("submit", checkout);

function checkout(event){
    event.preventDefault();

    alert("Your Order is Accepted");

    setTimeout(function(){
        alert("Your order is being Prepared ")
    },3000)

    setTimeout(function(){
        alert("Your order is being packed ")
    },8000)

    setTimeout(function(){
        alert("Your order is out for delivery  ")
    },10000)

    setTimeout(function(){
        alert("Order delivered")
    },12000)

   
}

