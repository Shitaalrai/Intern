const Startbtn = document.querySelector(".btn.start");
const Resetbtn = document.querySelector(".btn.reset");
const Pausebtn = document.querySelector(".btn.pause");
const Hrs = document.querySelector(".hour");
const Min = document.querySelector(".minute");
const Sec = document.querySelector(".second");
const Container = document.querySelector(".container");

let sec = 0;
let min = 0;
let hrs = 0;
let stopwatch;

function Cal(){
        stopwatch = setInterval(()=>{
        sec++;
        Sec.innerHTML =  sec ;
        if(sec === 60){
            sec = 0;
            min++;
            Min.innerHTML = min;
        }
        if (min === 60){
            min = 0;
            hrs++;
            Hrs.innerHTML = hrs;
        }
        // console.log("hrs:" +hrs,"min:" +min,"sec:" +sec);
    },1000);
};

function stopinterval (){
    clearInterval(stopwatch);
    console.log("work");
    
};

function Reset(){
}

Startbtn.addEventListener("click", ()=>{
   Cal();
});

Resetbtn.addEventListener("click",()=>{
        console.log("worked");

});
Pausebtn.addEventListener("click",()=>{
    stopinterval();
});

