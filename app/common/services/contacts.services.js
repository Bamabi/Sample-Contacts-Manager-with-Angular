(function (angular) {
	'use strict';

	/*
	 * Get the contacts module.
	 */
	var contactsModule = angular.module('contactsModule');

	/*
	 * Creation an instance your Contacts service.
	 */
	var contactsService = function($http) {
		// you can use $scope but you need to inject then or this.
		var self = this;

		self.getData = function() {
			 return $http.get('http://www.mocky.io/v2/576bae931100003d0666670a');
		};
	};

	/*
	 * Inject depencencies to your service.
	 */
	contactsService.$inject = ['$http'];

	/*
     * Inject your new service to module.
	 */
	contactsModule.service('contactsService', contactsService);

})(window.angular);