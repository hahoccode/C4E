// const timeEle = document.querySelectorAll(".clock-container")

// setInterval (() => {
//     const seconds = new Date().getSeconds();
//     const secondsEle = document.getElementById("seconds");
//     secondsEle.innerText = seconds;
// },1000);
// setInterval (() => {
//     const hour = new Date().getHours();
//     const hourEle = document.getElementById("hour");
//     hourEle.innerText = hour;
// },1000);
// setInterval (() => {
//     const minutes = new Date().getMinutes() ;
//     const minutesEle = document.getElementById("minutes");
//     minutesEle.innerText = minutes ;
// },1000);

const timeEle = document.querySelectorAll("span");
const dayByDay = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"]
setInterval(() => {
    const currentTime = new Date();

    timeEle[0].innerText = dayByDay[currentTime.getDay()];
    timeEle[1].innerText = currentTime.getHours();
    timeEle[2].innerText =
        currentTime.getMinutes() < 10
            ? "0" + currentTime.getMinutes()
            : currentTime.getMinutes();
    timeEle[3].innerText =
        currentTime.getSeconds() < 10
            ? "0" + currentTime.getSeconds()
            : currentTime.getSeconds();

}, 1000);
