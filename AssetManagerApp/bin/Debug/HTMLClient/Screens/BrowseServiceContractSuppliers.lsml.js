/// <reference path="../GeneratedArtifacts/viewModel.js" />

myapp.BrowseServiceContractSuppliers.created = function (screen) {
    // Write code here.
    if (myapp.permissions["LightSwitchApplication:CanEditServiceContractSuppliers"]) {
        screen.findContentItem("AddServiceContractSupplier").isEnabled = true;
    }
    else {
        screen.findContentItem("AddServiceContractSupplier").isEnabled = false;
    }
};