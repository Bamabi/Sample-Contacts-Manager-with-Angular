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

	var contactsFormDirective2 = function() {
		return {
			restrict: 'E',
			templateUrl: 'app/contacts/myName.html'
		}
	};
	contactsModule.directive('myNamebis', contactsFormDirective2);

	/*
	 * Directives own scope.
	 */
	var contactsFormDirective3 = function() {
		return {
			restrict: 'E',
			scope: {
				name: '=titi'
			},
			templateUrl: 'app/contacts/myName.html'
		}
	};
	contactsModule.directive('myNamebisbis', contactsFormDirective3);

	var contactsFormDirective4 = function() {
		return {
			restrict: 'E',
			scope: {
				param: '@titi'
			},
			templateUrl: 'app/contacts/myNamebis.html'
		}
	};
	contactsModule.directive('myNamebisbisbis', contactsFormDirective4);

})(window.angular);