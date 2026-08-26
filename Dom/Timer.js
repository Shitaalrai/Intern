const Startbtn = document.querySelector(".btn.start");
const Resetbtn = document.querySelector(".btn.reset");
const Pausebtn = document.querySelector(".btn.pause");
const Hrs = document.querySelector(".hour");
const Min = document.querySelector(".minute");
const Sec = document.querySelector(".second");

Startbtn.addEventListener("click", ()=>{
    let sec = 0;
    let min = 0;
    let hrs = 0;
    let stopwatch = setInterval(()=>{
        sec++;
        Sec.innerHTML = sec ;
        console.log(sec);
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
});

Resetbtn.addEventListener("click",()=>{
    
});
Pausebtn.addEventListener("click",()=>{

});

