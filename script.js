function playSound(e) {
  const audio = this.document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = this.document.querySelector(`div[data-key="${e.keyCode}"]`);

  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
  console.log(key);
  key.classList.add("play");

  key.style.backgroundColor = "#ffc600";
  setTimeout(() => {
    key.style.backgroundColor = "";
  }, 100);
}

function removeTransition(e) {
  if (e.propertyName !== "transform") return;
  this.classList.remove("play");
}

function playSoundOnHover(e) {
  const keyCode = this.getAttribute("data-key");
  const audio = document.querySelector(`audio[data-key="${keyCode}"]`);

  if (!audio) return;

  audio.currentTime = 0;
  audio.play();
}

function stopTransition(e) {
  const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
  if (!key) return;

  key.classList.remove("play");
}

const keys = document.querySelectorAll(".key");
keys.forEach((key) => {
  key.addEventListener("transitionend", removeTransition);
  key.addEventListener("mouseenter", playSoundOnHover);
});

window.addEventListener("keydown", playSound);

window.addEventListener("keyup", stopTransition);
