(function (angular) {
	'use strict';

	/*
	 * Get the contacts module.
	 */
	var contactsModule = angular.module('contactsModule');
	
	/*
	 * Creation an instance your Contacts form Controller.
	 */
	var ContactsFormController = function($scope, contactsService) {
		$scope.contacts = [];
		$scope.contactsState = false;

		contactsService.getData()
		.then(function(data) {
			$scope.contacts = data.data;
			$scope.contactsState = true;
		});

		$scope.removeContact = function(contact)
		{
			var contacts = $scope.contacts;

			contacts.splice(contacts.indexOf(contact), 1);
		};
	};

	/*
	 * Inject depencencies to your controller.
	 */
	ContactsFormController.$inject = ['$scope', 'contactsService'];

	/*
     * Inject your new controller to module.
	 */
	contactsModule.controller('ContactsFormCtrl', ContactsFormController);

})(window.angular);