angular.module('deus', []);

function jesus($scope) {
  $scope.teste = 'teste';

  $scope.idFrase = null;

  $scope.buscarFrase = function(form) {
    console.log(form);
  };

};


angular
  .module('deus')
  .controller('jesus', jesus);
