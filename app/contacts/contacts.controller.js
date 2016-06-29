(function (angular) {
	'use strict';

	var contactModule = angular.module('contactsModule');

	var ContactsFormController = function(scope) {
		scope.name = 'test';
	};
	ContactsFormController.$inject = ['$scope'];

	contactModule.controller('ContactsFormCtrl', ContactsFormController);

})(window.angular);