(function() {
	'use strict';

	const app = angular.module('DeezApp', ['ui.router']);
	
	app.config(['$stateProvider', '$urlRouterProvider', '$sceDelegateProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $sceDelegateProvider, $locationProvider) {

		// Ajoute l'API de Deezer à la white-list d'AngularJS pour les appels externes
		$sceDelegateProvider.resourceUrlWhitelist(['http://api.deezer.com/**', 'self']);

		// Supprime le préfixe "!" par défaut dans Angular 1.6.* (voir http://stackoverflow.com/questions/41226122/url-hash-bang-prefix-instead-of-simple-hash-in-angular-1-6)
		$locationProvider.hashPrefix('');

		/**
		 * Configuration des routes de mon application
		 */

		$stateProvider
			.state({
				name         : 'home',
				url          : '/home',
				templateUrl  : 'js/home/home.html',
				controller   : 'HomeCtrl',
				controllerAs : 'home'
			})
			.state({
				name     : 'search',
				url      : '/search',
				templateUrl  : 'js/search/search.html',
				controller   : 'SearchCtrl',
				controllerAs : 'search'
			});

		$urlRouterProvider.otherwise('home');

	}]);

})();