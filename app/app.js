(function (angular) {
	'use strict';

	var contactsFormModule = angular.module('contactsFormModule', []);

	// main module
	var app = angular.module('contacts', [
		'contactsFormModule',
		'ngCookies'
	]);

	app.controller('ContactsFormController', function($scope) {
		$scope.name = 'test';
	});

})(window.angular);