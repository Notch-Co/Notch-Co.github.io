function addProduct(elementID, flag){
    const titleElement = document.getElementById("cart-header");
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

    const imgPath = document.getElementById(elementID + "-img").src;
    const productName = document.getElementById(elementID + "-prod-name").innerHTML;
    const price = document.getElementById(elementID + "-price").innerHTML;

    const cart = document.getElementById("cart");

    if(!flag){  // the product hasn't been added yet so generate a new one
        let options = "\t<option selected>1</option>";
        for (let i = 2; i <= 50; i++){
            options += ("\t<option>" + i + "</option>\n");
        } 

        cart.innerHTML = cart.innerHTML + "\n" 
        + "<div class=\"cart-item\">"
        + "\t<img class=\"prod-img\" src=\"" + imgPath + "\" alt=\"" + productName + " image\">\n"
        + "\t<h6 class=\"prod-name\">" + productName + "</h6>\n"
        + "\t<select id=\"cart-" + elementID + "-num\">\n" + options + "</select>\n"
        + "\t<p class=\"price\" id=\"cart-" + elementID + "-price\">" + price + "</p>\n"
        + "</div>";

    } else {
        const selectElem = document.getElementById("cart-" + elementID + "-num")
        const currentSel = selectElem.selectedIndex
        let num = parseInt(selectElem.options[currentSel].text) + 1;
        selectElem.options[currentSel + 1].selected = true;

        let totalPrice = parseFloat(price.slice(price.indexOf("$") + 1)) * num;
        const priceElem = document.getElementById("cart-" + elementID + "-price")
        priceElem.innerHTML = "$" + totalPrice + ".00";
    }
}

let flagPen = false;
let flagStencil = false;
let flagStrap = false;

document.getElementById("buy-pen").addEventListener("click", function(){addProduct("pen", flagPen); flagPen = true;});
document.getElementById("buy-stencil").addEventListener("click", function(){addProduct("stencil", flagStencil); flagStencil = true;});
document.getElementById("buy-strap").addEventListener("click", function(){addProduct("strap", flagStrap); flagStrap = true;});
