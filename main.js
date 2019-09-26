chrome.storage.sync.get('base_url', function(data) {
    if (data.base_url) {
        chrome.tabs.create(
            {
                'url': data.base_url + '/secure/CreateIssue.jspa', 
                'active':true,
            }, function() {
        });
    } else {
        // open options.html
        chrome.tabs.create({url : "options.html" });
    }
});
