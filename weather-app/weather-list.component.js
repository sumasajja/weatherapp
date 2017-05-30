(function () {
    "use strict";

    var module = angular.module("theWeatherApp");
  //get the weather data
    function fetchWeather($http) {
        return $http.get("/weather.json")
            .then(function (response) {
                return response.data;
            });
    }

    function controller($http) {
        var model = this;
		
        model.weatherData = [];

        model.$onInit = function () {
            fetchWeather($http).then(function (weatherData) {
                model.weatherData = weatherData;
            });
        };

        model.goTo = function (title) {
            model.$router.navigate(["Details", { title: title }, "Overview"]);
        };

 
    }

    module.component("weatherList", {
        templateUrl: "/weather-app/weather-list.component.html",
        controllerAs: "model",
        controller: ["$http", controller],
        bindings: {
            "$router": "<"
        }
    });
}());