// This sample uses the Autocomplete widget to help the user select a
// place, then it retrieves the address components associated with that
// place, and then it populates the form fields with those details.
// This sample requires the Places library. Include the libraries=places
// parameter when you first load the API. For example:
// <script
// src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places">

var placeSearch, autocomplete, autocomplete2;

var componentForm = {
    /* street_number: 'short_name', */
    /* route: 'long_name', */
    locality: 'short_name',
    /* administrative_area_level_1: 'short_name', */
    /* country: 'long_name', */
    postal_code: 'short_name'
};

var componentForm2 = {
    /* street_number: 'short_name', */
    /* route: 'long_name', */
    locality1: 'short_name',
    /* administrative_area_level_1: 'short_name', */
    /* country: 'long_name', */
    postal_code1: 'short_name'
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
    /* autocomplete.setFields('address_components');
    autocomplete2.setFields('address_components'); */

    // When the user selects an address from the drop-down, populate the
    // address fields in the form.
    autocomplete.addListener('place_changed', fillInAddress);
    autocomplete2.addListener('place_changed', fillInAddress2);
}

function fillInAddress() {
    // Get the place details from the autocomplete object.
    var place = autocomplete.getPlace();

    for (var component in componentForm) {
        console.log(component);
        document.getElementById(component).value = '';
        document.getElementById(component).disabled = false;
    }

    // Get each component of the address from the place details,
    // and then fill-in the corresponding field on the form.
    for (var i = 0; i < place.address_components.length; i++) {
        var addressType = place.address_components[i].types[0];
        console.log(addressType);
        if (componentForm[addressType]) {
            var val = place.address_components[i][componentForm[addressType]];
            console.log(val);
            document.getElementById(addressType).value = val;
        }
    }
}

function fillInAddress2() {
    // Get the place details from the autocomplete object.
    var place2 = autocomplete2.getPlace();

    for (var component in componentForm2) {
        console.log(component);
        document.getElementById(component).value = '';
        document.getElementById(component).disabled = false;
    }

    // Get each component of the address from the place details,
    // and then fill-in the corresponding field on the form.
    for (var i = 0; i < place2.address_components.length; i++) {
        var addressType = place2.address_components[i].types[0];
        console.log(addressType);
        if (componentForm2[addressType]) {
            var val = place2.address_components[i][componentForm2[addressType]];
            console.log(val);
            document.getElementById(addressType).value = val;
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

function gm_authFailure() {

    $('.gm-err-autocomplete').addClass('is-invalid');

    swal("Error", "There is a problem with the Google Maps or Places API", "error");

}