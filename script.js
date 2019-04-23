function initMap() {
	var dom = {lat: 41.85054, lng: -87.80291};
	var map = new google.maps.Map(document.getElementById('map'), {center: dom, zoom: 14});

	var uluru = {lat: 41.85054, lng: -87.80291};
	var marker = new google.maps.Marker({position: uluru, map: map});
}