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


const dateEle = document.querySelector(".clock-info");

const newEleHtml = "date";
dateEle.innerText = newEleHtml;

console.log(dateEle);