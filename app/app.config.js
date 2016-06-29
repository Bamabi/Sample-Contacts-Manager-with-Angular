(function (angular) {
	'use strict';

	/*
	 * Dependencies to imports.
	 */
	var imports = [
		'contactsModule'
	];

	/*
	 * Share the dataStore for all the app.
	 * Caution : inject the provider 'dataStoreProvider'
	 */
	var config = function(dataStoreProvider)
	{
		dataStoreProvider.setType('sessionStorage');
	};

	/*
	 * Main module = App.
	 */
	var app = angular.module('app', imports);

	app.config(config);

})(window.angular);