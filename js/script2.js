
const time1 = 1000;
const step1 = 1000;

function outNum1(num, elem) {
  let e = document.querySelector("#out2");
  n = 0;
  let t = Math.round(time1 / (num / step1));
  let interval = setInterval(() => {
    n = n + step1;
    if (n == num) {
      clearInterval(interval);
    }
    e.innerHTML = n;
  }, t);
}

outNum1(100000, "#out2");









