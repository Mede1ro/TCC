const map = L.map('map').setView([-22.7817497, -42.2717348], 10);

const tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

const marker = L.marker([-22.7817497, -42.2717348]).addTo(map)
	.bindPopup('<b>Hello world!</b><br />I am a popup.').openPopup();
