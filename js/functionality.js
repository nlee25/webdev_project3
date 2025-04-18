
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

function initMap() {

  const myLocation = { lat: 11.373333, lng: 142.591667 }; //funny


  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: myLocation,
  });
  
const customIcon = {
  url: 'images/moron.png', 
  scaledSize: new google.maps.Size(40, 40), 
};

const marker = new google.maps.Marker({
  position: { lat: 39.019444, lng:125.738052}, 
  map: map,
  icon: customIcon,
  title: 'Disney Land',
});


  const infoWindowContent = `
    <div>
      <h2>Disney Land</h2>
      <p>Very fun. </p>
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
