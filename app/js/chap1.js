var timelineControllers = angular.module('timelineControllers', []);

//chapter 1 timeline
timelineControllers.controller('timelineController', ['$scope', '$http', function($scope, $http) {
  $http.get('source/timeline.json').success(function(data) {
    $scope.events = data;
    $scope.letterLimit = 80;
    document.body.style.width = '3500px';

//select function for node and timeline-each
    $scope.selectItem = function(selectedItem){
    	for(var i = 0; i < $scope.events.length; i++){
            var item = $scope.events[i];
            if(item.id == selectedItem.id){
                item.selected = !item.selected;
                document.body.style.width = '4000px';
                $scope.letterLimit = 1000;
            }else {
                item.selected = false;
                document.body.style.width = '3500px';
                $scope.letterLimit = 80;
            }
          }
	     }
  var $node = $('.timeline-node');
  // var top = $node.position().top;
  // $('.scene-title-box').line(bottom + 20,140,200,400, {color:"red", style: "solid"});
  });
}]);

//chapter 2 scroll
timelineControllers.controller('Chap2Controller', ['$scope', '$http', function($scope, $http, $uibModal, $log) {
  $http.get('source/chap2-scroll.json').success(function(data) {
    $scope.events = data;
    $scope.letterLimit = 100;
    $scope.animationsEnabled = true;
    document.body.style.width = '7700px';
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

// timelineControllers.controller('ProfileModalCtrl',function($scope, $modal, events){
//   $scope.events = events;
//   $scope.cancel = function () {
//     $uibModalInstance.dismiss('cancel');
//   };
// });

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
