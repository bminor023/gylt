const {ipcRenderer} = require("electron");


// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.
window.addEventListener('DOMContentLoaded', () => {
  const replaceText = (selector, text) => {
    const element = document.getElementById(selector)
    if (element) element.innerText = text
  }

  for (const type of ['chrome', 'node', 'electron']) {
    replaceText(`${type}-version`, process.versions[type])
  }
})
window.api = {
    test: () => {
      console.log("Hello!");
    },
    send: (channel, data) => {
      ipcRenderer.send(channel, data);
    },
    receive: (channel, func) => {
        // Deliberately strip event as it includes `sender` 
        ipcRenderer.on(channel, (event, ...args) => func(...args));
    }
}

