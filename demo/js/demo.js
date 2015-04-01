/**
 * demo.js
 *
 * A simple demo to test and showcase the JSAudioEvents library.
 *
 * @author Otto J. Rask
 */

window.jssedemo = {

	buttons: undefined,

	init: function()
	{
		'use strict';

		console.log('initing!');

		this.buttons = document.querySelectorAll('button');

		if (this.buttons) {
			for (var i = 0; i < this.buttons.length; i++) {
				var button = this.buttons[i];

				button.addEventListener('click', function(evt) {
					var sound = this.dataset.audio;

					var sound_event = new CustomEvent('audio:' + sound, {
						'bubbles': true,
						'cancelable': true,
						'detail': {
							'audio': sound
						}
					});

					// Delayed event, simulate AJAX and such.
					if (this.id.indexOf('delayed') !== -1) {
						setTimeout(function() {
							this.dispatchEvent(sound_event);
						}.bind(this), 2000);
					}

					else {
						this.dispatchEvent(sound_event);
					}
				}.bind(button));
			}
		}
	}

};

document.addEventListener( 'DOMContentLoaded', window.jssedemo.init );
