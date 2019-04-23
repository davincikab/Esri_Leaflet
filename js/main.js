let map = L.map('map').setView([0.9889, 37.987], 12);

// Add a basemap
let esristreet = L.esri.basemapLayer('Streets').addTo(map);
