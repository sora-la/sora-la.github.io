// RESIZE LOGO ONSCROLL
window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById("logo").style.width = "130px";
        document.getElementById("social").style.maxWidth = "130px";
        document.getElementById("hamburger").style.padding = "8px";
        document.getElementById("hamburger").style.fontSize = "32px";
    } else {
        document.getElementById("logo").style.width = "300px";
        document.getElementById("social").style.maxWidth = "300px";
        document.getElementById("hamburger").style.padding = "24px";
        document.getElementById("hamburger").style.fontSize = "48px";
    }
}

// MOBILE CURTAIN
function openNav() {
  document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.height = "0%";
}
