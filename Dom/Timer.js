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

function Reset() {}

Startbtn.addEventListener("click", () => {
  Cal();
});

Resetbtn.addEventListener("click", () => {
  stopinterval();
  sec = 0;
  min = 0;
  hrs = 0;
  Sec.innerHTML = sec > 9 ? sec : `0${sec}`;
  Min.innerHTML = min > 9 ? min : `0${min}`;
  Hrs.innerHTML = hrs > 9 ? hrs : `0${hrs}`;
});
Pausebtn.addEventListener("click", () => {
  stopinterval();
});
