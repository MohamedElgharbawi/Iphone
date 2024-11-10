let imgs = document.querySelectorAll(".icons img");
let image = document.querySelector(".content img");
let container = document.querySelector(".container")
imgs.forEach( img => {
    img.onclick =  _ => {
        image.src = img.src;
        if (img.src === imgs[0].src) {
            container.style.background = "#000";
        } else if (img.src === imgs[1].src) {
            container.style.background = "#247ec8";
        } else if (img.src === imgs[2].src) {
            container.style.background = "#1e1e1e";
        } else if (img.src === imgs[3].src) {
            container.style.background = "#c79b53";
        } else {
            container.style.background = "#c82525";
        }
        window.localStorage.setItem("background", container.style.background);
        window.localStorage.setItem("src", img.src);
    }
})
if (window.localStorage.getItem("src"))
    image.src = window.localStorage.getItem("src");
if (window.localStorage.getItem("background")) 
    container.style.background = window.localStorage.getItem("background");