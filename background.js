chrome.omnibox.onInputEntered.addListener(function(text) {
    chrome.storage.sync.get('base_url', function(data) {
        if (data.base_url) {
            chrome.tabs.create(
                {
                    'url': data.base_url + (text ? '/browse/' + text : ''), 
                    'active':true,
                });
        } else {
            // open options.html
            chrome.tabs.create({url : "options.html" });
        }
    });
});
chrome.runtime.onInstalled.addListener(function() {
    chrome.tabs.create({url : "options.html" });
});
