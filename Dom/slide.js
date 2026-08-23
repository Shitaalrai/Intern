const Container = document.querySelector(".container");
const slide = document.querySelector(".Slide");
const Menubtn = document.getElementById("menu");
const Crossbtn = document.getElementById("cross");

Menubtn.addEventListener("click", () => {
    Crossbtn.style.display = "inline";
    Menubtn.style.display = "none";
    slide.style.backgroundColor = "Red";
    slide.style.width = "13rem";
})
Crossbtn.addEventListener("click", () => {
    Crossbtn.style.display = "none";
    Menubtn.style.display = "inline";
    slide.style.width = "5rem";
    slide.style.backgroundColor = "Fuchsia";

})