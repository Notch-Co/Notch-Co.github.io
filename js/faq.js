function display_item(elementID){
    const acc = document.getElementById(elementID + "-box");
    acc.className = acc.className + " show";
}

function hide_item(elementID){
    const acc = document.getElementById(elementID + "-box");
    acc.className = "panel";
}

let refund_display = true;
let ship_display = true;
let feat_display = true;
let functionality_display = true;

document.getElementById("refund-button").addEventListener("click", function(){
    if (refund_display){
        display_item("refund");
        refund_display = false;
    } else {
        hide_item("refund");
        refund_display = true;
    }
});

document.getElementById("shipping-button").addEventListener("click", function(){
    if (ship_display){
        display_item("shipping");
        ship_display = false;
    } else {
        hide_item("shipping");
        ship_display = true;
    }
});

document.getElementById("features-button").addEventListener("click", function(){
        if (feat_display){
            display_item("features");
            feat_display = false;
        } else {
            hide_item("features");
            feat_display = true;
    }
});

document.getElementById("functionality-button").addEventListener("click", function(){
        if (functionality_display){
            display_item("functionality");
            functionality_display = false;
        } else {
            hide_item("functionality");
            functionality_display = true;
    }
});