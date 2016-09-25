angular.module('app.controllers', [])

.controller('goalsCtrl', ['$scope', '$rootScope', '$stateParams', 'PouchService', '$ionicModal',
function ($scope, $rootScope, $stateParams, PouchService, $ionicModal) {

  var db = PouchService.db;
  $scope.goalData = {};
  $scope.search = undefined;

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/addGoal.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modal = modal;
  });


  // GOALS CONTROLLER CODE

  // Function to recuperate all PouchDB docs
  $scope.getAllDocs = function(){
    db.allDocs({
      include_docs: true
    }).then(function(result) {
      $rootScope.goals = result.rows;
      $scope.$apply();
    }).catch(function(err) {
      console.log(err);
    });
  }

  $scope.getAllDocs();

  // Function to save goals into PouchDB
  $scope.saveGoals = function(goal){
    db.put(
      goal
    ).then(function (response) {
      console.log("goal ok")
    }).catch(function (err) {
      console.log(err);
    });
  }


  $scope.addButton = function(){
    $scope.modal.show();
  };

  $scope.editButton = function(id){
    console.log("Edit button clicked for " + id + " goal");
  };

  $scope.deleteButton = function(id){
    console.log("Delete button clicked for " + id + " goal");
  };

  $scope.addSubButton = function(idGoal){
    $rootScope.goals.map(function(item){
      if(item.id === idGoal){
        var subgoal = {};
        subgoal.name = "subgoal 1";
        if(item.doc.hasOwnProperty('subgoals')){
          item.doc.subgoals.push(subgoal);
        } else {
          item.doc.subgoals = [];
          item.doc.subgoals.push(subgoal);
        }
      }
    });

  };

  // GOALS CONTROLLER CODE

  // ADD GOALS POPUP CODE

  $scope.closeAddGoal = function(){
    $scope.modal.hide();
  };

  $scope.doAddGoal = function(){

    var timeStamp = String(new Date().getTime());
    $scope.goalData["_id"] = timeStamp;
    $scope.saveGoals($scope.goalData);
    $scope.goalData = {};
    $scope.getAllDocs();
    $scope.modal.hide();

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
