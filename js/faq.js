function display_item(elementID){
    const acc = document.getElementById(elementID + "-box");
    acc.className = acc.className + " show";
}

function hide_item(elementID){
    const acc = document.getElementById(elementID + "-box");
    acc.className = "panel";
}

let display = true;

document.getElementById("refund-button").addEventListener("click", function(){
    if (display){
        display_item("refund");
        display = false;
    } else {
        hide_item("refund");
        display = true;
    }

    document.getElementById("shipping-button").addEventListener("click", function(){
        if (display){
            display_item("shipping");
            display = false;
        } else {
            hide_item("shipping");
            display = true;
        }
});