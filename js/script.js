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


function initMap() {
  const location = { lat: 41.8781, lng: -87.6298 }; // Example coordinates (Chicago, IL)

  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: location,
  });

  const marker = new google.maps.Marker({
    position: location,
    map: map,
    title: "Chicago",
  });

  const infoWindowContent = `
    <div>
      <h2>Disney Land</h2>
      <p>Very fun.</p>
      <a href="https://www.google.com/maps/dir/?api=1&destination=41.8781,-87.6298" target="_blank">Get Directions</a>
    </div>
  `;

  const infoWindow = new google.maps.InfoWindow({
    content: infoWindowContent,
  });

  marker.addListener("click", () => {
    infoWindow.open(map, marker);
  });
}
