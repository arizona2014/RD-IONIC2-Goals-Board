angular.module('app.controllers', [])

.controller('goalsCtrl', ['$scope', '$rootScope', '$stateParams', 'PouchService', '$ionicModal', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $rootScope, $stateParams, PouchService, $ionicModal) {

  var db = PouchService.db;
  $scope.goalData = {};
  var _goals = [];

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
    $scope.$apply();
  }).catch(function(err) {
    console.log(err);
  });

  // GOALS CONTROLLER CODE

  $scope.addButton = function(){
    console.log("Add button clicked ");
    $scope.modal.show();
  };

  $scope.editButton = function(id){
    console.log("Edit button clicked for " + id + " goal");
  };

  $scope.deleteButton = function(id){
    console.log("Delete button clicked for " + id + " goal");
  };

  // GOALS CONTROLLER CODE

  // ADD GOALS POPUP CODE

  $scope.closeAddGoal = function(){
    $scope.modal.hide();
  };

  $scope.doAddGoal = function(){

    var timeStamp = String(new Date().getTime());
    $scope.goalData["_id"] = timeStamp;
    db.put(
      $scope.goalData
    ).then(function (response) {
      console.log("saved goal")
    }).catch(function (err) {
      console.log(err);
    });
    $scope.goalData = {};

    db.allDocs({
      include_docs: true
    }).then(function(result) {
      $rootScope.goals = result.rows;
      console.log($rootScope.goals);
      $scope.modal.hide();
    }).catch(function(err) {
      console.log(err);
    });

  };

  // ADD GOALS POPUP CODE

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
