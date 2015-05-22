/// <reference path="../GeneratedArtifacts/viewModel.js" />

myapp.Home.ManageAssets_postRender = function (element, contentItem) {
    $(element).find('a').css({
        'background-image': 'url(Content/Images/Assets.png)',
        'background-repeat': 'no-repeat',
        'background-position': 'center',
        'width': '250px',
        'height': '250px'
    });
};

myapp.Home.ManageServiceContracts_postRender = function (element, contentItem) {
    $(element).find('a').css({
        'background-image': 'url(Content/Images/ServiceContracts.png)',
        'background-repeat': 'no-repeat',
        'background-position': 'center',
        'width': '250px',
        'height': '250px'
    });
};
myapp.Home.ManageServiceContractSuppliers_postRender = function (element, contentItem) {
    $(element).find('a').css({
        'background-image': 'url(Content/Images/ServiceContractSupplier.png)',
        'background-repeat': 'no-repeat',
        'background-position': 'center',
        'width': '250px',
        'height': '250px'
    });
};
myapp.Home.Settings_postRender = function (element, contentItem) {
    $(element).find('a').css({
        'background-image': 'url(Content/Images/Settings.png)',
        'background-repeat': 'no-repeat',
        'background-position': 'center',
        'width': '250px',
        'height': '250px'
    });
};
myapp.Home.created = function (screen) {
    // Write code here.
    $.getJSON("../UserPermissions/UserPermissions/", function (data) {
        myapp.permissions = data;
    });
};