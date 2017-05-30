(function () {
    "use strict";

    var module = angular.module("theWeatherApp");

    function controller() {
        var model = this;
    }

    module.component("weatherApp", {
        templateUrl: "/weather-app/weather-app.component.html",
        $routeConfig: [
            { path: "/list", component: "weatherList", name: "List" },
            { path: "/about", component: "appAbout", name: "About" },
            { path: "/detail/:title/...", component: "weatherDetails", name: "Details" },
            { path: "/**", redirectTo: ["About"] }
        ],
        controllerAs: "model",
        controller: controller
    });
}());