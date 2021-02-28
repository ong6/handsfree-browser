# The Youtube-Handsfree Extension

> 🚧🐞 This project is useable but still buggy 🐞🚧

This [Handsfree.js](https://handsfree.js.org) powered browser extension is a
designed to help you browse the web handsfree hand gestures.

In short, this extension will help you use your entire browser, desktop, or
connected drones, robots, and more in customizable and interesting new ways
🖐👀🖐

# Handsfree Browsing

By default, each page will get a set of "Palm Pointers" for you to use Youtube
handsfree

![Pause and play function](https://media.giphy.com/media/vLGJ5UfsYqshPh31O5/giphy.gif)

## How it works

![](https://i.imgur.com/VKFeZpB.jpg)

- When you first install the extension, `/src/background/handsfree.js` checks if
  you've approved the webcam. If not, then it'll open the options page in
  `src/options/stream-capture.html`
- The popup panel has a "Start/Stop Webcam" button that communicates with the
  background script to start the webcam: `/src/popup/index.html`
- The background page is where the models are stored and run. This keeps
  everything isolated and only asks for webcam permission once (vs on every
  domain): `/src/background/handsfree.js`
- The background page also uses the "Picture in Picture" API to "pop the webcam"
  out of the browser. It renders the webcam feed and debug canvases into a
  single canvas, and uses that as the `srcObject` to a separate video element
  which is the PiP'ed

## How to install

- Chrome: Install as an unpacked chrome extension. Visit `chrome://extensions`
  and enable <kbd>Developer Mode</kbd> on the top right, then click <kbd>Load
  unpacked</kbd> and select this project's root folder

![](https://i.imgur.com/jXmhYnb.png)

# Acknowledgements

- [Handsfree.js](https://handsfree.js.org) Is the engine running our code
- [Alex Ionkov](http://pages.cs.wisc.edu/~ionkov/) for the original handsfree
  WebXR Emulator vision, research, and our planning and discussions
- [Mozilla WebXR Emulator Extension team](https://github.com/MozillaReality/WebXR-emulator-extension)
  from which the WebXR Emulator Dev Tools was forked from
