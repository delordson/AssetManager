/// <reference path="data.js" />

(function (lightSwitchApplication) {

    msls._addEntryPoints(lightSwitchApplication.AssetComment, {
        /// <field>
        /// Called when a new assetComment is created.
        /// <br/>created(msls.application.AssetComment entity)
        /// </field>
        created: [lightSwitchApplication.AssetComment]
    });

    msls._addEntryPoints(lightSwitchApplication.AssetMaintenanceActivity, {
        /// <field>
        /// Called when a new assetMaintenanceActivity is created.
        /// <br/>created(msls.application.AssetMaintenanceActivity entity)
        /// </field>
        created: [lightSwitchApplication.AssetMaintenanceActivity]
    });

    msls._addEntryPoints(lightSwitchApplication.AssetMaintenanceSchedule, {
        /// <field>
        /// Called when a new assetMaintenanceSchedule is created.
        /// <br/>created(msls.application.AssetMaintenanceSchedule entity)
        /// </field>
        created: [lightSwitchApplication.AssetMaintenanceSchedule]
    });

    msls._addEntryPoints(lightSwitchApplication.AssetMaintenanceType, {
        /// <field>
        /// Called when a new assetMaintenanceType is created.
        /// <br/>created(msls.application.AssetMaintenanceType entity)
        /// </field>
        created: [lightSwitchApplication.AssetMaintenanceType]
    });

    msls._addEntryPoints(lightSwitchApplication.AssetManufacturer, {
        /// <field>
        /// Called when a new assetManufacturer is created.
        /// <br/>created(msls.application.AssetManufacturer entity)
        /// </field>
        created: [lightSwitchApplication.AssetManufacturer]
    });

    msls._addEntryPoints(lightSwitchApplication.Asset, {
        /// <field>
        /// Called when a new asset is created.
        /// <br/>created(msls.application.Asset entity)
        /// </field>
        created: [lightSwitchApplication.Asset]
    });

    msls._addEntryPoints(lightSwitchApplication.AssetServiceContract, {
        /// <field>
        /// Called when a new assetServiceContract is created.
        /// <br/>created(msls.application.AssetServiceContract entity)
        /// </field>
        created: [lightSwitchApplication.AssetServiceContract]
    });

    msls._addEntryPoints(lightSwitchApplication.AssetSubscriber, {
        /// <field>
        /// Called when a new assetSubscriber is created.
        /// <br/>created(msls.application.AssetSubscriber entity)
        /// </field>
        created: [lightSwitchApplication.AssetSubscriber]
    });

    msls._addEntryPoints(lightSwitchApplication.AssetSupplier, {
        /// <field>
        /// Called when a new assetSupplier is created.
        /// <br/>created(msls.application.AssetSupplier entity)
        /// </field>
        created: [lightSwitchApplication.AssetSupplier]
    });

    msls._addEntryPoints(lightSwitchApplication.AssetType, {
        /// <field>
        /// Called when a new assetType is created.
        /// <br/>created(msls.application.AssetType entity)
        /// </field>
        created: [lightSwitchApplication.AssetType]
    });

    msls._addEntryPoints(lightSwitchApplication.Employee, {
        /// <field>
        /// Called when a new employee is created.
        /// <br/>created(msls.application.Employee entity)
        /// </field>
        created: [lightSwitchApplication.Employee]
    });

    msls._addEntryPoints(lightSwitchApplication.ServiceContract, {
        /// <field>
        /// Called when a new serviceContract is created.
        /// <br/>created(msls.application.ServiceContract entity)
        /// </field>
        created: [lightSwitchApplication.ServiceContract]
    });

    msls._addEntryPoints(lightSwitchApplication.ServiceContractSupplier, {
        /// <field>
        /// Called when a new serviceContractSupplier is created.
        /// <br/>created(msls.application.ServiceContractSupplier entity)
        /// </field>
        created: [lightSwitchApplication.ServiceContractSupplier]
    });

}(msls.application));
