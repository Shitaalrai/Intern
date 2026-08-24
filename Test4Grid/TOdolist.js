const Containerlist = document.querySelector(".containerlist");
const ContainerForm = document.querySelector(".containerform");
const Addbtn = document.querySelector(".btn");
const Submitbtn = document.querySelector(".btnsubmit");

Addbtn.addEventListener("click", () => {
    ContainerForm.style.display = "inline";
})

Submitbtn.addEventListener("click", () => {
    Containerlist.style.display = "inline";
})