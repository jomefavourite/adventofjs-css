const allKeys = document.querySelectorAll("[data-key]:not(.utility)");
const successEl = document.querySelector("#success");
const missedEl = document.querySelector("#missed");

const totalKeysLength = allKeys.length;
let currentKey;
let currentBtn;
let missedBtn;

let successKey = 0;
let missedKey = 0;

const generateRandomNumber = (totalKeysLength) => {
  return Math.floor(Math.random() * totalKeysLength);
};

let randomNumber = generateRandomNumber(totalKeysLength);

generateRandomKey(randomNumber);

document.addEventListener("keydown", (e) => {
  if (e.key === currentKey) {
    let randomNumber = generateRandomNumber(totalKeysLength);

    generateRandomKey(randomNumber);
    successKey = successKey + 1;
    successEl.innerHTML = successKey;
  } else {
    scaleIncorrectKey(e.key);
  }
});

function generateRandomKey(randomNumber) {
  currentBtn && currentBtn.classList.remove("jiggle");
  for (let i = 0; i < allKeys.length; i++) {
    if (i === randomNumber) {
      currentKey = allKeys[i].dataset.key.toLowerCase();
      currentBtn = allKeys[i];
      allKeys[i].classList.add("jiggle");

      break;
    }
  }
}

function scaleIncorrectKey(key) {
  missedBtn && missedBtn.classList.remove("scale");

  if (key.toLowerCase() !== allKeys[randomNumber].dataset.key.toLowerCase()) {
    for (let i = 0; i < allKeys.length; i++) {
      if (allKeys[i].dataset.key.toLowerCase() === key.toLowerCase()) {
        missedBtn = allKeys[i];
        setTimeout(() => {
          allKeys[i].classList.toggle("scale");
        }, 200);

        break;
      }
    }

    missedKey++;
    missedEl.innerHTML = missedKey;
  }
}
