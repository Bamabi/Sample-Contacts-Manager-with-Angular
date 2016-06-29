(function (angular) {
	'use strict';

	/*
	 * Get the contacts module.
	 */
	var contactsModule = angular.module('contactsModule');

	/*
	 * Creation an instance your Contacts form Controller.
	 */
	var ContactsFormController = function($scope) {
		$scope.contacts = [
			{
				id: new Date().getTime(),
				lastName: 'David',
				firstName: 'Talabart',
				email: 'd.t@yop.com',
				cellPhone: '0123456789'
			},
			{
				id: new Date().getTime() + 1,
				lastName: 'David',
				firstName: 'Talabart 1',
				email: 'd.t@yop.com',
				cellPhone: '0123456789'
			},
			{
				id: new Date().getTime() + 2,
				lastName: 'David',
				firstName: 'Talabart 2',
				email: 'd.t@yop.com',
				cellPhone: '0123456789'
			}
		];

		$scope.removeContact = function(contact)
		{
			var contacts = $scope.contacts;
			
			contacts.splice(contacts.indexOf(contact), 1);
		};
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