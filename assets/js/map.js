var map = L.map('mapa', {
    crs: L.CRS.Simple,
    maxZoom: 0.05,
    minZoom: -1.5,
});

var bounds = [[0,0], [1480,1512]];
var image = L.imageOverlay('./assets/img/iniciativas.png', bounds).addTo(map);

map.fitBounds(bounds);

var circle = L.circle([1480/2, 1512/2], {
    color: 'transparent',
    strokeOpacity: 0,
    fillColor: '#f03',
    fillOpacity: 0,
    radius: 100
}).addTo(map);

circle.on('click', function(e){
    console.log('circle' + e.latlng);
});

var popup = L.popup();

map.on('click', function(e){
    console.log(e.latlng);
});