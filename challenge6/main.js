const range = document.querySelector("input[type='range']");
const price = document.querySelector(".price");

price.innerHTML = Number(range.value).toFixed(2);

range.addEventListener("input", (e) => {
  price.innerHTML = round(e.target.value);
});

function round(num) {
  var m = Number((Math.abs(num) * 100).toPrecision(15));
  return ((Math.round(m) / 100) * Math.sign(num)).toFixed(2);
}

function handleInputChange(e) {
  let target = e.target;

  const min = target.min;
  const max = target.max;
  const val = target.value;

  target.style.backgroundSize = ((val - min) * 100) / (max - min) + "% 100%";
}

range.addEventListener("input", handleInputChange);
