function displaySmallNav(){
    const nav = document.getElementById("nav");
    nav.className = nav.className.replace("centered-nav", "");
    const logo = document.getElementById("logo");
    logo.className = logo.className.replace("hidden", "");
}

function displayCenteredNav(){
    const nav = document.getElementById("nav");
    if (!nav.className.includes("centered-nav")){
        nav.className += " centered-nav";
    }
    const logo = document.getElementById("logo");
    if (!logo.className.includes("hidden")){
        logo.className = logo.className + " hidden";
    }
}

const options = {
    rootMargin: '0px',
    threshold: 0.0,
};

const observer = new IntersectionObserver(function(entries){
    if(entries[0].isIntersecting === true){
        displayCenteredNav();
    } else {
        displaySmallNav();
    }
}, options);

observer.observe(document.getElementById("header-logo"));
