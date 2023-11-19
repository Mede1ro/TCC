var map = L.map('map').setView([-22.77483256773132, -42.082277725096766], 10); // Criação do mapa e definição de visão

// Criação das camadas do mapa
var OpenStreetMap = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  edgeBufferTiles: 3,
  loadingControl: true,
  maxZoom: 19,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
});

var googleSat = L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}', {
  edgeBufferTiles: 3,
  loadingControl: true,
  maxZoom: 19,
  subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
});

var googleStreets = L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
  edgeBufferTiles: 3,
  loadingControl: true,
  maxZoom: 19,
  subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
});

// Adição de camadas ao mapa

OpenStreetMap.addTo(map);
googleSat.addTo(map);
googleStreets.addTo(map);

// Adição de controles de camadas

var baseLayers = {
  "OpenStreetMap": OpenStreetMap,
  "Google Satellite": googleSat,
  "Google Maps": googleStreets
};

// Cores dos marcadores

var greenIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

var redIcon = new L.Icon({
	iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
	shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
	iconSize: [25, 41],
	iconAnchor: [12, 41],
	popupAnchor: [1, -34],
	shadowSize: [41, 41]
});

var blueIcon = new L.Icon({
	iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png',
	shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
	iconSize: [25, 41],
	iconAnchor: [12, 41],
	popupAnchor: [1, -34],
	shadowSize: [41, 41]
});

var orangeIcon = new L.Icon({
	iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-orange.png',
	shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
	iconSize: [25, 41],
	iconAnchor: [12, 41],
	popupAnchor: [1, -34],
	shadowSize: [41, 41]
});

var violetIcon = new L.Icon({
	iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-violet.png',
	shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
	iconSize: [25, 41],
	iconAnchor: [12, 41],
	popupAnchor: [1, -34],
	shadowSize: [41, 41]
});

// Conflitos em Buzios
var bz1 = L.marker([-22.74884753005497, -41.95635818360315], { icon: redIcon }).addTo(map);
bz1.bindPopup("<b>O conflito entre o empreendimento imobiliário ARETÉ e a comunidade de remanescentes de quilombo de Baía Formosa.</b>").openPopup();

var bz2 = L.marker([-22.769395296464456, -41.91134553553569], { icon: redIcon }).addTo(map);
bz2.bindPopup("<b>Os conflitos entre pescadores e a expansão urbana no Porto da Pedra e os riscos para o mangue de pedra em Búzios.</b>").openPopup();


// Conflitos em São Pedro

var sp1 = L.marker([-22.860275823471152, -42.10987835106725], {icon: blueIcon}).addTo(map);
sp1.bindPopup("<b>Quiosques de São Pedro: a urbanização da orla da laguna de Araruama em São Pedro pode vir a promover um processo de gentrificação.</b>").openPopup();

// Conflitos em Cabo Frio

var cf1 = L.marker([-22.86436041745567, -42.003151612015145], {icon: greenIcon}).addTo(map);
cf1.bindPopup("<b>A instalação do empreendimento imobiliário Marina do Peró, da empresa VIVERDE em Cabo Frio. O empreendimento tem sido acusado de supressão de manguezal e vegetação.</b><br><a href='p/cf1.php'>Ver mais</a>").openPopup();

var cf2 = L.marker([-22.872930570031375, -42.03569801111262], {icon: greenIcon}).addTo(map);
cf2.bindPopup("<b>A expansão do estacionamento do Shopping Park Lagos tem gerado conflitos com as comunidades do entorno.</b><br><a href='p/cf2.php'>Ver mais</a>").openPopup();

var cf3 = L.marker([-22.73966606550855, -42.0641429968583], {icon: greenIcon}).addTo(map);
cf3.bindPopup("<b>A invisibilidade da comunidade dos remanescentes do Quilombo Botafogo em Cabo Frio.</b>").openPopup();

// Conflitos em Arraial do Cabo

var ac1 = L.marker([-22.97054597934171, -42.031247214308], {icon: orangeIcon}).addTo(map);
ac1.bindPopup("<b>O conflito entre turismo e pesca na Reserva Extrativista de Arraial do Cabo.</b><br><a href='p/ac1.php'>Ver mais</a>").openPopup();

// Conflitos em Araruama

var ar1 = L.marker([-22.877920210547412, -42.32451740467678], {icon: violetIcon}).addTo(map);
ar1.bindPopup("<b>A urbanização da orla da laguna de Araruama em Araruama e seus impactos.</b><br><a href='p/ar1.php'>Ver Mais</a>").openPopup();
    
var ar2 = L.marker([-22.88280298731239, -42.1604148444337], {icon: violetIcon}).addTo(map);
ar2.bindPopup("<b>A emissão de esgoto in natura na laguna de Araruama em diversos pontos.</b>").openPopup();

// Controle dos Marcadores por Cidade

var buzios = L.layerGroup([bz1, bz2]);
var saopedro = L.layerGroup([sp1]);
var cabofrio = L.layerGroup([cf1, cf2, cf3]);
var arraial = L.layerGroup([ac1]);
var araruama = L.layerGroup([ar1, ar2]);
var overlayMaps = {
  "Buzios": buzios,
  "São Pedro da Aldeia": saopedro,
  "Cabo Frio": cabofrio,
  "Arraial do Cabo": arraial,
  "Araruama": araruama
};

L.control.layers(baseLayers, overlayMaps).addTo(map);
map.zoomControl.setPosition('topright');

map.addLayer(buzios);
map.addLayer(saopedro);
map.addLayer(cabofrio);
map.addLayer(arraial);
map.addLayer(araruama);

// Controle da visibilidade dos marcadores quando o grupo é adicionado ou removido

map.on('overlayadd', function (eventLayer) {
  if (eventLayer.name === 'Buzios') {
    map.addLayer(buzios);
  } else if (eventLayer.name === 'São Pedro da Aldeia') {
    map.addLayer(saopedro);
  } else if (eventLayer.name === 'Cabo Frio') {
    map.addLayer(cabofrio);
  } else if (eventLayer.name === 'Arraial do Cabo') {
    map.addLayer(arraial);
  } else if (eventLayer.name === 'Araruama') {
    map.addLayer(araruama);
  }
});

map.on('overlayremove', function (eventLayer) {
  if (eventLayer.name === 'Buzios') {
    map.removeLayer(buzios);
  } else if (eventLayer.name === 'São Pedro da Aldeia') {
    map.removeLayer(saopedro);
  } else if (eventLayer.name === 'Cabo Frio') {
    map.removeLayer(cabofrio);
  } else if (eventLayer.name === 'Arraial do Cabo') {
    map.removeLayer(arraial);
  } else if (eventLayer.name === 'Araruama') {
    map.removeLayer(araruama);
  }
});