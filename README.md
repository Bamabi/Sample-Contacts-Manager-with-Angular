# Contacts app with Angular 1.5

## Caution

> app.controller('Test', function($scope, service) {
> });
$scope/service objects are replaced when you js is 'minified' !! use ng-annoate !!

else use this "best way" method for injection :
> var Text = function(a, b) {
> };
> Test.$inject = ['$scope', 'service'];
> app.controller('Test', Test);