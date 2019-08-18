const app = angular.module('MyApp', []);
app.controller('AuthController', ['$http', function($http){
    const controller = this;
    this.createUser = function(){
      console.log("1" + this.username);
      console.log("2" + this.password);
        $http({
            method:'POST',
            url:'/sessions/newuser',
            data:{
                username:this.username,
                password:this.password
            }
        }).then(
            function(response){
                controller.username = null;
                controller.password = null;
                console.log(response);
            },
            function(error){
                console.log(error);
            }
        );
    };

    this.logIn = function(){
        $http({
            method:'POST',
            url:'/sessions',
            data: {
                username:this.username,
                password:this.password
            }
        }).then(
            function(response){
                console.log("thisiansf" + response);
                controller.username = null;
                controller.password = null;
                controller.goApp();
            },
            function(error){
                console.log(error);
            }
        );
    };

    this.logOut = function(){
        $http({
            method:'DELETE',
            url:'/sessions'
        }).then(
            function(response){
                console.log(response);
                controller.loggedInUsername = null;
            },
            function(error){
                console.log(error);
            }
        );
    };

    this.goApp = function(){
        console.log('getting user info');
        $http({
            method:'GET',
            url:'/app'
        }).then(
            function(response){
                controller.loggedInUsername = response.data.username;
            },
            function(error){
                console.log(error);
            }
        );
    };

	this.createTownie = () => {
		console.log(this.name);
		$http({
			method:'POST',
			url:'/business',
			data:{
				name: this.name,
				city: this.city,
				state: this.state,
				description: this.description
			}
		}).then(() => {
			this.getTownies()
		})
	}

	this.getTownies = () => {
		$http({
			method:"GET",
			url:"/business"
		}).then((res) => {
			this.companies = res.data;
		});
	}

	this.getTownies();
    }]);

<<<<<<< HEAD
$scope.search = function(item) {
    if (!$scope.query || (item.brand.toLowerCase().indexOf($scope.query) != -1) || (item.model.toLowerCase().indexOf($scope.query.toLowerCase()) != -1) ){
        return true;
    }
    return false;
};
=======
}]);
/**
 * <h4>Know a Townie you Trust?<br>
	 <span ng-click="showNewTownieForm">Add them here:</span>
	 </h4>

	 <input type="submit" value="Create New Townie"/>
 */
>>>>>>> f61956f26835482d54d47f9ce3e2dc0729698fb9
