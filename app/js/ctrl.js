
angular.module('myApp',[])
.controller('HelloCtrl',function  ($scope) {
	$scope.greeting={//$scope对象是angular的核心，并不需要我们去创建，只要声明就可以使用
		text:"Hello"
	};
});
