(function (angular) {
	'use strict';

	/*
	 * Get the contacts module.
	 */
	var contactsModule = angular.module('contactsModule');
	
	/*
	 * Creation of an instance your Contacts form Controller.
	 */
	var ContactsFormController = function(
		$scope, 
		contactsService, 
		dataStore,
		cookies
	) {
		cookies.put('myFavorite', 'oatmeal');

		$scope.contact = {};

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
			var contact = $scope.contact;
			contact.id = new Date().getTime();

			$scope.contacts.push(contact);

			dataStore.set('contacts', $scope.contacts);

			$scope.contact = {};
		};
	};

	/*
	 * Inject depencencies to your controller.
	 * Caution : inject the service 'dataStore'.
	 * Caution : inject the service '$cookies' for use the module 'ngCookies'.
	 */
	ContactsFormController.$inject = [
		'$scope', 
		'contactsService', 
		'dataStore',
		'$cookies'
	];

	/*
     * Inject your new controller to module.
	 */
	contactsModule.controller('ContactsFormCtrl', ContactsFormController);

})(window.angular);