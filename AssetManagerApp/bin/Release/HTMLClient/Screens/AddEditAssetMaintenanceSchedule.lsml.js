/// <reference path="../GeneratedArtifacts/viewModel.js" />

myapp.AddEditAssetMaintenanceSchedule.created = function (screen) {
    // Write code here.
    if (myapp.permissions["LightSwitchApplication:CanEditAssetMaintenanceSchedules"]) {
        screen.findContentItem("DetailsTab").isReadOnly = false;
    }
    else {
        screen.findContentItem("DetailsTab").isReadOnly = true;
    }
};