angular.module('wwwApp')
    .factory('ajaxFactory', function($http) {

            return {
                getCode : function(code) {
                    return $http.get('/api/getCode/'+code)
                                .then(function(result){
                                    return result.results;
                                });
                }
            };
    });
