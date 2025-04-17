document.addEventListener('DOMContentLoaded', () => {
  const musicToggle = document.getElementById('musicToggle');
  const backgroundMusic = document.getElementById('backgroundMusic');

  musicToggle.addEventListener('click', () => {
    if (backgroundMusic.paused) {
      backgroundMusic.play();
      musicToggle.textContent = '⏸️ Pause Music';
    } else {
      backgroundMusic.pause();
      musicToggle.textContent = '🎵 Play Music';
    }
  });
});
