angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('tabsController.goals', {
    url: '/page2',
    views: {
      'tab1': {
        templateUrl: 'templates/goals.html',
        controller: 'goalsCtrl'
      }
    }
  })

  .state('tabsController.visualize', {
    url: '/page3',
    views: {
      'tab2': {
        templateUrl: 'templates/visualize.html',
        controller: 'visualizeCtrl'
      }
    }
  })

  .state('tabsController.stats', {
    url: '/page4',
    views: {
      'tab3': {
        templateUrl: 'templates/stats.html',
        controller: 'statsCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

$urlRouterProvider.otherwise('/page1/page2')

  

});