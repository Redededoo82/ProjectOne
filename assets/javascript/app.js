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

$('#search-button').on('click', function () {
    // console.log("click");
    var x = $(this).data("search");
    // console.log(x);
    // console.dir(this);\
    var corsAnywhere = "https://cors-anywhere.herokuapp.com/";
    var queryURL = corsAnywhere + "https://api.yelp.com/v3/businesses/search?q=" + x + "&api_key='bdZhbvY9LhTRAzcG1J4aOAoU8JZBVNmKymfTyFDj44DBUC4fUk5NHiRzkQ6Xcixiujgp0r4wREw8J4666qEw40K3PRQSPu3vQ2LU66okGVMJZ2nAAE-7yHW6du-EXXYx'"

    // console.log(queryURL);

    $.ajax({ url: queryURL, method: 'GET' })
        .then(function (response) {
            console.log(response);
            // for (var i = 0; i < response.data.length; i++) {



            // }

        })
})