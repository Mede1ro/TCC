var map = L.map('map', {
  preferCanvas: true
}).setView([-22.77483256773132, -42.082277725096766], 10); // Criação do mapa e definição de visão

var googleStreets = L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
  loadingControl: true,
  maxZoom: 19,
  subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
});

googleStreets.addTo(map);

// Escala do Mapa

L.control.scale().addTo(map);

// Tela Cheia

var mapId = document.getElementById('map');
function fullScreenView() {
  mapId.requestFullscreen();

}

// Imprimir o mapa

$('.print-map').click(function() {
  window.print();
})

L.control.browserPrint().addTo(map);

// Leaflet Draw Plugin

var drawnFeatures = new L.FeatureGroup();
map.addLayer(drawnFeatures);

var drawControl = new L.Control.Draw({
  position: "topright",
  draw: {
    polygon: {
     shapeOptions: {
      color: 'purple'
     },
    //  allowIntersection: false,
    //  drawError: {
    //   color: 'orange',
    //   timeout: 1000
    //  },
    },
    polyline: {
     shapeOptions: {
      color: 'red'
     },
    },
    rectangle: {
      shapeOptions: {
       color: 'green'
      },
     },
    rect: {
     shapeOptions: {
      color: 'green'
     },
    },
    circle: {
     shapeOptions: {
      color: 'steelblue'
     },
    },
   },
});
map.addControl(drawControl);

var deleteControl = new L.Control.Draw({
  position: "topright",
  edit: {
    featureGroup: drawnFeatures,
    remove: true
  },
  draw: false
});
map.addControl(deleteControl);

map.on("draw:created", function(e){
  var layer = e.layer;
  console.log(layer.toGeoJSON());

  layer.bindPopup(`<p>${JSON.stringify(layer.toGeoJSON())}</p>`);
  drawnFeatures.addLayer(layer);
});

map.on("draw:deleted", function(e){
  var layers = e.layers;
  layers.eachLayer(function(layer){
    console.log("Deleted layer: ", layer);
  });
});

map.on("draw:edited", function(e){
  var layers = e.layers;
  layers.eachLayer(function(layer){
    console.log("Edited layer: ", layer);
  });
});