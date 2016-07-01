(function (angular) {
	'use strict';

	var appModule = angular.module('app');

	/*
	 * Using the component object for create a total independant functionnality.
	 * Use an object no function return an object.
	 */
	var formComponent = {
		bindings: {
			name: '@'
		},
		controller: function formController () {
			this.logName = function() {
				console.log(this.name);
			};
		},
		templateUrl: './app/common/form/form.html'
	};

	appModule.component('formComponent', formComponent);

}(window.angular));