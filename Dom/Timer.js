const Startbtn = document.querySelector(".btn.start");
const Resetbtn = document.querySelector(".btn.reset");
const Pausebtn = document.querySelector(".btn.pause");
const Resumebtn = document.querySelector(".btn.resume");
const Hrs = document.querySelector(".hour");
const Min = document.querySelector(".minute");
const Sec = document.querySelector(".second");
const Container = document.querySelector(".container");

Resumebtn.addEventListener("click",()=>{
  Resumebtn.style.display = "none";
  Pausebtn.style.display = "inline";
  Cal();
})

let sec = 0;
let min = 0;
let hrs = 0;
let stopwatch = null;

function Cal() {
  if (stopwatch != null) {
    return;
  }
  stopwatch = setInterval(() => {
    sec++;
    if (sec > 59) {
      sec = 0;
      min++;
    }
    if (min > 59) {
      min = 0;
      hrs++;
    }
    Sec.innerHTML = sec > 9 ? sec : `0${sec}`;
    Min.innerHTML = min > 9 ? min : `0${min}`;
    Hrs.innerHTML = hrs > 9 ? hrs : `0${hrs}`;
    // console.log("hrs:" +hrs,"min:" +min,"sec:" +sec);
  }, 1000);
}

function stopinterval() {
  clearInterval(stopwatch);
  stopwatch = null;
  console.log("work");
}

Startbtn.addEventListener("click", () => {
  Startbtn.style.display = "none";
  Pausebtn.style.display = "inline";
  Cal();
});

Resetbtn.addEventListener("click", () => {
  Startbtn.style.display = "inline";
  Resumebtn.style.display = "none";
  Pausebtn.style.display = "none";
  stopinterval();
  sec = 0;
  min = 0;
  hrs = 0;
  Sec.innerHTML = sec > 9 ? sec : `0${sec}`;
  Min.innerHTML = min > 9 ? min : `0${min}`;
  Hrs.innerHTML = hrs > 9 ? hrs : `0${hrs}`;
});

Pausebtn.addEventListener("click", () => {
  Resumebtn.style.display = "inline";
  Pausebtn.style.display = "none";
  stopinterval();
});
