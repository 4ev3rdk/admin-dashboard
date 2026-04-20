const title_img = document.querySelector("#title");
title_img.addEventListener("click", () => { document.querySelector("sidebar").classList.toggle("collapsed"); });

if (window.innerWidth <= 480) {
    document.querySelector("sidebar").classList.add("collapsed");
}