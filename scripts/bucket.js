// On clicking remove button the item should be removed from DOM as well as localstorage.

let cartData = JSON.parse(localStorage.getItem("coffee"));

append(cartData)
console.log(cartData)

function append(cartData){

cartData.map(function(el,index){

    let div1 = document.createElement("div");

    let img = document.createElement("img");
    img.setAttribute("src", el.image);
    img.style.height = "200px"
    img.style.width = "200px";

    let title = document.createElement("h2")
    title.innerText = el.title;

    let price = document.createElement("h3")
    price.innerText = el.price;

    let btn = document.createElement("button");
    btn.innerText = "REMOVE";
    btn.setAttribute("id", "remove_coffee")
    btn.addEventListener("click", function(){
        
        cartData.splice(index, 1);
        localStorage.setItem("coffee", JSON.stringify(cartData))

        window.location.reload()
    })

    div1.append(img,title,price,btn);

    

    document.getElementById("bucket").append(div1)

})

}

var total_sum = 0;

for(var i = 0; i<cartData.length; i++){
    total_sum += cartData[i].price;

    document.getElementById("total_amount").innerText = " Total Amount is :    " + total_sum;
}

