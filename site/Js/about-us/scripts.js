var text = document.querySelector(".underline-animate");

function scrolListener(e) {
    var screenTop = document.scrollingElement.scrollTop;
    var screenBottom = screenTop + innerHeight;
    var textTop = text.getBoundingClientRect().top;

    if (textTop < screenBottom && textTop < screenTop) {
        text.classList.add("showtext");
        text.classList.remove("hidetext");
    }
}

document.onscroll = scrolListener;

window.onload = function() {
    text.classList.add("showtext");
    text.classList.remove("hidetext");
};