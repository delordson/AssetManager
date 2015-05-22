/// <reference path="../GeneratedArtifacts/viewModel.js" />

myapp.AddEditAssetMaintenanceType.created = function (screen) {
    // Write code here.
    if (myapp.permissions["LightSwitchApplication:CanEditAssetMaintenanceTypes"]) {
        screen.findContentItem("DetailsTab").isReadOnly = false;
    }
    else {
        screen.findContentItem("DetailsTab").isReadOnly = true;
    }
};