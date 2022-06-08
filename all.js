window.onscroll = scrollFunction;

function scrollFunction() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        document.getElementById("topBtn").style.display = "block";
    } else {
        document.getElementById("topBtn").style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}