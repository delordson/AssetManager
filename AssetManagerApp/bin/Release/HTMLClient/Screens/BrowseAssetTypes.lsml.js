/// <reference path="../GeneratedArtifacts/viewModel.js" />

myapp.BrowseAssetTypes.created = function (screen) {
    // Write code here.

    if (myapp.permissions["LightSwitchApplication:CanEditAssetTypes"]) {
        screen.findContentItem("AddAssetType").isEnabled = true;
    }
    else {
        screen.findContentItem("AddAssetType").isEnabled = false;
    }
};