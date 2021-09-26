// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level.
/// We'll change the geographical center of the map to the approximate geographical center to the San Francisco airport
/// The setView() method sets the view of the map with a geographical center, where the first coordinate is latitude and the second is longitude 
/// We set the zoom level of "4" on a scale 0–18.
/// See documentation: https://leafletjs.com/examples/quick-start/
let map = L.map("mapid", {
    center: [
      37.6213, -122.3790
    ],
    zoom: 5
  });

// Coordinates for each point to be used in the line.
let line = [
  [37.6213, -122.3790], /// SFO
  [30.19749890052496, -97.66643873320416], /// AUS
  [43.67805738679191, -79.63388900508605], /// YYZ Toronto
  [40.64126223295619, -73.77810691570619] ///JFK
];  

// Create a polyline using the line coordinates and make the line red.
L.polyline(line, {
  color: "blue",
  dashArray: "8",
  weight: 4,
  opacity: 0.5
}).addTo(map);


// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);