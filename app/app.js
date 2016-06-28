(function (angular) {
	'use strict';

	var contactsFormModule = angular.module('contactsFormModule', []);

	// main module
	angular.module('contacts', [
		'contactsFormModule',
		'ngCookies'
	]);

})(window.angular);