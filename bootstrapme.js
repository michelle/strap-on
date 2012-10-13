chrome.browserAction.onClicked.addListener(function(tab) {
	
	//chrome.tabs.onUpdated.addListener(function(integer tabId, object changeInfo, Tab tab) {...});
	
	chrome.tabs.executeScript(tab.id, {file: 'jquery-1.8.2.min.js'}, function() {
		console.log('jQuery enabled');
		chrome.tabs.executeScript(tab.id, {file: 'bootstrap.js'}, function() {
			chrome.tabs.insertCSS(tab.id, {file: 'bootstrap/css/bootstrap.css'}, function() {
				console.log('injected CSS');
			});
		});
	});
});
