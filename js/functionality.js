
const music = new Audio('music/ArknightsEP-Ensheath.mp3');
music.loop = true; 

const musicToggleBtn = document.getElementById('musicToggle');


musicToggleBtn.addEventListener('click', () => {
  if (music.paused) {
    music.play();
    musicToggleBtn.textContent = '⏸️ Pause Music';
  } else {
    music.pause();
    musicToggleBtn.textContent = '🎵 Play Music';
  }
});
