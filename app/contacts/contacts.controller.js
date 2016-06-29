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
				id: new Date().getTime(),
				lastName: 'David',
				firstName: 'Talabart',
				email: 'd.t@yop.com',
				cellPhone: '0123456789'
			},
			{
				id: new Date().getTime(),
				lastName: 'David',
				firstName: 'Talabart',
				email: 'd.t@yop.com',
				cellPhone: '0123456789'
			}
		];
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