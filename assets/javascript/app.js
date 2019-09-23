
// api key
// 8_2GSFh1ezEuqJJlJHMaBpxjySNajrwGbrQqaqpF5KVrlCtEUBSkLGLTxyu5RLjG58Fys92hdUhikOOy_kYjZS_psF3IgPt3dONxaTxtPdxismb7vy2tSEODEDSJXXYx


// client_id
// aK54LplnvKvKYOhqEYkQIg


// var queryURL = 'https://api.yelp.com/v3/businesses/search?accessToken=bdZhbvY9LhTRAzcG1J4aOAoU8JZBVNmKymfTyFDj44DBUC4fUk5NHiRzkQ6Xcixiujgp0r4wREw8J4666qEw40K3PRQSPu3vQ2LU66okGVMJZ2nAAE-7yHW6du-EXXYx&term=food'


//     getResults =() =>{       $.ajax({
//     url: queryURL,
//     headers: {
//         'Authorization': "Bearer bdZhbvY9LhTRAzcG1J4aOAoU8JZBVNmKymfTyFDj44DBUC4fUk5NHiRzkQ6Xcixiujgp0r4wREw8J4666qEw40K3PRQSPu3vQ2LU66okGVMJZ2nAAE-7yHW6du-EXXYx"},
//     method: "GET"
//   })
//     // After data comes back from the request
//     .then(function(response) {
//       console.log(queryURL);
//     })
// }

// getResults();
var userLat;
var userLong;


$(document).ready(function () {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            var lat = position.coords.latitude;
            var long = position.coords.longitude;
            console.log(lat)
            console.log(long)

            userLat = parseFloat(  lat) 
            userLong = parseFloat(long)
        })
    }
 })


 $("#search-button").on('click', function () {
    // console.log("click");
    // var x = $(".form-control").val();
    // console.log(x)
    // $('#userInputField').on('click', function(){

    // })
    var userSearchTerm = $('#userInputField').val().trim();
    console.log(userSearchTerm);

    // console.log(x);
    // console.dir(this);
    var corsAnywhere = "https://cors-anywhere.herokuapp.com/";
    var queryURL = corsAnywhere + `https://api.yelp.com/v3/businesses/search?latitude=${userLat}&longitude=${userLong}&categories=resturants&term=${userSearchTerm}`


    // if jk broke anything use below url
    // `https://api.yelp.com/v3/businesses/search?location=asbury?park,nj&categories=resturants&term=bar`


    // var queryURL2 = corsAnywhere + ""
    // console.log(queryURL);
    $.ajax({
        url: queryURL, headers: {
            'Authorization': "Bearer bdZhbvY9LhTRAzcG1J4aOAoU8JZBVNmKymfTyFDj44DBUC4fUk5NHiRzkQ6Xcixiujgp0r4wREw8J4666qEw40K3PRQSPu3vQ2LU66okGVMJZ2nAAE-7yHW6du-EXXYx"
        }, method: 'GET', dataType: 'json', success: function (data) {
            console.log(data);
        }
    });
 });
 var mymap = L.map('map').setView([lat, long], 13);
 console.log(mymap)
 L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
     attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
     maxZoom: 18,
     id: 'mapbox.streets',
     accessToken: 'pk.eyJ1Ijoib2JqZWN0aXZlc2t1bmthbWJhc3NhZG9yIiwiYSI6ImNrMHNrZjg3czAzbWMzbXFzZWltZ2lkeTQifQ.bmyNVE-XAhU1uRbza64fMw'
 }).addTo(mymap);