

var userLat;
var userLong;
var output = "";
$(document).ready(function () {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            var lat = position.coords.latitude;
            var long = position.coords.longitude;

            userLat = parseFloat(lat)
            userLong = parseFloat(long)



            var mymap = L.map('map').setView([userLat, userLong], 13);

            L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
                attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
                maxZoom: 18,
                id: 'mapbox.streets',
                accessToken: 'pk.eyJ1Ijoib2JqZWN0aXZlc2t1bmthbWJhc3NhZG9yIiwiYSI6ImNrMHNrZjg3czAzbWMzbXFzZWltZ2lkeTQifQ.bmyNVE-XAhU1uRbza64fMw'
            }).addTo(mymap);
        })
    }

    $("#search-button").on('click', function () {

        var userSearchTerm = $('#userInputField').val().trim();
        // console.log(userSearchTerm);

        var corsAnywhere = "https://cors-anywhere.herokuapp.com/";
        var queryURL = corsAnywhere + `https://api.yelp.com/v3/businesses/search?latitude=${userLat}&longitude=${userLong}&categories=resturants&term=${userSearchTerm}`

        $.ajax({
            url: queryURL, headers: {
                'Authorization': "Bearer bdZhbvY9LhTRAzcG1J4aOAoU8JZBVNmKymfTyFDj44DBUC4fUk5NHiRzkQ6Xcixiujgp0r4wREw8J4666qEw40K3PRQSPu3vQ2LU66okGVMJZ2nAAE-7yHW6du-EXXYx"
            }, method: 'GET', dataType: 'json', success: function (data) {
                console.log(data);

                var search = [];
                for (var i = 0; i < data.businesses.length; i++) {
                    search[i] = {};
                    search[i].alias = '';
                    console.log(data.businesses[i].name);
                    incoming = data.businesses[i];
                    output = search[i];

                    if (incoming.name) { output.name = incoming.name; }
                    if (incoming.coordinates) {
                        if (incoming.coordinates.longitude) { output.longitude = incoming.coordinates.longitude; }
                        if (incoming.coordinates.latitude) { output.latitude = incoming.coordinates.latitude; }
                    }





                }
                console.log("search = ", search)



                for (var p = 0; p < search.length; p++) {

                    document.getElementById('plswork').innerHTML += "Name:" + search[p].name + " Lat:" + search[p].latitude + "  Long: " + search[p].longitude + "<br>";

                }


            }
        });


    });

    var mymap = L.map('map').setView([userLat, userLong], 13);
    console.log(mymap)
    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox.streets',
        accessToken: 'pk.eyJ1Ijoib2JqZWN0aXZlc2t1bmthbWJhc3NhZG9yIiwiYSI6ImNrMHNrZjg3czAzbWMzbXFzZWltZ2lkeTQifQ.bmyNVE-XAhU1uRbza64fMw'
    }).addTo(mymap);

});
