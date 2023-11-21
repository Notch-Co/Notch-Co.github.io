function addProduct(elementID, flag, flagPen, flagStencil, flagStrap){
    incrementCount();

    const imgPath = document.getElementById(elementID + "-img").src;
    const productName = document.getElementById(elementID + "-prod-name").innerHTML;
    const price = document.getElementById(elementID + "-price").innerHTML;

    const cart = document.getElementById("cart");

    if (!flag){ // the product hasn't been added yet so generate a new one
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

        document.getElementById("cart").dispatchEvent(priceChange);
    } else {
        const selectElem = document.getElementById("cart-" + elementID + "-num")
        selectElem.options[selectElem.selectedIndex + 1].selected = true;  //this doesn't work fully
        handlePrice(elementID);
    }

    if (flagPen){
        document.getElementById("cart-pen-num").addEventListener("change", function(){
            handlePrice("pen");
            let numPen = document.getElementById("cart-pen-num").selectedIndex + 1;
            let numSten = flagStencil ? (document.getElementById("cart-stencil-num").selectedIndex + 1) : 0;
            let numStrap = flagStrap ? (document.getElementById("cart-strap-num").selectedIndex + 1) : 0;
            let num = numPen + numSten + numStrap;
            incrementCount(num, true);
        });
    }

    if (flagStencil){
        document.getElementById("cart-stencil-num").addEventListener("change", function(){
            handlePrice("stencil");
            let numPen = flagPen ? (document.getElementById("cart-pen-num").selectedIndex + 1) : 0;
            let numSten = document.getElementById("cart-stencil-num").selectedIndex + 1;
            let numStrap = flagStrap ? (document.getElementById("cart-strap-num").selectedIndex + 1) : 0;
            let num = numPen + numSten + numStrap;
            incrementCount(num, true);
        });
    }

    if (flagStrap){
        document.getElementById("cart-strap-num").addEventListener("change", function(){
            handlePrice("strap");
            let numPen = flagPen ? (document.getElementById("cart-pen-num").selectedIndex + 1) : 0;
            let numSten = flagStencil ? (document.getElementById("cart-stencil-num").selectedIndex + 1) : 0;
            let numStrap = document.getElementById("cart-strap-num").selectedIndex + 1;
            let num = numPen + numSten + numStrap;
            incrementCount(num, true);
        });
    }
}

function incrementCount(step = 1, set = false){
    const titleElement = document.getElementById("cart-header");
    let title = titleElement.innerHTML;
    
    let firstBrac = title.indexOf("(");
    let secBrac = title.indexOf(")");

    let num = title.slice(firstBrac + 1, secBrac);
    
    if ((num == "-") || set){
        num = step;
    } else {
        num = parseInt(num) + step;
    }

    titleElement.innerHTML = title.slice(0, firstBrac + 1) + num + title.slice(secBrac)
}

function handlePrice(elementID){
    const Price = parseFloat(document.getElementById(elementID + "-price").innerHTML.slice(1));
    
    const selectElem = document.getElementById("cart-" + elementID + "-num")
    let num = selectElem.selectedIndex + 1;
    let totalPrice = Price * num;
    const priceElem = document.getElementById("cart-" + elementID + "-price")
    priceElem.innerHTML = "$" + totalPrice + ".00";

    document.getElementById("cart").dispatchEvent(priceChange);
}

function changeSummary(flagPen, flagStencil, flagStrap){
    const subtotalElem = document.getElementById("subtotal");
    const shippingElem = document.getElementById("shipping");
    const taxElem = document.getElementById("tax");
    const totalElem = document.getElementById("total");

    let pen = flagPen ? (parseFloat(document.getElementById("cart-pen-price").innerHTML.slice(1))) : 0;

    let stencil = flagStencil ? (parseFloat(document.getElementById("cart-stencil-price").innerHTML.slice(1))) : 0;

    let strap = flagStrap ? (parseFloat(document.getElementById("cart-strap-price").innerHTML.slice(1))) : 0;

    let newST = pen + stencil + strap;
    subtotalElem.innerHTML = "$" + newST + ".00";
    
    shippingElem.innerHTML = (newST < 100) ? "TBD" : "FREE";

    let tax = Math.round(100 * (newST * 0.13)) / 100
    let numDeci = tax.toString().slice(tax.toString().indexOf(".") + 1).length;
    taxElem.innerHTML = (numDeci == 2) ? ("$" + tax) : ((numDeci == 1) ? "$" + tax + "0" : "$" + tax + ".00");

    let total = Math.round(100 * (newST + tax)) / 100;
    numDeci = total.toString().slice(total.toString().indexOf(".") + 1).length;
    totalElem.innerHTML = (numDeci == 2) ? ("$" + total) : ((numDeci == 1) ? "$" + total + "0" : "$" + total + ".00");
}

const priceChange = new Event("priceChange", {
    bubbles: true,
    cancelable: true,
    composed: false
});

let flagPen, flagStencil, flagStrap, penExists, stencilExists, strapExists = false;

document.getElementById("buy-pen").addEventListener("click", function(){
    penExists = true; 
    addProduct("pen", flagPen, penExists, stencilExists, strapExists); 
    flagPen = true;
});
document.getElementById("buy-stencil").addEventListener("click", function(){
    stencilExists = true; 
    addProduct("stencil", flagStencil, penExists, stencilExists, strapExists); 
    flagStencil = true;
});
document.getElementById("buy-strap").addEventListener("click", function(){
    strapExists = true;
    addProduct("strap", flagStrap, penExists, stencilExists, strapExists); 
    flagStrap = true;
});

document.getElementById("cart").addEventListener("priceChange", function(){changeSummary(penExists, stencilExists, strapExists);});
