const text = document.querySelector(".texts");
const html = document.querySelector(".html");
const css = document.querySelector(".css");
const javascript= document.querySelector(".javascript");
const htmltext = document.querySelector("#Htmltext");
const csstext = document.querySelector("#Csstext");
const javascripttext = document.querySelector("#Javascripttext");

html.addEventListener("click", ()=> {
    htmltext.style.display = "block";
    csstext.style.display = "none";
    javascripttext.style.display = "none";
})
css.addEventListener("click", ()=> {
    htmltext.style.display = "none";
    csstext.style.display = "block";
    javascripttext.style.display = "none";
})
javascript.addEventListener("click", ()=> {
    htmltext.style.display = "none";
    csstext.style.display = "none";
    javascripttext.style.display = "block";
})