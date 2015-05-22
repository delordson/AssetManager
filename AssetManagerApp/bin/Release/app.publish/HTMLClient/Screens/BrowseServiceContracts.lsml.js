/// <reference path="../GeneratedArtifacts/viewModel.js" />

myapp.BrowseServiceContracts.created = function (screen) {
    // Write code here.
    if (myapp.permissions["LightSwitchApplication:CanEditServiceContracts"]) {
        screen.findContentItem("AddServiceContract").isEnabled = true;
    }
    else {
        screen.findContentItem("AddServiceContract").isEnabled = false;
    }
};