(function (angular) {
	'use strict';

	var contactsModule = angular.module('contactsModule');

	var contactsService = function() {
		this.contacts = [{
				id: new Date().getTime(),
				lastName: 'David',
				firstName: 'Talabart',
				email: 'd.t@yop.com',
				cellPhone: '0123456789'
			},
			{
				id: new Date().getTime() + 1,
				lastName: 'David',
				firstName: 'Talabart 1',
				email: 'd.t@yop.com',
				cellPhone: '0123456789'
			},
			{
				id: new Date().getTime() + 2,
				lastName: 'David',
				firstName: 'Talabart 2',
				email: 'd.t@yop.com',
				cellPhone: '0123456789'
			}];

		this.print = function() {
			return this.contacts;
		};
	};

	contactsModule.service('contactsService', contactsService);

})(window.angular);