// "use strict";

var app = angular.module("plunker", []);

app.controller('mainCtrl', function($scope) {
  // $scope.name = "world";
});

var populations = {
  china: { rank: 1, name: "China", population: 1373420000, percent: 18.9 },
  india: { rank: 2, name: "India", population: 1280670000, percent: 17.6 },
  unitedStates: { rank: 3, name: "United States", population: 322317000, percent: 4.42 },
  indonesia: { rank: 4, name: "Indonesia", population: 255461700, percent: 3.51 },
  brazil: { rank: 5, name: "Brazil", population: 205252000, percent: 2.82 }
};

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

app.directive('prettyTable', function() {
  return {
    templateUrl: function(elem, attr) {
      return "table.html";
    },
    controller: function($scope) {
      $scope.data = populations;
      $scope.headers= Object.keys($scope.data[Object.keys($scope.data)[0]]);
      console.log($scope.headers);
    }
  };
});
