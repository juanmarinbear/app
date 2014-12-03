(function() {
  'use strict';

  angular
  .module('app.contact')
  .config(config);

  config.$inject = ['$stateProvider'];

  function config($stateProvider) {

    var contact = {
      name: 'contact',
      url: '/contact',
      templateProvider: template,
      //templateProvider: templateBreaks,
      controller: 'Contact',
      controllerAs: 'vm'
    };

    // Template provider works with this function
    //
    function template() {
      return '<div data-ng-include=\"\'/app/contact/contact.html\'\"</div>';
    }
    // Template provider does not work when I inject $timeout
    //
    function templateBreaks($timeout) {
      return $timeout(function() {
        return '<div data-ng-include=\"\'/app/contact/contact.html\'\"</div>';
      });
    }

    $stateProvider.state(contact);
  
  }

})();
