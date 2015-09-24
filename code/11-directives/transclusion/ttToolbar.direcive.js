(function() {
  'use strict';

  angular
    .module('directivesDemo')
    .directive('ttToolbar', ttToolbar);

  function ttToolbar() {
    return {
      templateUrl: './transclusion/ttToolbar.html',
      transclude: true
    };
  }
}());
