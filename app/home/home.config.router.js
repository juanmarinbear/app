(function() {
  'use strict';

  angular
  .module('app.home')
  .config(config);

  config.$inject = ['$stateProvider'];

  function config($stateProvider) {

    var home = {
      name: 'home',
      url: '/',
      templateProvider: template,
      //templateProvider: templateBreaks,
      controller: 'Home',
      controllerAs: 'vm'
    };

    // Template provider works with this function
    //
    function template() {
      return '<div data-ng-include=\"\'/app/home/home.html\'\"</div>';
    }
    // Template provider does not work when I inject $timeout
    //
    function templateBreaks($timeout) {
      return $timeout(function() {
        return '<div data-ng-include=\"\'/app/home/home.html\'\"</div>';
      });
    }

    $stateProvider.state(home);
  
  }

})();
