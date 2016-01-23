var myApp = angular.module('myApp', [
  'ionic',
  'ngRoute',
  'timelineControllers'
]);

myApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.

 //index page
  when('/tab',{
    abstract:true,
    templateUrl:'partials/tab.html',
    controller: 'tabcontrol'
  }).

  when('/main', {
    templateUrl: 'partials/chap0_main.html'
  }).

  //chapter 1 Intro
  when('/intro', {
    templateUrl: 'partials/chap1_intro.html'
  }).

  //chapter 1 timeine page
  when('/timeline', {
    templateUrl: 'partials/chap1_timeline.html',
    controller: 'timelineController'
  }).

  //chapter 2 scroll
  when('/chap2', {
    templateUrl: 'partials/chap2_scroll.html',
    controller: 'Chap2Controller'
  }).

  //chapter 2 details
when('/details/:itemId',{
   templateUrl:'partials/details.html',
   controller:'DetailsController'
 }).

  //default page
  otherwise({
    redirectTo: '/main'
  });
}]);

var timelineControllers = angular.module('timelineControllers', []);

//chapter 1 timeline
timelineControllers.controller('timelineController', ['$scope', '$http', function($scope, $http) {
  $http.get('source/timeline.json').success(function(data) {
    $scope.events = data;
    $scope.letterLimit = 80;
    document.body.style.width = '3400px';
  });
}]);

//chapter 2 scroll
timelineControllers.controller('Chap2Controller', ['$scope', '$http', function($scope, $http, $uibModal, $log) {
  $http.get('source/chap2-scroll.json').success(function(data) {
    $scope.events = data;
    $scope.letterLimit = 100;
    $scope.animationsEnabled = true;
    document.body.style.width = '7700px';

    $scope.open = function (size) {
  var modalInstance = $uibModal.open({
    animation: $scope.animationsEnabled,
    templateUrl: 'myModalContent.html',
    controller: 'ModalInstanceCtrl',
    size: size,
    resolve: {
      events: function () {
        return $scope.events;
      }
    }
  });

  modalInstance.result.then(function (selectedItem) {
    $scope.selected = selectedItem;
  }, function () {
    $log.info('Modal dismissed at: ' + new Date());
  });
};
  });
}]);

//details controller
timelineControllers.controller('DetailsController', ['$scope', '$http', '$routeParams','$modal', function($scope, $http, $routeParams, $modal) {
    $http.get('source/timeline.json').success(function(data) {

    $scope.events = data;
    $scope.whichItem = $routeParams.itemId;

    if ($routeParams.itemId > 0){
      $scope.prevItem = Number($routeParams.itemId) -1;
    } else {
      $scope.prevItem = $scope.events.length -1;
    }
    if ($routeParams.itemId < $scope.events.length -1){
      $scope.nextItem = Number($routeParams.itemId) +1;
    } else {
      $scope.nextItem = 0;
    }
    var modalInstance = $modal.open({
      url: '/details/:itemId',
      templateUrl:'partials/details.html',
      resolve: {
        whichItem: function () {
              return $scope.whichItem;
              }
    }
      // controller:'ProfileModalCtrl'
      // events:{
      //   whichItem:function() {
      //     return $scope.events;
      //   }
      // }
      });
    // var myaudio = $('#audio1_1');
    // $('.audio1_1').css("border","3px solid yellow");
    // console.log('document', myaudio);
    // document.getElementById('audio1_1').addEventListener('ended',myHandler,false);
    //    function myHandler(e) {
    //      alert('ended');
    //        // What you want to do after the event
    //    }
    //
    //  function endaudio() {
    //    window.location.href="#/details/1";
    //  }

  });
}]);

timelineControllers.controller('ProfileModalCtrl',function($scope, $modal, events){
  $scope.events = events;
  $scope.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
});

timelineControllers.controller('tabcontrol',function(){

  $('.chap-title').hide();
    $("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
        var sidebarLen = $('#sidebar-wrapper').width();
        var sidebar = $('#sidebar-wrapper');
         console.log ($('#sidebar-wrapper').width());
        if(sidebarLen < 50){
          //  $(sidebar).css('border','3px solid red');
           $(".chap-title").show();
        }
        if(sidebarLen > 50){
          $(".chap-title").hide();
        }
    });

});
