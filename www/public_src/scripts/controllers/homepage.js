angular.module('wwwApp')
    .controller('HomepageCtrl', function($scope, ajaxFactory) {

        $scope.headerSize = null;
        $scope.titleBGColor = '#555';

        ajaxFactory.getAppTitle().then(function(results){
            $scope.mainTitle = results;
        });

        $scope.encrypt = function(){
          ajaxFactory.getCode().then(function(results){
              $scope.code = results;
          });

        };

    });
