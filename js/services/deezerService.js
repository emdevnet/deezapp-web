(function() {
	'use strict';

	angular
		.module('DeezApp')
		.service('DeezerService', DeezerService);

	DeezerService.$inject = ['$http'];
	
	function DeezerService($http) {
		
		const API_ENDPOINT = 'http://api.deezer.com/';

		/**
		 * Interroge Deezer pour obtenir les 10 meilleurs morçeaux (tracks) du moment
		 * 
		 * @returns : Promise $http
		 */
		this.getPopularTracks = function() {
			var config = {
				params: {
					output : 'jsonp'
				},
				jsonpCallbackParam : 'callback'
			};

			return $http.jsonp(API_ENDPOINT + 'chart/0/tracks', config);
		};

		/**
		 * Interroge Deezer pour obtenir une liste de réponse en fonction de l'expression de recherche
		 * 
		 * @param {string} q : Expression de recherche
		 * @returns : Promise $http
		 */
		this.searchTracks = function(query) {
			var config = {
				params: {
					output : 'jsonp',
					q      : query
				},
				jsonpCallbackParam : 'callback'
			};

			return $http.jsonp(API_ENDPOINT + 'search', config);
		};

	}

})();