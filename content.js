console.log('content.js loaded');
function checkForMap() {
  console.log("checking for map")
  const mapElement = document.querySelector('.Lx2b0d') || document.querySelector('.Ggdpnf kno-fb-ctx') || document.querySelector('.luibr');
  if (mapElement) {
    console.log("map found");
    mapElement.addEventListener('click', () => {
      const url = window.location.href;
      const location = url.split('q=')[1].split('&')[0];

      const dest = encodeURIComponent(location);
      const destUrl = `https://www.google.com/maps/dir/?api=1&destination=${dest}`;
      window.open(destUrl, '_blank');
    });
  } else {
    console.log("Map not found");
  }
}

checkForMap();
