// Add console.log to check to see if our code is working.
console.log("working");

// Get data from cities.js
let cityData = cities;

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

// Create an orange circle popup marker for each city, with a lineweight of 4, a radius where the population number is decreased by 200,000

// Iterate through the array
// Loop through the cities array and create one marker for each city.
cityData.forEach(function(city) {
  console.log(city)
  // Add the location of each city to the map when you iterate through the cities array.
  // Get the coordinates of each city by adding city.location
  // Change the marker for each city to a circle that has a radius equivalent to the city's population.
  L.circleMarker(city.location, {
    radius: (city.population - 200000)/100000,
    color: 'yellow',
    fillcolor: '#ffd966',
    fillOpacity: 0.3,
  })
  // Adding a Popup to the marker, and format the population with a thousands separator by using the toLocaleString() method
  .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")
  .addTo(map);
 });

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);