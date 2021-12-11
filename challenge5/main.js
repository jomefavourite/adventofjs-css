import { allEpisodes } from "./data.js";

console.log(allEpisodes);

fetch("./data.json")
  .then((res) => res.json())
  .then((data) => console.log(data));

async function getEpisodes() {
  await fetch("./data.json")
    .then((res) => res.json())
    .then((data) => console.log(data));
}

getEpisodes();

const allInputs = document.querySelectorAll('input[type="checkbox"]');

let index = [];

function filterNumbers(min, max) {
  return function (a, i) {
    return i >= min && i <= max;
  };
}

window.addEventListener("keyup", (e) => {
  allInputs.forEach((input, i) => {
    if (input.checked) {
      console.log(i);
    }
  });
  if (e.key === "Shift") {
    allInputs.forEach((input, i) => {
      if (input.checked) {
        index.push(i);
      }
    });

    console.log(index);
    let inBetweenInput = [...allInputs].filter(
      filterNumbers(index[0], index[index.length - 1])
    );

    console.log(inBetweenInput);

    inBetweenInput.forEach((el) => {
      el.checked = true;
    });

    index = [];
  }
});
