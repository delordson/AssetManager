/// <reference path="../GeneratedArtifacts/viewModel.js" />

myapp.MobileHome.ManageAssets_postRender = function (element, contentItem) {
    $(element).find('a').css({
        'background-image': 'url(Content/Images/MobileAssets.png)',
        'background-repeat': 'no-repeat',
        'background-position': 'center',
        'width': '90px',
        'height': '90px'
    });
};
myapp.MobileHome.ManageServiceContracts_postRender = function (element, contentItem) {
    $(element).find('a').css({
        'background-image': 'url(Content/Images/MobileServiceContracts.png)',
        'background-repeat': 'no-repeat',
        'background-position': 'center',
        'width': '90px',
        'height': '90px'
    });
};
myapp.MobileHome.ManageServiceContractSuppliers_postRender = function (element, contentItem) {
    $(element).find('a').css({
        'background-image': 'url(Content/Images/MobileServiceContractSupplier.png)',
        'background-repeat': 'no-repeat',
        'background-position': 'center',
        'width': '90px',
        'height': '90px'
    });
};
myapp.MobileHome.Settings_postRender = function (element, contentItem) {
    $(element).find('a').css({
        'background-image': 'url(Content/Images/MobileSettings.png)',
        'background-repeat': 'no-repeat',
        'background-position': 'center',
        'width': '90px',
        'height': '90px'
    });
};
myapp.MobileHome.created = function (screen) {
    // Write code here.
    $.getJSON("../UserPermissions/UserPermissions/", function (data) {
        myapp.permissions = data;
    });
};