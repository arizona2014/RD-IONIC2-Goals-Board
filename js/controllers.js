angular.module('app.controllers', [])

.controller('goalsCtrl', ['$scope', '$rootScope', '$stateParams', 'PouchService', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $rootScope, $stateParams, PouchService) {

  var db = PouchService.db;

  db.allDocs({
    include_docs: true
  }).then(function(result) {
    $rootScope.goals = result.rows;
    console.log($rootScope.goals);
  }).catch(function(err) {
    console.log(err);
  });

  $scope.addButton = function(){
    console.log("Add button clicked");
  };

  $scope.editButton = function(){
    console.log("Edit button clicked");
  };

  $scope.deleteButton = function(){
    console.log("Delete button clicked");
  };

}])

.controller('visualizeCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('statsCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}]);
