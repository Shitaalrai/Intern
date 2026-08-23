const onbtn = document.getElementById("btn1");
const offbtn = document.getElementById("btn2");
const Container = document.querySelector(".container");

onbtn.addEventListener("click",()=> {
    console.log(Container)
    offbtn.style.display = "inline";
    onbtn.style.display = "none";
    Container.style.backgroundColor = "white";
})
offbtn.addEventListener("click", () => {
    offbtn.style.display = "none";
    onbtn.style.display = "inline";
    Container.style.backgroundColor= "black";
})