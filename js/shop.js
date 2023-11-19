function addProduct(elementID){
    let titleElement = document.getElementById("cart-header");
    let title = titleElement.innerHTML;
    
    let firstBrac = title.indexOf("(");
    let secBrac = title.indexOf(")");
    let num = title.slice(firstBrac + 1, secBrac);

    if (num == "-"){
        num = 1;
    } else {
        num = parseInt(num) + 1;
    }

    titleElement.innerHTML = title.slice(0, firstBrac + 1) + num + title.slice(secBrac)

    let options = "\t<option selected>1</option>";
    for (let i = 2; i <= 50; i++){
        options += ("\t<option>" + i + "</option>\n");
    } 
    const imgPath = document.getElementById(elementID + "-img").src;
    const productName = document.getElementById(elementID + "-prod-name").innerHTML;
    const price = document.getElementById(elementID + "-price").innerHTML;

    cart = document.getElementById("cart");

    cart.innerHTML = cart.innerHTML + "\n" 
    + "<img class=\"prod-img\" src=\"" + imgPath + "\" alt=\"" + productName + " image\">\n"
    + "<h6 class=\"prod-name\">" + productName + "</h6>\n"
    + "<select>\n" + options + "</select>\n"
    + "<p class=\"price\">" + price + "</p>";
}

document.getElementById("buy-pen").addEventListener("click", function(){addProduct("pen")});
document.getElementById("buy-stencil").addEventListener("click", function(){addProduct("stencil")});
document.getElementById("buy-strap").addEventListener("click", function(){addProduct("strap")});
