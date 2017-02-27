(function() {
	'use strict';

	angular
		.module('DeezApp')
		.controller('SearchCtrl', SearchCtrl);

	SearchCtrl.$inject = ['DeezerService'];

	function SearchCtrl(DeezerService) {
		const search = this;

		search.query = '';
		search.tracksList = [];

		search.searchTracks = function() {
				DeezerService.searchTracks(search.query).then(function(response) {
					search.tracksList = response.data.data;
				});
		};
	}

})();