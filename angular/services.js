app.service('myservice', function($http) 
{ 
	var dataArray = []; 
    this.getData  = function(myUrl) 
    { 
           var url = myUrl;
          
     return  $http.get(url).then(function success(response) {

				dataArray = response;

				return dataArray;	

			}, function error(response) {

				dataArray = response;
				return dataArray;
			});


          
          
    }; 
});
