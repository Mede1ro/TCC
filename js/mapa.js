var map = L.map('map').setView([-22.77483256773132, -42.082277725096766], 10);

var greenIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });

    OpenStreetMap = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        edgeBufferTiles: 3,
        loadingControl: true,
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      });
OpenStreetMap.addTo(map);

googleSat = L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}',{
        edgeBufferTiles: 3,
        loadingControl: true,
        maxZoom: 19,
        subdomains:['mt0','mt1','mt2','mt3']
});

    googleStreets = L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}',{
        edgeBufferTiles: 3,
        loadingControl: true,
        maxZoom: 19,
        subdomains:['mt0','mt1','mt2','mt3']
        
}); 
googleStreets.addTo(map);

var baseLayers = {
    "OpenStreetMap": OpenStreetMap,
    "Google Satellite": googleSat,
    "Google Maps": googleStreets
};

L.control.layers(baseLayers).addTo(map);

// Conflitos em Buzios
var marker = L.marker([-22.74884753005497, -41.95635818360315], {icon: greenIcon}).addTo(map);
marker.bindPopup("<b>O conflito entre o empreendimento imobiliário ARETÉ e a comunidade de remanescentes de quilombo de Baía Formosa</b>.").openPopup();

var marker = L.marker([-22.769395296464456, -41.91134553553569], {icon: greenIcon}).addTo(map);
marker.bindPopup("<b>Os conflitos entre pescadores e a expansão urbana no Porto da Pedra e os riscos para o mangue de pedra em Búzios</b>.").openPopup();

// Conflitos em São Pedro

var marker = L.marker([-22.860275823471152, -42.10987835106725], {icon: greenIcon}).addTo(map);
marker.bindPopup("<b>Quiosques de São Pedro: a urbanização da orla da laguna de Araruama em São Pedro pode vir a promover um processo de gentrificação</b>.").openPopup();

// Conflitos em Cabo Frio

var marker = L.marker([-22.86436041745567, -42.003151612015145], {icon: greenIcon}).addTo(map);
marker.bindPopup("<b>A instalação do empreendimento imobiliário Marina do Peró, da empresa VIVERDE em Cabo Frio. O empreendimento tem sido acusado de supressão de manguezal e vegetação</b>.").openPopup();

var marker = L.marker([-22.872930570031375, -42.03569801111262], {icon: greenIcon}).addTo(map);
marker.bindPopup("<b>A expansão do estacionamento do Shopping Park Lagos tem gerado conflitos com as comunidades do entorno</b>.").openPopup();

var marker = L.marker([-22.73966606550855, -42.0641429968583], {icon: greenIcon}).addTo(map);
marker.bindPopup("<b>A invisibilidade da comunidade dos remanescentes do Quilombo Botafogo em Cabo Frio</b>.").openPopup();

// Conflitos em Arraial do Cabo

var marker = L.marker([-22.97054597934171, -42.031247214308], {icon: greenIcon}).addTo(map);
marker.bindPopup("<b>O conflito entre turismo e pesca na Reserva Extrativista de Arraial do Cabo</b>.").openPopup();

// Conflitos em Araruama

var marker = L.marker([-22.877920210547412, -42.32451740467678], {icon: greenIcon}).addTo(map);
marker.bindPopup("<b>A urbanização da orla da laguna de Araruama em Araruama e seus impactos</b>.").openPopup();
    
var marker = L.marker([-22.88280298731239, -42.1604148444337], {icon: greenIcon}).addTo(map);
marker.bindPopup("<b>A emissão de esgoto in natura na laguna de Araruama em diversos pontos</b>.<br><a href='pages/contato.php'>Ver mais</a>").openPopup();