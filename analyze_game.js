/*(function () {
    var HOST = document.head.getElementsByTagName("base")[0].href;
    chrome.extension.sendRequest({listenToHost: HOST});
    
    function skinXHR() {
        var SPRITE_SHEET_NAME = "INGAME_BIRDS";
        var REMOTE_DIR = "cors/fowl/sprite_sheets/";
        var REMOTE_SPRITE_MANIFEST_SRC = REMOTE_DIR + SPRITE_SHEET_NAME + ".json";
        var GHOST_ASSET_DIR = "http://www.matchusian.com/mlp_sprite_sheets/";
        
        var xhr = window.XMLHttpRequest.prototype;
        xhr.unskinnedOpen = xhr.open;
        xhr.open = function (method, url, sync) {
            if(url == REMOTE_SPRITE_MANIFEST_SRC) {
                url = GHOST_ASSET_DIR + SPRITE_SHEET_NAME + ".json";
                console.log("ponified to " + url);
            }
            return this.unskinnedOpen(method, url, sync);
        }
        console.log("skinned");
    }
    
    console.log("will skin");
    var script = document.createElement("script");
    script.innerHTML = skinXHR.toString() + "; skinXHR();";
    document.body.appendChild(script);
})();*/

(function () {
    var base = document.head.getElementsByTagName("base")[0];
    base.href = "http://chrome.angrybirds.com/";
})();
