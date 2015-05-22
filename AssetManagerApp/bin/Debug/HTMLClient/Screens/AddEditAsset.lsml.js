/// <reference path="../GeneratedArtifacts/viewModel.js" />

myapp.AddEditAsset.created = function (screen) {

    var reference;
    var description;

    if (screen.Asset.Reference !== undefined) {
        reference = screen.Asset.Reference;
        description = screen.Asset.AssetDescription;
        screen.details.displayName = "Edit Asset: " + reference + " - " + description;
    }
    else {
        screen.details.displayName = "Add New Asset";
    }

    if (myapp.permissions["LightSwitchApplication:CanEditAssets"]) {
        screen.findContentItem("DetailsTab").isReadOnly = false;
        screen.findContentItem("AssetMaintenanceActivitiesTab").isReadOnly = false;
        screen.findContentItem("AssetMaintenanceSchedulesTab").isReadOnly = false;
        screen.findContentItem("AssetServiceContractsTab").isReadOnly = false;
        screen.findContentItem("CapitalAssetDetailsTab").isReadOnly = false;
        screen.findContentItem("AssetSubscribersTab").isReadOnly = false;
        screen.findContentItem("AssetCommentsTab").isReadOnly = false;
    }
    else {
        screen.findContentItem("DetailsTab").isReadOnly = true;
        screen.findContentItem("AssetMaintenanceActivitiesTab").isReadOnly = true;
        screen.findContentItem("AssetMaintenanceSchedulesTab").isReadOnly = true;
        screen.findContentItem("AssetServiceContractsTab").isReadOnly = true;
        screen.findContentItem("CapitalAssetDetailsTab").isReadOnly = true;
        screen.findContentItem("AssetSubscribersTab").isReadOnly = true;
        screen.findContentItem("AssetCommentsTab").isReadOnly = true;
    }

    if (myapp.permissions["LightSwitchApplication:CanEditAssetTypes"]) {
        screen.findContentItem("AddAssetMaintenanceActivity").isEnabled = true;
        screen.findContentItem("AddAssetMaintenanceSchedule").isEnabled = true;
        screen.findContentItem("AddAssetServiceContract").isEnabled = true;
        screen.findContentItem("AddAssetSubscriber").isEnabled = true;
        screen.findContentItem("AddAssetComment").isEnabled = true;
        screen.findContentItem("ShowImageUploader").isEnabled = true;
    }
    else {
        screen.findContentItem("AddAssetMaintenanceActivity").isEnabled = false;
        screen.findContentItem("AddAssetMaintenanceSchedule").isEnabled = false;
        screen.findContentItem("AddAssetServiceContract").isEnabled = false;
        screen.findContentItem("AddAssetSubscriber").isEnabled = false;
        screen.findContentItem("AddAssetComment").isEnabled = false;
        screen.findContentItem("ShowImageUploader").isEnabled = false;
    }
};