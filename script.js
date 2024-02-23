// Initialize and load the map
var map = L.map('map', {
    zoomControl: false // Disable default zoom control
}).setView([51.1657, 10.4515], 4); // Centered at Europe

// Add Dark Leaflet Map base layer
L.tileLayer('https://{s}.tile.jawg.io/jawg-dark/{z}/{x}/{y}.png?access-token=Vtoy8xSyvCQzZdfgY4TJeAh7sEbjhRmF59klDEjuOH3LfPZX0dgLBq8lgDApAfUT', {
    attribution: '<a href="http://jawg.io" title="Tiles Courtesy of Jawg Maps" target="_blank" class="jawg-attrib">&copy; <b>Jawg</b>Maps</a> | <a href="https://www.openstreetmap.org/copyright" title="OpenStreetMap is open data licensed under ODbL" target="_blank" class="osm-attrib">&copy; OSM contributors</a>',
    maxZoom: 19
}).addTo(map);

// Hide zoom control
map.zoomControl.setPosition('bottomright');

// Remove default layer control
map.removeControl(map.layersControl);

// Disable scroll wheel zooming
map.scrollWheelZoom.disable();
