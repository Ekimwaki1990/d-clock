let hourEl = document.getElementById("hour");
let minuteEl = document.getElementById("minutes");
let secondsEl = document.getElementById("seconds");
let ampmEl = document.getElementById("ampm");

function updateClock() {
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = h >= 12 ? "PM" : "AM";
    hourEl.innerText = h;
    minuteEl.innerText = m;
    secondsEl.innerText = s;
    ampmEl.innerText = ampm;
    setTimeout(() => {
        updateClock();
    }, 1000);
}
updateClock();