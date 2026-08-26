const Containerlist = document.querySelector(".containerlist");
const ContainerForm = document.querySelector(".containerform");
const Addbtn = document.querySelector(".btn");
const Submitbtn = document.querySelector(".btnsubmit");

Addbtn.addEventListener("click", () => {
    ContainerForm.style.display = "flex";
    Containerlist.style.display = "none";
})

Submitbtn.addEventListener("click", () => {
    Containerlist.style.display = "flex";
    ContainerForm.style.display = "none";
})