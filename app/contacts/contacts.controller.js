(function (angular) {
	'use strict';

	/*
	 * Get the contacts module.
	 */
	var contactsModule = angular.module('contactsModule');
	
	/*
	 * Creation an instance your Contacts form Controller.
	 */
	var ContactsFormController = function(
		$scope, 
		contactsService, 
		dataStore
	) {
		$scope.lastName = "";
		$scope.firstName = "";
		$scope.email = "";
		$scope.cellphone = "";

		$scope.contactsState = false;

		$scope.contacts = dataStore.get('contacts');
		if($scope.contacts == null || $scope.contacts.length == 0)
		{
			contactsService.getData()
			.then(function(data) {
				$scope.contacts = data.data;
				$scope.contactsState = true;
			});
		}
		else
		{
			$scope.contactsState = true;
		}

		$scope.removeContact = function(contact)
		{
			$scope.contacts.splice($scope.contacts.indexOf(contact), 1);

			dataStore.set('contacts', $scope.contacts);
		};

		$scope.addContact = function()
		{
			var contact = {
				lastName: $scope.lastName,
				firstName: $scope.firstName,
				email: $scope.email,
				cellphone: $scope.cellphone,
			};

			$scope.contacts.push(contact);

			dataStore.set('contacts', $scope.contacts);
		};
	};

	/*
	 * Inject depencencies to your controller.
	 * Caution : inject the service 'dataStore'
	 */
	ContactsFormController.$inject = [
		'$scope', 
		'contactsService', 
		'dataStore'
	];

	/*
     * Inject your new controller to module.
	 */
	contactsModule.controller('ContactsFormCtrl', ContactsFormController);

})(window.angular);