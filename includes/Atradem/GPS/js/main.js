
function createMap () {
    var options = {
        center: { lat: 48.8534, lng: 2.3488 },
        zoom: 11
    };

    var map = new google.maps.Map(document.getElementById('carte'), options);

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition( p => {
            var position = {
                lat: p.coords.latitude,
                lng: p.coords.longitude
            };

            var marker = new google.maps.Marker({
                position: position,
                map: map,
                title: 'Vous êtes ici !'
            });
            marker.addListener('click',  () => {
                alert('Vous êtes ici !');
            });
            
        }, function () {
            handleLocationError('Geolocation service failed', map.getCenter());
        });
    } else {
        handleLocationError('No geolocation available.', map.getCenter());
    }
}

/*
var marker = new google.maps.Marker({
          position: uluru,
          map: map,
          title: 'Uluru (Ayers Rock)'
        });
        marker.addListener('click', function() {
          infowindow.open(map, marker);
        });
        */



function handleLocationError (content, position) {
    infoWindow.setPosition(position);
    infoWindow.setContent(content);
    infoWindow.open(map);
}