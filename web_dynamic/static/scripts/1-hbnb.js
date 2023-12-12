// static/scripts/1-hbnb.js

$(document).ready(function() {
    let amenityIds = [];

    $('input[type="checkbox"]').change(function() {
        const amenityId = $(this).data('id');
        const amenityName = $(this).data('name');

        if ($(this).is(':checked')) {
            amenityIds.push(amenityId);
        } else {
            amenityIds = amenityIds.filter(id => id !== amenityId);
        }

        const amenitiesText = amenityIds.map(id => $(`input[data-id="${id}"]`).data('name')).join(', ');

        $('div.Amenities h4').text(amenitiesText);
    });
});
