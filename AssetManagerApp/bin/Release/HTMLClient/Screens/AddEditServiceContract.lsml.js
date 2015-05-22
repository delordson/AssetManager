/// <reference path="../GeneratedArtifacts/viewModel.js" />

myapp.AddEditServiceContract.created = function (screen) {
    var reference;

    if (screen.ServiceContract.ContractReference !== undefined) {
        reference = screen.ServiceContract.ContractReference;
        screen.details.displayName = "Edit Service Contract: " + reference;
    }
    else {
        screen.details.displayName = "Add New Service Contract";
    }

    if (myapp.permissions["LightSwitchApplication:CanEditServiceContracts"]) {
        screen.findContentItem("DetailsTab").isReadOnly = false;
        screen.findContentItem("AssetsCoveredTab").isReadOnly = false;
    }
    else {
        screen.findContentItem("DetailsTab").isReadOnly = true;
        screen.findContentItem("AssetsCoveredTab").isReadOnly = true;
    }

    if (myapp.permissions["LightSwitchApplication:CanEditServiceContracts"]) {
        screen.findContentItem("AddAssetServiceContract").isEnabled = true;
    }
    else {
        screen.findContentItem("AddAssetServiceContract").isEnabled = false;
    }
};