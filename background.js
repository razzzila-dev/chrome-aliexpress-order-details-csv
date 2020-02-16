'use strict';

chrome.browserAction.onClicked.addListener(
    function () {
        chrome.tabs.executeScript(null, {
            code: 'if(!window.aliOrderPageParser)'
                + 'window.aliOrderPageParser = new AliOrderPageParser();'
                + 'window.aliOrderPageParser.process()'
        })
    }
);
