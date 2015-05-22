/// <reference path="../GeneratedArtifacts/viewModel.js" />

myapp.BrowseAssetMaintenanceTypes.created = function (screen) {
    // Write code here.
    if (myapp.permissions["LightSwitchApplication:CanEditAssetMaintenanceTypes"]) {
        screen.findContentItem("AddAssetMaintenanceType").isEnabled = true;
    }
    else {
        screen.findContentItem("AddAssetMaintenanceType").isEnabled = false;
    }
};