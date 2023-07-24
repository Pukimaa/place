// ==UserScript==
// @name         r/place overlays
// @namespace    http://tampermonkey.net/
// @version      1.3.0
// @description  try to take over the canvas!
// @author       Pukima
// @match        https://garlic-bread.reddit.com/embed*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=reddit.com
// @updateURL    https://github.com/Pukimaa/place/raw/master/overlay.user.js
// @downloadURL  https://github.com/Pukimaa/place/raw/master/overlay.user.js
// ==/UserScript==

var overlayImage = null;
var placedeImage = null;
// var pukimaImage = null;
var overlayButton = null;
if (window.top !== window.self) {
    window.addEventListener('load', () => {
        const canvasContainer = document.querySelector("garlic-bread-embed").shadowRoot.querySelector("div.layout").querySelector("garlic-bread-canvas").shadowRoot.querySelector("div.container");
        overlayImage = document.createElement("img");
        placedeImage = document.createElement("img");
        // pukimaImage = document.createElement("img");
        updateImage();
        overlayImage.style = `position: absolute;left: 0;top: 0;image-rendering: pixelated;width: 2500px;height: 2000px;pointerEvents: 'none';`;
        placedeImage.style = `position: absolute;left: 0;top: 0;image-rendering: pixelated;width: 2500px;height: 2000px;pointerEvents: 'none';`;
        // pukimaImage.style = `position: absolute;left: 0;top: 0;image-rendering: pixelated;width: 2000px;height: 1500px;pointerEvents: 'none';`;
        canvasContainer.appendChild(overlayImage);
        canvasContainer.appendChild(placedeImage);
        // canvasContainer.appendChild(pukimaImage);

        overlayButton = document.createElement("button");
        overlayButton.style = "position: absolute; top: 28px;left: 80px;border-radius: 0;border: 3px solid black;padding: 4px 10px;height: fit-content;";
        overlayButton.textContent = "Overlay: on";
        overlayButton.addEventListener('click', () => {toggleOverlay();});
        window.document.body.append( overlayButton );
    }, false);
}

function updateImage() {
    overlayImage.src = "https://place.kayo.zip/outputs/overlay_target.png?" + Date.now()
    placedeImage.src = "https://place.army/overlay_target.png?" + Date.now()
    // pukimaImage.src = "https://pukimaa.github.io/place/overlay_target.png?" + Date.now()
}

function toggleOverlay() {
    if( overlayImage.style.display == "none" ) {
        overlayImage.style.display = "block";
        placedeImage.style.display = "block";
        // pukimaImage.style.display = "block";
        overlayButton.textContent = "Overlay: on";
    } else {
        overlayImage.style.display = "none";
        placedeImage.style.display = "none";
        // pukimaImage.style.display = "none";
        overlayButton.textContent = "Overlay: off";
    }
}

setInterval(function () {updateImage()}, 30000);
