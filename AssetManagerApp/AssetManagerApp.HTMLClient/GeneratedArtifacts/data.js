/// <reference path="../Scripts/msls.js" />

window.myapp = msls.application;

(function (lightSwitchApplication) {

    var $Entity = msls.Entity,
        $DataService = msls.DataService,
        $DataWorkspace = msls.DataWorkspace,
        $defineEntity = msls._defineEntity,
        $defineDataService = msls._defineDataService,
        $defineDataWorkspace = msls._defineDataWorkspace,
        $DataServiceQuery = msls.DataServiceQuery,
        $toODataString = msls._toODataString;

    function AssetComment(entitySet) {
        /// <summary>
        /// Represents the AssetComment entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this assetComment.
        /// </param>
        /// <field name="Id" type="Number">
        /// Gets or sets the id for this assetComment.
        /// </field>
        /// <field name="CommentDate" type="Date">
        /// Gets or sets the commentDate for this assetComment.
        /// </field>
        /// <field name="Comment" type="String">
        /// Gets or sets the comment for this assetComment.
        /// </field>
        /// <field name="Asset" type="msls.application.Asset">
        /// Gets or sets the asset for this assetComment.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this assetComment.
        /// </field>
        /// <field name="Created" type="Date">
        /// Gets or sets the created for this assetComment.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this assetComment.
        /// </field>
        /// <field name="Modified" type="Date">
        /// Gets or sets the modified for this assetComment.
        /// </field>
        /// <field name="RowVersion" type="Array">
        /// Gets or sets the rowVersion for this assetComment.
        /// </field>
        /// <field name="details" type="msls.application.AssetComment.Details">
        /// Gets the details for this assetComment.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function AssetMaintenanceActivity(entitySet) {
        /// <summary>
        /// Represents the AssetMaintenanceActivity entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this assetMaintenanceActivity.
        /// </param>
        /// <field name="Id" type="Number">
        /// Gets or sets the id for this assetMaintenanceActivity.
        /// </field>
        /// <field name="DateDue" type="Date">
        /// Gets or sets the dateDue for this assetMaintenanceActivity.
        /// </field>
        /// <field name="DateCompleted" type="Date">
        /// Gets or sets the dateCompleted for this assetMaintenanceActivity.
        /// </field>
        /// <field name="Outcome" type="String">
        /// Gets or sets the outcome for this assetMaintenanceActivity.
        /// </field>
        /// <field name="Asset" type="msls.application.Asset">
        /// Gets or sets the asset for this assetMaintenanceActivity.
        /// </field>
        /// <field name="AssetMaintenanceType" type="msls.application.AssetMaintenanceType">
        /// Gets or sets the assetMaintenanceType for this assetMaintenanceActivity.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this assetMaintenanceActivity.
        /// </field>
        /// <field name="Created" type="Date">
        /// Gets or sets the created for this assetMaintenanceActivity.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this assetMaintenanceActivity.
        /// </field>
        /// <field name="Modified" type="Date">
        /// Gets or sets the modified for this assetMaintenanceActivity.
        /// </field>
        /// <field name="RowVersion" type="Array">
        /// Gets or sets the rowVersion for this assetMaintenanceActivity.
        /// </field>
        /// <field name="details" type="msls.application.AssetMaintenanceActivity.Details">
        /// Gets the details for this assetMaintenanceActivity.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function AssetMaintenanceSchedule(entitySet) {
        /// <summary>
        /// Represents the AssetMaintenanceSchedule entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this assetMaintenanceSchedule.
        /// </param>
        /// <field name="Id" type="Number">
        /// Gets or sets the id for this assetMaintenanceSchedule.
        /// </field>
        /// <field name="MaintenanceTypeIntervalInMonths" type="Number">
        /// Gets or sets the maintenanceTypeIntervalInMonths for this assetMaintenanceSchedule.
        /// </field>
        /// <field name="Asset" type="msls.application.Asset">
        /// Gets or sets the asset for this assetMaintenanceSchedule.
        /// </field>
        /// <field name="AssetMaintenanceType" type="msls.application.AssetMaintenanceType">
        /// Gets or sets the assetMaintenanceType for this assetMaintenanceSchedule.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this assetMaintenanceSchedule.
        /// </field>
        /// <field name="Created" type="Date">
        /// Gets or sets the created for this assetMaintenanceSchedule.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this assetMaintenanceSchedule.
        /// </field>
        /// <field name="Modified" type="Date">
        /// Gets or sets the modified for this assetMaintenanceSchedule.
        /// </field>
        /// <field name="RowVersion" type="Array">
        /// Gets or sets the rowVersion for this assetMaintenanceSchedule.
        /// </field>
        /// <field name="details" type="msls.application.AssetMaintenanceSchedule.Details">
        /// Gets the details for this assetMaintenanceSchedule.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function AssetMaintenanceType(entitySet) {
        /// <summary>
        /// Represents the AssetMaintenanceType entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this assetMaintenanceType.
        /// </param>
        /// <field name="Id" type="Number">
        /// Gets or sets the id for this assetMaintenanceType.
        /// </field>
        /// <field name="MaintenanceTypeDescription" type="String">
        /// Gets or sets the maintenanceTypeDescription for this assetMaintenanceType.
        /// </field>
        /// <field name="InUse" type="Boolean">
        /// Gets or sets the inUse for this assetMaintenanceType.
        /// </field>
        /// <field name="AssetMaintenanceActivities" type="msls.EntityCollection" elementType="msls.application.AssetMaintenanceActivity">
        /// Gets the assetMaintenanceActivities for this assetMaintenanceType.
        /// </field>
        /// <field name="AssetMaintenanceSchedules" type="msls.EntityCollection" elementType="msls.application.AssetMaintenanceSchedule">
        /// Gets the assetMaintenanceSchedules for this assetMaintenanceType.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this assetMaintenanceType.
        /// </field>
        /// <field name="Created" type="Date">
        /// Gets or sets the created for this assetMaintenanceType.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this assetMaintenanceType.
        /// </field>
        /// <field name="Modified" type="Date">
        /// Gets or sets the modified for this assetMaintenanceType.
        /// </field>
        /// <field name="RowVersion" type="Array">
        /// Gets or sets the rowVersion for this assetMaintenanceType.
        /// </field>
        /// <field name="details" type="msls.application.AssetMaintenanceType.Details">
        /// Gets the details for this assetMaintenanceType.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function AssetManufacturer(entitySet) {
        /// <summary>
        /// Represents the AssetManufacturer entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this assetManufacturer.
        /// </param>
        /// <field name="Id" type="Number">
        /// Gets or sets the id for this assetManufacturer.
        /// </field>
        /// <field name="Manufacturer" type="String">
        /// Gets or sets the manufacturer for this assetManufacturer.
        /// </field>
        /// <field name="AddressLine1" type="String">
        /// Gets or sets the addressLine1 for this assetManufacturer.
        /// </field>
        /// <field name="AddressLine2" type="String">
        /// Gets or sets the addressLine2 for this assetManufacturer.
        /// </field>
        /// <field name="AddressLine3" type="String">
        /// Gets or sets the addressLine3 for this assetManufacturer.
        /// </field>
        /// <field name="AddressLine4" type="String">
        /// Gets or sets the addressLine4 for this assetManufacturer.
        /// </field>
        /// <field name="AddressLine5" type="String">
        /// Gets or sets the addressLine5 for this assetManufacturer.
        /// </field>
        /// <field name="PostCode" type="String">
        /// Gets or sets the postCode for this assetManufacturer.
        /// </field>
        /// <field name="Email" type="String">
        /// Gets or sets the email for this assetManufacturer.
        /// </field>
        /// <field name="Phone1" type="String">
        /// Gets or sets the phone1 for this assetManufacturer.
        /// </field>
        /// <field name="Phone2" type="String">
        /// Gets or sets the phone2 for this assetManufacturer.
        /// </field>
        /// <field name="Fax" type="String">
        /// Gets or sets the fax for this assetManufacturer.
        /// </field>
        /// <field name="Website" type="String">
        /// Gets or sets the website for this assetManufacturer.
        /// </field>
        /// <field name="Assets" type="msls.EntityCollection" elementType="msls.application.Asset">
        /// Gets the assets for this assetManufacturer.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this assetManufacturer.
        /// </field>
        /// <field name="Created" type="Date">
        /// Gets or sets the created for this assetManufacturer.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this assetManufacturer.
        /// </field>
        /// <field name="Modified" type="Date">
        /// Gets or sets the modified for this assetManufacturer.
        /// </field>
        /// <field name="RowVersion" type="Array">
        /// Gets or sets the rowVersion for this assetManufacturer.
        /// </field>
        /// <field name="details" type="msls.application.AssetManufacturer.Details">
        /// Gets the details for this assetManufacturer.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function Asset(entitySet) {
        /// <summary>
        /// Represents the Asset entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this asset.
        /// </param>
        /// <field name="Id" type="Number">
        /// Gets or sets the id for this asset.
        /// </field>
        /// <field name="Reference" type="String">
        /// Gets or sets the reference for this asset.
        /// </field>
        /// <field name="AssetDescription" type="String">
        /// Gets or sets the assetDescription for this asset.
        /// </field>
        /// <field name="SerialNumber" type="String">
        /// Gets or sets the serialNumber for this asset.
        /// </field>
        /// <field name="Model" type="String">
        /// Gets or sets the model for this asset.
        /// </field>
        /// <field name="Location" type="String">
        /// Gets or sets the location for this asset.
        /// </field>
        /// <field name="PurchaseDate" type="Date">
        /// Gets or sets the purchaseDate for this asset.
        /// </field>
        /// <field name="CommissionDate" type="Date">
        /// Gets or sets the commissionDate for this asset.
        /// </field>
        /// <field name="IntendedReplacementDate" type="Date">
        /// Gets or sets the intendedReplacementDate for this asset.
        /// </field>
        /// <field name="InUse" type="Boolean">
        /// Gets or sets the inUse for this asset.
        /// </field>
        /// <field name="DateRemovedFromUse" type="Date">
        /// Gets or sets the dateRemovedFromUse for this asset.
        /// </field>
        /// <field name="AssetImage" type="String">
        /// Gets or sets the assetImage for this asset.
        /// </field>
        /// <field name="CapitalAssetReference" type="String">
        /// Gets or sets the capitalAssetReference for this asset.
        /// </field>
        /// <field name="PurchasePrice" type="String">
        /// Gets or sets the purchasePrice for this asset.
        /// </field>
        /// <field name="CurrentValue" type="String">
        /// Gets or sets the currentValue for this asset.
        /// </field>
        /// <field name="DateCurrentValueEvaluated" type="Date">
        /// Gets or sets the dateCurrentValueEvaluated for this asset.
        /// </field>
        /// <field name="AssetComments" type="msls.EntityCollection" elementType="msls.application.AssetComment">
        /// Gets the assetComments for this asset.
        /// </field>
        /// <field name="AssetMaintenanceActivities" type="msls.EntityCollection" elementType="msls.application.AssetMaintenanceActivity">
        /// Gets the assetMaintenanceActivities for this asset.
        /// </field>
        /// <field name="AssetMaintenanceSchedules" type="msls.EntityCollection" elementType="msls.application.AssetMaintenanceSchedule">
        /// Gets the assetMaintenanceSchedules for this asset.
        /// </field>
        /// <field name="AssetManufacturer" type="msls.application.AssetManufacturer">
        /// Gets or sets the assetManufacturer for this asset.
        /// </field>
        /// <field name="AssetServiceContracts" type="msls.EntityCollection" elementType="msls.application.AssetServiceContract">
        /// Gets the assetServiceContracts for this asset.
        /// </field>
        /// <field name="AssetSubscribers" type="msls.EntityCollection" elementType="msls.application.AssetSubscriber">
        /// Gets the assetSubscribers for this asset.
        /// </field>
        /// <field name="AssetSupplier" type="msls.application.AssetSupplier">
        /// Gets or sets the assetSupplier for this asset.
        /// </field>
        /// <field name="AssetType" type="msls.application.AssetType">
        /// Gets or sets the assetType for this asset.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this asset.
        /// </field>
        /// <field name="Created" type="Date">
        /// Gets or sets the created for this asset.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this asset.
        /// </field>
        /// <field name="Modified" type="Date">
        /// Gets or sets the modified for this asset.
        /// </field>
        /// <field name="RowVersion" type="Array">
        /// Gets or sets the rowVersion for this asset.
        /// </field>
        /// <field name="details" type="msls.application.Asset.Details">
        /// Gets the details for this asset.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function AssetServiceContract(entitySet) {
        /// <summary>
        /// Represents the AssetServiceContract entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this assetServiceContract.
        /// </param>
        /// <field name="Id" type="Number">
        /// Gets or sets the id for this assetServiceContract.
        /// </field>
        /// <field name="Asset" type="msls.application.Asset">
        /// Gets or sets the asset for this assetServiceContract.
        /// </field>
        /// <field name="ServiceContract" type="msls.application.ServiceContract">
        /// Gets or sets the serviceContract for this assetServiceContract.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this assetServiceContract.
        /// </field>
        /// <field name="Created" type="Date">
        /// Gets or sets the created for this assetServiceContract.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this assetServiceContract.
        /// </field>
        /// <field name="Modified" type="Date">
        /// Gets or sets the modified for this assetServiceContract.
        /// </field>
        /// <field name="RowVersion" type="Array">
        /// Gets or sets the rowVersion for this assetServiceContract.
        /// </field>
        /// <field name="details" type="msls.application.AssetServiceContract.Details">
        /// Gets the details for this assetServiceContract.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function AssetSubscriber(entitySet) {
        /// <summary>
        /// Represents the AssetSubscriber entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this assetSubscriber.
        /// </param>
        /// <field name="Id" type="Number">
        /// Gets or sets the id for this assetSubscriber.
        /// </field>
        /// <field name="Asset" type="msls.application.Asset">
        /// Gets or sets the asset for this assetSubscriber.
        /// </field>
        /// <field name="Employee" type="msls.application.Employee">
        /// Gets or sets the employee for this assetSubscriber.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this assetSubscriber.
        /// </field>
        /// <field name="Created" type="Date">
        /// Gets or sets the created for this assetSubscriber.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this assetSubscriber.
        /// </field>
        /// <field name="Modified" type="Date">
        /// Gets or sets the modified for this assetSubscriber.
        /// </field>
        /// <field name="RowVersion" type="Array">
        /// Gets or sets the rowVersion for this assetSubscriber.
        /// </field>
        /// <field name="details" type="msls.application.AssetSubscriber.Details">
        /// Gets the details for this assetSubscriber.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function AssetSupplier(entitySet) {
        /// <summary>
        /// Represents the AssetSupplier entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this assetSupplier.
        /// </param>
        /// <field name="Id" type="Number">
        /// Gets or sets the id for this assetSupplier.
        /// </field>
        /// <field name="Supplier" type="String">
        /// Gets or sets the supplier for this assetSupplier.
        /// </field>
        /// <field name="AddressLine1" type="String">
        /// Gets or sets the addressLine1 for this assetSupplier.
        /// </field>
        /// <field name="AddressLine2" type="String">
        /// Gets or sets the addressLine2 for this assetSupplier.
        /// </field>
        /// <field name="AddressLine3" type="String">
        /// Gets or sets the addressLine3 for this assetSupplier.
        /// </field>
        /// <field name="AddressLine4" type="String">
        /// Gets or sets the addressLine4 for this assetSupplier.
        /// </field>
        /// <field name="AddressLine5" type="String">
        /// Gets or sets the addressLine5 for this assetSupplier.
        /// </field>
        /// <field name="PostCode" type="String">
        /// Gets or sets the postCode for this assetSupplier.
        /// </field>
        /// <field name="Email" type="String">
        /// Gets or sets the email for this assetSupplier.
        /// </field>
        /// <field name="Phone1" type="String">
        /// Gets or sets the phone1 for this assetSupplier.
        /// </field>
        /// <field name="Phone2" type="String">
        /// Gets or sets the phone2 for this assetSupplier.
        /// </field>
        /// <field name="Fax" type="String">
        /// Gets or sets the fax for this assetSupplier.
        /// </field>
        /// <field name="Website" type="String">
        /// Gets or sets the website for this assetSupplier.
        /// </field>
        /// <field name="Assets" type="msls.EntityCollection" elementType="msls.application.Asset">
        /// Gets the assets for this assetSupplier.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this assetSupplier.
        /// </field>
        /// <field name="Created" type="Date">
        /// Gets or sets the created for this assetSupplier.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this assetSupplier.
        /// </field>
        /// <field name="Modified" type="Date">
        /// Gets or sets the modified for this assetSupplier.
        /// </field>
        /// <field name="RowVersion" type="Array">
        /// Gets or sets the rowVersion for this assetSupplier.
        /// </field>
        /// <field name="details" type="msls.application.AssetSupplier.Details">
        /// Gets the details for this assetSupplier.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function AssetType(entitySet) {
        /// <summary>
        /// Represents the AssetType entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this assetType.
        /// </param>
        /// <field name="Id" type="Number">
        /// Gets or sets the id for this assetType.
        /// </field>
        /// <field name="AssetTypeDescription" type="String">
        /// Gets or sets the assetTypeDescription for this assetType.
        /// </field>
        /// <field name="InUse" type="Boolean">
        /// Gets or sets the inUse for this assetType.
        /// </field>
        /// <field name="Asset" type="msls.EntityCollection" elementType="msls.application.Asset">
        /// Gets the asset for this assetType.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this assetType.
        /// </field>
        /// <field name="Created" type="Date">
        /// Gets or sets the created for this assetType.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this assetType.
        /// </field>
        /// <field name="Modified" type="Date">
        /// Gets or sets the modified for this assetType.
        /// </field>
        /// <field name="RowVersion" type="Array">
        /// Gets or sets the rowVersion for this assetType.
        /// </field>
        /// <field name="details" type="msls.application.AssetType.Details">
        /// Gets the details for this assetType.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function Employee(entitySet) {
        /// <summary>
        /// Represents the Employee entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this employee.
        /// </param>
        /// <field name="Id" type="Number">
        /// Gets or sets the id for this employee.
        /// </field>
        /// <field name="LastName" type="String">
        /// Gets or sets the lastName for this employee.
        /// </field>
        /// <field name="FirstName" type="String">
        /// Gets or sets the firstName for this employee.
        /// </field>
        /// <field name="UserName" type="String">
        /// This is the user name of the 
        /// </field>
        /// <field name="Email" type="String">
        /// Gets or sets the email for this employee.
        /// </field>
        /// <field name="Current" type="Boolean">
        /// Gets or sets the current for this employee.
        /// </field>
        /// <field name="AssetSubscribers" type="msls.EntityCollection" elementType="msls.application.AssetSubscriber">
        /// Gets the assetSubscribers for this employee.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this employee.
        /// </field>
        /// <field name="Created" type="Date">
        /// Gets or sets the created for this employee.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this employee.
        /// </field>
        /// <field name="Modified" type="Date">
        /// Gets or sets the modified for this employee.
        /// </field>
        /// <field name="RowVersion" type="Array">
        /// Gets or sets the rowVersion for this employee.
        /// </field>
        /// <field name="details" type="msls.application.Employee.Details">
        /// Gets the details for this employee.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function ServiceContract(entitySet) {
        /// <summary>
        /// Represents the ServiceContract entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this serviceContract.
        /// </param>
        /// <field name="Id" type="Number">
        /// Gets or sets the id for this serviceContract.
        /// </field>
        /// <field name="ContractReference" type="String">
        /// Gets or sets the contractReference for this serviceContract.
        /// </field>
        /// <field name="ContractName" type="String">
        /// Gets or sets the contractName for this serviceContract.
        /// </field>
        /// <field name="ContractDescription" type="String">
        /// Gets or sets the contractDescription for this serviceContract.
        /// </field>
        /// <field name="StartDate" type="Date">
        /// Gets or sets the startDate for this serviceContract.
        /// </field>
        /// <field name="EndDate" type="Date">
        /// Gets or sets the endDate for this serviceContract.
        /// </field>
        /// <field name="ContractPrice" type="String">
        /// Gets or sets the contractPrice for this serviceContract.
        /// </field>
        /// <field name="CurrentContract" type="Boolean">
        /// Gets or sets the currentContract for this serviceContract.
        /// </field>
        /// <field name="AssetServiceContracts" type="msls.EntityCollection" elementType="msls.application.AssetServiceContract">
        /// Gets the assetServiceContracts for this serviceContract.
        /// </field>
        /// <field name="ServiceContractSupplier" type="msls.application.ServiceContractSupplier">
        /// Gets or sets the serviceContractSupplier for this serviceContract.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this serviceContract.
        /// </field>
        /// <field name="Created" type="Date">
        /// Gets or sets the created for this serviceContract.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this serviceContract.
        /// </field>
        /// <field name="Modified" type="Date">
        /// Gets or sets the modified for this serviceContract.
        /// </field>
        /// <field name="RowVersion" type="Array">
        /// Gets or sets the rowVersion for this serviceContract.
        /// </field>
        /// <field name="details" type="msls.application.ServiceContract.Details">
        /// Gets the details for this serviceContract.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function ServiceContractSupplier(entitySet) {
        /// <summary>
        /// Represents the ServiceContractSupplier entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this serviceContractSupplier.
        /// </param>
        /// <field name="Id" type="Number">
        /// Gets or sets the id for this serviceContractSupplier.
        /// </field>
        /// <field name="ServiceContractSupplierDetails" type="String">
        /// Gets or sets the serviceContractSupplierDetails for this serviceContractSupplier.
        /// </field>
        /// <field name="Contact" type="String">
        /// Gets or sets the contact for this serviceContractSupplier.
        /// </field>
        /// <field name="ContactJobDescription" type="String">
        /// Gets or sets the contactJobDescription for this serviceContractSupplier.
        /// </field>
        /// <field name="Email" type="String">
        /// Gets or sets the email for this serviceContractSupplier.
        /// </field>
        /// <field name="Phone1" type="String">
        /// Gets or sets the phone1 for this serviceContractSupplier.
        /// </field>
        /// <field name="Phone2" type="String">
        /// Gets or sets the phone2 for this serviceContractSupplier.
        /// </field>
        /// <field name="Fax" type="String">
        /// Gets or sets the fax for this serviceContractSupplier.
        /// </field>
        /// <field name="Website" type="String">
        /// Gets or sets the website for this serviceContractSupplier.
        /// </field>
        /// <field name="AddressLine1" type="String">
        /// Gets or sets the addressLine1 for this serviceContractSupplier.
        /// </field>
        /// <field name="AddressLine2" type="String">
        /// Gets or sets the addressLine2 for this serviceContractSupplier.
        /// </field>
        /// <field name="AddressLine3" type="String">
        /// Gets or sets the addressLine3 for this serviceContractSupplier.
        /// </field>
        /// <field name="AddressLine4" type="String">
        /// Gets or sets the addressLine4 for this serviceContractSupplier.
        /// </field>
        /// <field name="AddressLine5" type="String">
        /// Gets or sets the addressLine5 for this serviceContractSupplier.
        /// </field>
        /// <field name="PostCode" type="String">
        /// Gets or sets the postCode for this serviceContractSupplier.
        /// </field>
        /// <field name="ServiceContracts" type="msls.EntityCollection" elementType="msls.application.ServiceContract">
        /// Gets the serviceContracts for this serviceContractSupplier.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this serviceContractSupplier.
        /// </field>
        /// <field name="Created" type="Date">
        /// Gets or sets the created for this serviceContractSupplier.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this serviceContractSupplier.
        /// </field>
        /// <field name="Modified" type="Date">
        /// Gets or sets the modified for this serviceContractSupplier.
        /// </field>
        /// <field name="RowVersion" type="Array">
        /// Gets or sets the rowVersion for this serviceContractSupplier.
        /// </field>
        /// <field name="details" type="msls.application.ServiceContractSupplier.Details">
        /// Gets the details for this serviceContractSupplier.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function ApplicationData(dataWorkspace) {
        /// <summary>
        /// Represents the ApplicationData data service.
        /// </summary>
        /// <param name="dataWorkspace" type="msls.DataWorkspace">
        /// The data workspace that created this data service.
        /// </param>
        /// <field name="AssetComments" type="msls.EntitySet">
        /// Gets the AssetComments entity set.
        /// </field>
        /// <field name="AssetMaintenanceActivities" type="msls.EntitySet">
        /// Gets the AssetMaintenanceActivities entity set.
        /// </field>
        /// <field name="AssetMaintenanceSchedules" type="msls.EntitySet">
        /// Gets the AssetMaintenanceSchedules entity set.
        /// </field>
        /// <field name="AssetMaintenanceTypes" type="msls.EntitySet">
        /// Gets the AssetMaintenanceTypes entity set.
        /// </field>
        /// <field name="AssetManufacturers" type="msls.EntitySet">
        /// Gets the AssetManufacturers entity set.
        /// </field>
        /// <field name="Assets" type="msls.EntitySet">
        /// Gets the Assets entity set.
        /// </field>
        /// <field name="AssetServiceContracts" type="msls.EntitySet">
        /// Gets the AssetServiceContracts entity set.
        /// </field>
        /// <field name="AssetSubscribers" type="msls.EntitySet">
        /// Gets the AssetSubscribers entity set.
        /// </field>
        /// <field name="AssetSuppliers" type="msls.EntitySet">
        /// Gets the AssetSuppliers entity set.
        /// </field>
        /// <field name="AssetTypes" type="msls.EntitySet">
        /// Gets the AssetTypes entity set.
        /// </field>
        /// <field name="Employees" type="msls.EntitySet">
        /// Gets the Employees entity set.
        /// </field>
        /// <field name="ServiceContracts" type="msls.EntitySet">
        /// Gets the ServiceContracts entity set.
        /// </field>
        /// <field name="ServiceContractSuppliers" type="msls.EntitySet">
        /// Gets the ServiceContractSuppliers entity set.
        /// </field>
        /// <field name="details" type="msls.application.ApplicationData.Details">
        /// Gets the details for this data service.
        /// </field>
        $DataService.call(this, dataWorkspace);
    };
    function DataWorkspace() {
        /// <summary>
        /// Represents the data workspace.
        /// </summary>
        /// <field name="ApplicationData" type="msls.application.ApplicationData">
        /// Gets the ApplicationData data service.
        /// </field>
        /// <field name="details" type="msls.application.DataWorkspace.Details">
        /// Gets the details for this data workspace.
        /// </field>
        $DataWorkspace.call(this);
    };

    msls._addToNamespace("msls.application", {

        AssetComment: $defineEntity(AssetComment, [
            { name: "Id", type: Number },
            { name: "CommentDate", type: Date },
            { name: "Comment", type: String },
            { name: "Asset", kind: "reference", type: Asset },
            { name: "CreatedBy", type: String, isReadOnly: true },
            { name: "Created", type: Date, isReadOnly: true },
            { name: "ModifiedBy", type: String, isReadOnly: true },
            { name: "Modified", type: Date, isReadOnly: true },
            { name: "RowVersion", type: Array }
        ]),

        AssetMaintenanceActivity: $defineEntity(AssetMaintenanceActivity, [
            { name: "Id", type: Number },
            { name: "DateDue", type: Date },
            { name: "DateCompleted", type: Date },
            { name: "Outcome", type: String },
            { name: "Asset", kind: "reference", type: Asset },
            { name: "AssetMaintenanceType", kind: "reference", type: AssetMaintenanceType },
            { name: "CreatedBy", type: String, isReadOnly: true },
            { name: "Created", type: Date, isReadOnly: true },
            { name: "ModifiedBy", type: String, isReadOnly: true },
            { name: "Modified", type: Date, isReadOnly: true },
            { name: "RowVersion", type: Array }
        ]),

        AssetMaintenanceSchedule: $defineEntity(AssetMaintenanceSchedule, [
            { name: "Id", type: Number },
            { name: "MaintenanceTypeIntervalInMonths", type: Number },
            { name: "Asset", kind: "reference", type: Asset },
            { name: "AssetMaintenanceType", kind: "reference", type: AssetMaintenanceType },
            { name: "CreatedBy", type: String, isReadOnly: true },
            { name: "Created", type: Date, isReadOnly: true },
            { name: "ModifiedBy", type: String, isReadOnly: true },
            { name: "Modified", type: Date, isReadOnly: true },
            { name: "RowVersion", type: Array }
        ]),

        AssetMaintenanceType: $defineEntity(AssetMaintenanceType, [
            { name: "Id", type: Number },
            { name: "MaintenanceTypeDescription", type: String },
            { name: "InUse", type: Boolean },
            { name: "AssetMaintenanceActivities", kind: "collection", elementType: AssetMaintenanceActivity },
            { name: "AssetMaintenanceSchedules", kind: "collection", elementType: AssetMaintenanceSchedule },
            { name: "CreatedBy", type: String, isReadOnly: true },
            { name: "Created", type: Date, isReadOnly: true },
            { name: "ModifiedBy", type: String, isReadOnly: true },
            { name: "Modified", type: Date, isReadOnly: true },
            { name: "RowVersion", type: Array }
        ]),

        AssetManufacturer: $defineEntity(AssetManufacturer, [
            { name: "Id", type: Number },
            { name: "Manufacturer", type: String },
            { name: "AddressLine1", type: String },
            { name: "AddressLine2", type: String },
            { name: "AddressLine3", type: String },
            { name: "AddressLine4", type: String },
            { name: "AddressLine5", type: String },
            { name: "PostCode", type: String },
            { name: "Email", type: String },
            { name: "Phone1", type: String },
            { name: "Phone2", type: String },
            { name: "Fax", type: String },
            { name: "Website", type: String },
            { name: "Assets", kind: "collection", elementType: Asset },
            { name: "CreatedBy", type: String, isReadOnly: true },
            { name: "Created", type: Date, isReadOnly: true },
            { name: "ModifiedBy", type: String, isReadOnly: true },
            { name: "Modified", type: Date, isReadOnly: true },
            { name: "RowVersion", type: Array }
        ]),

        Asset: $defineEntity(Asset, [
            { name: "Id", type: Number },
            { name: "Reference", type: String },
            { name: "AssetDescription", type: String },
            { name: "SerialNumber", type: String },
            { name: "Model", type: String },
            { name: "Location", type: String },
            { name: "PurchaseDate", type: Date },
            { name: "CommissionDate", type: Date },
            { name: "IntendedReplacementDate", type: Date },
            { name: "InUse", type: Boolean },
            { name: "DateRemovedFromUse", type: Date },
            { name: "AssetImage", type: String },
            { name: "CapitalAssetReference", type: String },
            { name: "PurchasePrice", type: String },
            { name: "CurrentValue", type: String },
            { name: "DateCurrentValueEvaluated", type: Date },
            { name: "AssetComments", kind: "collection", elementType: AssetComment },
            { name: "AssetMaintenanceActivities", kind: "collection", elementType: AssetMaintenanceActivity },
            { name: "AssetMaintenanceSchedules", kind: "collection", elementType: AssetMaintenanceSchedule },
            { name: "AssetManufacturer", kind: "reference", type: AssetManufacturer },
            { name: "AssetServiceContracts", kind: "collection", elementType: AssetServiceContract },
            { name: "AssetSubscribers", kind: "collection", elementType: AssetSubscriber },
            { name: "AssetSupplier", kind: "reference", type: AssetSupplier },
            { name: "AssetType", kind: "reference", type: AssetType },
            { name: "CreatedBy", type: String, isReadOnly: true },
            { name: "Created", type: Date, isReadOnly: true },
            { name: "ModifiedBy", type: String, isReadOnly: true },
            { name: "Modified", type: Date, isReadOnly: true },
            { name: "RowVersion", type: Array }
        ]),

        AssetServiceContract: $defineEntity(AssetServiceContract, [
            { name: "Id", type: Number },
            { name: "Asset", kind: "reference", type: Asset },
            { name: "ServiceContract", kind: "reference", type: ServiceContract },
            { name: "CreatedBy", type: String, isReadOnly: true },
            { name: "Created", type: Date, isReadOnly: true },
            { name: "ModifiedBy", type: String, isReadOnly: true },
            { name: "Modified", type: Date, isReadOnly: true },
            { name: "RowVersion", type: Array }
        ]),

        AssetSubscriber: $defineEntity(AssetSubscriber, [
            { name: "Id", type: Number },
            { name: "Asset", kind: "reference", type: Asset },
            { name: "Employee", kind: "reference", type: Employee },
            { name: "CreatedBy", type: String, isReadOnly: true },
            { name: "Created", type: Date, isReadOnly: true },
            { name: "ModifiedBy", type: String, isReadOnly: true },
            { name: "Modified", type: Date, isReadOnly: true },
            { name: "RowVersion", type: Array }
        ]),

        AssetSupplier: $defineEntity(AssetSupplier, [
            { name: "Id", type: Number },
            { name: "Supplier", type: String },
            { name: "AddressLine1", type: String },
            { name: "AddressLine2", type: String },
            { name: "AddressLine3", type: String },
            { name: "AddressLine4", type: String },
            { name: "AddressLine5", type: String },
            { name: "PostCode", type: String },
            { name: "Email", type: String },
            { name: "Phone1", type: String },
            { name: "Phone2", type: String },
            { name: "Fax", type: String },
            { name: "Website", type: String },
            { name: "Assets", kind: "collection", elementType: Asset },
            { name: "CreatedBy", type: String, isReadOnly: true },
            { name: "Created", type: Date, isReadOnly: true },
            { name: "ModifiedBy", type: String, isReadOnly: true },
            { name: "Modified", type: Date, isReadOnly: true },
            { name: "RowVersion", type: Array }
        ]),

        AssetType: $defineEntity(AssetType, [
            { name: "Id", type: Number },
            { name: "AssetTypeDescription", type: String },
            { name: "InUse", type: Boolean },
            { name: "Asset", kind: "collection", elementType: Asset },
            { name: "CreatedBy", type: String, isReadOnly: true },
            { name: "Created", type: Date, isReadOnly: true },
            { name: "ModifiedBy", type: String, isReadOnly: true },
            { name: "Modified", type: Date, isReadOnly: true },
            { name: "RowVersion", type: Array }
        ]),

        Employee: $defineEntity(Employee, [
            { name: "Id", type: Number },
            { name: "LastName", type: String },
            { name: "FirstName", type: String },
            { name: "UserName", type: String },
            { name: "Email", type: String },
            { name: "Current", type: Boolean },
            { name: "AssetSubscribers", kind: "collection", elementType: AssetSubscriber },
            { name: "CreatedBy", type: String, isReadOnly: true },
            { name: "Created", type: Date, isReadOnly: true },
            { name: "ModifiedBy", type: String, isReadOnly: true },
            { name: "Modified", type: Date, isReadOnly: true },
            { name: "RowVersion", type: Array }
        ]),

        ServiceContract: $defineEntity(ServiceContract, [
            { name: "Id", type: Number },
            { name: "ContractReference", type: String },
            { name: "ContractName", type: String },
            { name: "ContractDescription", type: String },
            { name: "StartDate", type: Date },
            { name: "EndDate", type: Date },
            { name: "ContractPrice", type: String },
            { name: "CurrentContract", type: Boolean },
            { name: "AssetServiceContracts", kind: "collection", elementType: AssetServiceContract },
            { name: "ServiceContractSupplier", kind: "reference", type: ServiceContractSupplier },
            { name: "CreatedBy", type: String, isReadOnly: true },
            { name: "Created", type: Date, isReadOnly: true },
            { name: "ModifiedBy", type: String, isReadOnly: true },
            { name: "Modified", type: Date, isReadOnly: true },
            { name: "RowVersion", type: Array }
        ]),

        ServiceContractSupplier: $defineEntity(ServiceContractSupplier, [
            { name: "Id", type: Number },
            { name: "ServiceContractSupplierDetails", type: String },
            { name: "Contact", type: String },
            { name: "ContactJobDescription", type: String },
            { name: "Email", type: String },
            { name: "Phone1", type: String },
            { name: "Phone2", type: String },
            { name: "Fax", type: String },
            { name: "Website", type: String },
            { name: "AddressLine1", type: String },
            { name: "AddressLine2", type: String },
            { name: "AddressLine3", type: String },
            { name: "AddressLine4", type: String },
            { name: "AddressLine5", type: String },
            { name: "PostCode", type: String },
            { name: "ServiceContracts", kind: "collection", elementType: ServiceContract },
            { name: "CreatedBy", type: String, isReadOnly: true },
            { name: "Created", type: Date, isReadOnly: true },
            { name: "ModifiedBy", type: String, isReadOnly: true },
            { name: "Modified", type: Date, isReadOnly: true },
            { name: "RowVersion", type: Array }
        ]),

        ApplicationData: $defineDataService(ApplicationData, lightSwitchApplication.rootUri + "/ApplicationData.svc", [
            { name: "AssetComments", elementType: AssetComment },
            { name: "AssetMaintenanceActivities", elementType: AssetMaintenanceActivity },
            { name: "AssetMaintenanceSchedules", elementType: AssetMaintenanceSchedule },
            { name: "AssetMaintenanceTypes", elementType: AssetMaintenanceType },
            { name: "AssetManufacturers", elementType: AssetManufacturer },
            { name: "Assets", elementType: Asset },
            { name: "AssetServiceContracts", elementType: AssetServiceContract },
            { name: "AssetSubscribers", elementType: AssetSubscriber },
            { name: "AssetSuppliers", elementType: AssetSupplier },
            { name: "AssetTypes", elementType: AssetType },
            { name: "Employees", elementType: Employee },
            { name: "ServiceContracts", elementType: ServiceContract },
            { name: "ServiceContractSuppliers", elementType: ServiceContractSupplier }
        ], [
            {
                name: "AssetComments_SingleOrDefault", value: function (Id) {
                    return new $DataServiceQuery({ _entitySet: this.AssetComments },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/AssetComments(" + "Id=" + $toODataString(Id, "Int32?") + ")"
                    );
                }
            },
            {
                name: "AssetMaintenanceActivities_SingleOrDefault", value: function (Id) {
                    return new $DataServiceQuery({ _entitySet: this.AssetMaintenanceActivities },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/AssetMaintenanceActivities(" + "Id=" + $toODataString(Id, "Int32?") + ")"
                    );
                }
            },
            {
                name: "AssetMaintenanceSchedules_SingleOrDefault", value: function (Id) {
                    return new $DataServiceQuery({ _entitySet: this.AssetMaintenanceSchedules },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/AssetMaintenanceSchedules(" + "Id=" + $toODataString(Id, "Int32?") + ")"
                    );
                }
            },
            {
                name: "AssetMaintenanceTypes_SingleOrDefault", value: function (Id) {
                    return new $DataServiceQuery({ _entitySet: this.AssetMaintenanceTypes },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/AssetMaintenanceTypes(" + "Id=" + $toODataString(Id, "Int32?") + ")"
                    );
                }
            },
            {
                name: "AssetManufacturers_SingleOrDefault", value: function (Id) {
                    return new $DataServiceQuery({ _entitySet: this.AssetManufacturers },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/AssetManufacturers(" + "Id=" + $toODataString(Id, "Int32?") + ")"
                    );
                }
            },
            {
                name: "Assets_SingleOrDefault", value: function (Id) {
                    return new $DataServiceQuery({ _entitySet: this.Assets },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/Assets(" + "Id=" + $toODataString(Id, "Int32?") + ")"
                    );
                }
            },
            {
                name: "AssetServiceContracts_SingleOrDefault", value: function (Id) {
                    return new $DataServiceQuery({ _entitySet: this.AssetServiceContracts },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/AssetServiceContracts(" + "Id=" + $toODataString(Id, "Int32?") + ")"
                    );
                }
            },
            {
                name: "AssetSubscribers_SingleOrDefault", value: function (Id) {
                    return new $DataServiceQuery({ _entitySet: this.AssetSubscribers },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/AssetSubscribers(" + "Id=" + $toODataString(Id, "Int32?") + ")"
                    );
                }
            },
            {
                name: "AssetSuppliers_SingleOrDefault", value: function (Id) {
                    return new $DataServiceQuery({ _entitySet: this.AssetSuppliers },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/AssetSuppliers(" + "Id=" + $toODataString(Id, "Int32?") + ")"
                    );
                }
            },
            {
                name: "AssetTypes_SingleOrDefault", value: function (Id) {
                    return new $DataServiceQuery({ _entitySet: this.AssetTypes },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/AssetTypes(" + "Id=" + $toODataString(Id, "Int32?") + ")"
                    );
                }
            },
            {
                name: "Employees_SingleOrDefault", value: function (Id) {
                    return new $DataServiceQuery({ _entitySet: this.Employees },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/Employees(" + "Id=" + $toODataString(Id, "Int32?") + ")"
                    );
                }
            },
            {
                name: "ServiceContracts_SingleOrDefault", value: function (Id) {
                    return new $DataServiceQuery({ _entitySet: this.ServiceContracts },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/ServiceContracts(" + "Id=" + $toODataString(Id, "Int32?") + ")"
                    );
                }
            },
            {
                name: "ServiceContractSuppliers_SingleOrDefault", value: function (Id) {
                    return new $DataServiceQuery({ _entitySet: this.ServiceContractSuppliers },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/ServiceContractSuppliers(" + "Id=" + $toODataString(Id, "Int32?") + ")"
                    );
                }
            }
        ]),

        DataWorkspace: $defineDataWorkspace(DataWorkspace, [
            { name: "ApplicationData", type: ApplicationData }
        ])

    });

}(msls.application));
