// "use strict";

var app = angular.module("plunker", []);

app.controller('mainCtrl', function($scope) {
  // $scope.name = "world";
});

app.directive("timer", function() {
  return {
    restrict: 'E',
    scope: {
      start: "@start"
    },
    templateUrl: function(elem, attr) {
      return "timer.html";
    },
    controller: function($scope, $interval) {
      $scope.start = Number($scope.start);
      var intervalId = $interval(function() {
        $scope.start = $scope.start - 1;
        if ($scope.start === 0) {
          $scope.start = "GET YOUR BUTT TO CLASS";
          $interval.cancel(intervalId);
        }
      }, 1000);
    // },
    // link: function(scope, element) {
      // console.log(scope, element);
      // var myTimer = setInterval(function() {
      //   scope.start = Number(scope.start) - 1
      //   element.text(Number(scope.start))
      //   if (scope.start === 0) {
      //     element.text("GET BACK TO CLASS")
      //     clearInterval(myTimer);
      //   }
      // }, 1000);
      // myTimer();
    }
  };
});

app.directive("myTable", function() {
  return {
    restrict: 'E',
    scope: {
      what: "@what"
    },
    templateUrl: function(elem, attr) {
      return "my-table.html";
    },
    // link: function(scope, element) {
    //   console.log(scope);
    // }
    controller: function($scope, $interval) {
      $scope.anime = [
        {name: "Black Lagoon", rating:"17+", genre:"action", lang: "Japanese"},
        {name: "Elfen Lied", rating:"17+", genre:"thriller", lang: "Japanese"},
        {name: "Toradora", rating:"14+", genre:"comedy/romance", lang: "Japanese"},
        {name: "Candy Boy", rating:"14+", genre:"comdy/slice of life", lang: "Japanese"}
      ];
      console.log($scope.anime);
    }
  };
});


app.directive("myGreet", function() {
  return {
    restrict: 'E',
    scope: { //no longer reads global scope
      name: "@name", //if we receive a name option, become name
      word: "@word"
    },
    templateUrl: function(elem, attr) {
      // console.log(elem, attr)
      return `my-greet-${attr.card}.html`;
    },
  };
});
