(function() {
    'use strict';

    angular
        .module('myApp')
        .factory('TopSpotsFactory', TopSpotsFactory);

    TopSpotsFactory.$inject = ['$http', '$q'];

    /* @ngInject */
    function TopSpotsFactory($http, $q) {
        var service = {
            getTopSpots: getTopSpots
        };
        return service;

        ////////////////

        function getTopSpots() {

            var defer = $q.defer();
// Get json file and alerting out if no data present
            $http({
                method: 'GET',
                url: '../topspots.json'
            }).then(function(response) {
                if (typeof response.data === 'object') {
                    defer.resolve(response);
                } else {
                    defer.reject('no data found :(')
                }

// error code
            }, function(error) {
                console.log(error);
                defer.reject(error);

            });

            return defer.promise;

        }
    }
})();

//reviewed by SS and GB

