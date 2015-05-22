/// <reference path="../GeneratedArtifacts/viewModel.js" />

myapp.AddEditAssetManufacturer.created = function (screen) {
    // Write code here.
    if (myapp.permissions["LightSwitchApplication:CanEditAssetManufacturers"]) {
        screen.findContentItem("DetailsTab").isReadOnly = false;
    }
    else {
        screen.findContentItem("DetailsTab").isReadOnly = true;
    }
};