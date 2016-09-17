angular.module('app.services', [])

.factory('BlankFactory', [function(){

}])

.service('BlankService', [function(){

}])

.service('PouchService', [function(){
  this.db = new PouchDB('my_database');
}]);
