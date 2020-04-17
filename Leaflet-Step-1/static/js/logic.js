// Create a map object
var myMap = L.map("map", {
    center: [0, 0],
    zoom: 3
  });
  
L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.outdoors",
  accessToken: API_KEY
}).addTo(myMap);
  
// Earthquake data
var jsonData;
var queryUrl = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.geojson"
d3.json(queryUrl, function (data) {
  jsonData = data;
  
  data.features.forEach(obj => {
    var lat = obj.geometry.coordinates[1];
    var lng = obj.geometry.coordinates[0];
    var mag = obj.properties.mag;
    var place = obj.properties.place;
  
    // Add circles to map
    L.circle([lat, lng], {
      stroke: false,
      fillOpacity: .75,
      color: getColor(mag),
      fillColor: getColor(mag),
      // Adjust radius
      radius: mag * 30000
    }).bindPopup("<h3>" + place + "<h3><h3>Magnitude: " + mag + "</h3>").addTo(myMap);
  });
});
  
// Conditionals for data
function getColor(d) {
  return d > 5 ? 'red' :
         d > 4 ? 'orange' :
         d > 3 ? 'yellow' :
         d > 2 ? 'green' :
         d > 1 ? 'teal' :
                 'blue' ;                
}

var legend = L.control({position: 'bottomright'});

legend.onAdd = function (map) {
  var div = L.DomUtil.create('div', 'info legend'),
    grades = [0, 1, 2, 3, 4, 5],
    labels = [];
  
    // Loop through data
  for (var i = 0; i < grades.length; i++) {
    div.innerHTML +=
      '<i style="background:' + getColor(grades[i] + 1) + '"></i> ' +
      grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br>' : '+');
  }
  return div;
};

legend.addTo(myMap);