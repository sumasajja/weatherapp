(function () {
    "use strict";

    var module = angular.module("theWeatherApp", ["ngComponentRouter"]);
	function controller($http){
	var API_KEY = "f894a7a03243b49a44109f13b3c23a86";
    var API_UNIT_TYPE = "imperial"; // otherwise change to 'imperial'.
    var API_URL = "http://api.openweathermap.org/data/2.5/weather?APPID=" + API_KEY + "&units=" + API_UNIT_TYPE;
    var type,temp,tempC=null;
	var model=this;
    var MESSAGE_LOCATION_NOT_FOUND = "Location not found. Please search for something else.";
    var MESSAGE_API_REQUEST_ERROR = "There was a problem getting weather data. Please try again.";
	

    var _waitingForData;
	//document.addEventListener("DOMContentLoaded", init);
	 // $scope.$on('$viewContentLoaded', init);
    init();
    function init ()
    {
        _waitingForData = false;

        // Get the geolocation position of the current user (if they allow this).
        navigator.geolocation.getCurrentPosition(geolocationSuccessHandler, geolocationErrorHandler);
    }
	
	    function geolocationSuccessHandler (position)
    {
        // Get lat and lon values from the position object.
        var lat = position.coords.latitude;
        var lon = position.coords.longitude;

        // Load weather data using the lat and lon values, now that we have the user's position.
        getWeatherDataFromCoords(lat, lon);
    }

	
	    function getWeatherDataFromCoords (lat, lon)
    {
        // Don't do anything if we are waiting on the response of a previous API request.
        if (_waitingForData)
        {
            return false;
        }

        // Disable API requests until we receive a response.
        _waitingForData = true;

        console.log("getting weather data...", lat, lon);

        // Build a request URL based on the current lat and lon values.
        var requestURL = API_URL + "&lat=" + lat + "&lon=" + lon;

        // Make an AJAX request to the API.
        $http.get(requestURL)
            .success(apiRequestSuccess)
            .error(apiRequestError);
    }
    function geolocationErrorHandler (error)
    {
        // The user has disallowed sharing their geolocation, or there was a general error obtaining the info.
        // Even still, they will still be able to search for weather information.
        console.log("geolocationErrorHandler");
    }
	
	 function apiRequestSuccess (data, xhr)
    {
        console.log("weather data received.", data);

        _waitingForData = false;
     
        if (typeof data.cod !== "undefined" && data.cod === "404")
        {
            alert(MESSAGE_LOCATION_NOT_FOUND);
            return;
        }

        var locationName = data.name;
        var countryCode = data.sys.country;
 
        $('#current-city').text(locationName + ', ' + countryCode);
        // Don't display anything if there is no name and country code.
        if (locationName === "" && countryCode === "")
        {
            alert(MESSAGE_LOCATION_NOT_FOUND);
            return;
        }
        type = data.weather[0].main; //Types tracked: Clouds, Clear, Mist, Haze, Rain 
  		temp = data.main.temp.toFixed(0);
  		tempC = ((temp - 32) * (5 / 9)).toFixed(0);
    	$('#current-temp').html(tempC + "&deg;C" +" / "+ temp + "&deg;F");
    	pick(type);
     
    };	
	
	  function apiRequestError (data, xhr)
    {
        alert(MESSAGE_API_REQUEST_ERROR);

        // Reenable data lookups so that we can retry requesting weather data.
        _waitingForData = false;
    };
	
//chooses background picture according to weather
function pick(type) {
	if (type == "Rain") {
		$(".about-container").css("background-image", "url(" + Rain[Math.floor(Math.random() * Rain.length)] + ")");
	}
	else if (type == "Clouds") {
		$(".about-container").css("background-image", "url(" + Clouds[Math.floor(Math.random() * Clouds.length)] + ")");
	}
	else if (type == "Mist") {
		$(".about-container").css("background-image", "url(" + Mist[Math.floor(Math.random() * Mist.length)] + ")");
	}
	else if (type == "Haze") {
		$(".about-container").css("background-image", "url(" + Haze[Math.floor(Math.random() * Haze.length)] + ")");
	}
	else if (type == "Clear") {
		$(".about-container").css("background-image", "url(" + Clear[Math.floor(Math.random() * Clear.length)] + ")");
	}
	else {
		$(".about-container").css("background-image", "url(" + None[Math.floor(Math.random() * None.length)] + ")");
	}

};

var Rain = [
	'https://static.pexels.com/photos/39811/pexels-photo-39811-large.jpeg',
	'http://666a658c624a3c03a6b2-25cda059d975d2f318c03e90bcf17c40.r92.cf1.rackcdn.com/unsplash_523bf67db73f1_1.JPG',
	'http://666a658c624a3c03a6b2-25cda059d975d2f318c03e90bcf17c40.r92.cf1.rackcdn.com/unsplash_522e11654ebff_1.jpg',
	'http://666a658c624a3c03a6b2-25cda059d975d2f318c03e90bcf17c40.r92.cf1.rackcdn.com/unsplash_524000a90aaad_1.JPG',
	'https://images.unsplash.com/photo-1422022098106-b3a9edc463af?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&s=637a27938a96b8cc8c0991317519f2d3',
	'https://static.pexels.com/photos/68084/pexels-photo-68084-large.jpeg',
];

var Clouds = [
	'https://static.pexels.com/photos/55787/pexels-photo-55787-large.jpeg',
	'https://static.pexels.com/photos/1780/landscape-nature-clouds-cloudy-large.jpg',
	'https://static.pexels.com/photos/6675/flight-mountains-sky-flying-large.jpeg',
	'https://static.pexels.com/photos/113/sky-clouds-cloudy-weather-large.jpg',
	'https://static.pexels.com/photos/27403/pexels-photo-27403-large.jpg',
];

var Mist = [
	'https://static.pexels.com/photos/48694/pexels-photo-48694-large.jpeg',
	'https://static.pexels.com/photos/7919/pexels-photo-large.jpg',
	'https://static.pexels.com/photos/4164/landscape-mountains-nature-mountain-large.jpeg',
	'https://static.pexels.com/photos/5049/forest-trees-fog-foggy-large.jpg',
	'https://static.pexels.com/photos/96921/pexels-photo-96921-large.jpeg',
];
var Clear = [
	'https://static.pexels.com/photos/57560/pexels-photo-57560-large.jpeg',
	'https://static.pexels.com/photos/27662/pexels-photo-27662-large.jpg',
	'https://static.pexels.com/photos/1852/dawn-landscape-mountains-nature-large.jpg',
	'https://static.pexels.com/photos/96414/pexels-photo-96414-large.jpeg',
	'https://static.pexels.com/photos/1564/dawn-nature-sunset-dust-large.jpg',
];
var Haze = [
	'https://static.pexels.com/photos/4138/landscape-mountains-nature-fog-large.jpeg',
	'https://static.pexels.com/photos/2956/sky-clouds-cloudy-mountain-large.jpg',
	'https://static.pexels.com/photos/4241/cold-snow-black-and-white-road-large.jpg',
	'https://static.pexels.com/photos/6992/forest-trees-northwestisbest-exploress-large.jpg',
	'https://static.pexels.com/photos/2759/clouds-cloudy-forest-trees-large.jpg',
];
var None = [
	'https://images.unsplash.com/photo-1448546120959-a4b0e3dd910d',
	'https://images.unsplash.com/photo-1443916765281-9937110585db',
	'https://images.unsplash.com/photo-1446071103084-c257b5f70672',
	'https://images.unsplash.com/photo-1446080501695-8e929f879f2b',
	'https://images.unsplash.com/photo-1427466920301-a96b3cadc6c8',
];
		
		
		
		
	}
	
	
    module.value("$routerRootComponent", "weatherApp");
     module.component("appAbout",{
		templateUrl: "/weather-app/app-about.component.html",
		controllerAs: "model",
        controller: ["$http", controller]
		
	});
}());