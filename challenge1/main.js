const minutesInput = document.querySelector("#minutes");
const secondsInput = document.querySelector("#seconds");
const startStopButton = document.querySelector("#startStopButton");
const gear = document.querySelector(".gear");

//
var circle = document.querySelector("circle");
var radius = circle.r.baseVal.value;
var circumference = radius * 2 * Math.PI;

circle.style.strokeDasharray = `${circumference} ${circumference}`;
circle.style.strokeDashoffset = `${circumference}`;
//

let interval;
let isEditing = false;
let isRunning = false;
let total = parseInt(minutesInput.value, 10);

setProgress(100);

startStopButton.addEventListener("click", () => {
  if (isEditing) {
    alert("Please, click on the check icon when done editing");
    return;
  }

  if (startStopButton.innerText === "START") {
    interval = setInterval(() => {
      timer();
    }, 1000);
    startStopButton.innerText = "stop";
    isRunning = true;
  } else {
    pause();
    isRunning = false;
    startStopButton.innerText = "start";
  }
});
gear.addEventListener("click", () => {
  if (isRunning) {
    alert("Stop the countdown first before editing the time");
    return;
  }

  if (minutesInput.disabled === true && secondsInput.disabled === true) {
    minutesInput.disabled = false;
    secondsInput.disabled = false;
    isEditing = true;
    gear.firstElementChild.src = "./images/check.svg";
  } else {
    minutesInput.disabled = true;
    secondsInput.disabled = true;
    isEditing = false;
    gear.firstElementChild.src = "./images/gear.svg";
  }

  minutesInput.classList.toggle("dashedLine");
  secondsInput.classList.toggle("dashedLine");
});

function pause() {
  clearInterval(interval);
}

function returnData(input) {
  return input >= 10 ? input : `0${parseInt(input, 10)}`;
}

function timer() {
  // console.log(minutesInput.value, "minutes; seconds: ", secondsInput.value);

  if (Number(minutesInput.value) <= 0 && Number(secondsInput.value) <= 0) {
    return clearInterval(interval);
  }

  if (secondsInput.value === "00") {
    secondsInput.value = 60;
    minutesInput.value = Number(minutesInput.value) - 1;
  }

  setProgress(
    (parseInt(minutesInput.value, 10) / total) * 100 * 60 +
      (parseInt(secondsInput.value, 10) / 60) * 100
  );

  // secondsInput.value - 1;

  console.log(minutesInput.value);
  // console.log(secondsInput.value);

  minutesInput.value = returnData(minutesInput.value);
  secondsInput.value = returnData(secondsInput.value - 1);
}

function setProgress(percent) {
  const offset = circumference - (percent / 100) * circumference;
  console.log(percent, offset);
  circle.style.strokeDashoffset = offset;
}

// setProgress(input.value);
