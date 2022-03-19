let hour = document.querySelector(".hour");
let min = document.querySelector(".min");
let sec = document.querySelector(".sec");
let deg = 6;

setInterval(function () {
  let soat = new Date();

  let hr = soat.getHours();
  let mn = soat.getMinutes();
  console.log(mn);
  let sc = soat.getSeconds();

  min.style.transform = `rotate(${mn}deg)`;
  sec.style.transform = `rotate(${sc}deg)`;
});
