import "../static/css/style.css";

function deferImages() {
    const imgs = document.getElementById("sponsors").getElementsByTagName("img");
    for (let i = 0; i < imgs.length; i++) {
        imgs.item(i).src = imgs.item(i).getAttribute("makemit-src");
    }
}

window.onload = deferImages;
if (document.readyState === 'complete') setTimeout(deferImages, 0);