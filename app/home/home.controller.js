(function() {
  'use strict';

  angular
  .module('app.home')
  .controller('Home', Home);

  Home.$inject = ['$scope'];

  function Home($scope) {
    var vm = this;
    vm.text = {
      header: {},
      sections: [],
      footer: {},
      aside: {}
    };

    activate();

    function activate() {
      console.log('Activating Home Controller');
      vm.text.header.title = 'Home';
      vm.text.header.text = 'I am Home text';
      vm.text.sections = [
        {
          title: 'Home Section 1',
          text: 'I am Home Section 1'
        },
        {
          title: 'Home Section 2',
          text: 'I am Home Section 2'
        },
      ];
      vm.text.footer.title = 'Home Footer';
      vm.text.footer.text = 'I am Home text footer';
      vm.text.aside.title = 'Home Aside';
      vm.text.aside.text = 'I am Home text aside';
    }
  }

})();
