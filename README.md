# JSAudioEvents

JSAudioEvents is a small library for handling sound events in your web pages.

## Installation

1.  Copy-paste the `JSAudioEvents(.min).js` file and include it to your templates using
    basic `<script>` tags. No other library dependencies required.

2.  Create `<audio>` elements on your page, and set their `data-soundsource` and
    `preload` attributes like such:

    ```html
    <audio preload data-soundsource="successsound">
    	<source src="..." type="...">
    	...
    </audio>
    ```

3.  Use JavaScript to trigger bubbling events in the `sound` namespace as such:

    ```js
    $element.trigger('sound:successsound');
    ```

4.  Sounds should be playing, depending on browser support for various audio formats.

## Inner workings

JSAudioEvents operates on a simple principle: if there happens an `sound:somesound`
event and a corresponding `audio` element is available, play the element's sound to
the browser.

On `DOMContentLoaded` the library finds all `preload` attributed `audio` elements
and maps them to a collection indentified by their unique `data-soundsource` values.

Then it creates event listeners for each `audio` element and plays sounds depending
whether the sound event identifier matches the `data-soundsource` identifier. This
means that an event of type `sound:cat` with play the audio source of the audio
element whose attribute is `data-soundsource="cat"`.

There is a 150ms timeout after each sound play, just to keep things a bit more
performant.

## Todo

- Refactor from `JSSoundEvents` to `JSAudioEvents`.
- Browser-compatibility hasn't been tested. Worked on the latest Firefox just fine.
- Sound queuing system with timeouts to prevent sounds from playing too late or on
  top of each other.
- Verify Bower workings and such.

## Contributing

Make a fork, create a topic branch, make a pull request.

## License

The MIT License (MIT)

Copyright (c) 2015 Otto J. Rask

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
