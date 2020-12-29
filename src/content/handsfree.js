handsfree = new Handsfree({
  isClient: true,
  hands: true
})
handsfree.enablePlugins('browser')

/**
 * Handle messages from background script
 */
chrome.runtime.onMessage.addListener(function(message) {
  switch (message.action) {
    case 'handsfree-data':
      console.log(message.data)
      handsfree.runPlugins(message.data)
    break

    case 'handsfreeStop':
    break
  }
})
