chrome.browserAction.onClicked.addListener(function(tab) {
	chrome.tabs.executeScript(tab[0].id, {file: 'bootstrap.js'}, function() {
		console.log('executed script');
		chrome.tabs.insertCSS(tab[0].id, {file: 'bootstrap.css'}, function() {
			console.log('injected CSS');
		});
	}
});
