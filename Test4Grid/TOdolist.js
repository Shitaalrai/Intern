const Containerlist = document.querySelector(".containerlist");
const ContainerForm = document.querySelector(".containerform");
const Addbtn = document.querySelector(".btn");
const Submitbtn = document.querySelector(".btnsubmit");

Addbtn.addEventListener("click", () => {
    ContainerForm.style.display = "block";
    Containerlist.style.display = "none";
})

Submitbtn.addEventListener("click", () => {
    Containerlist.style.display = "block";
    ContainerForm.style.display = "none";
})