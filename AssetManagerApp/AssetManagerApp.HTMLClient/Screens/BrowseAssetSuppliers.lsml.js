/// <reference path="../GeneratedArtifacts/viewModel.js" />

myapp.BrowseAssetSuppliers.created = function (screen) {
    // Write code here.
    if (myapp.permissions["LightSwitchApplication:CanEditAssetSuppliers"]) {
        screen.findContentItem("AddAssetSupplier").isEnabled = true;
    }
    else {
        screen.findContentItem("AddAssetSupplier").isEnabled = false;
    }
};