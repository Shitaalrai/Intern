const Allbtns = document.querySelectorAll(".Btns");
const Container = document.querySelector(".container");

for( let i=0; i<Allbtns.length; i++){
    Allbtns[i].addEventListener("click",()=> {
        Container.style.backgroundColor = Allbtns[i].innerHTML;
    })
}