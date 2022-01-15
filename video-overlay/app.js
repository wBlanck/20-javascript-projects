const button = document.querySelector(".button");
const block = document.querySelector(".block");
const videoContainer = document.querySelector(".video-container");
const preloader = document.querySelector(".preloader");

const toggleVideo = () => {
  block.classList.toggle("move-block");
  if (block.classList.contains("move-block")) {
    videoContainer.pause();
  } else {
    videoContainer.play();
  }
};
const hidePreloader = () => {
  preloader.style.display = "none";
};
button.addEventListener("click", toggleVideo);
window.addEventListener("load", hidePreloader);
