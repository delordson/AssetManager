/// <reference path="../GeneratedArtifacts/viewModel.js" />

myapp.AddEditServiceContractSupplier.created = function (screen) {

    var supplier;

    if (screen.ServiceContractSupplier.ServiceContractSupplierDetails !== undefined) {
        supplier = screen.ServiceContractSupplier.ServiceContractSupplierDetails;
        screen.details.displayName = "Edit Supplier: " + supplier;
    }
    else {
        screen.details.displayName = "Add New Supplier";
    }

    if (myapp.permissions["LightSwitchApplication:CanEditServiceContractSuppliers"]) {
        screen.findContentItem("DetailsTab").isReadOnly = false;
        screen.findContentItem("ContractsTab").isReadOnly = false;
    }
    else {
        screen.findContentItem("DetailsTab").isReadOnly = true;
        screen.findContentItem("ContractsTab").isReadOnly = true;
    }

    if (myapp.permissions["LightSwitchApplication:CanEditServiceContractSuppliers"]) {
        screen.findContentItem("AddServiceContract").isEnabled = true;
    }
    else {
        screen.findContentItem("AddServiceContract").isEnabled = false;
    }
};