/**
 * jsaudioevents.js
 *
 * JSAudioEvents
 *
 * JSAudioEvents is a library for handling audio in web pages.
 *
 * @author Otto J. Rask <ojrask@gmail.com>
 * @version 0.1.0
 */

(function(window, document, undefined){

	'use strict';

	window.JSAudioEvents = window.JSAudioEvents || {

		// Collection of audio elements that can the used to play sounds.
		audioElements: {},

		// Limit plays to not choke the systems.
		playLimitTimer: undefined,

		// Queue sounds to be played.
		playQueue: {},

		// Startup. Called on DOMContentLoaded.
		initialize: function()
		{
			self = window.JSAudioEvents;

			if (!self.getAudioElements()) {
				return false;
			}

			self.addEventListeners();
		},

		// Find all <audio> that is set to preload.
		getAudioElements: function()
		{
			// Grab all preload-audio elements on page.
			var els = document.getElementsByTagName('audio');

			for (var i = 0; i < els.length; i++) {

				var preload = els[i].getAttribute('preload');

				if (preload == ('auto' | '')) {
					self.audioElements[ els[i].dataset.audiosource ] = els[i];
				}
			}

			return Object.getOwnPropertyNames(self.audioElements).length;
		},

		addEventListeners: function()
		{
			for (var el in self.audioElements) {
				var audioel = self.audioElements[el];
				var audiosource = audioel.dataset.audiosource;
				document.addEventListener('audio:' + audiosource, self.handleAudioEvent);
			}
		},

		handleAudioEvent: function(evt)
		{
			var audio_type = evt.detail.audio;

			if ( self.playLimitTimer === undefined ) {
				self.audioElements[audio_type].play();
				self.playLimitTimer = window.setTimeout(function() {
					self.playLimitTimer = undefined;
				}, 150);
			}
		}

	};

	document.addEventListener('DOMContentLoaded', window.JSAudioEvents.initialize);

})(window, document);