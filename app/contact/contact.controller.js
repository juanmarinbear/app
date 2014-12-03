(function() {
  'use strict';

  angular
  .module('app.contact')
  .controller('Contact', Contact);

  Contact.$inject = ['$scope'];

  function Contact($scope) {
    var vm = this;
    vm.text = {
      header: {},
      sections: [],
      footer: {},
      aside: {}
    };

    activate();

    function activate() {
      console.log('Activating Contact Controller');
      vm.text.header.title = 'Contact';
      vm.text.header.text = 'I am Contact text';
      vm.text.sections = [
        {
          title: 'Contact Section 1',
          text: 'I am Contact Section 1'
        },
        {
          title: 'Contact Section 2',
          text: 'I am Contact Section 2'
        },
      ];
      vm.text.footer.title = 'Contact Footer';
      vm.text.footer.text = 'I am Contact text footer';
      vm.text.aside.title = 'Contact Aside';
      vm.text.aside.text = 'I am Contact text aside';
    }
  }

})();
