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


// about.js
//Retrieve elements
const form= documment.queryselector("#form");
const username= documment.queryselector("#username");
const subject= document.queryselector("#subject");
const email= documment.queryselector("#email");
const message=document.queryselector("#message");

//evenements 
form.addEvenListener('submit',e=>{
   e.preventDefault();
   
   form_verify();
})

//Fonctions
function form_verify(){
    // Have all the input's values
    const userValue= username.value.trim();
    const emailValue= email.value.trim();
    const pwdValue= password.value.trim();
    
    // Username verify
    if (userValue ===""){
        let message= "Username can't be empty";
        setError(username,messga);                          
    }else if(!userValue.match(/^[a-zA-Z]/)){
        let message="Username have to start by a letter";
        setError(username,message);
    }else{
        let letterNum= userValue.length;
        if (letterNum < 3){
            let message="Username must have 3 characters at least";
            setError(username,message)
        }else{
            setSuccess(username);
        }
    }
}
    // email verify
    if (emailValue ===""){
        let message = "Email can't be empty"
        setError(email,message)
    }else if(!email_verify(email)){
        let message = "Wrong email";
        setError(email,message);
    }else{
        setSuccess(email);
    }
   

 function setError(elem,message){
     const formControl=elem.parentElement;
     const small= formControl.querySelector('small');

     //Add error message
     small.innertText=message

     // Add error class
     formControl.className="form-control error";

}                    
function setSuccess(elem){
     const formControl = elem.parentElement;
     formControl.className= 'form-control sucess';
}
function email_verify(emailValue){
    /*
    * myemailadress@gmail.com
      /^[a-z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/
    */
   return /^[a-z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/.test(email);
}
