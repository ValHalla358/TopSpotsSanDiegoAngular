(function() {
    'use strict';

    angular
        .module('myApp')
        .controller('TopSpotsController', TopSpotsController);

    TopSpotsController.$inject = ['TopSpotsFactory', 'toastr'];

    /* @ngInject */
    function TopSpotsController(TopSpotsFactory, toastr) {
        var vm = this;
        vm.title = 'TopSpotsController';

        activate();

        ////////////////

        function activate() {

            getTopSpots();

        }

        vm.addRow = function() {
            vm.topspots.push({ 'name': vm.name, 'description': vm.description, 'location': [vm.location1, vm.location2] });
            vm.name = '';
            vm.description = '';
            vm.location = [];
        };

        function getTopSpots() {

            TopSpotsFactory.getTopSpots().then(
                function(response) {

                    vm.topspots = response.data;
                    toastr.success('We have Topspots!!');

                },
                function(error) {
                    if (error.data) {
                        toastr.error('There was a problem:' + error);
                    } else {
                        toastr.info('no data found :(')
                    }

                }


            )
        }
    }
})();
