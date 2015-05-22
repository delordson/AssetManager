/// <reference path="../GeneratedArtifacts/viewModel.js" />

myapp.BrowseAssets.created = function (screen) {
    // Write code here.
    if (myapp.permissions["LightSwitchApplication:CanEditAssets"]) {
        screen.findContentItem("AddAsset").isEnabled = true;
    }
    else {
        screen.findContentItem("AddAsset").isEnabled = false;
    }
};