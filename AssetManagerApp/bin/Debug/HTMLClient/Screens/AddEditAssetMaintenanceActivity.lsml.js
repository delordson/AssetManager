/// <reference path="../GeneratedArtifacts/viewModel.js" />

myapp.AddEditAssetMaintenanceActivity.created = function (screen) {
    // Write code here.
    if (myapp.permissions["LightSwitchApplication:CanEditAssetMaintenanceActivities"]) {
        screen.findContentItem("DetailsTab").isReadOnly = false;
    }
    else {
        screen.findContentItem("DetailsTab").isReadOnly = true;
    }
};