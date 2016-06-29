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
	contactsModule.directive('contactsList', generateContactsListDirective);

})(window.angular);