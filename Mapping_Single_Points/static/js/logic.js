// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level.
/// We'll change the geographical center of the map to the approximate geographical center of the United States.
/// The setView() method sets the view of the map with a geographical center, where the first coordinate is latitude (40.7) and the second is longitude (-94.5). 
/// We set the zoom level of "4" on a scale 0–18.
/// See documentation: https://leafletjs.com/examples/quick-start/
let map = L.map("mapid", {
    center: [
      40.7, -94.5
    ],
    zoom: 4
  });

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

//  Add a marker to the map for Los Angeles, California.
let marker = L.marker([34.0522, -118.2437]).addTo(map);


/// Create a light-yellow circle with black lines indicating a 300-meter radius of Central Los Angeles on a dark map.
/// Colors: https://www.color-hex.com/color/fff2cc
L.circleMarker([34.0522, -118.2437], {
  color: "black",
  fillcolor: '#ffd966',
  fillOpacity: 0.5,
  radius: 300
}).addTo(map);

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);