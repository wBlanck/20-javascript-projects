const music = document.querySelector("audio");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const playPauseBtn = document.getElementById("play");

let isPlaying = false;

const playMusic = () => {
  isPlaying = true;
  playPauseBtn.className = playPauseBtn.className.replace(
    "fa-play",
    "fa-pause"
  );
  playPauseBtn.setAttribute("title", "Pause");
  music.play();
};

const pauseMusic = () => {
  isPlaying = false;
  playPauseBtn.className = playPauseBtn.className.replace(
    "fa-pause",
    "fa-play"
  );
  playPauseBtn.setAttribute("title", "Play");
  music.pause();
};

playPauseBtn.addEventListener("click", () =>
  isPlaying ? pauseMusic() : playMusic()
);
