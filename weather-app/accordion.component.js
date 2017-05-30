(function () {
    "use strict";

    var module = angular.module("theWeatherApp");
//the component for accordian
    module.component("accordion", {
        transclude: true,
        template: "<div class='panel-group' ng-transclude></div>",
        controller: function () {
            var model = this;
            var panels = [];
// adding selectPanel to the accordian
            model.selectPanel = function (panel) {
                for (var p in panels) {
                    if (panel === panels[p]) {
                        panels[p].turnOn();
                    } else {
                        panels[p].turnOff();
                    }
                }
            };
// addPanel to the accordian
            model.addPanel = function (panel) {
                panels.push(panel);
                if (panels.length > 0) {
                    panels[0].turnOn();
                }
            };
        }
    });

    module.component("accordionPanel", {
		
		//scope
        bindings: {
            "heading": "@"
        },
        require: {
            "parent": "^accordion"
        },
        controllerAs: "model",
        controller: function() {
            var model = this;
            model.selected = false;

            model.$onInit = function() {
                model.parent.addPanel(model);
            };

            model.turnOn = function() {
                model.selected = true;
            };

            model.turnOff = function() {
                model.selected = false;
            };

            model.select = function() {
                model.parent.selectPanel(model);
            };
        },
        transclude: true,
        template: "<div class='panel panel-default'>" + 
                      "<div class='panel-heading' ng-click='model.select()'>" +
                        "<h4 class='panel-title'>{{model.heading}}</h4>" +
                      "</div>" +
                      "<div ng-if='model.selected' class='panel-body' ng-transclude>" +
                      "</div>" +
                  "</div>"
    });
}());