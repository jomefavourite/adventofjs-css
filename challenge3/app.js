const whiteKeys = document.querySelectorAll(".white-keys");
const blackKeys = document.querySelectorAll(".black-keys");

let audio = new Audio();

let whiteSongs = new Array(
  "./audio/key-1.mp3",
  "./audio/key-2.mp3",
  "./audio/key-3.mp3",
  "./audio/key-4.mp3",
  "./audio/key-5.mp3",
  "./audio/key-6.mp3",
  "./audio/key-7.mp3",
  "./audio/key-8.mp3",
  "./audio/key-9.mp3",
  "./audio/key-10.mp3",
  "./audio/key-11.mp3",
  "./audio/key-12.mp3",
  "./audio/key-13.mp3"
);
let blackSongs = new Array(
  "./audio/key-14.mp3",
  "./audio/key-15.mp3",
  "./audio/key-16.mp3",
  "./audio/key-17.mp3",
  "./audio/key-18.mp3",
  "./audio/key-19.mp3",
  "./audio/key-20.mp3",
  "./audio/key-21.mp3",
  "./audio/key-22.mp3",
  "./audio/key-23.mp3"
);

audio.oncanplaythrough = function () {
  audio.play();
};
whiteKeys.forEach((key, i) => {
  key.addEventListener("click", () => {
    audio.src = whiteSongs[i];
    audio.play();
  });
});

blackKeys.forEach((key, i) => {
  key.addEventListener("click", () => {
    audio.src = blackSongs[i];
    audio.play();
  });
});
