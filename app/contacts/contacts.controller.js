(function (angular) {
	'use strict';

	/*
	 * Get the contacts module.
	 */
	var contactsModule = angular.module('contactsModule');

	/*
	 * Creation an instance your Contacts form Controller.
	 */
	var ContactsFormController = function(scope) {
		scope.name = 'test';
	};

	/*
	 * Inject depencencies to your controller.
	 */
	ContactsFormController.$inject = ['$scope'];

	/*
     * Inject your new controller to module.
	 */
	contactsModule.controller('ContactsFormCtrl', ContactsFormController);

})(window.angular);