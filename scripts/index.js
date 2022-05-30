// Add the coffee to local storage with key "coffee"
let bucket = JSON.parse(localStorage.getItem("coffee")) || [];

let menu = document.getElementById("menu");

async function getData(){

    try{

        let url = "https://masai-mock-api.herokuapp.com/coffee/menu"

        let res = await fetch(url);

        let data = await res.json();

        data = data.menu.data;

        append(data)

        console.log(data)
    }

    catch(err){
        console.log(err)
    }
}

getData();


function append(data){

    data.forEach(function(el){

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
        btn.innerText = "Add To Bucket";
        btn.setAttribute("id", "add_to_bucket")
        btn.addEventListener("click", function(){
            addtocart(el)
        })

        div1.append(img,title,price,btn);

        document.getElementById("menu").append(div1)

    })
}

function addtocart(elem){
console.log(elem)

bucket.push(elem);

localStorage.setItem("coffee", JSON.stringify(bucket))




}



for(var i = 0; i<bucket.length; i++){
    // total_sum += cartData[i].price;

    document.getElementById("coffee_count").innerText = " Show total number of coffee :    " + i;
}
