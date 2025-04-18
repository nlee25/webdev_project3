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

document.addEventListener('DOMContentLoaded', () => {
  const themeToggle = document.getElementById('themeToggle');
  const currentTheme = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-theme', currentTheme);
  updateBackgroundImage(currentTheme);

  themeToggle.addEventListener('click', () => {
    let theme = document.documentElement.getAttribute('data-theme');
    theme = theme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    updateBackgroundImage(theme);
  });

  function updateBackgroundImage(theme) {
    const body = document.body;
    if (theme === 'dark') {
      body.style.backgroundImage = "url('../images/dots inverted.png')";
    } else {
      body.style.backgroundImage = "url('../images/wallpaperdotsEX.jpg')";
    }
  }
});


let map;

async function initMap() {
  const { Map } = await google.maps.importLibrary("maps");

  map = new Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
  });
}

initMap();
