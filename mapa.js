let map = L.map('map').setView([23.737433, -99.143870],13)

//Agregar tilelAyer mapa base desde openstreetmap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

document.getElementById('select-location').addEventListener('change',function(e){
  let coords = e.target.value.split(",");
  map.flyTo(coords,18);
})