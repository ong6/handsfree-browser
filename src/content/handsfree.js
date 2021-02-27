handsfree = new Handsfree({
	isClient: true,
	hands: true,
	// weboji: true
});
handsfree.enablePlugins("browser");

/**
 * Pinch Click
 */
handsfree.use("pinchClick", ({ hands }) => {
	if (!hands.multiHandLandmarks) return;

	hands.pointer.forEach((pointer, hand) => {
		if (pointer.isVisible && hands.pinchState[hand][0] === "start") {
			document.addEventListener("keydown", function (event) {
				console.log(event);
			});
			var evt = new KeyboardEvent("keydown", { keyCode: 32, which: 32 });
			document.dispatchEvent(evt);
		}
	});
});

/**
 * Handle messages from background script
 */
chrome.runtime.onMessage.addListener(function (message) {
	switch (message.action) {
		case "handsfree-data":
			handsfree.runPlugins(message.data);
			break;

		case "handsfree-debug":
			console.log(message.data);
			break;
	}
});
