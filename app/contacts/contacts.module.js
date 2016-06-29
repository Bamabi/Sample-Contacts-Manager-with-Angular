(function (angular) {
	'use strict';

	/*
	 * Specifics module dependencies.
	 * ngCookies : another module.
	 */
	var imports = [
		'ngCookies',
	];

	/*
	 * Create of an instance of your contacts module
	 */
	var contactsModule = angular.module('contactsModule', imports);

})(window.angular);