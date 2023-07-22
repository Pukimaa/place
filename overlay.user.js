// ==UserScript==
// @name         r/place overlays
// @namespace    http://tampermonkey.net/
// @version      1.0.0
// @description  try to take over the canvas!
// @author       Pukima
// @match        https://garlic-bread.reddit.com/embed*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=reddit.com
// @updateURL    https://github.com/Pukimaa/place/raw/master/overlay.user.js
// @downloadURL  https://github.com/Pukimaa/place/raw/master/overlay.user.js
// ==/UserScript==

var overlayImage = null;
var placedeImage = null;
if (window.top !== window.self) {
    window.addEventListener('load', () => {
        const canvasContainer = document.querySelector("garlic-bread-embed").shadowRoot.querySelector("div.layout").querySelector("garlic-bread-canvas").shadowRoot.querySelector("div.container");
        overlayImage = document.createElement("img");
        placedeImage = document.createElement("img");
        updateImage();
        overlayImage.style = `position: absolute;left: 0;top: 0;image-rendering: pixelated;width: 2000px;height: 1000px;pointerEvents: 'none';`;
        placedeImage.style = `position: absolute;left: 0;top: 0;image-rendering: pixelated;width: 2000px;height: 1000px;pointerEvents: 'none';`;
        canvasContainer.appendChild(overlayImage);
        canvasContainer.appendChild(placedeImage);
    }, false);
}

function updateImage() {
    overlayImage.src = "https://place.kayo.zip/outputs/overlay_target.png?" + Date.now()
    placedeImage.src = "https://place.army/overlay_target.png?" + Date.now()
}

setInterval(function () {overlayImage.src = "https://place.kayo.zip/outputs/overlay_target.png?" + Date.now()}, 30000);
