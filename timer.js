let hi = "hwef";
console.log(hi);
let count = 0;
let interval;
let sec1 = 00;

let min1 = 10;
min1 = (min1 < 10) ? ('0' + min1) : min1;


// document.querySelector(".btn").addEventListener("click", timerStart());

function timerStart() {
    document.querySelector(".pause").classList.remove("disable");
    document.querySelector(".input").classList.add("no-display");
    document.querySelector(".text").classList.add("no-display");
    document.querySelector(".time").classList.add("head");
    let min = document.getElementById("min");
    if (min.value !== '') {
        min1 = min.value < 0 ? '0' + min.value : min.value;
        document.getElementById("min1").innerHTML = min1;
    }
    else {
        min1 = '00';
        document.getElementById("min1").innerHTML = min1;
    }
    
    let sec = document.getElementById("sec");
    if (sec.value !== '') {
        sec1 = (sec.value);
        document.getElementById("sec1").innerHTML = (sec.value < 0) ? ('0' + sec.value) : (sec.value);
    }
    
    if (count === 0) {
        interval = setInterval(secDown, 1000)
        count++;
    }
}


function secDown() {
    console.log(sec1);
    if (sec1 === -1) {
        let terminate = minDown();
        if (terminate === 4) {
            return;
        }
        sec1 = 59;
    }
    if (sec1 < 10) {
        sec1 = '0' + sec1;
    }
    document.getElementById("sec1").innerHTML = sec1;
    sec1--;
}

function minDown() {
    min1--;
    if (min1 < 10) {
        min1 = '0' + min1;
    }
    if (min1 === '0-1') {
        clearInterval(interval);
        document.getElementById("min1").innerHTML = '0' + 0;
        document.getElementById("sec1").innerHTML = '0' + 0;
        document.getElementById("time").innerHTML ="Times UP!!";
        playSound();
        return 4;
    }
    document.getElementById("min1").innerHTML = min1;
}

let timerStopped = false;

function stopTimer() {
    if (timerStopped === false) {
        clearInterval(interval);
        document.querySelector(".time").classList.remove("head");
        document.querySelector(".input").classList.remove("no-display");
        document.querySelector(".text").classList.remove("no-display");    
        document.getElementById("pause").innerHTML = "Resume";
        timerStopped = true;
        console.log("Timer stopped");
    } else {
        console.log("Timer started");
        document.querySelector(".time").classList.add("head");
        document.querySelector(".input").classList.add("no-display");
        document.querySelector(".text").classList.add("no-display");
        interval = setInterval(secDown, 1000);
        document.getElementById("pause").innerHTML = "Pause";
        timerStopped = false;
    }
}
function reload(){
    location.reload();
}

function playSound(){
    let sound = document.getElementById("sound");
    sound.play();
}

body = document.body;
function randomColorGenerator(){
    const red  = Math.floor(Math.random() * 256);
    const green  = Math.floor(Math.random() * 256);
    const blue  = Math.floor(Math.random() * 256);
    const randomColor = `rgb(${red},${green},${blue})`;
    const textcolor = `rgb(${red+30},${green-100},${blue-30})`;
    const textcolor2 = `rgb(${red},${green-10},${blue+70})`;
    console.log(randomColor);
    console.log(textcolor);
    console.log(textcolor2 );
    body.style.backgroundColor = randomColor;
}