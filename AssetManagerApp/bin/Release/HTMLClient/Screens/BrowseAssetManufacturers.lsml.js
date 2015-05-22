/// <reference path="../GeneratedArtifacts/viewModel.js" />

myapp.BrowseAssetManufacturers.created = function (screen) {
    // Write code here.
    if (myapp.permissions["LightSwitchApplication:CanEditAssetManufacturers"]) {
        screen.findContentItem("AddAssetManufacturer").isEnabled = true;
    }
    else {
        screen.findContentItem("AddAssetManufacturer").isEnabled = false;
    }
};