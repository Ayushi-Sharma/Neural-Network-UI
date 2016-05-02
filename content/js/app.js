var app = angular.module('projectApp',['ngRoute']);

app.config(['$routeProvider', function($routeProvider){

        $routeProvider
              .when('/result',{
                  templateUrl: 'content/result.html',
                  controller: 'resultController'
              }).otherwise({
                redirectTo: '/'
              });

}]);

app.controller('viewController', ['$scope', '$http', function($scope, $http){

    $scope.attributes = [];
    $scope.newAttribute = {ob_value: ''};
    console.log($scope.newAttribute);

    var addValue = function(){
      $scope.attributes.push({ob_value: $scope.newAttribute.ob_value });

    $http.get('\content/json/attributes.json').success(function(data){
        $scope.attributes = data;
        console.log(data);
        alert(jsonObject.start.count);
    })
};
}]);
