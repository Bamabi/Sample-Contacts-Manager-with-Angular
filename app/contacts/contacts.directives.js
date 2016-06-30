(function (angular) {
	'use strict';

	var contactsModule = angular.module('contactsModule');
	
	/*
	 * Directives.
	 */
	var generateContactsListDirective = function() {
		return {
			restrict: 'E',
			templateUrl: 'app/contacts/contacts.list.html'
		}
	};
	// look in contacts.html.
	contactsModule.directive('contactsList', generateContactsListDirective);

	var generateContactFormDirective = function() {
		return {
			restrict: 'E',
			templateUrl: 'app/contacts/contacts.form.html'
		}
	};
	// look in contacts.html.
	contactsModule.directive('contactsForm', generateContactFormDirective);

})(window.angular);