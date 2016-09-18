angular.module('app.controllers', [])

.controller('goalsCtrl', ['$scope', '$rootScope', '$stateParams', 'PouchService', '$ionicModal', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $rootScope, $stateParams, PouchService, $ionicModal) {

  var db = PouchService.db;
  $scope.goalData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/addGoal.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modal = modal;
  });

  db.allDocs({
    include_docs: true
  }).then(function(result) {
    $rootScope.goals = result.rows;
    //console.log($rootScope.goals);
  }).catch(function(err) {
    console.log(err);
  });

  // GOALS CONTROLLER CODE

  $scope.addButton = function(){
    console.log("Add button clicked");
    $scope.modal.show();
  };

  $scope.editButton = function(){
    console.log("Edit button clicked");
  };

  $scope.deleteButton = function(){
    console.log("Delete button clicked");
  };

  // GOALS CONTROLLER CODE


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
