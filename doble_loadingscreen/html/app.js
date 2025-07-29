// app.js

const bgMusic = document.getElementById('bgMusic');
const volumeSlider = document.getElementById('volumeSlider');
const volumeIcon = document.getElementById('volumeIcon');

volumeSlider.addEventListener('input', () => {
  bgMusic.volume = volumeSlider.value;
  updateIcon();
});

volumeIcon.addEventListener('click', () => {
  bgMusic.muted = !bgMusic.muted;
  updateIcon();
});

function updateIcon() {
  if (bgMusic.muted || bgMusic.volume === 0) {
    volumeIcon.classList.remove('bi-volume-up-fill');
    volumeIcon.classList.add('bi-volume-mute-fill');
  } else {
    volumeIcon.classList.remove('bi-volume-mute-fill');
    volumeIcon.classList.add('bi-volume-up-fill');
  }
}
