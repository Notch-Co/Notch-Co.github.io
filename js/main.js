function displaySmallNav(){
    const nav = document.getElementById("nav");
    nav.className = nav.className.replace("centered-nav", "");
    const logo = document.getElementById("logo");
    logo.className = logo.className.replace("hidden", "");
}

const options = {
    rootMargin: '0px',
    threshold: 1.0
};

let visible = true;

const observer = new IntersectionObserver((entries, observer) => 
    {entries.forEach(entry => 
        {entry.intersectionRatio > 0 ? visible = true : visible = false});
    }, options);

const bigLogo = document.getElementById("header-logo");
observer.observe(bigLogo);

if (!visible){
    displaySmallNav();
}
