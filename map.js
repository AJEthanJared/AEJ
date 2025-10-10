var map = L.map('map').setView([29.8884, -97.9384], 14);

var mapLink = '<a href="http://openstreetmap.org">OpenStreetMap</a>';
L.tileLayer(
    'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; ' + mapLink + ' Contributors',
    maxZoom: 18,
}).addTo(map);


var polygon = turf.polygon([
  [
    [125, -15],
    [113, -22],
    [154, -27],
    [144, -15],
    [125, -15],
  ],
]);

var area = turf.area(polygon);
L.geoJSON(polygon).addTo(map);

var testmarker = L.marker([-15, 125]).addTo(map);
testmarker.bindPopup(area + "m^2").openPopup();
testmarker.on('click', function (e) { map.setView(e.latlng, 14); });

let polyLayer = L.geoJSON(polygon).addTo(map);
polyLayer.bindPopup("Test: " + area);