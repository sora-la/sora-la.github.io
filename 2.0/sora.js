// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById("logo").style.width = "130px";
        document.getElementById("social").style.maxWidth = "130px";
    } else {
        document.getElementById("logo").style.width = "300px";
        document.getElementById("social").style.maxWidth = "300px";
    }
}
