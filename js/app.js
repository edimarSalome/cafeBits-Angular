// Declaração do módulo
var app = angular.module('cafeBits', []);

//Declaração da Controller
app.controller('boasVindasController',['$scope', function($scope){ //Esta controller utiliza $scope
    
    //Definindo um valor para o modelo nome
    this.nome = 'Edimar';
    
    //Função criada em $scope poderá ser acessada pelo DOM da página
    $scope.digaOi = function(){
        alert("Oi "+this.ctrl.nome+" !!!");
    };
}]);

//Definindo a Diretiva
app.directive('diretivaProduto', function(){ //A letra maiúscula tem um motivo
    return {
        restrict: 'E', //Será criada como elemento HTML
        templateUrl: 'produto.html', //Arquivo html comum
        controller: function(){
            this.produto = {
                nome:'AutoLac',
                preco: '1200',
                descricao: 'Excelente para Laboratórios de Análises Clínicas.'
            };
        },
        controllerAs: 'ctrl'
    };
});