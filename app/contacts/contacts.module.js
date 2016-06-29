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


	var config = function(stateProvider)
	{
		// routing state configuration
		stateProvider.state('root.contacts', {
			url:'/contacts',
			views: {
				'main@': {
					templateUrl: 'app/contacts/contacts.html',
					controller: 'ContactsFormCtrl'
				}
			}
		});
		// routing state configuration
		stateProvider.state('root.contacts.add', {
			url:'/add',
			views: {
				'main@': {
					templateUrl: 'app/contacts/contacts.form.html',
					controller: 'ContactsFormCtrl'
				}
			}
		});
	};

	
	config.$inject = ['$stateProvider'];

	contactsModule.config(config);

})(window.angular);