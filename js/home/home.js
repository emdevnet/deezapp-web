(function() {
	'use strict';

	angular
		.module('DeezApp')
		.controller('HomeCtrl', HomeCtrl);

	HomeCtrl.$inject = ['DeezerService'];

	function HomeCtrl(DeezerService) {
		const home = this;

		DeezerService.getPopularTracks().then(function(response) {
			home.topTracks = response.data.data;
		});
	}

})();