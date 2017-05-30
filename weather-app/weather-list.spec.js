describe("The weatherList component", function () {
    beforeEach(module("theWeatherApp"));

    var weatherList;
    beforeEach(inject(function ($componentController) {
        weatherList = $componentController("weatherList", {
            $scope: {}
        });
    }));

    it("can be created", function () {
        expect(weatherList).toBeDefined();
        expect(weatherList.$onInit).toBeDefined();
    });
});