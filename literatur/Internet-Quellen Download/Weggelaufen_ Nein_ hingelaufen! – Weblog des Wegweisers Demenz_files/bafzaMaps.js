/**
 * Created by plipps on 10.09.2015.
 */
function getMarkerWithCoords(map, bounds, json){
    var image = '/typo3conf/ext/bafza_institutionen/Resources/Public/Icons/home_32.png';
    var marker = null;
    marker = new google.maps.Marker({
        position: new google.maps.LatLng(parseFloat(json.lat), parseFloat(json.lng)),
        map: map,
        title: json.name,
        icon: image,
        animation: google.maps.Animation.DROP
    });
    var infowindow = new google.maps.InfoWindow({
        content: json.name+
        '<br>'+json.morelink
    });
    google.maps.event.addListener(marker, 'click', function() {
        infowindow.open(map, marker);
    });
    map.fitBounds(bounds);
    //markers.push(marker);
    bounds.extend(marker.position);

    return marker;
}

function getMarkerAndCoords(map, bounds, json, markers ){
    var image = '/typo3conf/ext/bafza_institutionen/Resources/Public/Icons/home_32.png';

    var address = json.address+ ','+json.zip+' '+json.city;

    var marker = null;
    var geocoder = new google.maps.Geocoder();
    address += " germany";
    geocoder.geocode( { 'address': address}, function(results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
            cordsString = results[0].geometry.location.toString();
            cordsString = cordsString.slice(1, cordsString.length-1);
            cords = cordsString.split(',');
            lat =  cords[0];
            lng = cords[1];

            /**
             * Write new coords
             */
            if(json.ajaxUrl) {
                $.ajax({
                    type: "POST",
                    url: json.ajaxUrl,
                    data: {
                        eID: "ajaxDispatcher",
                        request: {
                            pluginName:  'patsystem',
                            controller:  'Institution',
                            action:      'ajaxSetLatLng',
                            arguments: {
                                'id': json.uid,
                                'lat': lat,
                                'lng': lng,
                            }
                        }
                    }
                }).done(function (msg) {

                });
            }

            marker = new google.maps.Marker({
                position: new google.maps.LatLng(parseFloat(lat), parseFloat(lng)),
                map: map,
                title: json.name,
                icon: image,
                animation: google.maps.Animation.DROP
            });

            var infowindow = new google.maps.InfoWindow({
                content: json.name +
                '<br>' + json.morelink

            });
            google.maps.event.addListener(marker, 'click', function () {
                infowindow.open(map, marker);

            });
            bounds.extend(marker.position);
            map.fitBounds(bounds);
            markers.push(marker);
            return marker;
        }

    });

}