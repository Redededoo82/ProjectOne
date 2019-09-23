$(document).ready(function () {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            lat = position.coords.latitude;
            long = position.coords.longitude;

            console.log(lat)
            console.log(long)

        })
    }
})

$("#search-button").on('click', function () {
    // console.log("click");
    var x = $(".form-control").val();
    // console.log(x);
    // console.dir(this);
    var corsAnywhere = "https://cors-anywhere.herokuapp.com/";
    var queryURL = corsAnywhere + "https://api.yelp.com/v3/businesses/search?location=Austin,tx&q=" + x

    // console.log(queryURL);

    $.ajax({
        url: queryURL, headers: {
            'Authorization': "Bearer bdZhbvY9LhTRAzcG1J4aOAoU8JZBVNmKymfTyFDj44DBUC4fUk5NHiRzkQ6Xcixiujgp0r4wREw8J4666qEw40K3PRQSPu3vQ2LU66okGVMJZ2nAAE-7yHW6du-EXXYx"
        }, method: 'GET', dataType: 'json', success: function (data) {

            console.log(data);
        }
    });

});



//     $('#search-button').on('click', function(){

//     var x = $('.form-control').val();
    
    
//     var mymap = L.map('#mapId').setView([51.505, -0.09], 13);
    
    
//     L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
// 	attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
// 	maxZoom: 18,
// 	id: 'mapbox.streets',
// 	accessToken: 'pk.eyJ1Ijoib2JqZWN0aXZlc2t1bmthbWJhc3NhZG9yIiwiYSI6ImNrMHNrZjg3czAzbWMzbXFzZWltZ2lkeTQifQ.bmyNVE-XAhU1uRbza64fMw'
// }).addTo(mymap); 

// });