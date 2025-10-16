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

function txstPolygon(){
  var polygon = turf.polygon([
    [
      [-97.95552088, 29.89020556],
      [-97.9536393, 29.89189183],
      [-97.95017212, 29.88906914],
      [-97.94860766, 29.89002227],
      [-97.94727575, 29.89033386],
      [-97.94609184, 29.89115867],
      [-97.94547874, 29.89191016],
      [-97.94454852, 29.89224007],
      [-97.94296292, 29.89203846],
      [-97.94184242, 29.89150692],
      [-97.94021454, 29.89126864],
      [-97.9395803, 29.89150692],
      [-97.9389672, 29.89136029],
      [-97.93871351, 29.89176352],
      [-97.93917862, 29.89231339],
      [-97.93850209, 29.89293657],
      [-97.93803698, 29.89258832],
      [-97.93704334, 29.89291824],
      [-97.93685307, 29.89256999],
      [-97.93638796, 29.89167188],
      [-97.93596513, 29.8918735],
      [-97.9348235, 29.89090206],
      [-97.93425268, 29.89106702],
      [-97.93452752, 29.89026054],
      [-97.93410469, 29.88916079],
      [-97.93461208, 29.88905081],
      [-97.93577486, 29.88774942],
      [-97.93689535, 29.8861364],
      [-97.93784671, 29.88589811],
      [-97.94053166, 29.88554984],
      [-97.94067965, 29.88657632],
      [-97.9420327, 29.88642968],
      [-97.94194813, 29.88591644],
      [-97.94323775, 29.88573314],
      [-97.94332232, 29.88648467],
      [-97.9460707, 29.88606308],
      [-97.9470432, 29.88584312],
      [-97.94860766, 29.88439504],
      [-97.94970701, 29.88527489],
      [-97.95152516, 29.8852199],
      [-97.95203256, 29.88569648],
      [-97.95304734, 29.88622805],
      [-97.95418897, 29.88793271],
      [-97.95552088, 29.89020556],
    ],
  ]);

  var area = turf.area(polygon);
  L.geoJSON(polygon).addTo(map);

  let polyLayer = L.geoJSON(polygon).addTo(map);
  polyLayer.bindPopup("The area of the main TXST campus is approximately: " + area + "m²").openPopup();
}

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

  map.on('click', function(e) {
    L.popup()
      .setLatLng(midCoords)
      .setContent(" Rough Distance across TXST: " + distance.toFixed(2) + " miles")
      .openOn(map);
  });
}
