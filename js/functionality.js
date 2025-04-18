
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
  // Define the location coordinates
  const myLocation = { lat: 41.8781, lng: -87.6298 }; // Example: Chicago, IL

  // Create a new map centered at the specified location
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: myLocation,
  });

  // Define a custom icon for the marker
  const customIcon = {
    url: "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png", // Replace with your custom icon URL
    scaledSize: new google.maps.Size(40, 40), // Adjust the size as needed
  };

  // Create a new marker with the custom icon
  const marker = new google.maps.Marker({
    position: myLocation,
    map: map,
    title: "My Favorite Spot",
    icon: customIcon,
  });

  // Define the content of the info window
  const infoWindowContent = `
    <div>
      <h2>My Favorite Spot</h2>
      <p>This is a special place I like to visit.</p>
      <a href="https://www.google.com/maps/dir/?api=1&destination=41.8781,-87.6298" target="_blank">Get Directions</a>
    </div>
  `;

  // Create a new info window
  const infoWindow = new google.maps.InfoWindow({
    content: infoWindowContent,
  });

  // Add a click event listener to the marker to open the info window
  marker.addListener("click", () => {
    infoWindow.open(map, marker);
  });
}
