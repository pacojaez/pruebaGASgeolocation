function getLocation() {
    // console.log('nlocation' + navigator.geolocation.getCurrentPosition())
    // const x = document.getElementById("output");

    // if (navigator.geolocation) {
    //   navigator.geolocation.getCurrentPosition(showPosition);
    //   console.log('nlocation' + navigator.geolocation.getCurrentPosition(showPosition))
    // } else {
    //   x.innerHTML = "Geolocation is not supported by this browser.";
    // }

    // const successCallback = (position) => {
    // Logger.log(position);
    // };

    // const errorCallback = (error) => {
    //   Logger.log(error);
    // };

    // navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
    Logger.log('getLocation')
}

// show the geolocation
function showPosition(position) {
    x.innerHTML = "Latitude: " + position.coords.latitude +
        "<br>Longitude: " + position.coords.longitude;
}