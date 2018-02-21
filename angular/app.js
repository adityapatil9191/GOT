var app = angular.module("myApp",["ngRoute"]);

app.controller('mainController', ['$scope','$http',function ($scope, $http) {
	$scope.books = [];
	$scope.houses = [];
	$scope.characters = [];
		$scope.getData = function(){
			($scope.getBooks = function(){
			

				return  $http.get('https://www.anapioficeandfire.com/api/books').then(function success(response) {

					$scope.books = response.data;

					console.log($scope.books);	

				}, function error(response) {

					$scope.books = response;
					
					//console.log($scope.books);
				});
				
				
			})();

			($scope.getHouses = function(){
				return  $http.get('https://www.anapioficeandfire.com/api/houses').then(function success(response) {

					$scope.houses = response.data;

					console.log($scope.houses);	

				}, function error(response) {

					$scope.houses = response;
					
					//console.log($scope.houses);
				});

			})();

			($scope.getCharacters = function(){
				return  $http.get('https://www.anapioficeandfire.com/api/characters').then(function success(response) {

					$scope.characters = response.data;

					console.log($scope.characters);	

				}, function error(response) {

					$scope.characters = response;
					
					//console.log($scope.characters);
				});
			})();

			$scope.sortBook = "name";
			$scope.sortCharacter = "aliases[0]";

			$scope.sortHouse = "name";



		}

		$scope.passValue = function(value){
			($scope.getBooks = function(){
			

				return  $http.get('https://www.anapioficeandfire.com/api/books').then(function success(response) {

					$scope.books = response.data;

					//console.log($scope.books);	

				}, function error(response) {

					$scope.books = response;
					
					//console.log($scope.books);
				});
				
				
			})();

			($scope.getHouses = function(){
				return  $http.get('https://www.anapioficeandfire.com/api/houses').then(function success(response) {

					$scope.houses = response.data;

					//console.log($scope.houses);	

				}, function error(response) {

					$scope.houses = response;
					
					//console.log($scope.houses);
				});

			})();

			($scope.getCharacters = function(){
				return  $http.get('https://www.anapioficeandfire.com/api/characters').then(function success(response) {

					$scope.characters = response.data;

					//console.log($scope.characters);	

				}, function error(response) {

					$scope.characters = response;
					
					//console.log($scope.characters);
				});
			})();

			var objectlist = [];

			for(i=0;i<$scope.books.length;i++){
				objectlist.push($scope.books[i]);
			}
			for(i=0;i<$scope.houses.length;i++){
				objectlist.push($scope.houses[i]);
			}
			for(i=0;i<$scope.characters.length;i++){
				objectlist.push($scope.characters[i]);
			}

			$scope.returnObject = function(){

					$scope.individualObject = {};
					for(i=0;i<objectlist.length;i++){
					if(objectlist[i].$$hashKey == value){
						//console.log(objectlist[i].$$hashKey);
						//console.log(value);
						//console.log(objectlist[i]);
						$scope.individualObject = objectlist[i];
					}				
			  	}




			}

				
			
			
			
		}
			
}]);


