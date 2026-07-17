const title_img = document.querySelector("#title");
title_img.addEventListener("click", () => { document.querySelector("sidebar").classList.toggle("collapsed"); });

if (window.innerWidth <= 480) {
    document.querySelector("sidebar").classList.add("collapsed");
}

//change the theme
const lightBtn = document.getElementById("light_btn");
const darkBtn = document.getElementById("dark_btn");

lightBtn.addEventListener("click", () => {
    document.documentElement.classList.remove("dark");
    document.documentElement.classList.add("light");
});

darkBtn.addEventListener("click", () => {
    document.documentElement.classList.remove("light");
    document.documentElement.classList.add("dark");
});