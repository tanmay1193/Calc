angular.module('starter.controllers', [])

.controller('CalcCtrl', function($scope) {
  clear();

  $scope.clear = clear;
  $scope.inputDigit = inputDigit;
  $scope.inputOperator = inputOperator;
  $scope.calculate = calculate;


  function clear() {
    $scope.operand = 0;
    $scope.expression = '';
    $scope.lastInputIsOperator = false;
  }

  function inputDigit(digit) {
    if ($scope.lastInputIsOperator || ($scope.operand === 0 && digit !== 0)) {
      $scope.operand = parseInt(digit, 10);
    } else {
      $scope.operand = ($scope.operand * 10) + parseInt(digit, 10);
    }
    $scope.lastInputIsOperator = false;
  }

  function inputOperator(operator) {
    $scope.expression = $scope.expression + ' ' + $scope.operand + ' ' + operator;
    $scope.lastInputIsOperator = true;
  }

  function calculate() {
    $scope.expression = $scope.expression + ' ' + $scope.operand;

    //console.log($scope.expression);

    $scope.operand = eval($scope.expression);
    $scope.expression = $scope.operand;
    $scope.lastInputIsOperator = false;
    $scope.expression = '';
  }
})

.controller('AbtCtrl', function($scope) {

})
;
