(function() {
	'use strict';

	/**
	 * Filtre pour afficher une valeur avec une lettre majuscule
	 * 
	 * 	{{ 'hello' | capitalize }} // affichera "Hello"
	 */

	angular
		.module('DeezApp')
		.filter('capitalize', function() {
			return function(val) {
				return typeof val === "string" ? val[0].toUpperCase() + val.slice(1) : val;
			}
		});

})();
