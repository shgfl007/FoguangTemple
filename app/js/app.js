var myApp = angular.module('myApp', [
  'ui.router',
  'timelineControllers'
]);

myApp.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/home');

  $stateProvider
  //tabs,dependent page
  .state('tab', {
    url: '/tab',
    // abstract: true,
    templateUrl: 'partials/tab.html',
    controller:'tabcontrol'
  })

  //main home page with video
  .state('home',{
    url:'/home',
    templateUrl:'partials/chap0_main.html'
  })

  //sunrise page
  .state('intro',{
    url:'/intro',
    templateUrl:'partials/chap1_intro.html'
  })

  //timeline page
  .state('tab.timeline', {
    url: '/timeline',
        templateUrl: 'partials/chap1_timeline.html',
        controller: 'timelineController'
  })

  .state('tab.chap2', {
      url: '/chap2',
          templateUrl: 'partials/chap2_scroll.html',
          controller:'Chap2Controller'
    })
});
