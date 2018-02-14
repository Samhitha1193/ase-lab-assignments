// create the module and name it scotchApp
var scotchApp = angular.module('scotchApp', ['ngRoute']);

// configure our routes
scotchApp.config(function($routeProvider) {
    $routeProvider

    // route for the home page
        .when('/home', {
            templateUrl : 'home.html',
            controller  : 'mainController'
        })

        // route for the about page
        .when('/about', {
            templateUrl : 'about.html',
            controller  : 'aboutController'
        })
        .when('/weather', {
            templateUrl : 'weather.html',
            controller  : 'weatherctrler'
        })
        .when('/calories', {
            templateUrl : 'caloriesfile.html',
            controller  : 'calories'
        })
        // route for the contact page
        .when('/contact', {
            templateUrl : 'contact.html',
            controller  : 'contactController'
        });
});

// create the controller and inject Angular's $scope
scotchApp.controller('mainController', function($scope) {
    // create a message to display in our view
    $scope.message = 'Everyone come and see how good I look!';
});

scotchApp.controller('aboutController', function($scope) {
    $scope.message = 'This document provides an abstract idea of the project. The technologies and the objectives of the project are subject to change.\n' +
        '\n' +
        'The purpose of this project is to introduce Augmented reality in Advertising which would help the companies to market their product.\n' +
        '\n' +
        'Motivation: Many companies face the downfall due to various reasons. One of them could be the lack of advertising of their products. This project is aimed at helping such companies improve their business with the latest advertising strategies such as augmented reality.\n' +
        '\n' +
        'Significance: virtual information can be changed dynamically, while the real-world information does not. Allow user to use the application in standard mode as well as augmented reality mode. Allow user to have a sample view of how their advertisement would look in AR.\n' +
        '\n' +
        'Objectives: TO RECOGNISE VOICE AND SHOW AS GRAPHICS.\n' +
        '\n' +
        'Features:\n' +
        '\n' +
        'Social media features.\n' +
        'Friendly UI.\n' +
        'Using IBM\'s Visual Recognition feature\n' +
        'Speech to text feature\n' +
        'changeability, synchronicity, antecedent, partial one to one and hidden Reality.\n' +
        'These features of augmented reality might bring benefits to AR developers and research by providing a more explicit basis on which to articulate AR requirements, issues and technologies.';
});

scotchApp.controller('contactController', function($scope) {

});

scotchApp.controller('calories', function($scope, $http) {

    $scope.getCalories = function() {
        var item = document.getElementById('food_item').value;
        $http.get('https://api.edamam.com/api/nutrition-data?app_id=f270d1e0&app_key=e165614ec0234d9a126e0e3c3aed7b82&ingr='+ item ).success(function(data) {
            console.log(data);
            calories =data.calories;
            weight = data.totalWeight;
            console.log(calories);
            $scope.Caloriesout = {
                html: "Total Calories ="+ calories + " </br>Total Weight =" + weight
            }



        })
    }

});

scotchApp.controller('weatherctrler', function($scope, $http) {

            console.log(3);
            $scope.getWeather = function() {
                $http.get('https://api.wunderground.com/api/36b799dc821d5836/conditions/q/'+$scope.StateName+'/'+$scope.CityName+'.json').success(function(data) {
                    console.log("inside getweatgher");
                    console.log(data);

                    temp = data.current_observation.temp_f;
                    weather = data.current_observation.weather;
                    wind=data.current_observation.wind_string;
                    pressure=data.current_observation.pressure_mb;
                    humidity=data.current_observation.relative_humidity;
                    console.log(temp);
                    $scope.currentweather = {
                        html: "Currently " + temp + " &deg; F and " + weather + " "+" wind is "+ wind +" pressure is "+pressure+" humidity is "+humidity+""
                    }
                })


            }




});

