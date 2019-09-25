

var userLat;
var userLong;

$(document).ready(function () {
    var mymap = L.map('map')
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            var lat = position.coords.latitude;
            var long = position.coords.longitude;
            
            userLat = parseFloat(lat)
            userLong = parseFloat(long)

            console.log(lat, long);
            mymap.setView([userLat, userLong], 13);

            var marker1 = L.marker([userLat, userLong]).addTo(mymap)
                .bindPopup("<p>YOU<p>");

            marker1.on('mouseover', function (e) {
                this.openPopup();
            });
            marker1.on('mouseout', function (e) {
                this.closePopup();
            });

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
        var queryURL = corsAnywhere + `https://api.yelp.com/v3/businesses/search?latitude=${userLat}&longitude=${userLong}&categories=resturants&term=${userSearchTerm}&limit=10`

        $.ajax({
            url: queryURL, headers: {
                'Authorization': "Bearer bdZhbvY9LhTRAzcG1J4aOAoU8JZBVNmKymfTyFDj44DBUC4fUk5NHiRzkQ6Xcixiujgp0r4wREw8J4666qEw40K3PRQSPu3vQ2LU66okGVMJZ2nAAE-7yHW6du-EXXYx"
            }, method: 'GET', dataType: 'json', success: function (data) {
                console.log(data);


                for (var i = 0; i < data.businesses.length; i++) {

                    console.log(data.businesses[i].coordinates)
                    var lat = data.businesses[i].coordinates.latitude;
                    var long = data.businesses[i].coordinates.longitude;
                   var marker2 = L.marker([lat, long]).addTo(mymap)

                        .bindPopup(data.businesses[i].coordinates);

                    marker2.on('mouseover', function (e) {
                        this.openPopup();
                    });
                    // marker2.on('mouseout', function (e) {
                    //     this.closePopup();
                    // });
                }



            }
        });
    });


});
