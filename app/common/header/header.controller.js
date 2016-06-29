(function (angular) {
	'use strict';

	/*
	 * Get the app module.
	 */
	var appModule = angular.module('app');
	
	/*
	 * Creation of an instance your Header Controller.
	 */
	var headerController = function($scope, $state)
	{
		$scope.today = new Date().toString();

		$scope.redirectToListContacts = function(){
			$state.go('root.contacts');
		};
	};

	headerController.$inject = [
		'$scope',
		'$state'
	];

	appModule.controller('headerCtrl', headerController);

}(window.angular));