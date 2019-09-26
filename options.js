(function () {
    saveButton = document.getElementById('save-button');
    baseUrlInput = document.getElementById('base-url-input');

    saveButton.onclick = function(element) {
        baseUrl = baseUrlInput.value;    
        chrome.storage.sync.set({'base_url' : baseUrl}, function () {
            window.close();
            //console.log('saved base_url: ' + baseUrl);
        });
    };

    chrome.storage.sync.get('base_url', function(data) {
        if (data.base_url) {
            baseUrlInput.setAttribute('value', data.base_url);
        }

        //console.log('read base_url: ' + data.base_url);
    });
})();
