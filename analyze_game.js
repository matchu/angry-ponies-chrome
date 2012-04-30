(function () {
    console.log("I am analyzing the game.");

    var assetHost = document.head.getElementsByTagName('base')[0].href;
    chrome.extension.sendRequest({listenToHost: assetHost});
    console.log("Let's listen to " + assetHost);
})();
