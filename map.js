// ADD YOUR MAPBOX ACCESS TOKEN
mapboxgl.accessToken = 
"pk.eyJ1Ijoid21jNDQwIiwiYSI6ImNtMWllMGNsaDBwNzAya3BzOGw5YWFoaGEifQ.DCKA07hDOoGLHkaRFcNyxA";


// CREATE A NEW OBJECT CALLED MAP
const map = new mapboxgl.Map({
  container: "map", // container ID for the map object (this points to the HTML element)
  style: "mapbox://styles/wmc440/cm1if4ayu01jv01pd28y49esc", //YOUR STYLE URL
  center: [-73.9442, 40.6482], // starting position [lng, lat] (google brooklyn)
  zoom: 10, // starting zoom (adjust it as you wish)
  projection: "globe", // display the map as a 3D globe
});
