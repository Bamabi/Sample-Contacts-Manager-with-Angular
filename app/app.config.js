(function (angular) {
	'use strict';

	/*
	 * Dependencies to imports.
	 * Caution : include ui.router in first !.
	 */
	var imports = [
		'ui.router',
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
	var config = function(dataStoreProvider, urlRouterProvider, stateProvider)
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
				'about': {
					templateUrl:'app/common/about/about.html'
				}
			}
		});

		// Without you need to add #/ add the end of the URL for show header & footer.
		urlRouterProvider.otherwise('/contacts');

		dataStoreProvider.setType('sessionStorage');
	};

	config.$inject = ['dataStoreProvider', '$urlRouterProvider', '$stateProvider'];

	app.config(config);

})(window.angular);