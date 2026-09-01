const overview = document.querySelector(".Ovr");
const curriculum = document.querySelector(".Cur");
const mentor = document.querySelector(".Ment");
const review = document.querySelector(".Rev");
const overviewTxt = document.querySelector(".Overview");
const curriculumTxt = document.querySelector(".Curriculum");
const mentorsTxt = document.querySelector(".Mentors");
const reviewTxt = document.querySelector(".Review");

overview.addEventListener("click",()=>{
    console.log("work");
    overviewTxt.style.display = "block";
    curriculumTxt.style.display = "none";
    mentorsTxt.style.display = "none";
    reviewTxt.style.display = "none";
});
curriculum.addEventListener("click",()=>{
    console.log("work");
    overviewTxt.style.display = "none";
    curriculumTxt.style.display = "block";
    mentorsTxt.style.display = "none";
    reviewTxt.style.display = "none";
});
mentor.addEventListener("click",()=>{
    console.log("work");
    overviewTxt.style.display = "none";
    curriculumTxt.style.display = "none";
    mentorsTxt.style.display = "block";
    reviewTxt.style.display = "none";
});
review.addEventListener("click",()=>{
    console.log("work");
    overviewTxt.style.display = "none";
    curriculumTxt.style.display = "none";
    mentorsTxt.style.display = "none";
    reviewTxt.style.display = "block";
});