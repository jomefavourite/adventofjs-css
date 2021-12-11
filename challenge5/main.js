const podList = document.querySelector(".pod-list");

let index = [];

fetch("./data.json")
  .then((res) => res.json())
  .then((data) => {
    if (data) podList.innerHTML = "";
    data.forEach((data, i) => {
      return (podList.innerHTML += `
        <li>
          <input type="checkbox" id="one" />
          <label for="one"> ${i + 1} || ${data}</label>
        </li>
      `);
    });
  });

function filterNumbers(min, max) {
  return function (a, i) {
    return i >= min && i <= max;
  };
}

window.addEventListener("keyup", (e) => {
  const allInputs = document.querySelectorAll('input[type="checkbox"]');

  if (e.key === "Shift") {
    allInputs.forEach((input, i) => {
      if (input.checked) {
        index.push(i);
      }
    });

    // console.log(index);
    let inBetweenInput = [...allInputs].filter(
      filterNumbers(index[index.length - 2], index[index.length - 1])
    );

    // console.log(inBetweenInput);

    inBetweenInput.forEach((el) => {
      el.checked = true;
    });

    index = [];
  }
});
