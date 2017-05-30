(function(){
"use strict";

var module = angular.module("theWeatherApp");
module.filter('decodeURIComponent', function() {
    return window.decodeURIComponent;
});


})();