var app=angular.module('myApp',[]);
app.controller('CarCtrl',function  ($scope) {
	$scope.items=[{
		"title": "喜之郎",
		"quantity": "8",
		"price": "3.95"
	},
	{
		"title": "酱香鸭脖",
		"quantity": "17",
		"price": "12.95"
	},
	{
		"title": "彩虹糖",
		"quantity": "5",
		"price": "5.87"
	}];
	$scope.remove=function  (i) {
		$scope.items.splice(i,1);//删除掉一个元素
	}
});