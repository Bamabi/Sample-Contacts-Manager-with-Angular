(function (angular) {
	'use strict';

	/*
	 * Get the app module.
	 */
	var appModule = angular.module('app');
	
	/*
	 * Creation of an instance your Header Controller.
	 */
	var headerController = function($scope, $state, $translate)
	{
		$scope.today = new Date();

		$scope.redirectToListContacts = function(){
			$state.go('root.contacts');
		};
	};

	headerController.$inject = [
		'$scope',
		'$state',
		'$translate'
	];

	appModule.controller('headerCtrl', headerController);

}(window.angular));