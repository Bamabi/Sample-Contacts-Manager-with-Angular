(function (angular) {
	'use strict';

	var contactsModule = angular.module('contactsModule');

	var contactsService = function($http) {
		// you can use $scope but you need to inject then or this.
		var self = this;

		self.getData = function() {
			 return $http.get('http://www.mocky.io/v2/576bae931100003d0666670a');
		};
	};

	contactsService.$inject = ['$http'];

	contactsModule.service('contactsService', contactsService);

})(window.angular);