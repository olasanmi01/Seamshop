var shopproducts = document.getElementById("shopproducts");

fetch("assets/shopproducts.json").then(function(output){
    output.json().then(function(json){
        json.forEach(function(element) {
            
var shopItem = document.createElement('a');

shopItem.setAttribute("class", "shop-item");
shopItem.setAttribute("href", element.url);
shopItem.setAttribute("target", "_blank");

var shopProductImage = document.createElement("img");

shopProductImage.setAttribute("src", element.url);
shopProductImage.setAttribute("title", element.caption);
shopProductImage.setAttribute("alt", element.caption);
shopProductImage.setAttribute("title", element.p);
shopProductImage.setAttribute("alt", element.p);


var description = document.createElement("caption");
    description.innerText = element.caption;

    shopItem.appendChild(shopProductImage);
    shopItem.appendChild(description);
    shopproducts.appendChild(shopItem);

    var description = document.createElement("p");
    description.innerText = element.p;

    shopItem.appendChild(description);
    shopproducts.appendChild(shopItem);
        });
    })
})
