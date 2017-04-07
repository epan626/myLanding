app.controller('homeController', ['$scope', '$routeParams', '$location', '$cookies', function($scope, $routeParams, $location, $cookies) {
$scope.displayFirst = true
		$scope.goHome = function(){
			$scope.displayFirst = !$scope.displayFirst
		}


// ipad clock start
			var today = new Date();
	    var h = today.getHours();
			if(h>12){
				h = h-12
			} else if(h == 0){
	      h = 12
	    }
			var m = today.getMinutes();
			 m = checkTime(m);
			 $scope.time = h + ":" + m

		function checkTime(i) {
		    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
		    return i;
		}

		// ipad clock end
}])
