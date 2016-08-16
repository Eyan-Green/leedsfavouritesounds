// Google Map Maker script v.4
// (c) 2014 Richard Stephenson
// http://mapmaker.donkeymagic.co.uk
var map
    openInfowindow = null
    newPoints = [];

function initialize () {
    var mapOptions = {
        center: new google.maps.LatLng(53.80054787396384, -1.5474575661621426),
        zoom: 14,
        mapTypeId: google.maps.MapTypeId.HYBRID,
        streetViewControl: false
    };
    map = new google.maps.Map(document.getElementById('map_canvas'), mapOptions);
    addPoints();
}

function addPoints () {
    newPoints[0] = [53.794247, -1.547012, 'Leeds Railway St. Pl. 15', '<iframe width="200%" height="100" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/184885997&amp;amp;auto_play=false&amp;amp;hide_related=false&amp;amp;show_comments=false&amp;amp;show_user=false&amp;amp;show_reposts=false&amp;amp;visual=true"></iframe>'];
    newPoints[1] = [53.801511, -1.544196, 'Emmet Machines Merrion C', '<iframe width="200%" height="100" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/180872713&amp;amp;auto_play=false&amp;amp;hide_related=false&amp;amp;show_comments=false&amp;amp;show_user=false&amp;amp;show_reposts=false&amp;amp;visual=true"></iframe>'];
    newPoints[2] = [53.798487, -1.541967, 'Briggate on a Saturday', '<iframe width="200%" height="100" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/180864190&amp;amp;auto_play=false&amp;amp;hide_related=false&amp;amp;show_comments=false&amp;amp;show_user=false&amp;amp;show_reposts=false&amp;amp;visual=true"></iframe>'];
    newPoints[3] = [53.799686, -1.548193, 'Tour de France Depart 14', '<iframe width="200%" height="100" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/157416875&amp;amp;auto_play=false&amp;amp;hide_related=false&amp;amp;show_comments=false&amp;amp;show_user=false&amp;amp;show_reposts=false&amp;amp;visual=true"></iframe>'];
    newPoints[4] = [53.799642, -1.548278, "Leeds Half Marathon '14", '<iframe width="200%" height="100" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/148984319&amp;auto_play=false&amp;hide_related=false&amp;show_comments=false&amp;show_user=false&amp;show_reposts=false&amp;visual=true"></iframe>'];
    newPoints[5] = [53.833485, -1.576994, "Duck Pond Meanwood Park", '<iframe width="200%" height="100" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/167265003&amp;auto_play=false&amp;hide_related=false&amp;show_comments=false&amp;show_user=false&amp;show_reposts=false&amp;visual=true"></iframe>'];
    newPoints[6] = [53.795854, -1.541339, "Duncan Pub Friday 6AM", '<iframe width="200%" height="100" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/146490949&amp;auto_play=false&amp;hide_related=false&amp;show_comments=false&amp;show_user=false&amp;show_reposts=false&amp;visual=true"></iframe>'];
    newPoints[7] = [53.795280, -1.536117, "Leeds Minster Bells Thur", '<iframe width="200%" height="100" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/146322892&amp;auto_play=false&amp;hide_related=false&amp;show_comments=false&amp;show_user=false&amp;show_reposts=false&amp;visual=true"></iframe>'];
    
    for (var i = 0; i < newPoints.length; i++) {
        var position = new google.maps.LatLng(newPoints[i][0], newPoints[i][1]);
        var marker = new google.maps.Marker({
            position: position,
            map: map
        });
        createMarker(marker, i);
    }
}

function createMarker (marker, i) {
    var infowindow = new google.maps.InfoWindow({
        content: '<div class="popup">' + newPoints[i][3] + '</div>',
        maxWidth: 250,
    });
    google.maps.event.addListener(marker, 'click', function () {
        if (openInfowindow) {
            openInfowindow.close();
        }
        infowindow.open(marker.getMap('map_canvas'), marker);
        openInfowindow = infowindow;
    });
}

google.maps.event.addDomListener(window, 'load', initialize);