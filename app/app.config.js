(function (angular) {
	'use strict';

	/*
	 * Dependencies to imports.
	 * Caution : include ui.router in first !.
	 */
	var imports = [
		'ui.router',
		'pascalprecht.translate',
		'contactsModule'
	];

	/*
	 * Main module = App.
	 */
	var app = angular.module('app', imports);

	/*
	 * Share the dataStore for all the app.
	 * Caution : inject the provider 'dataStoreProvider'
	 */
	var config = function(
		dataStoreProvider, 
		urlRouterProvider, 
		stateProvider,
		translateProvider)
	{
		stateProvider.state('root', {
			views: {
				'header': {
					templateUrl: 'app/common/header/header.html',
					controller: 'headerCtrl'
				},
				'footer': {
					templateUrl: 'app/common/footer/footer.html'	
				}
			}
		});

		stateProvider.state('root.about', {
			url: '/about',
			views: {
				'main@': {
					templateUrl: 'app/common/about/about.html'
				}
			}
		});

		// Without you need to add #/ add the end of the URL for show header & footer.
		urlRouterProvider.otherwise('/contacts');

		dataStoreProvider.setType('sessionStorage');

		// i18n
		translateProvider.useStaticFilesLoader({
			prefix: 'app/common/i18n/',
			suffix: '.json'
		});

		// Default language
		translateProvider.preferredLanguage('en');
	};

	config.$inject = [
		'dataStoreProvider', 
		'$urlRouterProvider', 
		'$stateProvider',
		'$translateProvider'
	];

	app.config(config);

})(window.angular);