(function() {
	'use strict';

	angular
		.module('DeezApp')
		.directive('deezTrack', function() {
			return {
				restrict         : 'E',
				scope            : { track : ' = ' },
				templateUrl      : 'js/directives/track.html',
				controller       : TrackController,
				controllerAs     : 'deeztrack',
				bindToController : true // Permet d'utiliser l'alias (voir https://github.com/johnpapa/angular-styleguide/blob/master/a1/README.md#style-y075)
			};
		});

		TrackController.$inject = ['$scope'];

		function TrackController() {

			var deeztrack = this;

			deeztrack.togglePlay = function() {
				if (!deeztrack.audio)
					deeztrack.audio = new Audio(deeztrack.track.preview);

				if (deeztrack.audio.paused === true)
					deeztrack.audio.play();
				else
					deeztrack.audio.pause();
			};

			// Compute property 'playState' depending on the scope.audio state (playing or pausing)
			Object.defineProperty(deeztrack, 'playState', {
				get : function() {
					if (!deeztrack.audio || deeztrack.audio.paused === true)
						return 'play';
					if (deeztrack.audio && deeztrack.audio.paused === false)
						return 'pause';
				}
			});

		}

})();