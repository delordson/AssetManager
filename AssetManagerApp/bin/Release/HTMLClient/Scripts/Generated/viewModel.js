/// <reference path="data.js" />

(function (lightSwitchApplication) {

    var $Screen = msls.Screen,
        $defineScreen = msls._defineScreen,
        $DataServiceQuery = msls.DataServiceQuery,
        $toODataString = msls._toODataString,
        $defineShowScreen = msls._defineShowScreen;

    function AddEditAsset(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditAsset screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="Asset" type="msls.application.Asset">
        /// Gets or sets the asset for this screen.
        /// </field>
        /// <field name="AssetComments" type="msls.VisualCollection" elementType="msls.application.AssetComment">
        /// Gets the assetComments for this screen.
        /// </field>
        /// <field name="AssetMaintenanceActivities" type="msls.VisualCollection" elementType="msls.application.AssetMaintenanceActivity">
        /// Gets the assetMaintenanceActivities for this screen.
        /// </field>
        /// <field name="AssetMaintenanceSchedules" type="msls.VisualCollection" elementType="msls.application.AssetMaintenanceSchedule">
        /// Gets the assetMaintenanceSchedules for this screen.
        /// </field>
        /// <field name="AssetServiceContracts" type="msls.VisualCollection" elementType="msls.application.AssetServiceContract">
        /// Gets the assetServiceContracts for this screen.
        /// </field>
        /// <field name="AssetSubscribers" type="msls.VisualCollection" elementType="msls.application.AssetSubscriber">
        /// Gets the assetSubscribers for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditAsset.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditAsset", parameters);
    }

    function AddEditAssetComment(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditAssetComment screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="AssetComment" type="msls.application.AssetComment">
        /// Gets or sets the assetComment for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditAssetComment.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditAssetComment", parameters);
    }

    function AddEditAssetImage(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditAssetImage screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="Asset" type="msls.application.Asset">
        /// Gets or sets the asset for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditAssetImage.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditAssetImage", parameters);
    }

    function AddEditAssetMaintenanceActivity(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditAssetMaintenanceActivity screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="AssetMaintenanceActivity" type="msls.application.AssetMaintenanceActivity">
        /// Gets or sets the assetMaintenanceActivity for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditAssetMaintenanceActivity.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditAssetMaintenanceActivity", parameters);
    }

    function AddEditAssetMaintenanceSchedule(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditAssetMaintenanceSchedule screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="AssetMaintenanceSchedule" type="msls.application.AssetMaintenanceSchedule">
        /// Gets or sets the assetMaintenanceSchedule for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditAssetMaintenanceSchedule.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditAssetMaintenanceSchedule", parameters);
    }

    function AddEditAssetMaintenanceType(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditAssetMaintenanceType screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="AssetMaintenanceType" type="msls.application.AssetMaintenanceType">
        /// Gets or sets the assetMaintenanceType for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditAssetMaintenanceType.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditAssetMaintenanceType", parameters);
    }

    function AddEditAssetManufacturer(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditAssetManufacturer screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="AssetManufacturer" type="msls.application.AssetManufacturer">
        /// Gets or sets the assetManufacturer for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditAssetManufacturer.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditAssetManufacturer", parameters);
    }

    function AddEditAssetServiceContract(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditAssetServiceContract screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="AssetServiceContract" type="msls.application.AssetServiceContract">
        /// Gets or sets the assetServiceContract for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditAssetServiceContract.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditAssetServiceContract", parameters);
    }

    function AddEditAssetSubscriber(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditAssetSubscriber screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="AssetSubscriber" type="msls.application.AssetSubscriber">
        /// Gets or sets the assetSubscriber for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditAssetSubscriber.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditAssetSubscriber", parameters);
    }

    function AddEditAssetSupplier(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditAssetSupplier screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="AssetSupplier" type="msls.application.AssetSupplier">
        /// Gets or sets the assetSupplier for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditAssetSupplier.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditAssetSupplier", parameters);
    }

    function AddEditAssetType(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditAssetType screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="AssetType" type="msls.application.AssetType">
        /// Gets or sets the assetType for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditAssetType.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditAssetType", parameters);
    }

    function AddEditEmployee(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditEmployee screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="Employee" type="msls.application.Employee">
        /// Gets or sets the employee for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditEmployee.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditEmployee", parameters);
    }

    function AddEditServiceContract(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditServiceContract screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="ServiceContract" type="msls.application.ServiceContract">
        /// Gets or sets the serviceContract for this screen.
        /// </field>
        /// <field name="AssetServiceContracts" type="msls.VisualCollection" elementType="msls.application.AssetServiceContract">
        /// Gets the assetServiceContracts for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditServiceContract.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditServiceContract", parameters);
    }

    function AddEditServiceContractAsset(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditServiceContractAsset screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="AssetServiceContract" type="msls.application.AssetServiceContract">
        /// Gets or sets the assetServiceContract for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditServiceContractAsset.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditServiceContractAsset", parameters);
    }

    function AddEditServiceContractSupplier(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditServiceContractSupplier screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="ServiceContractSupplier" type="msls.application.ServiceContractSupplier">
        /// Gets or sets the serviceContractSupplier for this screen.
        /// </field>
        /// <field name="ServiceContracts" type="msls.VisualCollection" elementType="msls.application.ServiceContract">
        /// Gets the serviceContracts for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditServiceContractSupplier.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditServiceContractSupplier", parameters);
    }

    function BrowseAssetMaintenanceTypes(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the BrowseAssetMaintenanceTypes screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="AssetMaintenanceTypes" type="msls.VisualCollection" elementType="msls.application.AssetMaintenanceType">
        /// Gets the assetMaintenanceTypes for this screen.
        /// </field>
        /// <field name="Search" type="String">
        /// Gets or sets the search for this screen.
        /// </field>
        /// <field name="details" type="msls.application.BrowseAssetMaintenanceTypes.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "BrowseAssetMaintenanceTypes", parameters);
    }

    function BrowseAssetManufacturers(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the BrowseAssetManufacturers screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="AssetManufacturers" type="msls.VisualCollection" elementType="msls.application.AssetManufacturer">
        /// Gets the assetManufacturers for this screen.
        /// </field>
        /// <field name="Search" type="String">
        /// Gets or sets the search for this screen.
        /// </field>
        /// <field name="details" type="msls.application.BrowseAssetManufacturers.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "BrowseAssetManufacturers", parameters);
    }

    function BrowseAssets(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the BrowseAssets screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="Assets" type="msls.VisualCollection" elementType="msls.application.Asset">
        /// Gets the assets for this screen.
        /// </field>
        /// <field name="AssetTypeId" type="Number">
        /// Gets or sets the assetTypeId for this screen.
        /// </field>
        /// <field name="details" type="msls.application.BrowseAssets.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "BrowseAssets", parameters);
    }

    function BrowseAssetsByAssetType(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the BrowseAssetsByAssetType screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="AssetTypes" type="msls.VisualCollection" elementType="msls.application.AssetType">
        /// Gets the assetTypes for this screen.
        /// </field>
        /// <field name="details" type="msls.application.BrowseAssetsByAssetType.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "BrowseAssetsByAssetType", parameters);
    }

    function BrowseAssetSuppliers(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the BrowseAssetSuppliers screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="AssetSuppliers" type="msls.VisualCollection" elementType="msls.application.AssetSupplier">
        /// Gets the assetSuppliers for this screen.
        /// </field>
        /// <field name="Search" type="String">
        /// Gets or sets the search for this screen.
        /// </field>
        /// <field name="details" type="msls.application.BrowseAssetSuppliers.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "BrowseAssetSuppliers", parameters);
    }

    function BrowseAssetTypes(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the BrowseAssetTypes screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="AssetTypes" type="msls.VisualCollection" elementType="msls.application.AssetType">
        /// Gets the assetTypes for this screen.
        /// </field>
        /// <field name="Search" type="String">
        /// Gets or sets the search for this screen.
        /// </field>
        /// <field name="details" type="msls.application.BrowseAssetTypes.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "BrowseAssetTypes", parameters);
    }

    function BrowseEmployees(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the BrowseEmployees screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="Employees" type="msls.VisualCollection" elementType="msls.application.Employee">
        /// Gets the employees for this screen.
        /// </field>
        /// <field name="Search" type="String">
        /// Gets or sets the search for this screen.
        /// </field>
        /// <field name="details" type="msls.application.BrowseEmployees.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "BrowseEmployees", parameters);
    }

    function BrowseServiceContracts(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the BrowseServiceContracts screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="ServiceContracts" type="msls.VisualCollection" elementType="msls.application.ServiceContract">
        /// Gets the serviceContracts for this screen.
        /// </field>
        /// <field name="Search" type="String">
        /// Gets or sets the search for this screen.
        /// </field>
        /// <field name="details" type="msls.application.BrowseServiceContracts.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "BrowseServiceContracts", parameters);
    }

    function BrowseServiceContractSuppliers(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the BrowseServiceContractSuppliers screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="ServiceContractSuppliers" type="msls.VisualCollection" elementType="msls.application.ServiceContractSupplier">
        /// Gets the serviceContractSuppliers for this screen.
        /// </field>
        /// <field name="Search" type="String">
        /// Gets or sets the search for this screen.
        /// </field>
        /// <field name="details" type="msls.application.BrowseServiceContractSuppliers.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "BrowseServiceContractSuppliers", parameters);
    }

    function Home(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the Home screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="details" type="msls.application.Home.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "Home", parameters);
    }

    function MobileHome(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the MobileHome screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="details" type="msls.application.MobileHome.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "MobileHome", parameters);
    }

    function MobileSettings(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the MobileSettings screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="details" type="msls.application.MobileSettings.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "MobileSettings", parameters);
    }

    function Settings(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the Settings screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="details" type="msls.application.Settings.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "Settings", parameters);
    }

    msls._addToNamespace("msls.application", {

        AddEditAsset: $defineScreen(AddEditAsset, [
            { name: "Asset", kind: "local", type: lightSwitchApplication.Asset },
            {
                name: "AssetComments", kind: "collection", elementType: lightSwitchApplication.AssetComment,
                getNavigationProperty: function () {
                    if (this.owner.Asset) {
                        return this.owner.Asset.details.properties.AssetComments;
                    }
                    return null;
                },
                appendQuery: function () {
                    return this.orderByDescending("CommentDate");
                }
            },
            {
                name: "AssetMaintenanceActivities", kind: "collection", elementType: lightSwitchApplication.AssetMaintenanceActivity,
                getNavigationProperty: function () {
                    if (this.owner.Asset) {
                        return this.owner.Asset.details.properties.AssetMaintenanceActivities;
                    }
                    return null;
                },
                appendQuery: function () {
                    return this.orderByDescending("DateDue").expand("AssetMaintenanceType");
                }
            },
            {
                name: "AssetMaintenanceSchedules", kind: "collection", elementType: lightSwitchApplication.AssetMaintenanceSchedule,
                getNavigationProperty: function () {
                    if (this.owner.Asset) {
                        return this.owner.Asset.details.properties.AssetMaintenanceSchedules;
                    }
                    return null;
                },
                appendQuery: function () {
                    return this.orderBy("AssetMaintenanceType/MaintenanceTypeDescription").expand("AssetMaintenanceType");
                }
            },
            {
                name: "AssetServiceContracts", kind: "collection", elementType: lightSwitchApplication.AssetServiceContract,
                getNavigationProperty: function () {
                    if (this.owner.Asset) {
                        return this.owner.Asset.details.properties.AssetServiceContracts;
                    }
                    return null;
                },
                appendQuery: function () {
                    return this.orderByDescending("ServiceContract/EndDate").expand("ServiceContract").expand("ServiceContract.ServiceContractSupplier");
                }
            },
            {
                name: "AssetSubscribers", kind: "collection", elementType: lightSwitchApplication.AssetSubscriber,
                getNavigationProperty: function () {
                    if (this.owner.Asset) {
                        return this.owner.Asset.details.properties.AssetSubscribers;
                    }
                    return null;
                },
                appendQuery: function () {
                    return this.orderBy("Employee/LastName").thenBy("Employee/FirstName").expand("Employee");
                }
            }
        ], [
        ]),

        AddEditAssetComment: $defineScreen(AddEditAssetComment, [
            { name: "AssetComment", kind: "local", type: lightSwitchApplication.AssetComment }
        ], [
        ]),

        AddEditAssetImage: $defineScreen(AddEditAssetImage, [
            { name: "Asset", kind: "local", type: lightSwitchApplication.Asset }
        ], [
        ]),

        AddEditAssetMaintenanceActivity: $defineScreen(AddEditAssetMaintenanceActivity, [
            { name: "AssetMaintenanceActivity", kind: "local", type: lightSwitchApplication.AssetMaintenanceActivity }
        ], [
        ]),

        AddEditAssetMaintenanceSchedule: $defineScreen(AddEditAssetMaintenanceSchedule, [
            { name: "AssetMaintenanceSchedule", kind: "local", type: lightSwitchApplication.AssetMaintenanceSchedule }
        ], [
        ]),

        AddEditAssetMaintenanceType: $defineScreen(AddEditAssetMaintenanceType, [
            { name: "AssetMaintenanceType", kind: "local", type: lightSwitchApplication.AssetMaintenanceType }
        ], [
        ]),

        AddEditAssetManufacturer: $defineScreen(AddEditAssetManufacturer, [
            { name: "AssetManufacturer", kind: "local", type: lightSwitchApplication.AssetManufacturer }
        ], [
        ]),

        AddEditAssetServiceContract: $defineScreen(AddEditAssetServiceContract, [
            { name: "AssetServiceContract", kind: "local", type: lightSwitchApplication.AssetServiceContract }
        ], [
        ]),

        AddEditAssetSubscriber: $defineScreen(AddEditAssetSubscriber, [
            { name: "AssetSubscriber", kind: "local", type: lightSwitchApplication.AssetSubscriber }
        ], [
        ]),

        AddEditAssetSupplier: $defineScreen(AddEditAssetSupplier, [
            { name: "AssetSupplier", kind: "local", type: lightSwitchApplication.AssetSupplier }
        ], [
        ]),

        AddEditAssetType: $defineScreen(AddEditAssetType, [
            { name: "AssetType", kind: "local", type: lightSwitchApplication.AssetType }
        ], [
        ]),

        AddEditEmployee: $defineScreen(AddEditEmployee, [
            { name: "Employee", kind: "local", type: lightSwitchApplication.Employee }
        ], [
        ]),

        AddEditServiceContract: $defineScreen(AddEditServiceContract, [
            { name: "ServiceContract", kind: "local", type: lightSwitchApplication.ServiceContract },
            {
                name: "AssetServiceContracts", kind: "collection", elementType: lightSwitchApplication.AssetServiceContract,
                getNavigationProperty: function () {
                    if (this.owner.ServiceContract) {
                        return this.owner.ServiceContract.details.properties.AssetServiceContracts;
                    }
                    return null;
                },
                appendQuery: function () {
                    return this.orderBy("Asset/AssetDescription").expand("Asset").expand("Asset.AssetType");
                }
            }
        ], [
        ]),

        AddEditServiceContractAsset: $defineScreen(AddEditServiceContractAsset, [
            { name: "AssetServiceContract", kind: "local", type: lightSwitchApplication.AssetServiceContract }
        ], [
        ]),

        AddEditServiceContractSupplier: $defineScreen(AddEditServiceContractSupplier, [
            { name: "ServiceContractSupplier", kind: "local", type: lightSwitchApplication.ServiceContractSupplier },
            {
                name: "ServiceContracts", kind: "collection", elementType: lightSwitchApplication.ServiceContract,
                getNavigationProperty: function () {
                    if (this.owner.ServiceContractSupplier) {
                        return this.owner.ServiceContractSupplier.details.properties.ServiceContracts;
                    }
                    return null;
                },
                appendQuery: function () {
                    return this.orderByDescending("EndDate");
                }
            }
        ], [
        ]),

        BrowseAssetMaintenanceTypes: $defineScreen(BrowseAssetMaintenanceTypes, [
            {
                name: "AssetMaintenanceTypes", kind: "collection", elementType: lightSwitchApplication.AssetMaintenanceType,
                createQuery: function (searchParameter) {
                    return this.dataWorkspace.ApplicationData.AssetMaintenanceTypes.filter("" + ((searchParameter === undefined || searchParameter === null) ? "true" : "substringof(" + $toODataString(searchParameter, "String?") + ", MaintenanceTypeDescription)") + "").orderBy("MaintenanceTypeDescription");
                }
            },
            { name: "Search", kind: "local", type: String }
        ], [
        ]),

        BrowseAssetManufacturers: $defineScreen(BrowseAssetManufacturers, [
            {
                name: "AssetManufacturers", kind: "collection", elementType: lightSwitchApplication.AssetManufacturer,
                createQuery: function (searchParameter) {
                    return this.dataWorkspace.ApplicationData.AssetManufacturers.filter("((((" + ((searchParameter === undefined || searchParameter === null) ? "true" : "substringof(" + $toODataString(searchParameter, "String?") + ", Manufacturer)") + " or " + ((searchParameter === undefined || searchParameter === null) ? "true" : "substringof(" + $toODataString(searchParameter, "String?") + ", AddressLine1)") + ") or " + ((searchParameter === undefined || searchParameter === null) ? "true" : "substringof(" + $toODataString(searchParameter, "String?") + ", AddressLine2)") + ") or " + ((searchParameter === undefined || searchParameter === null) ? "true" : "substringof(" + $toODataString(searchParameter, "String?") + ", AddressLine3)") + ") or " + ((searchParameter === undefined || searchParameter === null) ? "true" : "substringof(" + $toODataString(searchParameter, "String?") + ", AddressLine4)") + ") or " + ((searchParameter === undefined || searchParameter === null) ? "true" : "substringof(" + $toODataString(searchParameter, "String?") + ", AddressLine5)") + "").orderBy("Manufacturer");
                }
            },
            { name: "Search", kind: "local", type: String }
        ], [
        ]),

        BrowseAssets: $defineScreen(BrowseAssets, [
            {
                name: "Assets", kind: "collection", elementType: lightSwitchApplication.Asset,
                createQuery: function (AssetTypeId) {
                    return this.dataWorkspace.ApplicationData.Assets.filter("" + ((AssetTypeId === undefined || AssetTypeId === null) ? "false" : "(AssetType/Id eq " + $toODataString(AssetTypeId, "Int32?") + ")") + "").orderBy("AssetDescription");
                }
            },
            { name: "AssetTypeId", kind: "local", type: Number }
        ], [
        ]),

        BrowseAssetsByAssetType: $defineScreen(BrowseAssetsByAssetType, [
            {
                name: "AssetTypes", kind: "collection", elementType: lightSwitchApplication.AssetType,
                createQuery: function () {
                    return this.dataWorkspace.ApplicationData.AssetTypes.orderBy("AssetTypeDescription");
                }
            }
        ], [
        ]),

        BrowseAssetSuppliers: $defineScreen(BrowseAssetSuppliers, [
            {
                name: "AssetSuppliers", kind: "collection", elementType: lightSwitchApplication.AssetSupplier,
                createQuery: function (searchParameter) {
                    return this.dataWorkspace.ApplicationData.AssetSuppliers.filter("((((" + ((searchParameter === undefined || searchParameter === null) ? "true" : "substringof(" + $toODataString(searchParameter, "String?") + ", Supplier)") + " or " + ((searchParameter === undefined || searchParameter === null) ? "true" : "substringof(" + $toODataString(searchParameter, "String?") + ", AddressLine1)") + ") or " + ((searchParameter === undefined || searchParameter === null) ? "true" : "substringof(" + $toODataString(searchParameter, "String?") + ", AddressLine2)") + ") or " + ((searchParameter === undefined || searchParameter === null) ? "true" : "substringof(" + $toODataString(searchParameter, "String?") + ", AddressLine3)") + ") or " + ((searchParameter === undefined || searchParameter === null) ? "true" : "substringof(" + $toODataString(searchParameter, "String?") + ", AddressLine4)") + ") or " + ((searchParameter === undefined || searchParameter === null) ? "true" : "substringof(" + $toODataString(searchParameter, "String?") + ", AddressLine5)") + "").orderBy("Supplier");
                }
            },
            { name: "Search", kind: "local", type: String }
        ], [
        ]),

        BrowseAssetTypes: $defineScreen(BrowseAssetTypes, [
            {
                name: "AssetTypes", kind: "collection", elementType: lightSwitchApplication.AssetType,
                createQuery: function (searchParameter) {
                    return this.dataWorkspace.ApplicationData.AssetTypes.filter("" + ((searchParameter === undefined || searchParameter === null) ? "true" : "substringof(" + $toODataString(searchParameter, "String?") + ", AssetTypeDescription)") + "").orderBy("AssetTypeDescription");
                }
            },
            { name: "Search", kind: "local", type: String }
        ], [
        ]),

        BrowseEmployees: $defineScreen(BrowseEmployees, [
            {
                name: "Employees", kind: "collection", elementType: lightSwitchApplication.Employee,
                createQuery: function (searchParameter) {
                    return this.dataWorkspace.ApplicationData.Employees.filter("(" + ((searchParameter === undefined || searchParameter === null) ? "true" : "substringof(" + $toODataString(searchParameter, "String?") + ", UserName)") + " or " + ((searchParameter === undefined || searchParameter === null) ? "true" : "substringof(" + $toODataString(searchParameter, "String?") + ", FirstName)") + ") or " + ((searchParameter === undefined || searchParameter === null) ? "true" : "substringof(" + $toODataString(searchParameter, "String?") + ", LastName)") + "").orderBy("LastName").thenBy("FirstName");
                }
            },
            { name: "Search", kind: "local", type: String }
        ], [
        ]),

        BrowseServiceContracts: $defineScreen(BrowseServiceContracts, [
            {
                name: "ServiceContracts", kind: "collection", elementType: lightSwitchApplication.ServiceContract,
                createQuery: function (searchParameter) {
                    return this.dataWorkspace.ApplicationData.ServiceContracts.filter("(" + ((searchParameter === undefined || searchParameter === null) ? "true" : "substringof(" + $toODataString(searchParameter, "String?") + ", ContractReference)") + " or " + ((searchParameter === undefined || searchParameter === null) ? "true" : "substringof(" + $toODataString(searchParameter, "String?") + ", ContractName)") + ") or " + ((searchParameter === undefined || searchParameter === null) ? "true" : "substringof(" + $toODataString(searchParameter, "String?") + ", ContractDescription)") + "").orderByDescending("EndDate").expand("ServiceContractSupplier");
                }
            },
            { name: "Search", kind: "local", type: String }
        ], [
        ]),

        BrowseServiceContractSuppliers: $defineScreen(BrowseServiceContractSuppliers, [
            {
                name: "ServiceContractSuppliers", kind: "collection", elementType: lightSwitchApplication.ServiceContractSupplier,
                createQuery: function (searchParameter) {
                    return this.dataWorkspace.ApplicationData.ServiceContractSuppliers.filter("(((((" + ((searchParameter === undefined || searchParameter === null) ? "true" : "substringof(" + $toODataString(searchParameter, "String?") + ", ServiceContractSupplierDetails)") + " or " + ((searchParameter === undefined || searchParameter === null) ? "true" : "substringof(" + $toODataString(searchParameter, "String?") + ", AddressLine1)") + ") or " + ((searchParameter === undefined || searchParameter === null) ? "true" : "substringof(" + $toODataString(searchParameter, "String?") + ", AddressLine2)") + ") or " + ((searchParameter === undefined || searchParameter === null) ? "true" : "substringof(" + $toODataString(searchParameter, "String?") + ", AddressLine3)") + ") or " + ((searchParameter === undefined || searchParameter === null) ? "true" : "substringof(" + $toODataString(searchParameter, "String?") + ", AddressLine4)") + ") or " + ((searchParameter === undefined || searchParameter === null) ? "true" : "substringof(" + $toODataString(searchParameter, "String?") + ", AddressLine5)") + ") or " + ((searchParameter === undefined || searchParameter === null) ? "true" : "substringof(" + $toODataString(searchParameter, "String?") + ", Contact)") + "").orderBy("ServiceContractSupplierDetails");
                }
            },
            { name: "Search", kind: "local", type: String }
        ], [
        ]),

        Home: $defineScreen(Home, [
        ], [
        ]),

        MobileHome: $defineScreen(MobileHome, [
        ], [
        ]),

        MobileSettings: $defineScreen(MobileSettings, [
        ], [
        ]),

        Settings: $defineScreen(Settings, [
        ], [
        ]),

        showAddEditAsset: $defineShowScreen(function showAddEditAsset(Asset, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditAsset screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddEditAsset", parameters, options);
        }),

        showAddEditAssetComment: $defineShowScreen(function showAddEditAssetComment(AssetComment, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditAssetComment screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddEditAssetComment", parameters, options);
        }),

        showAddEditAssetImage: $defineShowScreen(function showAddEditAssetImage(Asset, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditAssetImage screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddEditAssetImage", parameters, options);
        }),

        showAddEditAssetMaintenanceActivity: $defineShowScreen(function showAddEditAssetMaintenanceActivity(AssetMaintenanceActivity, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditAssetMaintenanceActivity screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddEditAssetMaintenanceActivity", parameters, options);
        }),

        showAddEditAssetMaintenanceSchedule: $defineShowScreen(function showAddEditAssetMaintenanceSchedule(AssetMaintenanceSchedule, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditAssetMaintenanceSchedule screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddEditAssetMaintenanceSchedule", parameters, options);
        }),

        showAddEditAssetMaintenanceType: $defineShowScreen(function showAddEditAssetMaintenanceType(AssetMaintenanceType, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditAssetMaintenanceType screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddEditAssetMaintenanceType", parameters, options);
        }),

        showAddEditAssetManufacturer: $defineShowScreen(function showAddEditAssetManufacturer(AssetManufacturer, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditAssetManufacturer screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddEditAssetManufacturer", parameters, options);
        }),

        showAddEditAssetServiceContract: $defineShowScreen(function showAddEditAssetServiceContract(AssetServiceContract, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditAssetServiceContract screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddEditAssetServiceContract", parameters, options);
        }),

        showAddEditAssetSubscriber: $defineShowScreen(function showAddEditAssetSubscriber(AssetSubscriber, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditAssetSubscriber screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddEditAssetSubscriber", parameters, options);
        }),

        showAddEditAssetSupplier: $defineShowScreen(function showAddEditAssetSupplier(AssetSupplier, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditAssetSupplier screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddEditAssetSupplier", parameters, options);
        }),

        showAddEditAssetType: $defineShowScreen(function showAddEditAssetType(AssetType, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditAssetType screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddEditAssetType", parameters, options);
        }),

        showAddEditEmployee: $defineShowScreen(function showAddEditEmployee(Employee, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditEmployee screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddEditEmployee", parameters, options);
        }),

        showAddEditServiceContract: $defineShowScreen(function showAddEditServiceContract(ServiceContract, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditServiceContract screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddEditServiceContract", parameters, options);
        }),

        showAddEditServiceContractAsset: $defineShowScreen(function showAddEditServiceContractAsset(AssetServiceContract, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditServiceContractAsset screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddEditServiceContractAsset", parameters, options);
        }),

        showAddEditServiceContractSupplier: $defineShowScreen(function showAddEditServiceContractSupplier(ServiceContractSupplier, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditServiceContractSupplier screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddEditServiceContractSupplier", parameters, options);
        }),

        showBrowseAssetMaintenanceTypes: $defineShowScreen(function showBrowseAssetMaintenanceTypes(options) {
            /// <summary>
            /// Asynchronously navigates forward to the BrowseAssetMaintenanceTypes screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("BrowseAssetMaintenanceTypes", parameters, options);
        }),

        showBrowseAssetManufacturers: $defineShowScreen(function showBrowseAssetManufacturers(options) {
            /// <summary>
            /// Asynchronously navigates forward to the BrowseAssetManufacturers screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("BrowseAssetManufacturers", parameters, options);
        }),

        showBrowseAssets: $defineShowScreen(function showBrowseAssets(AssetTypeId, options) {
            /// <summary>
            /// Asynchronously navigates forward to the BrowseAssets screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("BrowseAssets", parameters, options);
        }),

        showBrowseAssetsByAssetType: $defineShowScreen(function showBrowseAssetsByAssetType(options) {
            /// <summary>
            /// Asynchronously navigates forward to the BrowseAssetsByAssetType screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("BrowseAssetsByAssetType", parameters, options);
        }),

        showBrowseAssetSuppliers: $defineShowScreen(function showBrowseAssetSuppliers(options) {
            /// <summary>
            /// Asynchronously navigates forward to the BrowseAssetSuppliers screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("BrowseAssetSuppliers", parameters, options);
        }),

        showBrowseAssetTypes: $defineShowScreen(function showBrowseAssetTypes(options) {
            /// <summary>
            /// Asynchronously navigates forward to the BrowseAssetTypes screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("BrowseAssetTypes", parameters, options);
        }),

        showBrowseEmployees: $defineShowScreen(function showBrowseEmployees(options) {
            /// <summary>
            /// Asynchronously navigates forward to the BrowseEmployees screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("BrowseEmployees", parameters, options);
        }),

        showBrowseServiceContracts: $defineShowScreen(function showBrowseServiceContracts(options) {
            /// <summary>
            /// Asynchronously navigates forward to the BrowseServiceContracts screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("BrowseServiceContracts", parameters, options);
        }),

        showBrowseServiceContractSuppliers: $defineShowScreen(function showBrowseServiceContractSuppliers(options) {
            /// <summary>
            /// Asynchronously navigates forward to the BrowseServiceContractSuppliers screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("BrowseServiceContractSuppliers", parameters, options);
        }),

        showHome: $defineShowScreen(function showHome(options) {
            /// <summary>
            /// Asynchronously navigates forward to the Home screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("Home", parameters, options);
        }),

        showMobileHome: $defineShowScreen(function showMobileHome(options) {
            /// <summary>
            /// Asynchronously navigates forward to the MobileHome screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("MobileHome", parameters, options);
        }),

        showMobileSettings: $defineShowScreen(function showMobileSettings(options) {
            /// <summary>
            /// Asynchronously navigates forward to the MobileSettings screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("MobileSettings", parameters, options);
        }),

        showSettings: $defineShowScreen(function showSettings(options) {
            /// <summary>
            /// Asynchronously navigates forward to the Settings screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("Settings", parameters, options);
        })

    });

}(msls.application));
