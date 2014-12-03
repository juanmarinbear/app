(function() {
  'use strict';

  angular
  .module('app')
  .controller('App', App);

  App.$inject = ['$scope'];

  function App($scope) {
    var vm = this;
    vm.text = {};

    activate();

    function activate() {
      console.log('Activating App Controller');
      vm.text.title = 'App';
      vm.text.nav = [
        {
          name: 'Contact',
          href: '/#/contact'
        }
      ];
    }
  }

})();
