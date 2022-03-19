let hour = document.querySelector(".hour");
let min = document.querySelector(".min");
let sec = document.querySelector(".sec");

let timeHour = document.querySelector(".time-one");
let timeMin = document.querySelector(".time-two");
let timeSec = document.querySelector(".time-three");

setInterval(function () {
  let deg = 6;
  let bigdeg = 30;

  let soat = new Date();
  console.log(soat);

  let hr = soat.getHours() * bigdeg;
  let mn = soat.getMinutes() * deg;
  let sc = soat.getSeconds() * deg;

  hour.style.transform = `rotateZ(${hr + mn / 12}deg)`;
  min.style.transform = `rotateZ(${mn}deg)`;
  sec.style.transform = `rotateZ(${sc}deg)`;

  timeHour.textContent = soat.getHours();
  timeMin.textContent = soat.getMinutes();
  timeSec.textContent = soat.getSeconds();
});
