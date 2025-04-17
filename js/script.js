document.addEventListener('DOMContentLoaded', () => {
  const audio = new Audio('music/your-audio-file.mp3'); // Replace with your audio file path
  const button = document.getElementById('musicToggle');
  let isPlaying = false;

  button.addEventListener('click', () => {
    if (isPlaying) {
      audio.pause();
      button.textContent = '🎵 Play Music';
    } else {
      audio.play();
      button.textContent = '⏸️ Pause Music';
    }
    isPlaying = !isPlaying;
  });
});
