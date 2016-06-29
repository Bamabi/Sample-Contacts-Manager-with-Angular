# Contacts app with Angular 1.5

> npm install
> bower install

Launch a local server for debugging :
> grunt 

Build (mini css/js) & launch a local server :
> grunt build

## Caution with minifying

> app.controller('Test', function($scope, service) {
> });
$scope/service objects are replaced when you js is 'minified' !! use ng-annoate !!

else use this "best way" method for injection :
> var Text = function(a, b) {
> };
> Test.$inject = ['$scope', 'service'];
> app.controller('Test', Test);

## Caution with order for load .js files

Be carefull with the order of .js loaded files.

## Good practices

Be caution with list.
Don't use limitTo or filter if you have so many data (prefers to use filtering and limit with the API).

Maybe don't use Angular forEach(), prefers the basic "for(var i = 0; ....)".

