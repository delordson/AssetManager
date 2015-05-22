/// <reference path="viewModel.js" />

(function (lightSwitchApplication) {

    var $element = document.createElement("div");

    lightSwitchApplication.AddEditAsset.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditAsset
        },
        DetailsTab: {
            _$class: msls.ContentItem,
            _$name: "DetailsTab",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditAsset,
            data: lightSwitchApplication.AddEditAsset,
            value: lightSwitchApplication.AddEditAsset
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "DetailsTab",
            screen: lightSwitchApplication.AddEditAsset,
            data: lightSwitchApplication.AddEditAsset,
            value: lightSwitchApplication.Asset
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditAsset,
            data: lightSwitchApplication.Asset,
            value: lightSwitchApplication.Asset
        },
        AssetTypes: {
            _$class: msls.ContentItem,
            _$name: "AssetTypes",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditAsset,
            data: lightSwitchApplication.Asset,
            value: lightSwitchApplication.AssetType
        },
        RowTemplate2: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate2",
            _$parentName: "AssetTypes",
            screen: lightSwitchApplication.AddEditAsset,
            data: lightSwitchApplication.AssetType,
            value: lightSwitchApplication.AssetType
        },
        Reference: {
            _$class: msls.ContentItem,
            _$name: "Reference",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditAsset,
            data: lightSwitchApplication.Asset,
            value: String
        },
        SerialNumber: {
            _$class: msls.ContentItem,
            _$name: "SerialNumber",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditAsset,
            data: lightSwitchApplication.Asset,
            value: String
        },
        AssetDescription: {
            _$class: msls.ContentItem,
            _$name: "AssetDescription",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditAsset,
            data: lightSwitchApplication.Asset,
            value: String
        },
        Model: {
            _$class: msls.ContentItem,
            _$name: "Model",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditAsset,
            data: lightSwitchApplication.Asset,
            value: String
        },
        Location: {
            _$class: msls.ContentItem,
            _$name: "Location",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditAsset,
            data: lightSwitchApplication.Asset,
            value: String
        },
        middle: {
            _$class: msls.ContentItem,
            _$name: "middle",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditAsset,
            data: lightSwitchApplication.Asset,
            value: lightSwitchApplication.Asset
        },
        AssetManufacturer: {
            _$class: msls.ContentItem,
            _$name: "AssetManufacturer",
            _$parentName: "middle",
            screen: lightSwitchApplication.AddEditAsset,
            data: lightSwitchApplication.Asset,
            value: lightSwitchApplication.AssetManufacturer
        },
        RowTemplate: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate",
            _$parentName: "AssetManufacturer",
            screen: lightSwitchApplication.AddEditAsset,
            data: lightSwitchApplication.AssetManufacturer,
            value: lightSwitchApplication.AssetManufacturer
        },
        AssetSupplier: {
            _$class: msls.ContentItem,
            _$name: "AssetSupplier",
            _$parentName: "middle",
            screen: lightSwitchApplication.AddEditAsset,
            data: lightSwitchApplication.Asset,
            value: lightSwitchApplication.AssetSupplier
        },
        RowTemplate1: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate1",
            _$parentName: "AssetSupplier",
            screen: lightSwitchApplication.AddEditAsset,
            data: lightSwitchApplication.AssetSupplier,
            value: lightSwitchApplication.AssetSupplier
        },
        PurchaseDate: {
            _$class: msls.ContentItem,
            _$name: "PurchaseDate",
            _$parentName: "middle",
            screen: lightSwitchApplication.AddEditAsset,
            data: lightSwitchApplication.Asset,
            value: Date
        },
        CommissionDate: {
            _$class: msls.ContentItem,
            _$name: "CommissionDate",
            _$parentName: "middle",
            screen: lightSwitchApplication.AddEditAsset,
            data: lightSwitchApplication.Asset,
            value: Date
        },
        IntendedReplacementDate: {
            _$class: msls.ContentItem,
            _$name: "IntendedReplacementDate",
            _$parentName: "middle",
            screen: lightSwitchApplication.AddEditAsset,
            data: lightSwitchApplication.Asset,
            value: Date
        },
        InUse: {
            _$class: msls.ContentItem,
            _$name: "InUse",
            _$parentName: "middle",
            screen: lightSwitchApplication.AddEditAsset,
            data: lightSwitchApplication.Asset,
            value: Boolean
        },
        DateRemovedFromUse: {
            _$class: msls.ContentItem,
            _$name: "DateRemovedFromUse",
            _$parentName: "middle",
            screen: lightSwitchApplication.AddEditAsset,
            data: lightSwitchApplication.Asset,
            value: Date
        },
        right: {
            _$class: msls.ContentItem,
            _$name: "right",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditAsset,
            data: lightSwitchApplication.Asset,
            value: lightSwitchApplication.Asset
        },
        AssetImage: {
            _$class: msls.ContentItem,
            _$name: "AssetImage",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditAsset,
            data: lightSwitchApplication.Asset,
            value: String
        },
        ShowImageUploader: {
            _$class: msls.ContentItem,
            _$name: "ShowImageUploader",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditAsset
        },
        AssetMaintenanceActivitiesTab: {
            _$class: msls.ContentItem,
            _$name: "AssetMaintenanceActivitiesTab",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditAsset,
            data: lightSwitchApplication.AddEditAsset,
            value: lightSwitchApplication.AddEditAsset
        },
        AssetMaintenanceActivities1: {
            _$class: msls.ContentItem,
            _$name: "AssetMaintenanceActivities1",
            _$parentName: "AssetMaintenanceActivitiesTab",
            screen: lightSwitchApplication.AddEditAsset,
            data: lightSwitchApplication.AddEditAsset,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.AddEditAsset,
                _$entry: {
                    elementType: lightSwitchApplication.AssetMaintenanceActivity
                }
            }
        },
        RowTemplate4: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate4",
            _$parentName: "AssetMaintenanceActivities1",
            screen: lightSwitchApplication.AddEditAsset,
            data: lightSwitchApplication.AssetMaintenanceActivity,
            value: lightSwitchApplication.AssetMaintenanceActivity
        },
        AssetMaintenanceType: {
            _$class: msls.ContentItem,
            _$name: "AssetMaintenanceType",
            _$parentName: "RowTemplate4",
            screen: lightSwitchApplication.AddEditAsset,
            data: lightSwitchApplication.AssetMaintenanceActivity,
            value: lightSwitchApplication.AssetMaintenanceType
        },
        DateDue: {
            _$class: msls.ContentItem,
            _$name: "DateDue",
            _$parentName: "RowTemplate4",
            screen: lightSwitchApplication.AddEditAsset,
            data: lightSwitchApplication.AssetMaintenanceActivity,
            value: Date
        },
        DateCompleted: {
            _$class: msls.ContentItem,
            _$name: "DateCompleted",
            _$parentName: "RowTemplate4",
            screen: lightSwitchApplication.AddEditAsset,
            data: lightSwitchApplication.AssetMaintenanceActivity,
            value: Date
        },
        Outcome: {
            _$class: msls.ContentItem,
            _$name: "Outcome",
            _$parentName: "RowTemplate4",
            screen: lightSwitchApplication.AddEditAsset,
            data: lightSwitchApplication.AssetMaintenanceActivity,
            value: String
        },
        AssetMaintenanceSchedulesTab: {
            _$class: msls.ContentItem,
            _$name: "AssetMaintenanceSchedulesTab",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditAsset,
            data: lightSwitchApplication.AddEditAsset,
            value: lightSwitchApplication.AddEditAsset
        },
        AssetMaintenanceSchedules1: {
            _$class: msls.ContentItem,
            _$name: "AssetMaintenanceSchedules1",
            _$parentName: "AssetMaintenanceSchedulesTab",
            screen: lightSwitchApplication.AddEditAsset,
            data: lightSwitchApplication.AddEditAsset,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.AddEditAsset,
                _$entry: {
                    elementType: lightSwitchApplication.AssetMaintenanceSchedule
                }
            }
        },
        RowTemplate6: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate6",
            _$parentName: "AssetMaintenanceSchedules1",
            screen: lightSwitchApplication.AddEditAsset,
            data: lightSwitchApplication.AssetMaintenanceSchedule,
            value: lightSwitchApplication.AssetMaintenanceSchedule
        },
        AssetMaintenanceType1: {
            _$class: msls.ContentItem,
            _$name: "AssetMaintenanceType1",
            _$parentName: "RowTemplate6",
            screen: lightSwitchApplication.AddEditAsset,
            data: lightSwitchApplication.AssetMaintenanceSchedule,
            value: lightSwitchApplication.AssetMaintenanceType
        },
        MaintenanceTypeIntervalInMonths: {
            _$class: msls.ContentItem,
            _$name: "MaintenanceTypeIntervalInMonths",
            _$parentName: "RowTemplate6",
            screen: lightSwitchApplication.AddEditAsset,
            data: lightSwitchApplication.AssetMaintenanceSchedule,
            value: Number
        },
        AssetServiceContractsTab: {
            _$class: msls.ContentItem,
            _$name: "AssetServiceContractsTab",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditAsset,
            data: lightSwitchApplication.AddEditAsset,
            value: lightSwitchApplication.AddEditAsset
        },
        AssetServiceContracts: {
            _$class: msls.ContentItem,
            _$name: "AssetServiceContracts",
            _$parentName: "AssetServiceContractsTab",
            screen: lightSwitchApplication.AddEditAsset,
            data: lightSwitchApplication.AddEditAsset,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.AddEditAsset,
                _$entry: {
                    elementType: lightSwitchApplication.AssetServiceContract
                }
            }
        },
        AssetServiceContractsTemplate: {
            _$class: msls.ContentItem,
            _$name: "AssetServiceContractsTemplate",
            _$parentName: "AssetServiceContracts",
            screen: lightSwitchApplication.AddEditAsset,
            data: lightSwitchApplication.AssetServiceContract,
            value: lightSwitchApplication.AssetServiceContract
        },
        ServiceContract_ContractReference: {
            _$class: msls.ContentItem,
            _$name: "ServiceContract_ContractReference",
            _$parentName: "AssetServiceContractsTemplate",
            screen: lightSwitchApplication.AddEditAsset,
            data: lightSwitchApplication.AssetServiceContract,
            value: String
        },
        ServiceContract_ContractName: {
            _$class: msls.ContentItem,
            _$name: "ServiceContract_ContractName",
            _$parentName: "AssetServiceContractsTemplate",
            screen: lightSwitchApplication.AddEditAsset,
            data: lightSwitchApplication.AssetServiceContract,
            value: String
        },
        ServiceContract_StartDate: {
            _$class: msls.ContentItem,
            _$name: "ServiceContract_StartDate",
            _$parentName: "AssetServiceContractsTemplate",
            screen: lightSwitchApplication.AddEditAsset,
            data: lightSwitchApplication.AssetServiceContract,
            value: Date
        },
        ServiceContract_EndDate: {
            _$class: msls.ContentItem,
            _$name: "ServiceContract_EndDate",
            _$parentName: "AssetServiceContractsTemplate",
            screen: lightSwitchApplication.AddEditAsset,
            data: lightSwitchApplication.AssetServiceContract,
            value: Date
        },
        ServiceContract_ServiceContractSupplier: {
            _$class: msls.ContentItem,
            _$name: "ServiceContract_ServiceContractSupplier",
            _$parentName: "AssetServiceContractsTemplate",
            screen: lightSwitchApplication.AddEditAsset,
            data: lightSwitchApplication.AssetServiceContract,
            value: lightSwitchApplication.ServiceContractSupplier
        },
        CapitalAssetDetailsTab: {
            _$class: msls.ContentItem,
            _$name: "CapitalAssetDetailsTab",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditAsset,
            data: lightSwitchApplication.AddEditAsset,
            value: lightSwitchApplication.AddEditAsset
        },
        Asset_CapitalAssetReference: {
            _$class: msls.ContentItem,
            _$name: "Asset_CapitalAssetReference",
            _$parentName: "CapitalAssetDetailsTab",
            screen: lightSwitchApplication.AddEditAsset,
            data: lightSwitchApplication.AddEditAsset,
            value: String
        },
        Asset_PurchasePrice: {
            _$class: msls.ContentItem,
            _$name: "Asset_PurchasePrice",
            _$parentName: "CapitalAssetDetailsTab",
            screen: lightSwitchApplication.AddEditAsset,
            data: lightSwitchApplication.AddEditAsset,
            value: String
        },
        Asset_CurrentValue: {
            _$class: msls.ContentItem,
            _$name: "Asset_CurrentValue",
            _$parentName: "CapitalAssetDetailsTab",
            screen: lightSwitchApplication.AddEditAsset,
            data: lightSwitchApplication.AddEditAsset,
            value: String
        },
        Asset_DateCurrentValueEvaluated: {
            _$class: msls.ContentItem,
            _$name: "Asset_DateCurrentValueEvaluated",
            _$parentName: "CapitalAssetDetailsTab",
            screen: lightSwitchApplication.AddEditAsset,
            data: lightSwitchApplication.AddEditAsset,
            value: Date
        },
        AssetSubscribersTab: {
            _$class: msls.ContentItem,
            _$name: "AssetSubscribersTab",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditAsset,
            data: lightSwitchApplication.AddEditAsset,
            value: lightSwitchApplication.AddEditAsset
        },
        AssetSubscribers1: {
            _$class: msls.ContentItem,
            _$name: "AssetSubscribers1",
            _$parentName: "AssetSubscribersTab",
            screen: lightSwitchApplication.AddEditAsset,
            data: lightSwitchApplication.AddEditAsset,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.AddEditAsset,
                _$entry: {
                    elementType: lightSwitchApplication.AssetSubscriber
                }
            }
        },
        RowTemplate10: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate10",
            _$parentName: "AssetSubscribers1",
            screen: lightSwitchApplication.AddEditAsset,
            data: lightSwitchApplication.AssetSubscriber,
            value: lightSwitchApplication.AssetSubscriber
        },
        UserName: {
            _$class: msls.ContentItem,
            _$name: "UserName",
            _$parentName: "RowTemplate10",
            screen: lightSwitchApplication.AddEditAsset,
            data: lightSwitchApplication.AssetSubscriber,
            value: String
        },
        LastName: {
            _$class: msls.ContentItem,
            _$name: "LastName",
            _$parentName: "RowTemplate10",
            screen: lightSwitchApplication.AddEditAsset,
            data: lightSwitchApplication.AssetSubscriber,
            value: String
        },
        FirstName: {
            _$class: msls.ContentItem,
            _$name: "FirstName",
            _$parentName: "RowTemplate10",
            screen: lightSwitchApplication.AddEditAsset,
            data: lightSwitchApplication.AssetSubscriber,
            value: String
        },
        AssetCommentsTab: {
            _$class: msls.ContentItem,
            _$name: "AssetCommentsTab",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditAsset,
            data: lightSwitchApplication.AddEditAsset,
            value: lightSwitchApplication.AddEditAsset
        },
        AssetComments1: {
            _$class: msls.ContentItem,
            _$name: "AssetComments1",
            _$parentName: "AssetCommentsTab",
            screen: lightSwitchApplication.AddEditAsset,
            data: lightSwitchApplication.AddEditAsset,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.AddEditAsset,
                _$entry: {
                    elementType: lightSwitchApplication.AssetComment
                }
            }
        },
        RowTemplate3: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate3",
            _$parentName: "AssetComments1",
            screen: lightSwitchApplication.AddEditAsset,
            data: lightSwitchApplication.AssetComment,
            value: lightSwitchApplication.AssetComment
        },
        CommentDate: {
            _$class: msls.ContentItem,
            _$name: "CommentDate",
            _$parentName: "RowTemplate3",
            screen: lightSwitchApplication.AddEditAsset,
            data: lightSwitchApplication.AssetComment,
            value: Date
        },
        Comment: {
            _$class: msls.ContentItem,
            _$name: "Comment",
            _$parentName: "RowTemplate3",
            screen: lightSwitchApplication.AddEditAsset,
            data: lightSwitchApplication.AssetComment,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditAsset
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEditAsset, {
        /// <field>
        /// Called when a new AddEditAsset screen is created.
        /// <br/>created(msls.application.AddEditAsset screen)
        /// </field>
        created: [lightSwitchApplication.AddEditAsset],
        /// <field>
        /// Called before changes on an active AddEditAsset screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditAsset screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditAsset],
        /// <field>
        /// Called after the DetailsTab content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DetailsTab_postRender: [$element, function () { return new lightSwitchApplication.AddEditAsset().findContentItem("DetailsTab"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.AddEditAsset().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.AddEditAsset().findContentItem("left"); }],
        /// <field>
        /// Called after the AssetTypes content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        AssetTypes_postRender: [$element, function () { return new lightSwitchApplication.AddEditAsset().findContentItem("AssetTypes"); }],
        /// <field>
        /// Called after the RowTemplate2 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate2_postRender: [$element, function () { return new lightSwitchApplication.AddEditAsset().findContentItem("RowTemplate2"); }],
        /// <field>
        /// Called after the Reference content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Reference_postRender: [$element, function () { return new lightSwitchApplication.AddEditAsset().findContentItem("Reference"); }],
        /// <field>
        /// Called after the SerialNumber content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        SerialNumber_postRender: [$element, function () { return new lightSwitchApplication.AddEditAsset().findContentItem("SerialNumber"); }],
        /// <field>
        /// Called after the AssetDescription content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        AssetDescription_postRender: [$element, function () { return new lightSwitchApplication.AddEditAsset().findContentItem("AssetDescription"); }],
        /// <field>
        /// Called after the Model content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Model_postRender: [$element, function () { return new lightSwitchApplication.AddEditAsset().findContentItem("Model"); }],
        /// <field>
        /// Called after the Location content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Location_postRender: [$element, function () { return new lightSwitchApplication.AddEditAsset().findContentItem("Location"); }],
        /// <field>
        /// Called after the middle content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        middle_postRender: [$element, function () { return new lightSwitchApplication.AddEditAsset().findContentItem("middle"); }],
        /// <field>
        /// Called after the AssetManufacturer content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        AssetManufacturer_postRender: [$element, function () { return new lightSwitchApplication.AddEditAsset().findContentItem("AssetManufacturer"); }],
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: [$element, function () { return new lightSwitchApplication.AddEditAsset().findContentItem("RowTemplate"); }],
        /// <field>
        /// Called after the AssetSupplier content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        AssetSupplier_postRender: [$element, function () { return new lightSwitchApplication.AddEditAsset().findContentItem("AssetSupplier"); }],
        /// <field>
        /// Called after the RowTemplate1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate1_postRender: [$element, function () { return new lightSwitchApplication.AddEditAsset().findContentItem("RowTemplate1"); }],
        /// <field>
        /// Called after the PurchaseDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PurchaseDate_postRender: [$element, function () { return new lightSwitchApplication.AddEditAsset().findContentItem("PurchaseDate"); }],
        /// <field>
        /// Called after the CommissionDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CommissionDate_postRender: [$element, function () { return new lightSwitchApplication.AddEditAsset().findContentItem("CommissionDate"); }],
        /// <field>
        /// Called after the IntendedReplacementDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        IntendedReplacementDate_postRender: [$element, function () { return new lightSwitchApplication.AddEditAsset().findContentItem("IntendedReplacementDate"); }],
        /// <field>
        /// Called after the InUse content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        InUse_postRender: [$element, function () { return new lightSwitchApplication.AddEditAsset().findContentItem("InUse"); }],
        /// <field>
        /// Called after the DateRemovedFromUse content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DateRemovedFromUse_postRender: [$element, function () { return new lightSwitchApplication.AddEditAsset().findContentItem("DateRemovedFromUse"); }],
        /// <field>
        /// Called after the right content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        right_postRender: [$element, function () { return new lightSwitchApplication.AddEditAsset().findContentItem("right"); }],
        /// <field>
        /// Called after the AssetImage content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        AssetImage_postRender: [$element, function () { return new lightSwitchApplication.AddEditAsset().findContentItem("AssetImage"); }],
        /// <field>
        /// Called after the ShowImageUploader content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ShowImageUploader_postRender: [$element, function () { return new lightSwitchApplication.AddEditAsset().findContentItem("ShowImageUploader"); }],
        /// <field>
        /// Called after the AssetMaintenanceActivitiesTab content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        AssetMaintenanceActivitiesTab_postRender: [$element, function () { return new lightSwitchApplication.AddEditAsset().findContentItem("AssetMaintenanceActivitiesTab"); }],
        /// <field>
        /// Called after the AssetMaintenanceActivities1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        AssetMaintenanceActivities1_postRender: [$element, function () { return new lightSwitchApplication.AddEditAsset().findContentItem("AssetMaintenanceActivities1"); }],
        /// <field>
        /// Called after the RowTemplate4 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate4_postRender: [$element, function () { return new lightSwitchApplication.AddEditAsset().findContentItem("RowTemplate4"); }],
        /// <field>
        /// Called after the AssetMaintenanceType content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        AssetMaintenanceType_postRender: [$element, function () { return new lightSwitchApplication.AddEditAsset().findContentItem("AssetMaintenanceType"); }],
        /// <field>
        /// Called after the DateDue content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DateDue_postRender: [$element, function () { return new lightSwitchApplication.AddEditAsset().findContentItem("DateDue"); }],
        /// <field>
        /// Called after the DateCompleted content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DateCompleted_postRender: [$element, function () { return new lightSwitchApplication.AddEditAsset().findContentItem("DateCompleted"); }],
        /// <field>
        /// Called after the Outcome content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Outcome_postRender: [$element, function () { return new lightSwitchApplication.AddEditAsset().findContentItem("Outcome"); }],
        /// <field>
        /// Called after the AssetMaintenanceSchedulesTab content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        AssetMaintenanceSchedulesTab_postRender: [$element, function () { return new lightSwitchApplication.AddEditAsset().findContentItem("AssetMaintenanceSchedulesTab"); }],
        /// <field>
        /// Called after the AssetMaintenanceSchedules1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        AssetMaintenanceSchedules1_postRender: [$element, function () { return new lightSwitchApplication.AddEditAsset().findContentItem("AssetMaintenanceSchedules1"); }],
        /// <field>
        /// Called after the RowTemplate6 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate6_postRender: [$element, function () { return new lightSwitchApplication.AddEditAsset().findContentItem("RowTemplate6"); }],
        /// <field>
        /// Called after the AssetMaintenanceType1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        AssetMaintenanceType1_postRender: [$element, function () { return new lightSwitchApplication.AddEditAsset().findContentItem("AssetMaintenanceType1"); }],
        /// <field>
        /// Called after the MaintenanceTypeIntervalInMonths content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        MaintenanceTypeIntervalInMonths_postRender: [$element, function () { return new lightSwitchApplication.AddEditAsset().findContentItem("MaintenanceTypeIntervalInMonths"); }],
        /// <field>
        /// Called after the AssetServiceContractsTab content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        AssetServiceContractsTab_postRender: [$element, function () { return new lightSwitchApplication.AddEditAsset().findContentItem("AssetServiceContractsTab"); }],
        /// <field>
        /// Called after the AssetServiceContracts content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        AssetServiceContracts_postRender: [$element, function () { return new lightSwitchApplication.AddEditAsset().findContentItem("AssetServiceContracts"); }],
        /// <field>
        /// Called after the AssetServiceContractsTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        AssetServiceContractsTemplate_postRender: [$element, function () { return new lightSwitchApplication.AddEditAsset().findContentItem("AssetServiceContractsTemplate"); }],
        /// <field>
        /// Called after the ServiceContract_ContractReference content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ServiceContract_ContractReference_postRender: [$element, function () { return new lightSwitchApplication.AddEditAsset().findContentItem("ServiceContract_ContractReference"); }],
        /// <field>
        /// Called after the ServiceContract_ContractName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ServiceContract_ContractName_postRender: [$element, function () { return new lightSwitchApplication.AddEditAsset().findContentItem("ServiceContract_ContractName"); }],
        /// <field>
        /// Called after the ServiceContract_StartDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ServiceContract_StartDate_postRender: [$element, function () { return new lightSwitchApplication.AddEditAsset().findContentItem("ServiceContract_StartDate"); }],
        /// <field>
        /// Called after the ServiceContract_EndDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ServiceContract_EndDate_postRender: [$element, function () { return new lightSwitchApplication.AddEditAsset().findContentItem("ServiceContract_EndDate"); }],
        /// <field>
        /// Called after the ServiceContract_ServiceContractSupplier content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ServiceContract_ServiceContractSupplier_postRender: [$element, function () { return new lightSwitchApplication.AddEditAsset().findContentItem("ServiceContract_ServiceContractSupplier"); }],
        /// <field>
        /// Called after the CapitalAssetDetailsTab content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CapitalAssetDetailsTab_postRender: [$element, function () { return new lightSwitchApplication.AddEditAsset().findContentItem("CapitalAssetDetailsTab"); }],
        /// <field>
        /// Called after the Asset_CapitalAssetReference content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Asset_CapitalAssetReference_postRender: [$element, function () { return new lightSwitchApplication.AddEditAsset().findContentItem("Asset_CapitalAssetReference"); }],
        /// <field>
        /// Called after the Asset_PurchasePrice content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Asset_PurchasePrice_postRender: [$element, function () { return new lightSwitchApplication.AddEditAsset().findContentItem("Asset_PurchasePrice"); }],
        /// <field>
        /// Called after the Asset_CurrentValue content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Asset_CurrentValue_postRender: [$element, function () { return new lightSwitchApplication.AddEditAsset().findContentItem("Asset_CurrentValue"); }],
        /// <field>
        /// Called after the Asset_DateCurrentValueEvaluated content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Asset_DateCurrentValueEvaluated_postRender: [$element, function () { return new lightSwitchApplication.AddEditAsset().findContentItem("Asset_DateCurrentValueEvaluated"); }],
        /// <field>
        /// Called after the AssetSubscribersTab content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        AssetSubscribersTab_postRender: [$element, function () { return new lightSwitchApplication.AddEditAsset().findContentItem("AssetSubscribersTab"); }],
        /// <field>
        /// Called after the AssetSubscribers1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        AssetSubscribers1_postRender: [$element, function () { return new lightSwitchApplication.AddEditAsset().findContentItem("AssetSubscribers1"); }],
        /// <field>
        /// Called after the RowTemplate10 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate10_postRender: [$element, function () { return new lightSwitchApplication.AddEditAsset().findContentItem("RowTemplate10"); }],
        /// <field>
        /// Called after the UserName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        UserName_postRender: [$element, function () { return new lightSwitchApplication.AddEditAsset().findContentItem("UserName"); }],
        /// <field>
        /// Called after the LastName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        LastName_postRender: [$element, function () { return new lightSwitchApplication.AddEditAsset().findContentItem("LastName"); }],
        /// <field>
        /// Called after the FirstName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        FirstName_postRender: [$element, function () { return new lightSwitchApplication.AddEditAsset().findContentItem("FirstName"); }],
        /// <field>
        /// Called after the AssetCommentsTab content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        AssetCommentsTab_postRender: [$element, function () { return new lightSwitchApplication.AddEditAsset().findContentItem("AssetCommentsTab"); }],
        /// <field>
        /// Called after the AssetComments1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        AssetComments1_postRender: [$element, function () { return new lightSwitchApplication.AddEditAsset().findContentItem("AssetComments1"); }],
        /// <field>
        /// Called after the RowTemplate3 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate3_postRender: [$element, function () { return new lightSwitchApplication.AddEditAsset().findContentItem("RowTemplate3"); }],
        /// <field>
        /// Called after the CommentDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CommentDate_postRender: [$element, function () { return new lightSwitchApplication.AddEditAsset().findContentItem("CommentDate"); }],
        /// <field>
        /// Called after the Comment content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Comment_postRender: [$element, function () { return new lightSwitchApplication.AddEditAsset().findContentItem("Comment"); }]
    });

    lightSwitchApplication.AddEditAssetComment.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditAssetComment
        },
        DetailsTab: {
            _$class: msls.ContentItem,
            _$name: "DetailsTab",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditAssetComment,
            data: lightSwitchApplication.AddEditAssetComment,
            value: lightSwitchApplication.AddEditAssetComment
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "DetailsTab",
            screen: lightSwitchApplication.AddEditAssetComment,
            data: lightSwitchApplication.AddEditAssetComment,
            value: lightSwitchApplication.AssetComment
        },
        CommentDate: {
            _$class: msls.ContentItem,
            _$name: "CommentDate",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditAssetComment,
            data: lightSwitchApplication.AssetComment,
            value: Date
        },
        Comment: {
            _$class: msls.ContentItem,
            _$name: "Comment",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditAssetComment,
            data: lightSwitchApplication.AssetComment,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditAssetComment
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEditAssetComment, {
        /// <field>
        /// Called when a new AddEditAssetComment screen is created.
        /// <br/>created(msls.application.AddEditAssetComment screen)
        /// </field>
        created: [lightSwitchApplication.AddEditAssetComment],
        /// <field>
        /// Called before changes on an active AddEditAssetComment screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditAssetComment screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditAssetComment],
        /// <field>
        /// Called after the DetailsTab content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DetailsTab_postRender: [$element, function () { return new lightSwitchApplication.AddEditAssetComment().findContentItem("DetailsTab"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.AddEditAssetComment().findContentItem("columns"); }],
        /// <field>
        /// Called after the CommentDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CommentDate_postRender: [$element, function () { return new lightSwitchApplication.AddEditAssetComment().findContentItem("CommentDate"); }],
        /// <field>
        /// Called after the Comment content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Comment_postRender: [$element, function () { return new lightSwitchApplication.AddEditAssetComment().findContentItem("Comment"); }]
    });

    lightSwitchApplication.AddEditAssetImage.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditAssetImage
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditAssetImage,
            data: lightSwitchApplication.AddEditAssetImage,
            value: lightSwitchApplication.AddEditAssetImage
        },
        AssetImage: {
            _$class: msls.ContentItem,
            _$name: "AssetImage",
            _$parentName: "Details",
            screen: lightSwitchApplication.AddEditAssetImage,
            data: lightSwitchApplication.AddEditAssetImage,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditAssetImage
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEditAssetImage, {
        /// <field>
        /// Called when a new AddEditAssetImage screen is created.
        /// <br/>created(msls.application.AddEditAssetImage screen)
        /// </field>
        created: [lightSwitchApplication.AddEditAssetImage],
        /// <field>
        /// Called before changes on an active AddEditAssetImage screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditAssetImage screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditAssetImage],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.AddEditAssetImage().findContentItem("Details"); }],
        /// <field>
        /// Called to render the AssetImage content item.
        /// <br/>render(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        AssetImage_render: [$element, function () { return new lightSwitchApplication.AddEditAssetImage().findContentItem("AssetImage"); }]
    });

    lightSwitchApplication.AddEditAssetMaintenanceActivity.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditAssetMaintenanceActivity
        },
        DetailsTab: {
            _$class: msls.ContentItem,
            _$name: "DetailsTab",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditAssetMaintenanceActivity,
            data: lightSwitchApplication.AddEditAssetMaintenanceActivity,
            value: lightSwitchApplication.AddEditAssetMaintenanceActivity
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "DetailsTab",
            screen: lightSwitchApplication.AddEditAssetMaintenanceActivity,
            data: lightSwitchApplication.AddEditAssetMaintenanceActivity,
            value: lightSwitchApplication.AssetMaintenanceActivity
        },
        AssetMaintenanceType: {
            _$class: msls.ContentItem,
            _$name: "AssetMaintenanceType",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditAssetMaintenanceActivity,
            data: lightSwitchApplication.AssetMaintenanceActivity,
            value: lightSwitchApplication.AssetMaintenanceType
        },
        RowTemplate1: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate1",
            _$parentName: "AssetMaintenanceType",
            screen: lightSwitchApplication.AddEditAssetMaintenanceActivity,
            data: lightSwitchApplication.AssetMaintenanceType,
            value: lightSwitchApplication.AssetMaintenanceType
        },
        DateDue: {
            _$class: msls.ContentItem,
            _$name: "DateDue",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditAssetMaintenanceActivity,
            data: lightSwitchApplication.AssetMaintenanceActivity,
            value: Date
        },
        DateCompleted: {
            _$class: msls.ContentItem,
            _$name: "DateCompleted",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditAssetMaintenanceActivity,
            data: lightSwitchApplication.AssetMaintenanceActivity,
            value: Date
        },
        Outcome: {
            _$class: msls.ContentItem,
            _$name: "Outcome",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditAssetMaintenanceActivity,
            data: lightSwitchApplication.AssetMaintenanceActivity,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditAssetMaintenanceActivity
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEditAssetMaintenanceActivity, {
        /// <field>
        /// Called when a new AddEditAssetMaintenanceActivity screen is created.
        /// <br/>created(msls.application.AddEditAssetMaintenanceActivity screen)
        /// </field>
        created: [lightSwitchApplication.AddEditAssetMaintenanceActivity],
        /// <field>
        /// Called before changes on an active AddEditAssetMaintenanceActivity screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditAssetMaintenanceActivity screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditAssetMaintenanceActivity],
        /// <field>
        /// Called after the DetailsTab content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DetailsTab_postRender: [$element, function () { return new lightSwitchApplication.AddEditAssetMaintenanceActivity().findContentItem("DetailsTab"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.AddEditAssetMaintenanceActivity().findContentItem("columns"); }],
        /// <field>
        /// Called after the AssetMaintenanceType content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        AssetMaintenanceType_postRender: [$element, function () { return new lightSwitchApplication.AddEditAssetMaintenanceActivity().findContentItem("AssetMaintenanceType"); }],
        /// <field>
        /// Called after the RowTemplate1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate1_postRender: [$element, function () { return new lightSwitchApplication.AddEditAssetMaintenanceActivity().findContentItem("RowTemplate1"); }],
        /// <field>
        /// Called after the DateDue content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DateDue_postRender: [$element, function () { return new lightSwitchApplication.AddEditAssetMaintenanceActivity().findContentItem("DateDue"); }],
        /// <field>
        /// Called after the DateCompleted content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DateCompleted_postRender: [$element, function () { return new lightSwitchApplication.AddEditAssetMaintenanceActivity().findContentItem("DateCompleted"); }],
        /// <field>
        /// Called after the Outcome content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Outcome_postRender: [$element, function () { return new lightSwitchApplication.AddEditAssetMaintenanceActivity().findContentItem("Outcome"); }]
    });

    lightSwitchApplication.AddEditAssetMaintenanceSchedule.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditAssetMaintenanceSchedule
        },
        DetailsTab: {
            _$class: msls.ContentItem,
            _$name: "DetailsTab",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditAssetMaintenanceSchedule,
            data: lightSwitchApplication.AddEditAssetMaintenanceSchedule,
            value: lightSwitchApplication.AddEditAssetMaintenanceSchedule
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "DetailsTab",
            screen: lightSwitchApplication.AddEditAssetMaintenanceSchedule,
            data: lightSwitchApplication.AddEditAssetMaintenanceSchedule,
            value: lightSwitchApplication.AssetMaintenanceSchedule
        },
        AssetMaintenanceType: {
            _$class: msls.ContentItem,
            _$name: "AssetMaintenanceType",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditAssetMaintenanceSchedule,
            data: lightSwitchApplication.AssetMaintenanceSchedule,
            value: lightSwitchApplication.AssetMaintenanceType
        },
        RowTemplate1: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate1",
            _$parentName: "AssetMaintenanceType",
            screen: lightSwitchApplication.AddEditAssetMaintenanceSchedule,
            data: lightSwitchApplication.AssetMaintenanceType,
            value: lightSwitchApplication.AssetMaintenanceType
        },
        MaintenanceTypeIntervalInMonths: {
            _$class: msls.ContentItem,
            _$name: "MaintenanceTypeIntervalInMonths",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditAssetMaintenanceSchedule,
            data: lightSwitchApplication.AssetMaintenanceSchedule,
            value: Number
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditAssetMaintenanceSchedule
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEditAssetMaintenanceSchedule, {
        /// <field>
        /// Called when a new AddEditAssetMaintenanceSchedule screen is created.
        /// <br/>created(msls.application.AddEditAssetMaintenanceSchedule screen)
        /// </field>
        created: [lightSwitchApplication.AddEditAssetMaintenanceSchedule],
        /// <field>
        /// Called before changes on an active AddEditAssetMaintenanceSchedule screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditAssetMaintenanceSchedule screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditAssetMaintenanceSchedule],
        /// <field>
        /// Called after the DetailsTab content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DetailsTab_postRender: [$element, function () { return new lightSwitchApplication.AddEditAssetMaintenanceSchedule().findContentItem("DetailsTab"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.AddEditAssetMaintenanceSchedule().findContentItem("columns"); }],
        /// <field>
        /// Called after the AssetMaintenanceType content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        AssetMaintenanceType_postRender: [$element, function () { return new lightSwitchApplication.AddEditAssetMaintenanceSchedule().findContentItem("AssetMaintenanceType"); }],
        /// <field>
        /// Called after the RowTemplate1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate1_postRender: [$element, function () { return new lightSwitchApplication.AddEditAssetMaintenanceSchedule().findContentItem("RowTemplate1"); }],
        /// <field>
        /// Called after the MaintenanceTypeIntervalInMonths content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        MaintenanceTypeIntervalInMonths_postRender: [$element, function () { return new lightSwitchApplication.AddEditAssetMaintenanceSchedule().findContentItem("MaintenanceTypeIntervalInMonths"); }]
    });

    lightSwitchApplication.AddEditAssetMaintenanceType.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditAssetMaintenanceType
        },
        DetailsTab: {
            _$class: msls.ContentItem,
            _$name: "DetailsTab",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditAssetMaintenanceType,
            data: lightSwitchApplication.AddEditAssetMaintenanceType,
            value: lightSwitchApplication.AddEditAssetMaintenanceType
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "DetailsTab",
            screen: lightSwitchApplication.AddEditAssetMaintenanceType,
            data: lightSwitchApplication.AddEditAssetMaintenanceType,
            value: lightSwitchApplication.AssetMaintenanceType
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditAssetMaintenanceType,
            data: lightSwitchApplication.AssetMaintenanceType,
            value: lightSwitchApplication.AssetMaintenanceType
        },
        MaintenanceTypeDescription: {
            _$class: msls.ContentItem,
            _$name: "MaintenanceTypeDescription",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditAssetMaintenanceType,
            data: lightSwitchApplication.AssetMaintenanceType,
            value: String
        },
        right: {
            _$class: msls.ContentItem,
            _$name: "right",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditAssetMaintenanceType,
            data: lightSwitchApplication.AssetMaintenanceType,
            value: lightSwitchApplication.AssetMaintenanceType
        },
        InUse: {
            _$class: msls.ContentItem,
            _$name: "InUse",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditAssetMaintenanceType,
            data: lightSwitchApplication.AssetMaintenanceType,
            value: Boolean
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditAssetMaintenanceType
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEditAssetMaintenanceType, {
        /// <field>
        /// Called when a new AddEditAssetMaintenanceType screen is created.
        /// <br/>created(msls.application.AddEditAssetMaintenanceType screen)
        /// </field>
        created: [lightSwitchApplication.AddEditAssetMaintenanceType],
        /// <field>
        /// Called before changes on an active AddEditAssetMaintenanceType screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditAssetMaintenanceType screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditAssetMaintenanceType],
        /// <field>
        /// Called after the DetailsTab content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DetailsTab_postRender: [$element, function () { return new lightSwitchApplication.AddEditAssetMaintenanceType().findContentItem("DetailsTab"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.AddEditAssetMaintenanceType().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.AddEditAssetMaintenanceType().findContentItem("left"); }],
        /// <field>
        /// Called after the MaintenanceTypeDescription content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        MaintenanceTypeDescription_postRender: [$element, function () { return new lightSwitchApplication.AddEditAssetMaintenanceType().findContentItem("MaintenanceTypeDescription"); }],
        /// <field>
        /// Called after the right content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        right_postRender: [$element, function () { return new lightSwitchApplication.AddEditAssetMaintenanceType().findContentItem("right"); }],
        /// <field>
        /// Called after the InUse content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        InUse_postRender: [$element, function () { return new lightSwitchApplication.AddEditAssetMaintenanceType().findContentItem("InUse"); }]
    });

    lightSwitchApplication.AddEditAssetManufacturer.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditAssetManufacturer
        },
        DetailsTab: {
            _$class: msls.ContentItem,
            _$name: "DetailsTab",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditAssetManufacturer,
            data: lightSwitchApplication.AddEditAssetManufacturer,
            value: lightSwitchApplication.AddEditAssetManufacturer
        },
        ManufacturerGroup: {
            _$class: msls.ContentItem,
            _$name: "ManufacturerGroup",
            _$parentName: "DetailsTab",
            screen: lightSwitchApplication.AddEditAssetManufacturer,
            data: lightSwitchApplication.AddEditAssetManufacturer,
            value: lightSwitchApplication.AddEditAssetManufacturer
        },
        Manufacturer: {
            _$class: msls.ContentItem,
            _$name: "Manufacturer",
            _$parentName: "ManufacturerGroup",
            screen: lightSwitchApplication.AddEditAssetManufacturer,
            data: lightSwitchApplication.AddEditAssetManufacturer,
            value: String
        },
        DetailsGroup: {
            _$class: msls.ContentItem,
            _$name: "DetailsGroup",
            _$parentName: "DetailsTab",
            screen: lightSwitchApplication.AddEditAssetManufacturer,
            data: lightSwitchApplication.AddEditAssetManufacturer,
            value: lightSwitchApplication.AddEditAssetManufacturer
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "DetailsGroup",
            screen: lightSwitchApplication.AddEditAssetManufacturer,
            data: lightSwitchApplication.AddEditAssetManufacturer,
            value: lightSwitchApplication.AssetManufacturer
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditAssetManufacturer,
            data: lightSwitchApplication.AssetManufacturer,
            value: lightSwitchApplication.AssetManufacturer
        },
        AddressLine1: {
            _$class: msls.ContentItem,
            _$name: "AddressLine1",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditAssetManufacturer,
            data: lightSwitchApplication.AssetManufacturer,
            value: String
        },
        AddressLine2: {
            _$class: msls.ContentItem,
            _$name: "AddressLine2",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditAssetManufacturer,
            data: lightSwitchApplication.AssetManufacturer,
            value: String
        },
        AddressLine3: {
            _$class: msls.ContentItem,
            _$name: "AddressLine3",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditAssetManufacturer,
            data: lightSwitchApplication.AssetManufacturer,
            value: String
        },
        AddressLine4: {
            _$class: msls.ContentItem,
            _$name: "AddressLine4",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditAssetManufacturer,
            data: lightSwitchApplication.AssetManufacturer,
            value: String
        },
        AddressLine5: {
            _$class: msls.ContentItem,
            _$name: "AddressLine5",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditAssetManufacturer,
            data: lightSwitchApplication.AssetManufacturer,
            value: String
        },
        PostCode: {
            _$class: msls.ContentItem,
            _$name: "PostCode",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditAssetManufacturer,
            data: lightSwitchApplication.AssetManufacturer,
            value: String
        },
        right: {
            _$class: msls.ContentItem,
            _$name: "right",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditAssetManufacturer,
            data: lightSwitchApplication.AssetManufacturer,
            value: lightSwitchApplication.AssetManufacturer
        },
        Email: {
            _$class: msls.ContentItem,
            _$name: "Email",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditAssetManufacturer,
            data: lightSwitchApplication.AssetManufacturer,
            value: String
        },
        Phone1: {
            _$class: msls.ContentItem,
            _$name: "Phone1",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditAssetManufacturer,
            data: lightSwitchApplication.AssetManufacturer,
            value: String
        },
        Phone2: {
            _$class: msls.ContentItem,
            _$name: "Phone2",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditAssetManufacturer,
            data: lightSwitchApplication.AssetManufacturer,
            value: String
        },
        Fax: {
            _$class: msls.ContentItem,
            _$name: "Fax",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditAssetManufacturer,
            data: lightSwitchApplication.AssetManufacturer,
            value: String
        },
        Website: {
            _$class: msls.ContentItem,
            _$name: "Website",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditAssetManufacturer,
            data: lightSwitchApplication.AssetManufacturer,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditAssetManufacturer
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEditAssetManufacturer, {
        /// <field>
        /// Called when a new AddEditAssetManufacturer screen is created.
        /// <br/>created(msls.application.AddEditAssetManufacturer screen)
        /// </field>
        created: [lightSwitchApplication.AddEditAssetManufacturer],
        /// <field>
        /// Called before changes on an active AddEditAssetManufacturer screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditAssetManufacturer screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditAssetManufacturer],
        /// <field>
        /// Called after the DetailsTab content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DetailsTab_postRender: [$element, function () { return new lightSwitchApplication.AddEditAssetManufacturer().findContentItem("DetailsTab"); }],
        /// <field>
        /// Called after the ManufacturerGroup content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ManufacturerGroup_postRender: [$element, function () { return new lightSwitchApplication.AddEditAssetManufacturer().findContentItem("ManufacturerGroup"); }],
        /// <field>
        /// Called after the Manufacturer content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Manufacturer_postRender: [$element, function () { return new lightSwitchApplication.AddEditAssetManufacturer().findContentItem("Manufacturer"); }],
        /// <field>
        /// Called after the DetailsGroup content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DetailsGroup_postRender: [$element, function () { return new lightSwitchApplication.AddEditAssetManufacturer().findContentItem("DetailsGroup"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.AddEditAssetManufacturer().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.AddEditAssetManufacturer().findContentItem("left"); }],
        /// <field>
        /// Called after the AddressLine1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        AddressLine1_postRender: [$element, function () { return new lightSwitchApplication.AddEditAssetManufacturer().findContentItem("AddressLine1"); }],
        /// <field>
        /// Called after the AddressLine2 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        AddressLine2_postRender: [$element, function () { return new lightSwitchApplication.AddEditAssetManufacturer().findContentItem("AddressLine2"); }],
        /// <field>
        /// Called after the AddressLine3 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        AddressLine3_postRender: [$element, function () { return new lightSwitchApplication.AddEditAssetManufacturer().findContentItem("AddressLine3"); }],
        /// <field>
        /// Called after the AddressLine4 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        AddressLine4_postRender: [$element, function () { return new lightSwitchApplication.AddEditAssetManufacturer().findContentItem("AddressLine4"); }],
        /// <field>
        /// Called after the AddressLine5 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        AddressLine5_postRender: [$element, function () { return new lightSwitchApplication.AddEditAssetManufacturer().findContentItem("AddressLine5"); }],
        /// <field>
        /// Called after the PostCode content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PostCode_postRender: [$element, function () { return new lightSwitchApplication.AddEditAssetManufacturer().findContentItem("PostCode"); }],
        /// <field>
        /// Called after the right content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        right_postRender: [$element, function () { return new lightSwitchApplication.AddEditAssetManufacturer().findContentItem("right"); }],
        /// <field>
        /// Called after the Email content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Email_postRender: [$element, function () { return new lightSwitchApplication.AddEditAssetManufacturer().findContentItem("Email"); }],
        /// <field>
        /// Called after the Phone1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Phone1_postRender: [$element, function () { return new lightSwitchApplication.AddEditAssetManufacturer().findContentItem("Phone1"); }],
        /// <field>
        /// Called after the Phone2 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Phone2_postRender: [$element, function () { return new lightSwitchApplication.AddEditAssetManufacturer().findContentItem("Phone2"); }],
        /// <field>
        /// Called after the Fax content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Fax_postRender: [$element, function () { return new lightSwitchApplication.AddEditAssetManufacturer().findContentItem("Fax"); }],
        /// <field>
        /// Called after the Website content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Website_postRender: [$element, function () { return new lightSwitchApplication.AddEditAssetManufacturer().findContentItem("Website"); }]
    });

    lightSwitchApplication.AddEditAssetServiceContract.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditAssetServiceContract
        },
        DetailsTab: {
            _$class: msls.ContentItem,
            _$name: "DetailsTab",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditAssetServiceContract,
            data: lightSwitchApplication.AddEditAssetServiceContract,
            value: lightSwitchApplication.AddEditAssetServiceContract
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "DetailsTab",
            screen: lightSwitchApplication.AddEditAssetServiceContract,
            data: lightSwitchApplication.AddEditAssetServiceContract,
            value: lightSwitchApplication.AssetServiceContract
        },
        Asset1: {
            _$class: msls.ContentItem,
            _$name: "Asset1",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditAssetServiceContract,
            data: lightSwitchApplication.AssetServiceContract,
            value: lightSwitchApplication.Asset
        },
        Asset2: {
            _$class: msls.ContentItem,
            _$name: "Asset2",
            _$parentName: "Asset1",
            screen: lightSwitchApplication.AddEditAssetServiceContract,
            data: lightSwitchApplication.Asset,
            value: lightSwitchApplication.Asset
        },
        Reference: {
            _$class: msls.ContentItem,
            _$name: "Reference",
            _$parentName: "Asset2",
            screen: lightSwitchApplication.AddEditAssetServiceContract,
            data: lightSwitchApplication.Asset,
            value: String
        },
        AssetDescription: {
            _$class: msls.ContentItem,
            _$name: "AssetDescription",
            _$parentName: "Asset2",
            screen: lightSwitchApplication.AddEditAssetServiceContract,
            data: lightSwitchApplication.Asset,
            value: String
        },
        SerialNumber: {
            _$class: msls.ContentItem,
            _$name: "SerialNumber",
            _$parentName: "Asset2",
            screen: lightSwitchApplication.AddEditAssetServiceContract,
            data: lightSwitchApplication.Asset,
            value: String
        },
        Model: {
            _$class: msls.ContentItem,
            _$name: "Model",
            _$parentName: "Asset2",
            screen: lightSwitchApplication.AddEditAssetServiceContract,
            data: lightSwitchApplication.Asset,
            value: String
        },
        InUse: {
            _$class: msls.ContentItem,
            _$name: "InUse",
            _$parentName: "Asset2",
            screen: lightSwitchApplication.AddEditAssetServiceContract,
            data: lightSwitchApplication.Asset,
            value: Boolean
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditAssetServiceContract
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEditAssetServiceContract, {
        /// <field>
        /// Called when a new AddEditAssetServiceContract screen is created.
        /// <br/>created(msls.application.AddEditAssetServiceContract screen)
        /// </field>
        created: [lightSwitchApplication.AddEditAssetServiceContract],
        /// <field>
        /// Called before changes on an active AddEditAssetServiceContract screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditAssetServiceContract screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditAssetServiceContract],
        /// <field>
        /// Called after the DetailsTab content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DetailsTab_postRender: [$element, function () { return new lightSwitchApplication.AddEditAssetServiceContract().findContentItem("DetailsTab"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.AddEditAssetServiceContract().findContentItem("columns"); }],
        /// <field>
        /// Called after the Asset1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Asset1_postRender: [$element, function () { return new lightSwitchApplication.AddEditAssetServiceContract().findContentItem("Asset1"); }],
        /// <field>
        /// Called after the Asset2 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Asset2_postRender: [$element, function () { return new lightSwitchApplication.AddEditAssetServiceContract().findContentItem("Asset2"); }],
        /// <field>
        /// Called after the Reference content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Reference_postRender: [$element, function () { return new lightSwitchApplication.AddEditAssetServiceContract().findContentItem("Reference"); }],
        /// <field>
        /// Called after the AssetDescription content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        AssetDescription_postRender: [$element, function () { return new lightSwitchApplication.AddEditAssetServiceContract().findContentItem("AssetDescription"); }],
        /// <field>
        /// Called after the SerialNumber content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        SerialNumber_postRender: [$element, function () { return new lightSwitchApplication.AddEditAssetServiceContract().findContentItem("SerialNumber"); }],
        /// <field>
        /// Called after the Model content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Model_postRender: [$element, function () { return new lightSwitchApplication.AddEditAssetServiceContract().findContentItem("Model"); }],
        /// <field>
        /// Called after the InUse content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        InUse_postRender: [$element, function () { return new lightSwitchApplication.AddEditAssetServiceContract().findContentItem("InUse"); }]
    });

    lightSwitchApplication.AddEditAssetSubscriber.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditAssetSubscriber
        },
        DetailsTab: {
            _$class: msls.ContentItem,
            _$name: "DetailsTab",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditAssetSubscriber,
            data: lightSwitchApplication.AddEditAssetSubscriber,
            value: lightSwitchApplication.AddEditAssetSubscriber
        },
        Employee: {
            _$class: msls.ContentItem,
            _$name: "Employee",
            _$parentName: "DetailsTab",
            screen: lightSwitchApplication.AddEditAssetSubscriber,
            data: lightSwitchApplication.AddEditAssetSubscriber,
            value: lightSwitchApplication.Employee
        },
        RowTemplate1: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate1",
            _$parentName: "Employee",
            screen: lightSwitchApplication.AddEditAssetSubscriber,
            data: lightSwitchApplication.Employee,
            value: lightSwitchApplication.Employee
        },
        UserName: {
            _$class: msls.ContentItem,
            _$name: "UserName",
            _$parentName: "RowTemplate1",
            screen: lightSwitchApplication.AddEditAssetSubscriber,
            data: lightSwitchApplication.Employee,
            value: String
        },
        LastName: {
            _$class: msls.ContentItem,
            _$name: "LastName",
            _$parentName: "RowTemplate1",
            screen: lightSwitchApplication.AddEditAssetSubscriber,
            data: lightSwitchApplication.Employee,
            value: String
        },
        FirstName: {
            _$class: msls.ContentItem,
            _$name: "FirstName",
            _$parentName: "RowTemplate1",
            screen: lightSwitchApplication.AddEditAssetSubscriber,
            data: lightSwitchApplication.Employee,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditAssetSubscriber
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEditAssetSubscriber, {
        /// <field>
        /// Called when a new AddEditAssetSubscriber screen is created.
        /// <br/>created(msls.application.AddEditAssetSubscriber screen)
        /// </field>
        created: [lightSwitchApplication.AddEditAssetSubscriber],
        /// <field>
        /// Called before changes on an active AddEditAssetSubscriber screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditAssetSubscriber screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditAssetSubscriber],
        /// <field>
        /// Called after the DetailsTab content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DetailsTab_postRender: [$element, function () { return new lightSwitchApplication.AddEditAssetSubscriber().findContentItem("DetailsTab"); }],
        /// <field>
        /// Called after the Employee content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Employee_postRender: [$element, function () { return new lightSwitchApplication.AddEditAssetSubscriber().findContentItem("Employee"); }],
        /// <field>
        /// Called after the RowTemplate1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate1_postRender: [$element, function () { return new lightSwitchApplication.AddEditAssetSubscriber().findContentItem("RowTemplate1"); }],
        /// <field>
        /// Called after the UserName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        UserName_postRender: [$element, function () { return new lightSwitchApplication.AddEditAssetSubscriber().findContentItem("UserName"); }],
        /// <field>
        /// Called after the LastName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        LastName_postRender: [$element, function () { return new lightSwitchApplication.AddEditAssetSubscriber().findContentItem("LastName"); }],
        /// <field>
        /// Called after the FirstName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        FirstName_postRender: [$element, function () { return new lightSwitchApplication.AddEditAssetSubscriber().findContentItem("FirstName"); }]
    });

    lightSwitchApplication.AddEditAssetSupplier.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditAssetSupplier
        },
        DetailsTab: {
            _$class: msls.ContentItem,
            _$name: "DetailsTab",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditAssetSupplier,
            data: lightSwitchApplication.AddEditAssetSupplier,
            value: lightSwitchApplication.AddEditAssetSupplier
        },
        Group: {
            _$class: msls.ContentItem,
            _$name: "Group",
            _$parentName: "DetailsTab",
            screen: lightSwitchApplication.AddEditAssetSupplier,
            data: lightSwitchApplication.AddEditAssetSupplier,
            value: lightSwitchApplication.AddEditAssetSupplier
        },
        Supplier: {
            _$class: msls.ContentItem,
            _$name: "Supplier",
            _$parentName: "Group",
            screen: lightSwitchApplication.AddEditAssetSupplier,
            data: lightSwitchApplication.AddEditAssetSupplier,
            value: String
        },
        Group1: {
            _$class: msls.ContentItem,
            _$name: "Group1",
            _$parentName: "DetailsTab",
            screen: lightSwitchApplication.AddEditAssetSupplier,
            data: lightSwitchApplication.AddEditAssetSupplier,
            value: lightSwitchApplication.AddEditAssetSupplier
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "Group1",
            screen: lightSwitchApplication.AddEditAssetSupplier,
            data: lightSwitchApplication.AddEditAssetSupplier,
            value: lightSwitchApplication.AssetSupplier
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditAssetSupplier,
            data: lightSwitchApplication.AssetSupplier,
            value: lightSwitchApplication.AssetSupplier
        },
        AddressLine1: {
            _$class: msls.ContentItem,
            _$name: "AddressLine1",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditAssetSupplier,
            data: lightSwitchApplication.AssetSupplier,
            value: String
        },
        AddressLine2: {
            _$class: msls.ContentItem,
            _$name: "AddressLine2",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditAssetSupplier,
            data: lightSwitchApplication.AssetSupplier,
            value: String
        },
        AddressLine3: {
            _$class: msls.ContentItem,
            _$name: "AddressLine3",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditAssetSupplier,
            data: lightSwitchApplication.AssetSupplier,
            value: String
        },
        AddressLine4: {
            _$class: msls.ContentItem,
            _$name: "AddressLine4",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditAssetSupplier,
            data: lightSwitchApplication.AssetSupplier,
            value: String
        },
        AddressLine5: {
            _$class: msls.ContentItem,
            _$name: "AddressLine5",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditAssetSupplier,
            data: lightSwitchApplication.AssetSupplier,
            value: String
        },
        PostCode: {
            _$class: msls.ContentItem,
            _$name: "PostCode",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditAssetSupplier,
            data: lightSwitchApplication.AssetSupplier,
            value: String
        },
        right: {
            _$class: msls.ContentItem,
            _$name: "right",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditAssetSupplier,
            data: lightSwitchApplication.AssetSupplier,
            value: lightSwitchApplication.AssetSupplier
        },
        Email: {
            _$class: msls.ContentItem,
            _$name: "Email",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditAssetSupplier,
            data: lightSwitchApplication.AssetSupplier,
            value: String
        },
        Phone1: {
            _$class: msls.ContentItem,
            _$name: "Phone1",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditAssetSupplier,
            data: lightSwitchApplication.AssetSupplier,
            value: String
        },
        Phone2: {
            _$class: msls.ContentItem,
            _$name: "Phone2",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditAssetSupplier,
            data: lightSwitchApplication.AssetSupplier,
            value: String
        },
        Fax: {
            _$class: msls.ContentItem,
            _$name: "Fax",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditAssetSupplier,
            data: lightSwitchApplication.AssetSupplier,
            value: String
        },
        Website: {
            _$class: msls.ContentItem,
            _$name: "Website",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditAssetSupplier,
            data: lightSwitchApplication.AssetSupplier,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditAssetSupplier
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEditAssetSupplier, {
        /// <field>
        /// Called when a new AddEditAssetSupplier screen is created.
        /// <br/>created(msls.application.AddEditAssetSupplier screen)
        /// </field>
        created: [lightSwitchApplication.AddEditAssetSupplier],
        /// <field>
        /// Called before changes on an active AddEditAssetSupplier screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditAssetSupplier screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditAssetSupplier],
        /// <field>
        /// Called after the DetailsTab content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DetailsTab_postRender: [$element, function () { return new lightSwitchApplication.AddEditAssetSupplier().findContentItem("DetailsTab"); }],
        /// <field>
        /// Called after the Group content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Group_postRender: [$element, function () { return new lightSwitchApplication.AddEditAssetSupplier().findContentItem("Group"); }],
        /// <field>
        /// Called after the Supplier content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Supplier_postRender: [$element, function () { return new lightSwitchApplication.AddEditAssetSupplier().findContentItem("Supplier"); }],
        /// <field>
        /// Called after the Group1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Group1_postRender: [$element, function () { return new lightSwitchApplication.AddEditAssetSupplier().findContentItem("Group1"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.AddEditAssetSupplier().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.AddEditAssetSupplier().findContentItem("left"); }],
        /// <field>
        /// Called after the AddressLine1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        AddressLine1_postRender: [$element, function () { return new lightSwitchApplication.AddEditAssetSupplier().findContentItem("AddressLine1"); }],
        /// <field>
        /// Called after the AddressLine2 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        AddressLine2_postRender: [$element, function () { return new lightSwitchApplication.AddEditAssetSupplier().findContentItem("AddressLine2"); }],
        /// <field>
        /// Called after the AddressLine3 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        AddressLine3_postRender: [$element, function () { return new lightSwitchApplication.AddEditAssetSupplier().findContentItem("AddressLine3"); }],
        /// <field>
        /// Called after the AddressLine4 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        AddressLine4_postRender: [$element, function () { return new lightSwitchApplication.AddEditAssetSupplier().findContentItem("AddressLine4"); }],
        /// <field>
        /// Called after the AddressLine5 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        AddressLine5_postRender: [$element, function () { return new lightSwitchApplication.AddEditAssetSupplier().findContentItem("AddressLine5"); }],
        /// <field>
        /// Called after the PostCode content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PostCode_postRender: [$element, function () { return new lightSwitchApplication.AddEditAssetSupplier().findContentItem("PostCode"); }],
        /// <field>
        /// Called after the right content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        right_postRender: [$element, function () { return new lightSwitchApplication.AddEditAssetSupplier().findContentItem("right"); }],
        /// <field>
        /// Called after the Email content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Email_postRender: [$element, function () { return new lightSwitchApplication.AddEditAssetSupplier().findContentItem("Email"); }],
        /// <field>
        /// Called after the Phone1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Phone1_postRender: [$element, function () { return new lightSwitchApplication.AddEditAssetSupplier().findContentItem("Phone1"); }],
        /// <field>
        /// Called after the Phone2 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Phone2_postRender: [$element, function () { return new lightSwitchApplication.AddEditAssetSupplier().findContentItem("Phone2"); }],
        /// <field>
        /// Called after the Fax content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Fax_postRender: [$element, function () { return new lightSwitchApplication.AddEditAssetSupplier().findContentItem("Fax"); }],
        /// <field>
        /// Called after the Website content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Website_postRender: [$element, function () { return new lightSwitchApplication.AddEditAssetSupplier().findContentItem("Website"); }]
    });

    lightSwitchApplication.AddEditAssetType.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditAssetType
        },
        DetailsTab: {
            _$class: msls.ContentItem,
            _$name: "DetailsTab",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditAssetType,
            data: lightSwitchApplication.AddEditAssetType,
            value: lightSwitchApplication.AddEditAssetType
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "DetailsTab",
            screen: lightSwitchApplication.AddEditAssetType,
            data: lightSwitchApplication.AddEditAssetType,
            value: lightSwitchApplication.AssetType
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditAssetType,
            data: lightSwitchApplication.AssetType,
            value: lightSwitchApplication.AssetType
        },
        AssetTypeDescription: {
            _$class: msls.ContentItem,
            _$name: "AssetTypeDescription",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditAssetType,
            data: lightSwitchApplication.AssetType,
            value: String
        },
        right: {
            _$class: msls.ContentItem,
            _$name: "right",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditAssetType,
            data: lightSwitchApplication.AssetType,
            value: lightSwitchApplication.AssetType
        },
        InUse: {
            _$class: msls.ContentItem,
            _$name: "InUse",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditAssetType,
            data: lightSwitchApplication.AssetType,
            value: Boolean
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditAssetType
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEditAssetType, {
        /// <field>
        /// Called when a new AddEditAssetType screen is created.
        /// <br/>created(msls.application.AddEditAssetType screen)
        /// </field>
        created: [lightSwitchApplication.AddEditAssetType],
        /// <field>
        /// Called before changes on an active AddEditAssetType screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditAssetType screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditAssetType],
        /// <field>
        /// Called after the DetailsTab content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DetailsTab_postRender: [$element, function () { return new lightSwitchApplication.AddEditAssetType().findContentItem("DetailsTab"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.AddEditAssetType().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.AddEditAssetType().findContentItem("left"); }],
        /// <field>
        /// Called after the AssetTypeDescription content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        AssetTypeDescription_postRender: [$element, function () { return new lightSwitchApplication.AddEditAssetType().findContentItem("AssetTypeDescription"); }],
        /// <field>
        /// Called after the right content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        right_postRender: [$element, function () { return new lightSwitchApplication.AddEditAssetType().findContentItem("right"); }],
        /// <field>
        /// Called after the InUse content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        InUse_postRender: [$element, function () { return new lightSwitchApplication.AddEditAssetType().findContentItem("InUse"); }]
    });

    lightSwitchApplication.AddEditEmployee.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditEmployee
        },
        DetailsTab: {
            _$class: msls.ContentItem,
            _$name: "DetailsTab",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditEmployee,
            data: lightSwitchApplication.AddEditEmployee,
            value: lightSwitchApplication.AddEditEmployee
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "DetailsTab",
            screen: lightSwitchApplication.AddEditEmployee,
            data: lightSwitchApplication.AddEditEmployee,
            value: lightSwitchApplication.Employee
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditEmployee,
            data: lightSwitchApplication.Employee,
            value: lightSwitchApplication.Employee
        },
        UserName: {
            _$class: msls.ContentItem,
            _$name: "UserName",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditEmployee,
            data: lightSwitchApplication.Employee,
            value: String
        },
        LastName: {
            _$class: msls.ContentItem,
            _$name: "LastName",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditEmployee,
            data: lightSwitchApplication.Employee,
            value: String
        },
        FirstName: {
            _$class: msls.ContentItem,
            _$name: "FirstName",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditEmployee,
            data: lightSwitchApplication.Employee,
            value: String
        },
        right: {
            _$class: msls.ContentItem,
            _$name: "right",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditEmployee,
            data: lightSwitchApplication.Employee,
            value: lightSwitchApplication.Employee
        },
        Email: {
            _$class: msls.ContentItem,
            _$name: "Email",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditEmployee,
            data: lightSwitchApplication.Employee,
            value: String
        },
        Group: {
            _$class: msls.ContentItem,
            _$name: "Group",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditEmployee,
            data: lightSwitchApplication.Employee,
            value: lightSwitchApplication.Employee
        },
        Current: {
            _$class: msls.ContentItem,
            _$name: "Current",
            _$parentName: "Group",
            screen: lightSwitchApplication.AddEditEmployee,
            data: lightSwitchApplication.Employee,
            value: Boolean
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditEmployee
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEditEmployee, {
        /// <field>
        /// Called when a new AddEditEmployee screen is created.
        /// <br/>created(msls.application.AddEditEmployee screen)
        /// </field>
        created: [lightSwitchApplication.AddEditEmployee],
        /// <field>
        /// Called before changes on an active AddEditEmployee screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditEmployee screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditEmployee],
        /// <field>
        /// Called after the DetailsTab content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DetailsTab_postRender: [$element, function () { return new lightSwitchApplication.AddEditEmployee().findContentItem("DetailsTab"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.AddEditEmployee().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.AddEditEmployee().findContentItem("left"); }],
        /// <field>
        /// Called after the UserName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        UserName_postRender: [$element, function () { return new lightSwitchApplication.AddEditEmployee().findContentItem("UserName"); }],
        /// <field>
        /// Called after the LastName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        LastName_postRender: [$element, function () { return new lightSwitchApplication.AddEditEmployee().findContentItem("LastName"); }],
        /// <field>
        /// Called after the FirstName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        FirstName_postRender: [$element, function () { return new lightSwitchApplication.AddEditEmployee().findContentItem("FirstName"); }],
        /// <field>
        /// Called after the right content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        right_postRender: [$element, function () { return new lightSwitchApplication.AddEditEmployee().findContentItem("right"); }],
        /// <field>
        /// Called after the Email content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Email_postRender: [$element, function () { return new lightSwitchApplication.AddEditEmployee().findContentItem("Email"); }],
        /// <field>
        /// Called after the Group content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Group_postRender: [$element, function () { return new lightSwitchApplication.AddEditEmployee().findContentItem("Group"); }],
        /// <field>
        /// Called after the Current content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Current_postRender: [$element, function () { return new lightSwitchApplication.AddEditEmployee().findContentItem("Current"); }]
    });

    lightSwitchApplication.AddEditServiceContract.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditServiceContract
        },
        DetailsTab: {
            _$class: msls.ContentItem,
            _$name: "DetailsTab",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditServiceContract,
            data: lightSwitchApplication.AddEditServiceContract,
            value: lightSwitchApplication.AddEditServiceContract
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "DetailsTab",
            screen: lightSwitchApplication.AddEditServiceContract,
            data: lightSwitchApplication.AddEditServiceContract,
            value: lightSwitchApplication.ServiceContract
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditServiceContract,
            data: lightSwitchApplication.ServiceContract,
            value: lightSwitchApplication.ServiceContract
        },
        ContractReference: {
            _$class: msls.ContentItem,
            _$name: "ContractReference",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditServiceContract,
            data: lightSwitchApplication.ServiceContract,
            value: String
        },
        ContractName: {
            _$class: msls.ContentItem,
            _$name: "ContractName",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditServiceContract,
            data: lightSwitchApplication.ServiceContract,
            value: String
        },
        ContractDescription: {
            _$class: msls.ContentItem,
            _$name: "ContractDescription",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditServiceContract,
            data: lightSwitchApplication.ServiceContract,
            value: String
        },
        ContractPrice: {
            _$class: msls.ContentItem,
            _$name: "ContractPrice",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditServiceContract,
            data: lightSwitchApplication.ServiceContract,
            value: String
        },
        CurrentContract: {
            _$class: msls.ContentItem,
            _$name: "CurrentContract",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditServiceContract,
            data: lightSwitchApplication.ServiceContract,
            value: Boolean
        },
        right: {
            _$class: msls.ContentItem,
            _$name: "right",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditServiceContract,
            data: lightSwitchApplication.ServiceContract,
            value: lightSwitchApplication.ServiceContract
        },
        ServiceContractSupplier: {
            _$class: msls.ContentItem,
            _$name: "ServiceContractSupplier",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditServiceContract,
            data: lightSwitchApplication.ServiceContract,
            value: lightSwitchApplication.ServiceContractSupplier
        },
        RowTemplate: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate",
            _$parentName: "ServiceContractSupplier",
            screen: lightSwitchApplication.AddEditServiceContract,
            data: lightSwitchApplication.ServiceContractSupplier,
            value: lightSwitchApplication.ServiceContractSupplier
        },
        ServiceContractSupplier_Contact: {
            _$class: msls.ContentItem,
            _$name: "ServiceContractSupplier_Contact",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditServiceContract,
            data: lightSwitchApplication.ServiceContract,
            value: String
        },
        ServiceContractSupplier_Phone1: {
            _$class: msls.ContentItem,
            _$name: "ServiceContractSupplier_Phone1",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditServiceContract,
            data: lightSwitchApplication.ServiceContract,
            value: String
        },
        ServiceContractSupplier_Phone2: {
            _$class: msls.ContentItem,
            _$name: "ServiceContractSupplier_Phone2",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditServiceContract,
            data: lightSwitchApplication.ServiceContract,
            value: String
        },
        ServiceContractSupplier_Email: {
            _$class: msls.ContentItem,
            _$name: "ServiceContractSupplier_Email",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditServiceContract,
            data: lightSwitchApplication.ServiceContract,
            value: String
        },
        Group: {
            _$class: msls.ContentItem,
            _$name: "Group",
            _$parentName: "DetailsTab",
            screen: lightSwitchApplication.AddEditServiceContract,
            data: lightSwitchApplication.AddEditServiceContract,
            value: lightSwitchApplication.AddEditServiceContract
        },
        StartDate: {
            _$class: msls.ContentItem,
            _$name: "StartDate",
            _$parentName: "Group",
            screen: lightSwitchApplication.AddEditServiceContract,
            data: lightSwitchApplication.AddEditServiceContract,
            value: Date
        },
        EndDate: {
            _$class: msls.ContentItem,
            _$name: "EndDate",
            _$parentName: "Group",
            screen: lightSwitchApplication.AddEditServiceContract,
            data: lightSwitchApplication.AddEditServiceContract,
            value: Date
        },
        AssetsCoveredTab: {
            _$class: msls.ContentItem,
            _$name: "AssetsCoveredTab",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditServiceContract,
            data: lightSwitchApplication.AddEditServiceContract,
            value: lightSwitchApplication.AddEditServiceContract
        },
        AssetCovered: {
            _$class: msls.ContentItem,
            _$name: "AssetCovered",
            _$parentName: "AssetsCoveredTab",
            screen: lightSwitchApplication.AddEditServiceContract,
            data: lightSwitchApplication.AddEditServiceContract,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.AddEditServiceContract,
                _$entry: {
                    elementType: lightSwitchApplication.AssetServiceContract
                }
            }
        },
        AssetServiceContractsTemplate: {
            _$class: msls.ContentItem,
            _$name: "AssetServiceContractsTemplate",
            _$parentName: "AssetCovered",
            screen: lightSwitchApplication.AddEditServiceContract,
            data: lightSwitchApplication.AssetServiceContract,
            value: lightSwitchApplication.AssetServiceContract
        },
        Asset_Reference: {
            _$class: msls.ContentItem,
            _$name: "Asset_Reference",
            _$parentName: "AssetServiceContractsTemplate",
            screen: lightSwitchApplication.AddEditServiceContract,
            data: lightSwitchApplication.AssetServiceContract,
            value: String
        },
        Asset_AssetDescription: {
            _$class: msls.ContentItem,
            _$name: "Asset_AssetDescription",
            _$parentName: "AssetServiceContractsTemplate",
            screen: lightSwitchApplication.AddEditServiceContract,
            data: lightSwitchApplication.AssetServiceContract,
            value: String
        },
        Asset_SerialNumber: {
            _$class: msls.ContentItem,
            _$name: "Asset_SerialNumber",
            _$parentName: "AssetServiceContractsTemplate",
            screen: lightSwitchApplication.AddEditServiceContract,
            data: lightSwitchApplication.AssetServiceContract,
            value: String
        },
        Asset_AssetTypes_AssetTypeDescription: {
            _$class: msls.ContentItem,
            _$name: "Asset_AssetTypes_AssetTypeDescription",
            _$parentName: "AssetServiceContractsTemplate",
            screen: lightSwitchApplication.AddEditServiceContract,
            data: lightSwitchApplication.AssetServiceContract,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditServiceContract
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEditServiceContract, {
        /// <field>
        /// Called when a new AddEditServiceContract screen is created.
        /// <br/>created(msls.application.AddEditServiceContract screen)
        /// </field>
        created: [lightSwitchApplication.AddEditServiceContract],
        /// <field>
        /// Called before changes on an active AddEditServiceContract screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditServiceContract screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditServiceContract],
        /// <field>
        /// Called after the DetailsTab content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DetailsTab_postRender: [$element, function () { return new lightSwitchApplication.AddEditServiceContract().findContentItem("DetailsTab"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.AddEditServiceContract().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.AddEditServiceContract().findContentItem("left"); }],
        /// <field>
        /// Called after the ContractReference content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ContractReference_postRender: [$element, function () { return new lightSwitchApplication.AddEditServiceContract().findContentItem("ContractReference"); }],
        /// <field>
        /// Called after the ContractName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ContractName_postRender: [$element, function () { return new lightSwitchApplication.AddEditServiceContract().findContentItem("ContractName"); }],
        /// <field>
        /// Called after the ContractDescription content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ContractDescription_postRender: [$element, function () { return new lightSwitchApplication.AddEditServiceContract().findContentItem("ContractDescription"); }],
        /// <field>
        /// Called after the ContractPrice content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ContractPrice_postRender: [$element, function () { return new lightSwitchApplication.AddEditServiceContract().findContentItem("ContractPrice"); }],
        /// <field>
        /// Called after the CurrentContract content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CurrentContract_postRender: [$element, function () { return new lightSwitchApplication.AddEditServiceContract().findContentItem("CurrentContract"); }],
        /// <field>
        /// Called after the right content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        right_postRender: [$element, function () { return new lightSwitchApplication.AddEditServiceContract().findContentItem("right"); }],
        /// <field>
        /// Called after the ServiceContractSupplier content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ServiceContractSupplier_postRender: [$element, function () { return new lightSwitchApplication.AddEditServiceContract().findContentItem("ServiceContractSupplier"); }],
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: [$element, function () { return new lightSwitchApplication.AddEditServiceContract().findContentItem("RowTemplate"); }],
        /// <field>
        /// Called after the ServiceContractSupplier_Contact content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ServiceContractSupplier_Contact_postRender: [$element, function () { return new lightSwitchApplication.AddEditServiceContract().findContentItem("ServiceContractSupplier_Contact"); }],
        /// <field>
        /// Called after the ServiceContractSupplier_Phone1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ServiceContractSupplier_Phone1_postRender: [$element, function () { return new lightSwitchApplication.AddEditServiceContract().findContentItem("ServiceContractSupplier_Phone1"); }],
        /// <field>
        /// Called after the ServiceContractSupplier_Phone2 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ServiceContractSupplier_Phone2_postRender: [$element, function () { return new lightSwitchApplication.AddEditServiceContract().findContentItem("ServiceContractSupplier_Phone2"); }],
        /// <field>
        /// Called after the ServiceContractSupplier_Email content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ServiceContractSupplier_Email_postRender: [$element, function () { return new lightSwitchApplication.AddEditServiceContract().findContentItem("ServiceContractSupplier_Email"); }],
        /// <field>
        /// Called after the Group content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Group_postRender: [$element, function () { return new lightSwitchApplication.AddEditServiceContract().findContentItem("Group"); }],
        /// <field>
        /// Called after the StartDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        StartDate_postRender: [$element, function () { return new lightSwitchApplication.AddEditServiceContract().findContentItem("StartDate"); }],
        /// <field>
        /// Called after the EndDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        EndDate_postRender: [$element, function () { return new lightSwitchApplication.AddEditServiceContract().findContentItem("EndDate"); }],
        /// <field>
        /// Called after the AssetsCoveredTab content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        AssetsCoveredTab_postRender: [$element, function () { return new lightSwitchApplication.AddEditServiceContract().findContentItem("AssetsCoveredTab"); }],
        /// <field>
        /// Called after the AssetCovered content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        AssetCovered_postRender: [$element, function () { return new lightSwitchApplication.AddEditServiceContract().findContentItem("AssetCovered"); }],
        /// <field>
        /// Called after the AssetServiceContractsTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        AssetServiceContractsTemplate_postRender: [$element, function () { return new lightSwitchApplication.AddEditServiceContract().findContentItem("AssetServiceContractsTemplate"); }],
        /// <field>
        /// Called after the Asset_Reference content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Asset_Reference_postRender: [$element, function () { return new lightSwitchApplication.AddEditServiceContract().findContentItem("Asset_Reference"); }],
        /// <field>
        /// Called after the Asset_AssetDescription content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Asset_AssetDescription_postRender: [$element, function () { return new lightSwitchApplication.AddEditServiceContract().findContentItem("Asset_AssetDescription"); }],
        /// <field>
        /// Called after the Asset_SerialNumber content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Asset_SerialNumber_postRender: [$element, function () { return new lightSwitchApplication.AddEditServiceContract().findContentItem("Asset_SerialNumber"); }],
        /// <field>
        /// Called after the Asset_AssetTypes_AssetTypeDescription content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Asset_AssetTypes_AssetTypeDescription_postRender: [$element, function () { return new lightSwitchApplication.AddEditServiceContract().findContentItem("Asset_AssetTypes_AssetTypeDescription"); }]
    });

    lightSwitchApplication.AddEditServiceContractAsset.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditServiceContractAsset
        },
        DetailsTab: {
            _$class: msls.ContentItem,
            _$name: "DetailsTab",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditServiceContractAsset,
            data: lightSwitchApplication.AddEditServiceContractAsset,
            value: lightSwitchApplication.AddEditServiceContractAsset
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "DetailsTab",
            screen: lightSwitchApplication.AddEditServiceContractAsset,
            data: lightSwitchApplication.AddEditServiceContractAsset,
            value: lightSwitchApplication.AssetServiceContract
        },
        ServiceContract1: {
            _$class: msls.ContentItem,
            _$name: "ServiceContract1",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditServiceContractAsset,
            data: lightSwitchApplication.AssetServiceContract,
            value: lightSwitchApplication.ServiceContract
        },
        ServiceContract2: {
            _$class: msls.ContentItem,
            _$name: "ServiceContract2",
            _$parentName: "ServiceContract1",
            screen: lightSwitchApplication.AddEditServiceContractAsset,
            data: lightSwitchApplication.ServiceContract,
            value: lightSwitchApplication.ServiceContract
        },
        ContractReference: {
            _$class: msls.ContentItem,
            _$name: "ContractReference",
            _$parentName: "ServiceContract2",
            screen: lightSwitchApplication.AddEditServiceContractAsset,
            data: lightSwitchApplication.ServiceContract,
            value: String
        },
        ContractName: {
            _$class: msls.ContentItem,
            _$name: "ContractName",
            _$parentName: "ServiceContract2",
            screen: lightSwitchApplication.AddEditServiceContractAsset,
            data: lightSwitchApplication.ServiceContract,
            value: String
        },
        CurrentContract: {
            _$class: msls.ContentItem,
            _$name: "CurrentContract",
            _$parentName: "ServiceContract2",
            screen: lightSwitchApplication.AddEditServiceContractAsset,
            data: lightSwitchApplication.ServiceContract,
            value: Boolean
        },
        StartDate: {
            _$class: msls.ContentItem,
            _$name: "StartDate",
            _$parentName: "ServiceContract2",
            screen: lightSwitchApplication.AddEditServiceContractAsset,
            data: lightSwitchApplication.ServiceContract,
            value: Date
        },
        EndDate: {
            _$class: msls.ContentItem,
            _$name: "EndDate",
            _$parentName: "ServiceContract2",
            screen: lightSwitchApplication.AddEditServiceContractAsset,
            data: lightSwitchApplication.ServiceContract,
            value: Date
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditServiceContractAsset
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEditServiceContractAsset, {
        /// <field>
        /// Called when a new AddEditServiceContractAsset screen is created.
        /// <br/>created(msls.application.AddEditServiceContractAsset screen)
        /// </field>
        created: [lightSwitchApplication.AddEditServiceContractAsset],
        /// <field>
        /// Called before changes on an active AddEditServiceContractAsset screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditServiceContractAsset screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditServiceContractAsset],
        /// <field>
        /// Called after the DetailsTab content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DetailsTab_postRender: [$element, function () { return new lightSwitchApplication.AddEditServiceContractAsset().findContentItem("DetailsTab"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.AddEditServiceContractAsset().findContentItem("columns"); }],
        /// <field>
        /// Called after the ServiceContract1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ServiceContract1_postRender: [$element, function () { return new lightSwitchApplication.AddEditServiceContractAsset().findContentItem("ServiceContract1"); }],
        /// <field>
        /// Called after the ServiceContract2 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ServiceContract2_postRender: [$element, function () { return new lightSwitchApplication.AddEditServiceContractAsset().findContentItem("ServiceContract2"); }],
        /// <field>
        /// Called after the ContractReference content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ContractReference_postRender: [$element, function () { return new lightSwitchApplication.AddEditServiceContractAsset().findContentItem("ContractReference"); }],
        /// <field>
        /// Called after the ContractName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ContractName_postRender: [$element, function () { return new lightSwitchApplication.AddEditServiceContractAsset().findContentItem("ContractName"); }],
        /// <field>
        /// Called after the CurrentContract content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CurrentContract_postRender: [$element, function () { return new lightSwitchApplication.AddEditServiceContractAsset().findContentItem("CurrentContract"); }],
        /// <field>
        /// Called after the StartDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        StartDate_postRender: [$element, function () { return new lightSwitchApplication.AddEditServiceContractAsset().findContentItem("StartDate"); }],
        /// <field>
        /// Called after the EndDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        EndDate_postRender: [$element, function () { return new lightSwitchApplication.AddEditServiceContractAsset().findContentItem("EndDate"); }]
    });

    lightSwitchApplication.AddEditServiceContractSupplier.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditServiceContractSupplier
        },
        DetailsTab: {
            _$class: msls.ContentItem,
            _$name: "DetailsTab",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditServiceContractSupplier,
            data: lightSwitchApplication.AddEditServiceContractSupplier,
            value: lightSwitchApplication.AddEditServiceContractSupplier
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "DetailsTab",
            screen: lightSwitchApplication.AddEditServiceContractSupplier,
            data: lightSwitchApplication.AddEditServiceContractSupplier,
            value: lightSwitchApplication.ServiceContractSupplier
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditServiceContractSupplier,
            data: lightSwitchApplication.ServiceContractSupplier,
            value: lightSwitchApplication.ServiceContractSupplier
        },
        ServiceContractSupplierDetails: {
            _$class: msls.ContentItem,
            _$name: "ServiceContractSupplierDetails",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditServiceContractSupplier,
            data: lightSwitchApplication.ServiceContractSupplier,
            value: String
        },
        AddressLine1: {
            _$class: msls.ContentItem,
            _$name: "AddressLine1",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditServiceContractSupplier,
            data: lightSwitchApplication.ServiceContractSupplier,
            value: String
        },
        AddressLine2: {
            _$class: msls.ContentItem,
            _$name: "AddressLine2",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditServiceContractSupplier,
            data: lightSwitchApplication.ServiceContractSupplier,
            value: String
        },
        AddressLine3: {
            _$class: msls.ContentItem,
            _$name: "AddressLine3",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditServiceContractSupplier,
            data: lightSwitchApplication.ServiceContractSupplier,
            value: String
        },
        AddressLine4: {
            _$class: msls.ContentItem,
            _$name: "AddressLine4",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditServiceContractSupplier,
            data: lightSwitchApplication.ServiceContractSupplier,
            value: String
        },
        AddressLine5: {
            _$class: msls.ContentItem,
            _$name: "AddressLine5",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditServiceContractSupplier,
            data: lightSwitchApplication.ServiceContractSupplier,
            value: String
        },
        PostCode: {
            _$class: msls.ContentItem,
            _$name: "PostCode",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditServiceContractSupplier,
            data: lightSwitchApplication.ServiceContractSupplier,
            value: String
        },
        right: {
            _$class: msls.ContentItem,
            _$name: "right",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditServiceContractSupplier,
            data: lightSwitchApplication.ServiceContractSupplier,
            value: lightSwitchApplication.ServiceContractSupplier
        },
        Contact: {
            _$class: msls.ContentItem,
            _$name: "Contact",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditServiceContractSupplier,
            data: lightSwitchApplication.ServiceContractSupplier,
            value: String
        },
        ContactJobDescription: {
            _$class: msls.ContentItem,
            _$name: "ContactJobDescription",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditServiceContractSupplier,
            data: lightSwitchApplication.ServiceContractSupplier,
            value: String
        },
        Email: {
            _$class: msls.ContentItem,
            _$name: "Email",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditServiceContractSupplier,
            data: lightSwitchApplication.ServiceContractSupplier,
            value: String
        },
        Phone1: {
            _$class: msls.ContentItem,
            _$name: "Phone1",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditServiceContractSupplier,
            data: lightSwitchApplication.ServiceContractSupplier,
            value: String
        },
        Phone2: {
            _$class: msls.ContentItem,
            _$name: "Phone2",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditServiceContractSupplier,
            data: lightSwitchApplication.ServiceContractSupplier,
            value: String
        },
        Fax: {
            _$class: msls.ContentItem,
            _$name: "Fax",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditServiceContractSupplier,
            data: lightSwitchApplication.ServiceContractSupplier,
            value: String
        },
        Website: {
            _$class: msls.ContentItem,
            _$name: "Website",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditServiceContractSupplier,
            data: lightSwitchApplication.ServiceContractSupplier,
            value: String
        },
        ContractsTab: {
            _$class: msls.ContentItem,
            _$name: "ContractsTab",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditServiceContractSupplier,
            data: lightSwitchApplication.AddEditServiceContractSupplier,
            value: lightSwitchApplication.AddEditServiceContractSupplier
        },
        ServiceContracts: {
            _$class: msls.ContentItem,
            _$name: "ServiceContracts",
            _$parentName: "ContractsTab",
            screen: lightSwitchApplication.AddEditServiceContractSupplier,
            data: lightSwitchApplication.AddEditServiceContractSupplier,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.AddEditServiceContractSupplier,
                _$entry: {
                    elementType: lightSwitchApplication.ServiceContract
                }
            }
        },
        ServiceContractsTemplate: {
            _$class: msls.ContentItem,
            _$name: "ServiceContractsTemplate",
            _$parentName: "ServiceContracts",
            screen: lightSwitchApplication.AddEditServiceContractSupplier,
            data: lightSwitchApplication.ServiceContract,
            value: lightSwitchApplication.ServiceContract
        },
        ContractReference: {
            _$class: msls.ContentItem,
            _$name: "ContractReference",
            _$parentName: "ServiceContractsTemplate",
            screen: lightSwitchApplication.AddEditServiceContractSupplier,
            data: lightSwitchApplication.ServiceContract,
            value: String
        },
        ContractName: {
            _$class: msls.ContentItem,
            _$name: "ContractName",
            _$parentName: "ServiceContractsTemplate",
            screen: lightSwitchApplication.AddEditServiceContractSupplier,
            data: lightSwitchApplication.ServiceContract,
            value: String
        },
        ContractDescription: {
            _$class: msls.ContentItem,
            _$name: "ContractDescription",
            _$parentName: "ServiceContractsTemplate",
            screen: lightSwitchApplication.AddEditServiceContractSupplier,
            data: lightSwitchApplication.ServiceContract,
            value: String
        },
        StartDate: {
            _$class: msls.ContentItem,
            _$name: "StartDate",
            _$parentName: "ServiceContractsTemplate",
            screen: lightSwitchApplication.AddEditServiceContractSupplier,
            data: lightSwitchApplication.ServiceContract,
            value: Date
        },
        EndDate: {
            _$class: msls.ContentItem,
            _$name: "EndDate",
            _$parentName: "ServiceContractsTemplate",
            screen: lightSwitchApplication.AddEditServiceContractSupplier,
            data: lightSwitchApplication.ServiceContract,
            value: Date
        },
        CurrentContract: {
            _$class: msls.ContentItem,
            _$name: "CurrentContract",
            _$parentName: "ServiceContractsTemplate",
            screen: lightSwitchApplication.AddEditServiceContractSupplier,
            data: lightSwitchApplication.ServiceContract,
            value: Boolean
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditServiceContractSupplier
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEditServiceContractSupplier, {
        /// <field>
        /// Called when a new AddEditServiceContractSupplier screen is created.
        /// <br/>created(msls.application.AddEditServiceContractSupplier screen)
        /// </field>
        created: [lightSwitchApplication.AddEditServiceContractSupplier],
        /// <field>
        /// Called before changes on an active AddEditServiceContractSupplier screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditServiceContractSupplier screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditServiceContractSupplier],
        /// <field>
        /// Called after the DetailsTab content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DetailsTab_postRender: [$element, function () { return new lightSwitchApplication.AddEditServiceContractSupplier().findContentItem("DetailsTab"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.AddEditServiceContractSupplier().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.AddEditServiceContractSupplier().findContentItem("left"); }],
        /// <field>
        /// Called after the ServiceContractSupplierDetails content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ServiceContractSupplierDetails_postRender: [$element, function () { return new lightSwitchApplication.AddEditServiceContractSupplier().findContentItem("ServiceContractSupplierDetails"); }],
        /// <field>
        /// Called after the AddressLine1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        AddressLine1_postRender: [$element, function () { return new lightSwitchApplication.AddEditServiceContractSupplier().findContentItem("AddressLine1"); }],
        /// <field>
        /// Called after the AddressLine2 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        AddressLine2_postRender: [$element, function () { return new lightSwitchApplication.AddEditServiceContractSupplier().findContentItem("AddressLine2"); }],
        /// <field>
        /// Called after the AddressLine3 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        AddressLine3_postRender: [$element, function () { return new lightSwitchApplication.AddEditServiceContractSupplier().findContentItem("AddressLine3"); }],
        /// <field>
        /// Called after the AddressLine4 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        AddressLine4_postRender: [$element, function () { return new lightSwitchApplication.AddEditServiceContractSupplier().findContentItem("AddressLine4"); }],
        /// <field>
        /// Called after the AddressLine5 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        AddressLine5_postRender: [$element, function () { return new lightSwitchApplication.AddEditServiceContractSupplier().findContentItem("AddressLine5"); }],
        /// <field>
        /// Called after the PostCode content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PostCode_postRender: [$element, function () { return new lightSwitchApplication.AddEditServiceContractSupplier().findContentItem("PostCode"); }],
        /// <field>
        /// Called after the right content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        right_postRender: [$element, function () { return new lightSwitchApplication.AddEditServiceContractSupplier().findContentItem("right"); }],
        /// <field>
        /// Called after the Contact content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Contact_postRender: [$element, function () { return new lightSwitchApplication.AddEditServiceContractSupplier().findContentItem("Contact"); }],
        /// <field>
        /// Called after the ContactJobDescription content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ContactJobDescription_postRender: [$element, function () { return new lightSwitchApplication.AddEditServiceContractSupplier().findContentItem("ContactJobDescription"); }],
        /// <field>
        /// Called after the Email content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Email_postRender: [$element, function () { return new lightSwitchApplication.AddEditServiceContractSupplier().findContentItem("Email"); }],
        /// <field>
        /// Called after the Phone1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Phone1_postRender: [$element, function () { return new lightSwitchApplication.AddEditServiceContractSupplier().findContentItem("Phone1"); }],
        /// <field>
        /// Called after the Phone2 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Phone2_postRender: [$element, function () { return new lightSwitchApplication.AddEditServiceContractSupplier().findContentItem("Phone2"); }],
        /// <field>
        /// Called after the Fax content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Fax_postRender: [$element, function () { return new lightSwitchApplication.AddEditServiceContractSupplier().findContentItem("Fax"); }],
        /// <field>
        /// Called after the Website content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Website_postRender: [$element, function () { return new lightSwitchApplication.AddEditServiceContractSupplier().findContentItem("Website"); }],
        /// <field>
        /// Called after the ContractsTab content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ContractsTab_postRender: [$element, function () { return new lightSwitchApplication.AddEditServiceContractSupplier().findContentItem("ContractsTab"); }],
        /// <field>
        /// Called after the ServiceContracts content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ServiceContracts_postRender: [$element, function () { return new lightSwitchApplication.AddEditServiceContractSupplier().findContentItem("ServiceContracts"); }],
        /// <field>
        /// Called after the ServiceContractsTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ServiceContractsTemplate_postRender: [$element, function () { return new lightSwitchApplication.AddEditServiceContractSupplier().findContentItem("ServiceContractsTemplate"); }],
        /// <field>
        /// Called after the ContractReference content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ContractReference_postRender: [$element, function () { return new lightSwitchApplication.AddEditServiceContractSupplier().findContentItem("ContractReference"); }],
        /// <field>
        /// Called after the ContractName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ContractName_postRender: [$element, function () { return new lightSwitchApplication.AddEditServiceContractSupplier().findContentItem("ContractName"); }],
        /// <field>
        /// Called after the ContractDescription content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ContractDescription_postRender: [$element, function () { return new lightSwitchApplication.AddEditServiceContractSupplier().findContentItem("ContractDescription"); }],
        /// <field>
        /// Called after the StartDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        StartDate_postRender: [$element, function () { return new lightSwitchApplication.AddEditServiceContractSupplier().findContentItem("StartDate"); }],
        /// <field>
        /// Called after the EndDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        EndDate_postRender: [$element, function () { return new lightSwitchApplication.AddEditServiceContractSupplier().findContentItem("EndDate"); }],
        /// <field>
        /// Called after the CurrentContract content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CurrentContract_postRender: [$element, function () { return new lightSwitchApplication.AddEditServiceContractSupplier().findContentItem("CurrentContract"); }]
    });

    lightSwitchApplication.BrowseAssetMaintenanceTypes.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseAssetMaintenanceTypes
        },
        AssetMaintenanceTypeList: {
            _$class: msls.ContentItem,
            _$name: "AssetMaintenanceTypeList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.BrowseAssetMaintenanceTypes,
            data: lightSwitchApplication.BrowseAssetMaintenanceTypes,
            value: lightSwitchApplication.BrowseAssetMaintenanceTypes
        },
        Search: {
            _$class: msls.ContentItem,
            _$name: "Search",
            _$parentName: "AssetMaintenanceTypeList",
            screen: lightSwitchApplication.BrowseAssetMaintenanceTypes,
            data: lightSwitchApplication.BrowseAssetMaintenanceTypes,
            value: String
        },
        AssetMaintenanceType: {
            _$class: msls.ContentItem,
            _$name: "AssetMaintenanceType",
            _$parentName: "AssetMaintenanceTypeList",
            screen: lightSwitchApplication.BrowseAssetMaintenanceTypes,
            data: lightSwitchApplication.BrowseAssetMaintenanceTypes,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.BrowseAssetMaintenanceTypes,
                _$entry: {
                    elementType: lightSwitchApplication.AssetMaintenanceType
                }
            }
        },
        RowTemplate: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate",
            _$parentName: "AssetMaintenanceType",
            screen: lightSwitchApplication.BrowseAssetMaintenanceTypes,
            data: lightSwitchApplication.AssetMaintenanceType,
            value: lightSwitchApplication.AssetMaintenanceType
        },
        MaintenanceTypeDescription: {
            _$class: msls.ContentItem,
            _$name: "MaintenanceTypeDescription",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseAssetMaintenanceTypes,
            data: lightSwitchApplication.AssetMaintenanceType,
            value: String
        },
        InUse: {
            _$class: msls.ContentItem,
            _$name: "InUse",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseAssetMaintenanceTypes,
            data: lightSwitchApplication.AssetMaintenanceType,
            value: Boolean
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseAssetMaintenanceTypes
        }
    };

    msls._addEntryPoints(lightSwitchApplication.BrowseAssetMaintenanceTypes, {
        /// <field>
        /// Called when a new BrowseAssetMaintenanceTypes screen is created.
        /// <br/>created(msls.application.BrowseAssetMaintenanceTypes screen)
        /// </field>
        created: [lightSwitchApplication.BrowseAssetMaintenanceTypes],
        /// <field>
        /// Called before changes on an active BrowseAssetMaintenanceTypes screen are applied.
        /// <br/>beforeApplyChanges(msls.application.BrowseAssetMaintenanceTypes screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.BrowseAssetMaintenanceTypes],
        /// <field>
        /// Called after the AssetMaintenanceTypeList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        AssetMaintenanceTypeList_postRender: [$element, function () { return new lightSwitchApplication.BrowseAssetMaintenanceTypes().findContentItem("AssetMaintenanceTypeList"); }],
        /// <field>
        /// Called after the Search content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Search_postRender: [$element, function () { return new lightSwitchApplication.BrowseAssetMaintenanceTypes().findContentItem("Search"); }],
        /// <field>
        /// Called after the AssetMaintenanceType content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        AssetMaintenanceType_postRender: [$element, function () { return new lightSwitchApplication.BrowseAssetMaintenanceTypes().findContentItem("AssetMaintenanceType"); }],
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: [$element, function () { return new lightSwitchApplication.BrowseAssetMaintenanceTypes().findContentItem("RowTemplate"); }],
        /// <field>
        /// Called after the MaintenanceTypeDescription content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        MaintenanceTypeDescription_postRender: [$element, function () { return new lightSwitchApplication.BrowseAssetMaintenanceTypes().findContentItem("MaintenanceTypeDescription"); }],
        /// <field>
        /// Called after the InUse content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        InUse_postRender: [$element, function () { return new lightSwitchApplication.BrowseAssetMaintenanceTypes().findContentItem("InUse"); }]
    });

    lightSwitchApplication.BrowseAssetManufacturers.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseAssetManufacturers
        },
        AssetManufacturerList: {
            _$class: msls.ContentItem,
            _$name: "AssetManufacturerList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.BrowseAssetManufacturers,
            data: lightSwitchApplication.BrowseAssetManufacturers,
            value: lightSwitchApplication.BrowseAssetManufacturers
        },
        Search: {
            _$class: msls.ContentItem,
            _$name: "Search",
            _$parentName: "AssetManufacturerList",
            screen: lightSwitchApplication.BrowseAssetManufacturers,
            data: lightSwitchApplication.BrowseAssetManufacturers,
            value: String
        },
        AssetManufacturer: {
            _$class: msls.ContentItem,
            _$name: "AssetManufacturer",
            _$parentName: "AssetManufacturerList",
            screen: lightSwitchApplication.BrowseAssetManufacturers,
            data: lightSwitchApplication.BrowseAssetManufacturers,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.BrowseAssetManufacturers,
                _$entry: {
                    elementType: lightSwitchApplication.AssetManufacturer
                }
            }
        },
        RowTemplate: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate",
            _$parentName: "AssetManufacturer",
            screen: lightSwitchApplication.BrowseAssetManufacturers,
            data: lightSwitchApplication.AssetManufacturer,
            value: lightSwitchApplication.AssetManufacturer
        },
        Manufacturer: {
            _$class: msls.ContentItem,
            _$name: "Manufacturer",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseAssetManufacturers,
            data: lightSwitchApplication.AssetManufacturer,
            value: String
        },
        Email: {
            _$class: msls.ContentItem,
            _$name: "Email",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseAssetManufacturers,
            data: lightSwitchApplication.AssetManufacturer,
            value: String
        },
        Phone1: {
            _$class: msls.ContentItem,
            _$name: "Phone1",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseAssetManufacturers,
            data: lightSwitchApplication.AssetManufacturer,
            value: String
        },
        Website: {
            _$class: msls.ContentItem,
            _$name: "Website",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseAssetManufacturers,
            data: lightSwitchApplication.AssetManufacturer,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseAssetManufacturers
        }
    };

    msls._addEntryPoints(lightSwitchApplication.BrowseAssetManufacturers, {
        /// <field>
        /// Called when a new BrowseAssetManufacturers screen is created.
        /// <br/>created(msls.application.BrowseAssetManufacturers screen)
        /// </field>
        created: [lightSwitchApplication.BrowseAssetManufacturers],
        /// <field>
        /// Called before changes on an active BrowseAssetManufacturers screen are applied.
        /// <br/>beforeApplyChanges(msls.application.BrowseAssetManufacturers screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.BrowseAssetManufacturers],
        /// <field>
        /// Called after the AssetManufacturerList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        AssetManufacturerList_postRender: [$element, function () { return new lightSwitchApplication.BrowseAssetManufacturers().findContentItem("AssetManufacturerList"); }],
        /// <field>
        /// Called after the Search content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Search_postRender: [$element, function () { return new lightSwitchApplication.BrowseAssetManufacturers().findContentItem("Search"); }],
        /// <field>
        /// Called after the AssetManufacturer content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        AssetManufacturer_postRender: [$element, function () { return new lightSwitchApplication.BrowseAssetManufacturers().findContentItem("AssetManufacturer"); }],
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: [$element, function () { return new lightSwitchApplication.BrowseAssetManufacturers().findContentItem("RowTemplate"); }],
        /// <field>
        /// Called after the Manufacturer content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Manufacturer_postRender: [$element, function () { return new lightSwitchApplication.BrowseAssetManufacturers().findContentItem("Manufacturer"); }],
        /// <field>
        /// Called after the Email content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Email_postRender: [$element, function () { return new lightSwitchApplication.BrowseAssetManufacturers().findContentItem("Email"); }],
        /// <field>
        /// Called after the Phone1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Phone1_postRender: [$element, function () { return new lightSwitchApplication.BrowseAssetManufacturers().findContentItem("Phone1"); }],
        /// <field>
        /// Called after the Website content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Website_postRender: [$element, function () { return new lightSwitchApplication.BrowseAssetManufacturers().findContentItem("Website"); }]
    });

    lightSwitchApplication.BrowseAssets.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseAssets
        },
        AssetList: {
            _$class: msls.ContentItem,
            _$name: "AssetList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.BrowseAssets,
            data: lightSwitchApplication.BrowseAssets,
            value: lightSwitchApplication.BrowseAssets
        },
        Asset: {
            _$class: msls.ContentItem,
            _$name: "Asset",
            _$parentName: "AssetList",
            screen: lightSwitchApplication.BrowseAssets,
            data: lightSwitchApplication.BrowseAssets,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.BrowseAssets,
                _$entry: {
                    elementType: lightSwitchApplication.Asset
                }
            }
        },
        RowTemplate: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate",
            _$parentName: "Asset",
            screen: lightSwitchApplication.BrowseAssets,
            data: lightSwitchApplication.Asset,
            value: lightSwitchApplication.Asset
        },
        Reference: {
            _$class: msls.ContentItem,
            _$name: "Reference",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseAssets,
            data: lightSwitchApplication.Asset,
            value: String
        },
        AssetDescription: {
            _$class: msls.ContentItem,
            _$name: "AssetDescription",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseAssets,
            data: lightSwitchApplication.Asset,
            value: String
        },
        SerialNumber: {
            _$class: msls.ContentItem,
            _$name: "SerialNumber",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseAssets,
            data: lightSwitchApplication.Asset,
            value: String
        },
        Model: {
            _$class: msls.ContentItem,
            _$name: "Model",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseAssets,
            data: lightSwitchApplication.Asset,
            value: String
        },
        InUse: {
            _$class: msls.ContentItem,
            _$name: "InUse",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseAssets,
            data: lightSwitchApplication.Asset,
            value: Boolean
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseAssets
        }
    };

    msls._addEntryPoints(lightSwitchApplication.BrowseAssets, {
        /// <field>
        /// Called when a new BrowseAssets screen is created.
        /// <br/>created(msls.application.BrowseAssets screen)
        /// </field>
        created: [lightSwitchApplication.BrowseAssets],
        /// <field>
        /// Called before changes on an active BrowseAssets screen are applied.
        /// <br/>beforeApplyChanges(msls.application.BrowseAssets screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.BrowseAssets],
        /// <field>
        /// Called after the AssetList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        AssetList_postRender: [$element, function () { return new lightSwitchApplication.BrowseAssets().findContentItem("AssetList"); }],
        /// <field>
        /// Called after the Asset content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Asset_postRender: [$element, function () { return new lightSwitchApplication.BrowseAssets().findContentItem("Asset"); }],
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: [$element, function () { return new lightSwitchApplication.BrowseAssets().findContentItem("RowTemplate"); }],
        /// <field>
        /// Called after the Reference content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Reference_postRender: [$element, function () { return new lightSwitchApplication.BrowseAssets().findContentItem("Reference"); }],
        /// <field>
        /// Called after the AssetDescription content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        AssetDescription_postRender: [$element, function () { return new lightSwitchApplication.BrowseAssets().findContentItem("AssetDescription"); }],
        /// <field>
        /// Called after the SerialNumber content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        SerialNumber_postRender: [$element, function () { return new lightSwitchApplication.BrowseAssets().findContentItem("SerialNumber"); }],
        /// <field>
        /// Called after the Model content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Model_postRender: [$element, function () { return new lightSwitchApplication.BrowseAssets().findContentItem("Model"); }],
        /// <field>
        /// Called after the InUse content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        InUse_postRender: [$element, function () { return new lightSwitchApplication.BrowseAssets().findContentItem("InUse"); }]
    });

    lightSwitchApplication.BrowseAssetsByAssetType.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseAssetsByAssetType
        },
        AssetTypeList: {
            _$class: msls.ContentItem,
            _$name: "AssetTypeList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.BrowseAssetsByAssetType,
            data: lightSwitchApplication.BrowseAssetsByAssetType,
            value: lightSwitchApplication.BrowseAssetsByAssetType
        },
        AssetType: {
            _$class: msls.ContentItem,
            _$name: "AssetType",
            _$parentName: "AssetTypeList",
            screen: lightSwitchApplication.BrowseAssetsByAssetType,
            data: lightSwitchApplication.BrowseAssetsByAssetType,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.BrowseAssetsByAssetType,
                _$entry: {
                    elementType: lightSwitchApplication.AssetType
                }
            }
        },
        RowTemplate: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate",
            _$parentName: "AssetType",
            screen: lightSwitchApplication.BrowseAssetsByAssetType,
            data: lightSwitchApplication.AssetType,
            value: lightSwitchApplication.AssetType
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseAssetsByAssetType
        }
    };

    msls._addEntryPoints(lightSwitchApplication.BrowseAssetsByAssetType, {
        /// <field>
        /// Called when a new BrowseAssetsByAssetType screen is created.
        /// <br/>created(msls.application.BrowseAssetsByAssetType screen)
        /// </field>
        created: [lightSwitchApplication.BrowseAssetsByAssetType],
        /// <field>
        /// Called before changes on an active BrowseAssetsByAssetType screen are applied.
        /// <br/>beforeApplyChanges(msls.application.BrowseAssetsByAssetType screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.BrowseAssetsByAssetType],
        /// <field>
        /// Called after the AssetTypeList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        AssetTypeList_postRender: [$element, function () { return new lightSwitchApplication.BrowseAssetsByAssetType().findContentItem("AssetTypeList"); }],
        /// <field>
        /// Called after the AssetType content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        AssetType_postRender: [$element, function () { return new lightSwitchApplication.BrowseAssetsByAssetType().findContentItem("AssetType"); }],
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: [$element, function () { return new lightSwitchApplication.BrowseAssetsByAssetType().findContentItem("RowTemplate"); }]
    });

    lightSwitchApplication.BrowseAssetSuppliers.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseAssetSuppliers
        },
        AssetSupplierList: {
            _$class: msls.ContentItem,
            _$name: "AssetSupplierList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.BrowseAssetSuppliers,
            data: lightSwitchApplication.BrowseAssetSuppliers,
            value: lightSwitchApplication.BrowseAssetSuppliers
        },
        Search: {
            _$class: msls.ContentItem,
            _$name: "Search",
            _$parentName: "AssetSupplierList",
            screen: lightSwitchApplication.BrowseAssetSuppliers,
            data: lightSwitchApplication.BrowseAssetSuppliers,
            value: String
        },
        AssetSupplier: {
            _$class: msls.ContentItem,
            _$name: "AssetSupplier",
            _$parentName: "AssetSupplierList",
            screen: lightSwitchApplication.BrowseAssetSuppliers,
            data: lightSwitchApplication.BrowseAssetSuppliers,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.BrowseAssetSuppliers,
                _$entry: {
                    elementType: lightSwitchApplication.AssetSupplier
                }
            }
        },
        RowTemplate: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate",
            _$parentName: "AssetSupplier",
            screen: lightSwitchApplication.BrowseAssetSuppliers,
            data: lightSwitchApplication.AssetSupplier,
            value: lightSwitchApplication.AssetSupplier
        },
        Supplier: {
            _$class: msls.ContentItem,
            _$name: "Supplier",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseAssetSuppliers,
            data: lightSwitchApplication.AssetSupplier,
            value: String
        },
        Email: {
            _$class: msls.ContentItem,
            _$name: "Email",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseAssetSuppliers,
            data: lightSwitchApplication.AssetSupplier,
            value: String
        },
        Phone1: {
            _$class: msls.ContentItem,
            _$name: "Phone1",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseAssetSuppliers,
            data: lightSwitchApplication.AssetSupplier,
            value: String
        },
        Website: {
            _$class: msls.ContentItem,
            _$name: "Website",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseAssetSuppliers,
            data: lightSwitchApplication.AssetSupplier,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseAssetSuppliers
        }
    };

    msls._addEntryPoints(lightSwitchApplication.BrowseAssetSuppliers, {
        /// <field>
        /// Called when a new BrowseAssetSuppliers screen is created.
        /// <br/>created(msls.application.BrowseAssetSuppliers screen)
        /// </field>
        created: [lightSwitchApplication.BrowseAssetSuppliers],
        /// <field>
        /// Called before changes on an active BrowseAssetSuppliers screen are applied.
        /// <br/>beforeApplyChanges(msls.application.BrowseAssetSuppliers screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.BrowseAssetSuppliers],
        /// <field>
        /// Called after the AssetSupplierList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        AssetSupplierList_postRender: [$element, function () { return new lightSwitchApplication.BrowseAssetSuppliers().findContentItem("AssetSupplierList"); }],
        /// <field>
        /// Called after the Search content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Search_postRender: [$element, function () { return new lightSwitchApplication.BrowseAssetSuppliers().findContentItem("Search"); }],
        /// <field>
        /// Called after the AssetSupplier content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        AssetSupplier_postRender: [$element, function () { return new lightSwitchApplication.BrowseAssetSuppliers().findContentItem("AssetSupplier"); }],
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: [$element, function () { return new lightSwitchApplication.BrowseAssetSuppliers().findContentItem("RowTemplate"); }],
        /// <field>
        /// Called after the Supplier content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Supplier_postRender: [$element, function () { return new lightSwitchApplication.BrowseAssetSuppliers().findContentItem("Supplier"); }],
        /// <field>
        /// Called after the Email content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Email_postRender: [$element, function () { return new lightSwitchApplication.BrowseAssetSuppliers().findContentItem("Email"); }],
        /// <field>
        /// Called after the Phone1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Phone1_postRender: [$element, function () { return new lightSwitchApplication.BrowseAssetSuppliers().findContentItem("Phone1"); }],
        /// <field>
        /// Called after the Website content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Website_postRender: [$element, function () { return new lightSwitchApplication.BrowseAssetSuppliers().findContentItem("Website"); }]
    });

    lightSwitchApplication.BrowseAssetTypes.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseAssetTypes
        },
        AssetTypeList: {
            _$class: msls.ContentItem,
            _$name: "AssetTypeList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.BrowseAssetTypes,
            data: lightSwitchApplication.BrowseAssetTypes,
            value: lightSwitchApplication.BrowseAssetTypes
        },
        Search: {
            _$class: msls.ContentItem,
            _$name: "Search",
            _$parentName: "AssetTypeList",
            screen: lightSwitchApplication.BrowseAssetTypes,
            data: lightSwitchApplication.BrowseAssetTypes,
            value: String
        },
        AssetType: {
            _$class: msls.ContentItem,
            _$name: "AssetType",
            _$parentName: "AssetTypeList",
            screen: lightSwitchApplication.BrowseAssetTypes,
            data: lightSwitchApplication.BrowseAssetTypes,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.BrowseAssetTypes,
                _$entry: {
                    elementType: lightSwitchApplication.AssetType
                }
            }
        },
        RowTemplate: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate",
            _$parentName: "AssetType",
            screen: lightSwitchApplication.BrowseAssetTypes,
            data: lightSwitchApplication.AssetType,
            value: lightSwitchApplication.AssetType
        },
        AssetTypeDescription: {
            _$class: msls.ContentItem,
            _$name: "AssetTypeDescription",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseAssetTypes,
            data: lightSwitchApplication.AssetType,
            value: String
        },
        InUse: {
            _$class: msls.ContentItem,
            _$name: "InUse",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseAssetTypes,
            data: lightSwitchApplication.AssetType,
            value: Boolean
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseAssetTypes
        }
    };

    msls._addEntryPoints(lightSwitchApplication.BrowseAssetTypes, {
        /// <field>
        /// Called when a new BrowseAssetTypes screen is created.
        /// <br/>created(msls.application.BrowseAssetTypes screen)
        /// </field>
        created: [lightSwitchApplication.BrowseAssetTypes],
        /// <field>
        /// Called before changes on an active BrowseAssetTypes screen are applied.
        /// <br/>beforeApplyChanges(msls.application.BrowseAssetTypes screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.BrowseAssetTypes],
        /// <field>
        /// Called after the AssetTypeList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        AssetTypeList_postRender: [$element, function () { return new lightSwitchApplication.BrowseAssetTypes().findContentItem("AssetTypeList"); }],
        /// <field>
        /// Called after the Search content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Search_postRender: [$element, function () { return new lightSwitchApplication.BrowseAssetTypes().findContentItem("Search"); }],
        /// <field>
        /// Called after the AssetType content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        AssetType_postRender: [$element, function () { return new lightSwitchApplication.BrowseAssetTypes().findContentItem("AssetType"); }],
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: [$element, function () { return new lightSwitchApplication.BrowseAssetTypes().findContentItem("RowTemplate"); }],
        /// <field>
        /// Called after the AssetTypeDescription content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        AssetTypeDescription_postRender: [$element, function () { return new lightSwitchApplication.BrowseAssetTypes().findContentItem("AssetTypeDescription"); }],
        /// <field>
        /// Called after the InUse content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        InUse_postRender: [$element, function () { return new lightSwitchApplication.BrowseAssetTypes().findContentItem("InUse"); }]
    });

    lightSwitchApplication.BrowseEmployees.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseEmployees
        },
        EmployeeList: {
            _$class: msls.ContentItem,
            _$name: "EmployeeList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.BrowseEmployees,
            data: lightSwitchApplication.BrowseEmployees,
            value: lightSwitchApplication.BrowseEmployees
        },
        Search: {
            _$class: msls.ContentItem,
            _$name: "Search",
            _$parentName: "EmployeeList",
            screen: lightSwitchApplication.BrowseEmployees,
            data: lightSwitchApplication.BrowseEmployees,
            value: String
        },
        Employee: {
            _$class: msls.ContentItem,
            _$name: "Employee",
            _$parentName: "EmployeeList",
            screen: lightSwitchApplication.BrowseEmployees,
            data: lightSwitchApplication.BrowseEmployees,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.BrowseEmployees,
                _$entry: {
                    elementType: lightSwitchApplication.Employee
                }
            }
        },
        RowTemplate: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate",
            _$parentName: "Employee",
            screen: lightSwitchApplication.BrowseEmployees,
            data: lightSwitchApplication.Employee,
            value: lightSwitchApplication.Employee
        },
        UserName: {
            _$class: msls.ContentItem,
            _$name: "UserName",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseEmployees,
            data: lightSwitchApplication.Employee,
            value: String
        },
        LastName: {
            _$class: msls.ContentItem,
            _$name: "LastName",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseEmployees,
            data: lightSwitchApplication.Employee,
            value: String
        },
        FirstName: {
            _$class: msls.ContentItem,
            _$name: "FirstName",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseEmployees,
            data: lightSwitchApplication.Employee,
            value: String
        },
        Email: {
            _$class: msls.ContentItem,
            _$name: "Email",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseEmployees,
            data: lightSwitchApplication.Employee,
            value: String
        },
        Current: {
            _$class: msls.ContentItem,
            _$name: "Current",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseEmployees,
            data: lightSwitchApplication.Employee,
            value: Boolean
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseEmployees
        }
    };

    msls._addEntryPoints(lightSwitchApplication.BrowseEmployees, {
        /// <field>
        /// Called when a new BrowseEmployees screen is created.
        /// <br/>created(msls.application.BrowseEmployees screen)
        /// </field>
        created: [lightSwitchApplication.BrowseEmployees],
        /// <field>
        /// Called before changes on an active BrowseEmployees screen are applied.
        /// <br/>beforeApplyChanges(msls.application.BrowseEmployees screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.BrowseEmployees],
        /// <field>
        /// Called after the EmployeeList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        EmployeeList_postRender: [$element, function () { return new lightSwitchApplication.BrowseEmployees().findContentItem("EmployeeList"); }],
        /// <field>
        /// Called after the Search content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Search_postRender: [$element, function () { return new lightSwitchApplication.BrowseEmployees().findContentItem("Search"); }],
        /// <field>
        /// Called after the Employee content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Employee_postRender: [$element, function () { return new lightSwitchApplication.BrowseEmployees().findContentItem("Employee"); }],
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: [$element, function () { return new lightSwitchApplication.BrowseEmployees().findContentItem("RowTemplate"); }],
        /// <field>
        /// Called after the UserName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        UserName_postRender: [$element, function () { return new lightSwitchApplication.BrowseEmployees().findContentItem("UserName"); }],
        /// <field>
        /// Called after the LastName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        LastName_postRender: [$element, function () { return new lightSwitchApplication.BrowseEmployees().findContentItem("LastName"); }],
        /// <field>
        /// Called after the FirstName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        FirstName_postRender: [$element, function () { return new lightSwitchApplication.BrowseEmployees().findContentItem("FirstName"); }],
        /// <field>
        /// Called after the Email content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Email_postRender: [$element, function () { return new lightSwitchApplication.BrowseEmployees().findContentItem("Email"); }],
        /// <field>
        /// Called after the Current content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Current_postRender: [$element, function () { return new lightSwitchApplication.BrowseEmployees().findContentItem("Current"); }]
    });

    lightSwitchApplication.BrowseServiceContracts.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseServiceContracts
        },
        ServiceContractList: {
            _$class: msls.ContentItem,
            _$name: "ServiceContractList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.BrowseServiceContracts,
            data: lightSwitchApplication.BrowseServiceContracts,
            value: lightSwitchApplication.BrowseServiceContracts
        },
        Search: {
            _$class: msls.ContentItem,
            _$name: "Search",
            _$parentName: "ServiceContractList",
            screen: lightSwitchApplication.BrowseServiceContracts,
            data: lightSwitchApplication.BrowseServiceContracts,
            value: String
        },
        ServiceContract: {
            _$class: msls.ContentItem,
            _$name: "ServiceContract",
            _$parentName: "ServiceContractList",
            screen: lightSwitchApplication.BrowseServiceContracts,
            data: lightSwitchApplication.BrowseServiceContracts,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.BrowseServiceContracts,
                _$entry: {
                    elementType: lightSwitchApplication.ServiceContract
                }
            }
        },
        RowTemplate: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate",
            _$parentName: "ServiceContract",
            screen: lightSwitchApplication.BrowseServiceContracts,
            data: lightSwitchApplication.ServiceContract,
            value: lightSwitchApplication.ServiceContract
        },
        ContractReference: {
            _$class: msls.ContentItem,
            _$name: "ContractReference",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseServiceContracts,
            data: lightSwitchApplication.ServiceContract,
            value: String
        },
        ContractName: {
            _$class: msls.ContentItem,
            _$name: "ContractName",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseServiceContracts,
            data: lightSwitchApplication.ServiceContract,
            value: String
        },
        CurrentContract1: {
            _$class: msls.ContentItem,
            _$name: "CurrentContract1",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseServiceContracts,
            data: lightSwitchApplication.ServiceContract,
            value: Boolean
        },
        StartDate: {
            _$class: msls.ContentItem,
            _$name: "StartDate",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseServiceContracts,
            data: lightSwitchApplication.ServiceContract,
            value: Date
        },
        EndDate: {
            _$class: msls.ContentItem,
            _$name: "EndDate",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseServiceContracts,
            data: lightSwitchApplication.ServiceContract,
            value: Date
        },
        CurrentContract: {
            _$class: msls.ContentItem,
            _$name: "CurrentContract",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseServiceContracts,
            data: lightSwitchApplication.ServiceContract,
            value: Boolean
        },
        ServiceContractSupplier: {
            _$class: msls.ContentItem,
            _$name: "ServiceContractSupplier",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseServiceContracts,
            data: lightSwitchApplication.ServiceContract,
            value: lightSwitchApplication.ServiceContractSupplier
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseServiceContracts
        }
    };

    msls._addEntryPoints(lightSwitchApplication.BrowseServiceContracts, {
        /// <field>
        /// Called when a new BrowseServiceContracts screen is created.
        /// <br/>created(msls.application.BrowseServiceContracts screen)
        /// </field>
        created: [lightSwitchApplication.BrowseServiceContracts],
        /// <field>
        /// Called before changes on an active BrowseServiceContracts screen are applied.
        /// <br/>beforeApplyChanges(msls.application.BrowseServiceContracts screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.BrowseServiceContracts],
        /// <field>
        /// Called after the ServiceContractList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ServiceContractList_postRender: [$element, function () { return new lightSwitchApplication.BrowseServiceContracts().findContentItem("ServiceContractList"); }],
        /// <field>
        /// Called after the Search content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Search_postRender: [$element, function () { return new lightSwitchApplication.BrowseServiceContracts().findContentItem("Search"); }],
        /// <field>
        /// Called after the ServiceContract content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ServiceContract_postRender: [$element, function () { return new lightSwitchApplication.BrowseServiceContracts().findContentItem("ServiceContract"); }],
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: [$element, function () { return new lightSwitchApplication.BrowseServiceContracts().findContentItem("RowTemplate"); }],
        /// <field>
        /// Called after the ContractReference content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ContractReference_postRender: [$element, function () { return new lightSwitchApplication.BrowseServiceContracts().findContentItem("ContractReference"); }],
        /// <field>
        /// Called after the ContractName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ContractName_postRender: [$element, function () { return new lightSwitchApplication.BrowseServiceContracts().findContentItem("ContractName"); }],
        /// <field>
        /// Called after the CurrentContract1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CurrentContract1_postRender: [$element, function () { return new lightSwitchApplication.BrowseServiceContracts().findContentItem("CurrentContract1"); }],
        /// <field>
        /// Called after the StartDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        StartDate_postRender: [$element, function () { return new lightSwitchApplication.BrowseServiceContracts().findContentItem("StartDate"); }],
        /// <field>
        /// Called after the EndDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        EndDate_postRender: [$element, function () { return new lightSwitchApplication.BrowseServiceContracts().findContentItem("EndDate"); }],
        /// <field>
        /// Called after the CurrentContract content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CurrentContract_postRender: [$element, function () { return new lightSwitchApplication.BrowseServiceContracts().findContentItem("CurrentContract"); }],
        /// <field>
        /// Called after the ServiceContractSupplier content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ServiceContractSupplier_postRender: [$element, function () { return new lightSwitchApplication.BrowseServiceContracts().findContentItem("ServiceContractSupplier"); }]
    });

    lightSwitchApplication.BrowseServiceContractSuppliers.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseServiceContractSuppliers
        },
        ServiceContractSupplierList: {
            _$class: msls.ContentItem,
            _$name: "ServiceContractSupplierList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.BrowseServiceContractSuppliers,
            data: lightSwitchApplication.BrowseServiceContractSuppliers,
            value: lightSwitchApplication.BrowseServiceContractSuppliers
        },
        Search: {
            _$class: msls.ContentItem,
            _$name: "Search",
            _$parentName: "ServiceContractSupplierList",
            screen: lightSwitchApplication.BrowseServiceContractSuppliers,
            data: lightSwitchApplication.BrowseServiceContractSuppliers,
            value: String
        },
        ServiceContractSupplier: {
            _$class: msls.ContentItem,
            _$name: "ServiceContractSupplier",
            _$parentName: "ServiceContractSupplierList",
            screen: lightSwitchApplication.BrowseServiceContractSuppliers,
            data: lightSwitchApplication.BrowseServiceContractSuppliers,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.BrowseServiceContractSuppliers,
                _$entry: {
                    elementType: lightSwitchApplication.ServiceContractSupplier
                }
            }
        },
        RowTemplate: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate",
            _$parentName: "ServiceContractSupplier",
            screen: lightSwitchApplication.BrowseServiceContractSuppliers,
            data: lightSwitchApplication.ServiceContractSupplier,
            value: lightSwitchApplication.ServiceContractSupplier
        },
        ServiceContractSupplierDetails: {
            _$class: msls.ContentItem,
            _$name: "ServiceContractSupplierDetails",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseServiceContractSuppliers,
            data: lightSwitchApplication.ServiceContractSupplier,
            value: String
        },
        Website: {
            _$class: msls.ContentItem,
            _$name: "Website",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseServiceContractSuppliers,
            data: lightSwitchApplication.ServiceContractSupplier,
            value: String
        },
        Contact: {
            _$class: msls.ContentItem,
            _$name: "Contact",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseServiceContractSuppliers,
            data: lightSwitchApplication.ServiceContractSupplier,
            value: String
        },
        Email: {
            _$class: msls.ContentItem,
            _$name: "Email",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseServiceContractSuppliers,
            data: lightSwitchApplication.ServiceContractSupplier,
            value: String
        },
        Phone1: {
            _$class: msls.ContentItem,
            _$name: "Phone1",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseServiceContractSuppliers,
            data: lightSwitchApplication.ServiceContractSupplier,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseServiceContractSuppliers
        }
    };

    msls._addEntryPoints(lightSwitchApplication.BrowseServiceContractSuppliers, {
        /// <field>
        /// Called when a new BrowseServiceContractSuppliers screen is created.
        /// <br/>created(msls.application.BrowseServiceContractSuppliers screen)
        /// </field>
        created: [lightSwitchApplication.BrowseServiceContractSuppliers],
        /// <field>
        /// Called before changes on an active BrowseServiceContractSuppliers screen are applied.
        /// <br/>beforeApplyChanges(msls.application.BrowseServiceContractSuppliers screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.BrowseServiceContractSuppliers],
        /// <field>
        /// Called after the ServiceContractSupplierList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ServiceContractSupplierList_postRender: [$element, function () { return new lightSwitchApplication.BrowseServiceContractSuppliers().findContentItem("ServiceContractSupplierList"); }],
        /// <field>
        /// Called after the Search content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Search_postRender: [$element, function () { return new lightSwitchApplication.BrowseServiceContractSuppliers().findContentItem("Search"); }],
        /// <field>
        /// Called after the ServiceContractSupplier content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ServiceContractSupplier_postRender: [$element, function () { return new lightSwitchApplication.BrowseServiceContractSuppliers().findContentItem("ServiceContractSupplier"); }],
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: [$element, function () { return new lightSwitchApplication.BrowseServiceContractSuppliers().findContentItem("RowTemplate"); }],
        /// <field>
        /// Called after the ServiceContractSupplierDetails content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ServiceContractSupplierDetails_postRender: [$element, function () { return new lightSwitchApplication.BrowseServiceContractSuppliers().findContentItem("ServiceContractSupplierDetails"); }],
        /// <field>
        /// Called after the Website content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Website_postRender: [$element, function () { return new lightSwitchApplication.BrowseServiceContractSuppliers().findContentItem("Website"); }],
        /// <field>
        /// Called after the Contact content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Contact_postRender: [$element, function () { return new lightSwitchApplication.BrowseServiceContractSuppliers().findContentItem("Contact"); }],
        /// <field>
        /// Called after the Email content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Email_postRender: [$element, function () { return new lightSwitchApplication.BrowseServiceContractSuppliers().findContentItem("Email"); }],
        /// <field>
        /// Called after the Phone1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Phone1_postRender: [$element, function () { return new lightSwitchApplication.BrowseServiceContractSuppliers().findContentItem("Phone1"); }]
    });

    lightSwitchApplication.Home.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.Home
        },
        Group: {
            _$class: msls.ContentItem,
            _$name: "Group",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.Home,
            data: lightSwitchApplication.Home,
            value: lightSwitchApplication.Home
        },
        ManageAssets: {
            _$class: msls.ContentItem,
            _$name: "ManageAssets",
            _$parentName: "Group",
            screen: lightSwitchApplication.Home
        },
        ManageServiceContracts: {
            _$class: msls.ContentItem,
            _$name: "ManageServiceContracts",
            _$parentName: "Group",
            screen: lightSwitchApplication.Home
        },
        ManageServiceContractSuppliers: {
            _$class: msls.ContentItem,
            _$name: "ManageServiceContractSuppliers",
            _$parentName: "Group",
            screen: lightSwitchApplication.Home
        },
        Settings: {
            _$class: msls.ContentItem,
            _$name: "Settings",
            _$parentName: "Group",
            screen: lightSwitchApplication.Home
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.Home
        }
    };

    msls._addEntryPoints(lightSwitchApplication.Home, {
        /// <field>
        /// Called when a new Home screen is created.
        /// <br/>created(msls.application.Home screen)
        /// </field>
        created: [lightSwitchApplication.Home],
        /// <field>
        /// Called before changes on an active Home screen are applied.
        /// <br/>beforeApplyChanges(msls.application.Home screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.Home],
        /// <field>
        /// Called after the Group content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Group_postRender: [$element, function () { return new lightSwitchApplication.Home().findContentItem("Group"); }],
        /// <field>
        /// Called after the ManageAssets content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ManageAssets_postRender: [$element, function () { return new lightSwitchApplication.Home().findContentItem("ManageAssets"); }],
        /// <field>
        /// Called after the ManageServiceContracts content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ManageServiceContracts_postRender: [$element, function () { return new lightSwitchApplication.Home().findContentItem("ManageServiceContracts"); }],
        /// <field>
        /// Called after the ManageServiceContractSuppliers content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ManageServiceContractSuppliers_postRender: [$element, function () { return new lightSwitchApplication.Home().findContentItem("ManageServiceContractSuppliers"); }],
        /// <field>
        /// Called after the Settings content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Settings_postRender: [$element, function () { return new lightSwitchApplication.Home().findContentItem("Settings"); }]
    });

    lightSwitchApplication.MobileHome.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.MobileHome
        },
        Group: {
            _$class: msls.ContentItem,
            _$name: "Group",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.MobileHome,
            data: lightSwitchApplication.MobileHome,
            value: lightSwitchApplication.MobileHome
        },
        ManageAssets: {
            _$class: msls.ContentItem,
            _$name: "ManageAssets",
            _$parentName: "Group",
            screen: lightSwitchApplication.MobileHome
        },
        ManageServiceContracts: {
            _$class: msls.ContentItem,
            _$name: "ManageServiceContracts",
            _$parentName: "Group",
            screen: lightSwitchApplication.MobileHome
        },
        ManageServiceContractSuppliers: {
            _$class: msls.ContentItem,
            _$name: "ManageServiceContractSuppliers",
            _$parentName: "Group",
            screen: lightSwitchApplication.MobileHome
        },
        Settings: {
            _$class: msls.ContentItem,
            _$name: "Settings",
            _$parentName: "Group",
            screen: lightSwitchApplication.MobileHome
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.MobileHome
        }
    };

    msls._addEntryPoints(lightSwitchApplication.MobileHome, {
        /// <field>
        /// Called when a new MobileHome screen is created.
        /// <br/>created(msls.application.MobileHome screen)
        /// </field>
        created: [lightSwitchApplication.MobileHome],
        /// <field>
        /// Called before changes on an active MobileHome screen are applied.
        /// <br/>beforeApplyChanges(msls.application.MobileHome screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.MobileHome],
        /// <field>
        /// Called after the Group content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Group_postRender: [$element, function () { return new lightSwitchApplication.MobileHome().findContentItem("Group"); }],
        /// <field>
        /// Called after the ManageAssets content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ManageAssets_postRender: [$element, function () { return new lightSwitchApplication.MobileHome().findContentItem("ManageAssets"); }],
        /// <field>
        /// Called after the ManageServiceContracts content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ManageServiceContracts_postRender: [$element, function () { return new lightSwitchApplication.MobileHome().findContentItem("ManageServiceContracts"); }],
        /// <field>
        /// Called after the ManageServiceContractSuppliers content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ManageServiceContractSuppliers_postRender: [$element, function () { return new lightSwitchApplication.MobileHome().findContentItem("ManageServiceContractSuppliers"); }],
        /// <field>
        /// Called after the Settings content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Settings_postRender: [$element, function () { return new lightSwitchApplication.MobileHome().findContentItem("Settings"); }]
    });

    lightSwitchApplication.MobileSettings.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.MobileSettings
        },
        Group: {
            _$class: msls.ContentItem,
            _$name: "Group",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.MobileSettings,
            data: lightSwitchApplication.MobileSettings,
            value: lightSwitchApplication.MobileSettings
        },
        AssetTypes: {
            _$class: msls.ContentItem,
            _$name: "AssetTypes",
            _$parentName: "Group",
            screen: lightSwitchApplication.MobileSettings
        },
        AssetMaintenanceTypes: {
            _$class: msls.ContentItem,
            _$name: "AssetMaintenanceTypes",
            _$parentName: "Group",
            screen: lightSwitchApplication.MobileSettings
        },
        Manufacturers: {
            _$class: msls.ContentItem,
            _$name: "Manufacturers",
            _$parentName: "Group",
            screen: lightSwitchApplication.MobileSettings
        },
        Suppliers: {
            _$class: msls.ContentItem,
            _$name: "Suppliers",
            _$parentName: "Group",
            screen: lightSwitchApplication.MobileSettings
        },
        Employees: {
            _$class: msls.ContentItem,
            _$name: "Employees",
            _$parentName: "Group",
            screen: lightSwitchApplication.MobileSettings
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.MobileSettings
        }
    };

    msls._addEntryPoints(lightSwitchApplication.MobileSettings, {
        /// <field>
        /// Called when a new MobileSettings screen is created.
        /// <br/>created(msls.application.MobileSettings screen)
        /// </field>
        created: [lightSwitchApplication.MobileSettings],
        /// <field>
        /// Called before changes on an active MobileSettings screen are applied.
        /// <br/>beforeApplyChanges(msls.application.MobileSettings screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.MobileSettings],
        /// <field>
        /// Called after the Group content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Group_postRender: [$element, function () { return new lightSwitchApplication.MobileSettings().findContentItem("Group"); }],
        /// <field>
        /// Called after the AssetTypes content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        AssetTypes_postRender: [$element, function () { return new lightSwitchApplication.MobileSettings().findContentItem("AssetTypes"); }],
        /// <field>
        /// Called after the AssetMaintenanceTypes content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        AssetMaintenanceTypes_postRender: [$element, function () { return new lightSwitchApplication.MobileSettings().findContentItem("AssetMaintenanceTypes"); }],
        /// <field>
        /// Called after the Manufacturers content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Manufacturers_postRender: [$element, function () { return new lightSwitchApplication.MobileSettings().findContentItem("Manufacturers"); }],
        /// <field>
        /// Called after the Suppliers content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Suppliers_postRender: [$element, function () { return new lightSwitchApplication.MobileSettings().findContentItem("Suppliers"); }],
        /// <field>
        /// Called after the Employees content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Employees_postRender: [$element, function () { return new lightSwitchApplication.MobileSettings().findContentItem("Employees"); }]
    });

    lightSwitchApplication.Settings.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.Settings
        },
        Group: {
            _$class: msls.ContentItem,
            _$name: "Group",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.Settings,
            data: lightSwitchApplication.Settings,
            value: lightSwitchApplication.Settings
        },
        AssetTypes: {
            _$class: msls.ContentItem,
            _$name: "AssetTypes",
            _$parentName: "Group",
            screen: lightSwitchApplication.Settings
        },
        AssetMaintenanceTypes: {
            _$class: msls.ContentItem,
            _$name: "AssetMaintenanceTypes",
            _$parentName: "Group",
            screen: lightSwitchApplication.Settings
        },
        AssetManufacturers: {
            _$class: msls.ContentItem,
            _$name: "AssetManufacturers",
            _$parentName: "Group",
            screen: lightSwitchApplication.Settings
        },
        AssetSuppliers: {
            _$class: msls.ContentItem,
            _$name: "AssetSuppliers",
            _$parentName: "Group",
            screen: lightSwitchApplication.Settings
        },
        Employees: {
            _$class: msls.ContentItem,
            _$name: "Employees",
            _$parentName: "Group",
            screen: lightSwitchApplication.Settings
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.Settings
        }
    };

    msls._addEntryPoints(lightSwitchApplication.Settings, {
        /// <field>
        /// Called when a new Settings screen is created.
        /// <br/>created(msls.application.Settings screen)
        /// </field>
        created: [lightSwitchApplication.Settings],
        /// <field>
        /// Called before changes on an active Settings screen are applied.
        /// <br/>beforeApplyChanges(msls.application.Settings screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.Settings],
        /// <field>
        /// Called after the Group content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Group_postRender: [$element, function () { return new lightSwitchApplication.Settings().findContentItem("Group"); }],
        /// <field>
        /// Called after the AssetTypes content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        AssetTypes_postRender: [$element, function () { return new lightSwitchApplication.Settings().findContentItem("AssetTypes"); }],
        /// <field>
        /// Called after the AssetMaintenanceTypes content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        AssetMaintenanceTypes_postRender: [$element, function () { return new lightSwitchApplication.Settings().findContentItem("AssetMaintenanceTypes"); }],
        /// <field>
        /// Called after the AssetManufacturers content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        AssetManufacturers_postRender: [$element, function () { return new lightSwitchApplication.Settings().findContentItem("AssetManufacturers"); }],
        /// <field>
        /// Called after the AssetSuppliers content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        AssetSuppliers_postRender: [$element, function () { return new lightSwitchApplication.Settings().findContentItem("AssetSuppliers"); }],
        /// <field>
        /// Called after the Employees content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Employees_postRender: [$element, function () { return new lightSwitchApplication.Settings().findContentItem("Employees"); }]
    });

}(msls.application));