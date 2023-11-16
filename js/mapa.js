var map = L.map('map').setView([-22.77483256773132, -42.082277725096766], 10);
    googleStreets = L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}',{
        maxZoom: 20,
        subdomains:['mt0','mt1','mt2','mt3']
}); 
googleStreets.addTo(map);

// Conflitos em Buzios
var marker = L.marker([-22.74884753005497, -41.95635818360315]).addTo(map);
marker.bindPopup("<b>O conflito entre o empreendimento imobiliário ARETÉ e a comunidade de remanescentes de quilombo de Baía Formosa</b>.").openPopup();

var marker = L.marker([-22.769395296464456, -41.91134553553569]).addTo(map);
    marker.bindPopup("<b>Os conflitos entre pescadores e a expansão urbana no Porto da Pedra e os riscos para o mangue de pedra em Búzios</b>.").openPopup();

    // Conflitos em São Pedro

    var marker = L.marker([-22.860275823471152, -42.10987835106725]).addTo(map);
    marker.bindPopup("<b>Quiosques de São Pedro: a urbanização da orla da laguna de Araruama em São Pedro pode vir a promover um processo de gentrificação</b>.").openPopup();

    // Conflitos em Cabo Frio

    var marker = L.marker([-22.86436041745567, -42.003151612015145]).addTo(map);
    marker.bindPopup("<b>A instalação do empreendimento imobiliário Marina do Peró, da empresa VIVERDE em Cabo Frio. O empreendimento tem sido acusado de supressão de manguezal e vegetação</b>.").openPopup();

    var marker = L.marker([-22.872930570031375, -42.03569801111262]).addTo(map);
    marker.bindPopup("<b>A expansão do estacionamento do Shopping Park Lagos tem gerado conflitos com as comunidades do entorno</b>.").openPopup();

    var marker = L.marker([-22.73966606550855, -42.0641429968583]).addTo(map);
    marker.bindPopup("<b>A invisibilidade da comunidade dos remanescentes do Quilombo Botafogo em Cabo Frio</b>.").openPopup();

    // Conflitos em Arraial do Cabo

    var marker = L.marker([-22.97054597934171, -42.031247214308]).addTo(map);
    marker.bindPopup("<b>O conflito entre turismo e pesca na Reserva Extrativista de Arraial do Cabo</b>.").openPopup();

    // Conflitos em Araruama

    var marker = L.marker([-22.877920210547412, -42.32451740467678]).addTo(map);
    marker.bindPopup("<b>A urbanização da orla da laguna de Araruama em Araruama e seus impactos</b>.").openPopup();
    
    var marker = L.marker([-22.88280298731239, -42.1604148444337]).addTo(map);
    marker.bindPopup("<b>A emissão de esgoto in natura na laguna de Araruama em diversos pontos</b>.<br><a href='pages/contato.php'>Ver mais</a>").openPopup();