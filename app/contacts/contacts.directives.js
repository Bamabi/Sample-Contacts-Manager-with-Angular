(function (angular) {
	'use strict';

	var contactsModule = angular.module('contactsModule');
	
	/*
	 * Directives.
	 */
	var contactsFormDirective1 = function() {
		return {
			restrict: 'A',
			template: 'test {{name}}'
		}
	};
	/*
	 * Be caution with camelcase : myName = my-name in html
	 */
	contactsModule.directive('myName', contactsFormDirective1);

})(window.angular);