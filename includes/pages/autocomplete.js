// This sample uses the Autocomplete widget to help the user select a
// place, then it retrieves the address components associated with that
// place, and then it populates the form fields with those details.
// This sample requires the Places library. Include the libraries=places
// parameter when you first load the API. For example:
// <script
// src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places">

var placeSearch, autocomplete, autocomplete2;

var componentForm = {
    /* street_number: 'short_name',
    route: 'long_name', */
    locality: 'long_name',
    /* administrative_area_level_1: 'short_name',
    country: 'long_name', */
    postal_code: 'short_name'
};

var componentForm2 = {
    /*  street_number_2: 'short_name',
     route_2: 'long_name', */
    locality_2: 'long_name',
    /* administrative_area_level_1_2: 'short_name',
    country_2: 'long_name', */
    postal_code_2: 'short_name'
};

var countryRestrict = {
    'country': 'fr'
};

var frBounds = {
    'fr': {
        center: {
            lat: 46.2,
            lng: 2.2
        },
        zoom: 5
    }
};


function initAutocomplete() {
    // Create the autocomplete object, restricting the search predictions to
    // geographical location types.
    autocomplete = new google.maps.places.Autocomplete(
        document.getElementById('autocomplete'), {
            types: ['geocode'],
            componentRestrictions: countryRestrict
        });

    autocomplete2 = new google.maps.places.Autocomplete(
        document.getElementById('autocomplete2'), {
            types: ['geocode'],
            componentRestrictions: countryRestrict
        });
    // Avoid paying for data that you don't need by restricting the set of
    // place fields that are returned to just the address components.
    autocomplete.setFields('address_components');
    autocomplete2.setFields('address_components');
    // When the user selects an address from the drop-down, populate the
    // address fields in the form.
    autocomplete.addListener('place_changed', fillInAddress);
    autocomplete2.addListener('place_changed', fillInAddress2);
}

function fillInAddress() {
    // Get the place details from the autocomplete object.
    var place = autocomplete.getPlace();
    for (var component in componentForm) {
        document.getElementById(component).value = '';
        document.getElementById(component).disabled = false;
    }

    // Get each component of the address from the place details,
    // and then fill-in the corresponding field on the form.
    for (var i = 0; i < place.address_components.length; i++) {
        var addressType = place.address_components[i].types[0];
        if (componentForm[addressType]) {
            var val = place.address_components[i][componentForm[addressType]];
            document.getElementById(addressType).value = val;
        }
    }
}

function fillInAddress2() {
    // Get the place details from the autocomplete object.
    var place2 = autocomplete2.getPlace();
    for (var component in componentForm2) {
        document.getElementById(component).value = '';
        document.getElementById(component).disabled = false;
    }

    // Get each component of the address from the place details,
    // and then fill-in the corresponding field on the form.

    for (var i = 0; i < place2.address_components.length; i++) {
        var addressType2 = place2.address_components[i].types[0];
        var addressTypeTemp = addressType2.concat("_2");
        if (componentForm2[addressTypeTemp]) {
            var val = place2.address_components[i][componentForm2[addressTypeTemp]];
            document.getElementById(addressTypeTemp).value = val;
        }
    }
}


// Bias the autocomplete object to the user's geographical location,
// as supplied by the browser's 'navigator.geolocation' object.
function geolocate() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            var geolocation = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };
            var circle = new google.maps.Circle({
                center: geolocation,
                radius: position.coords.accuracy
            });
            autocomplete.setBounds(circle.getBounds());
        });
    }
}


// calculate distance
function calculateDistance() {
    var origin = $('#autocomplete').val();
    var destination = $('#autocomplete2').val();
    var service = new google.maps.DistanceMatrixService();
    service.getDistanceMatrix({
        origins: [origin],
        destinations: [destination],
        travelMode: google.maps.TravelMode.DRIVING,
        unitSystem: google.maps.UnitSystem.metric, // kilometers and meters.
    }, callback);
}
// get distance results
function callback(response, status) {
    if (status != google.maps.DistanceMatrixStatus.OK) {
        $('#result').html(err);
    } else {
        var origin = response.originAddresses[0];
        var destination = response.destinationAddresses[0];
        if (response.rows[0].elements[0].status === "ZERO_RESULTS") {
            $('#result').html("Better get on a plane. There are no roads between " + origin + " and " + destination);
        } else {
            var distance = response.rows[0].elements[0].distance;
            if (distance) {
                var distance_in_kilo = distance.value / 1000; // the kilom
                console.log(distance, distance_in_kilo);
                // $('#in_kilo').text(distance_in_kilo.toFixed(2));
                // $('#from').text(origin);
                // $('#to').text(destination);
                if (distance_in_kilo >= 30) {
                    /* Cart.addItem({
                        id: "adressesDem",
                        quantity: -1,
                    }); */
                    Cart.addItem({
                        id: "adressesDem",
                        quantity: -Infinity,
                    });
                    Cart.addItem({
                        id: "adressesDem",
                        price: distance_in_kilo,
                        label: "Nb de Kilomètres",
                        quantity: distance_in_kilo,
                        departure: $('#autocomplete').val(),
                        arrival: $('#autocomplete2').val(),
                    });
                } else {
                    /* Cart.addItem({
                        id: "adressesDem",
                        quantity: -1,
                    }); */
                    Cart.addItem({
                        id: "adressesDem",
                        quantity: -Infinity,
                    });
                    Cart.addItem({
                        id: "adressesDem",
                        price: distance_in_kilo,
                        label: "Nb de Kilomètres",
                        quantity: distance_in_kilo,
                        departure: $('#autocomplete').val(),
                        arrival: $('#autocomplete2').val(),
                    });
                }
            }
        }
    }
}
// print results on submit the form
$('#autocomplete2').on('blur', function (e) {
    e.preventDefault();
    calculateDistance();
});