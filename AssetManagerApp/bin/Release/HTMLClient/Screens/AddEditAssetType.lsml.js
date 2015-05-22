/// <reference path="../GeneratedArtifacts/viewModel.js" />

myapp.AddEditAssetType.created = function (screen) {
     //Write code here.
    if (myapp.permissions["LightSwitchApplication:CanEditAssetTypes"]) {
        screen.findContentItem("DetailsTab").isReadOnly = false;
    }
    else {
        screen.findContentItem("DetailsTab").isReadOnly = true;
    }
};