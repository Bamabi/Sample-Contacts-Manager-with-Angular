(function (angular) {
	'use strict';

	/*
	 * Get the app module.
	 */
	var appModule = angular.module('app');
	
	/*
	 * Creation of an instance your Header Controller.
	 */
	var headerController = function(
		$scope, 
		$state, 
		$translate,
		$cookies)
	{
		$scope.today = new Date();

		$scope.redirectToListContacts = function(){
			$state.go('root.contacts');
		};

		$scope.changeLang = function(key) {
			$translate.use(key);
			$scope.currentLang = key;
			$cookies.put('favLang', key);
		};

		// define default lang
		var keyLang = $cookies.get('favLang');
		if(keyLang)
		{
			$scope.currentLang = keyLang;
			$translate.use(keyLang);
		}
		else
		{
			$scope.currentLang = $translate.use(); // return 'en', default value setted in app.config.js.
		}

		$cookies.put('favLang', $scope.currentLang);
	};

	headerController.$inject = [
		'$scope',
		'$state',
		'$translate',
		'$cookies'
	];

	appModule.controller('headerCtrl', headerController);

}(window.angular));