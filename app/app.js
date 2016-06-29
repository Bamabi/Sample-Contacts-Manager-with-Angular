(function (angular) {
	'use strict';

	var contactsFormModule = angular.module('contactsFormModule', []);

	// main module
	var app = angular.module('contacts', [
		'contactsFormModule',
		'ngCookies'
	]);

	var ContactsFormController = function(a) {
		a.name = 'test';
	};
	ContactsFormController.$inject = ['$scope'];

	app.controller('ContactsFormCtrl', ContactsFormController);

})(window.angular);