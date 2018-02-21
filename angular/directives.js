app.directive('bookCard', function() {
    return {
        restrict: 'E',
        
        templateUrl: 'templates/book.html'
    }
});

app.directive('characterCard', function() {
    return {
        restrict: 'E',
        
        templateUrl: 'templates/character.html'
    }
});

app.directive('houseCard', function() {
    return {
        restrict: 'E',
       
        templateUrl: 'templates/house.html'
    }
});

