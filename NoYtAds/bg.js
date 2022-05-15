chrome.action.onClicked.addListener(function() {
    chrome.windows.create({'url': 'popup.html', 'type': 'popup', "top": 5,
    "left" : 5,
    "width" : 455,
    "height": 455}, function() {
    });
 });