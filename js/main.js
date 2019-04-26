let map = L.map('map').setView([0.9889, 37.987], 12);

// Add a basemap
let esristreet = L.esri.basemapLayer('Streets').addTo(map);

var shpfile = new L.Shapefile('data.zip');
shpfile.addTo(map);

map.fitBounds(shpfile.getBounds());
