let hour = document.querySelector(".hour");
let min = document.querySelector(".min");
let sec = document.querySelector(".sec");

let timeHour = document.querySelector(".time-one");
let timeMin = document.querySelector(".time-two");
let timeSec = document.querySelector(".time-three");

// setInterval(function () {
//   let deg = 6;
//   let bigdeg = 30;

//   let soat = new Date();
//   console.log(soat);

//   let hr = soat.getHours() * bigdeg;
//   let mn = soat.getMinutes() * deg;
//   let sc = soat.getSeconds() * deg;

//   hour.style.transform = `rotateZ(${hr + mn / 12}deg)`;
//   min.style.transform = `rotateZ(${mn}deg)`;
//   sec.style.transform = `rotateZ(${sc}deg)`;

//   timeHour.textContent = soat.getHours();
//   timeMin.textContent = soat.getMinutes();
//   timeSec.textContent = soat.getSeconds();
// });
setInterval(function () {

let deg = 6;
let bigDeg = 30;

let kun = new Data();

let soat = kun.getHours();
let minut = kun.getMinutes();
let secunt = kun.getSeconds();

  let hr = soat;
  let mn = minut;
  let sc = secunt;

  hour.style.transform = `rotateZ(${hr + mn / 12}deg)`;
  min.style.transform = `rotateZ(${mn}deg)`;
  sec.style.transform = `rotateZ(${sc}deg)`;
}, 1000);

// tuggle

// let tuggle = document.querySelector(".tuggle");
// let btnTugle = document.querySelector(".btn-tun");
// let body = document.querySelector("body");

// let a = 0;

// function func() {
//   if (a == 2) {
//     a = 0;
//     document.documentElement.style.setProperty("--text", "#121145");
//   } else if (a == 1) {
//     document.documentElement.style.setProperty("--text", "black");
//   }
//   btnTugle.style.transform = `translateX(${a * 38}px)`;
// }

// tuggle.addEventListener("click", function () {
//   a++;
//   func();
// });
