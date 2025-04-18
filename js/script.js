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


//map attempt 5 or some


  if (document.getElementById("map")) {
    const gmapScript = document.createElement("script");
    gmapScript.src =
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyCdK8_tTlj5Kt4zu_IMYgqnOI3itIl0NEw&callback=initMap";
    gmapScript.async = true;
    gmapScript.defer = true;
    document.body.appendChild(gmapScript);
  }
});


function initMap() {
  const location = { lat: 41.8781, lng: -87.6298 }; // Chicago

  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: location,
  });


  const marker = new google.maps.Marker({
    position: location,
    map: map,
    title: "Here",
  });


  const infoWindow = new google.maps.InfoWindow({
    content: "<h3>Our Office</h3><p>This is where we're located.</p>",
  });

  marker.addListener("click", () => {
    infoWindow.open(map, marker);
  });


  const trafficLayer = new google.maps.TrafficLayer();
  trafficLayer.setMap(map);
}