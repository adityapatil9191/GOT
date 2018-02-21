app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "partials/index.html"
    })
    .when("/view/:objectId", {
        templateUrl : "partials/individual.html"
    })
    .otherwise("/", {
        templateUrl : "partials/index.html"
    });
    
});