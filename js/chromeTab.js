'use strict';

// let urlTabString = "";

const setCurrentTabUrl = () => {
  // For this to work must enable 'chrome://flags/#extensions-on-chrome-urls'
  chrome.tabs.query({
    currentWindow: true, active: true }, (tab) => {
    urlTabString = `URL on save: ${tab[0].url}\n`;
  });
};

// Set the current active tab url on extension load
// setCurrentTabUrl();
