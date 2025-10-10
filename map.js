var map = L.map('map').setView([29.8884, -97.9384], 14);

var mapLink = '<a href="http://openstreetmap.org">OpenStreetMap</a>';
L.tileLayer(
    'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; ' + mapLink + ' Contributors',
    maxZoom: 18,


}).addTo(map);
// var marker1 = L.circleMarker([0, 0]);
// marker1.addTo(map);
// var geojsonPoint = marker1.toGeoJSON();
// var buffered = turf.buffer(geojsonPoint, 300, { units: 'kilometers' });
// L.geoJSON(buffered, {
//         style: function (feature) {
//             return { color: 'blue', fillOpacity: 0.2 }; // Customize buffer style
//         }
//     }).addTo(map);
var point = turf.point([0, 0]);
var buffered = turf.buffer(point, 500, { units: "miles" });
L.geoJSON(buffered).addTo(map);
L.geoJSON(point).addTo(map);
