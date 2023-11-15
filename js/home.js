    window.onscroll = function() {
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            document.getElementById("backToTopButton").style.display = "block";
        } else {
            document.getElementById("backToTopButton").style.display = "none";
        }
    };

    document.getElementById("backToTopButton").addEventListener("click", function(){
        document.body.scrollTop = 0; 
        document.documentElement.scrollTop = 0; 
    });
