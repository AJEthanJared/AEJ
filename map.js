var map = L.map('map').setView([29.8884, -97.9384], 14);

var mapLink = '<a href="http://openstreetmap.org">OpenStreetMap</a>';
L.tileLayer(
    'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; ' + mapLink + ' Contributors',
    maxZoom: 18,
}).addTo(map);

function txstDistance(){
  //Two turf points located around TXST
  var point1 = turf.point([-97.95, 29.89]);
  var point2 = turf.point([-97.935, 29.885]);

  //Adds points around TXST to map in the form of GeoJSON point features
  L.geoJSON(point1).addTo(map);
  L.geoJSON(point2).addTo(map);

  //Calculates distance in the unit of miles
  var distance = turf.distance(point1, point2, { units: "miles" });

  //Creates GeoJSON object to draw a blue line between points
  var line = turf.lineString([point1.geometry.coordinates, point2.geometry.coordinates]);
  L.geoJSON(line, { color: "blue" }).addTo(map);

  // Midpoint that will be used to show a popup with the distance of the line
  var mid = turf.midpoint(point1, point2);
  var midCoords = [mid.geometry.coordinates[1], mid.geometry.coordinates[0]];

  L.popup()
    .setLatLng(midCoords)
    .setContent("Distance: " + distance.toFixed(2) + " miles")
    .openOn(map);
}
