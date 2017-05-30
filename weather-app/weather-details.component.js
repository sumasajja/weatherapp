(function () {
    "use strict";

    var module = angular.module("theWeatherApp");

    function controller() {
        var model = this;

        model.$routerOnActivate = function (next) {
            model.title = next.params.title;
        };
    }

    module.component("weatherDetails", {
        templateUrl: "/weather-app/weather-details.component.html",
        $routeConfig: [
            { path: "/overview", component: "overview", name: "Overview" },
            { path: "/downloads", component: "downloads", name: "Downloads" },
            { path: "/marketValue", component: "marketValue", name: "MarketValue" }
        ],
        controllerAs: "model",
        controller: controller
    });

    module.component("overview", {
        template: "Available for $1.49 on the Play Store, Weather Timeline could be the best money you ever spend. It brings genuinely useful and interesting features together into a wonderful interface and library of widgets.The app gets its name from its primary function, which is a card-based timeline of the weather, but there's a lot more on offer. You can select from five different weather services, and there are notifications that warn you of impending weather changes. Then there's the moon viewer, so you always know the werewolf forecast, and several radar maps, letting you see visualizations of the cloud and rain to come. On top of all that, there are also several interactive graphs showing data on things like temperature, precipitation and pressure. The depth of data and an elegant and simple interface makes this app one of our top choices.",
    });

    module.component("downloads", {
        template: "YoWindow when you first load it, and it truthfully lives up to this promise: it's a great looking Android weather app. Instead of using simple icons to represent clouds, sunshine and rain, YoWindow displays a cartoon landscape which reflects the real-time weather in your current location.The light level and conditions are accurately represented in the app and you can scroll through the hours as if scrolling through an online video to see changes over time. It’s a unique and well-realized weather app, which not only looks good, but is also incredibly easy to use.",
    });

    module.component("marketValue", {
        template: "Dark Sky is a somewhat controversial app to include in the list, but it's long been a favorite with many users. Its strength lies in the granularity of its minute-by-minute predictions that give you useful information in a simple way, like saying it'll rain in 13 minutes, rather than giving a vague indication of the chance of rain. However, the main downside is that if you want to use its most useful features you'll need to pay - and if you don't, well, there are better free weather apps available you can consider. One of the major drawbacks of the free version of Dark Sky is that it doesn't include any home screen widgets at all, but you get three if you pay for the premium version. You also get the option of having a daily digest of weather sent to you each morning. We wouldn't be averse to that perhaps if it was a one-off payment instead of a recurring $2.99 per year, but if incredibly precise weather updates are useful to you, it might be worth considering. There's a two-week free trial available which allows you to test it out first. ",
    });


}());