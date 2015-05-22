/// <reference path="../GeneratedArtifacts/viewModel.js" />

myapp.AddEditAssetSubscriber.created = function (screen) {
    // Write code here.
    if (myapp.permissions["LightSwitchApplication:CanEditAssetSubscribers"]) {
        screen.findContentItem("DetailsTab").isReadOnly = false;
    }
    else {
        screen.findContentItem("DetailsTab").isReadOnly = true;
    }
};