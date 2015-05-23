# Asset Manager

<a href="https://github.com/delordson/AssetManager/blob/master/Resources/AssetsMain.png"><img class="alignnone size-full wp-image-1419" title="Main" alt="" src="https://github.com/delordson/AssetManager/blob/master/Resources/AssetsMain.png" width="937" height="579" /></a>

&nbsp;

The Asset Manager App is a total equipment management system designed to help organisations with a large number of assets, many of which are supplied by different companies and which need regular preventative maintenance and servicing often by yet another set of companies. The Asset Manager App allows companies to track which assets they own, what the maintenance history is of those assets are, when the next service is due and details of which company provides the service cover, including details of the value of the service contract. The Asset Manager App also provides for email notification to staff who need to be informed whenever the status of an asset changes.


&nbsp;
<h2>Modules</h2>
The Asset Manager App Modules includes a Home Page, the Manage Assets Home Page,  the Manage Service Contracts Module, the Manage Service Contract Suppliers Module and the Settings Module.

&nbsp;
<h2>Access</h2>
Access is controlled through a log in screen. The administrator uses an associated Silverlight application to configure new users, create roles and permissions for those roles as well as to assign users to roles.

<a href="https://github.com/delordson/AssetManager/blob/master/Resources/screenshot_10282013_170633.png"><img class="alignnone size-large wp-image-1438" style="border: 0.5px solid black;" title="screenshot_10282013_170633" alt="" src="https://github.com/delordson/AssetManager/blob/master/Resources/screenshot_10282013_170633.png" width="700" height="393" /></a>

&nbsp;
<h2>The Home Screen</h2>
Access to all the features of the Asset Manager App is from the home page. From here, users can navigate to the ‘Manage Assets Module’, the ‘Manage Service Contracts Module’, the ‘Manage Service Contract Suppliers Module’ and the ‘Settings Module’.

<a href="https://github.com/delordson/AssetManager/blob/master/Resources/screenshot_10282013_130908.png"><img class="alignnone size-large wp-image-1420" style="border: 0.5px solid black;" title="screenshot_10282013_130908" alt="" src="https://github.com/delordson/AssetManager/blob/master/Resources/screenshot_10282013_130908.png" width="700" height="393" /></a>

&nbsp;

&nbsp;
<h2>Manage Assets</h2>
Clicking or tabbing on the Manage Assets button takes the user to the ‘Browse Assets by Asset Type page’. On this page, the user of presenteed with a list of assets types (configured in the settings).

<a href="https://github.com/delordson/AssetManager/blob/master/Resources/screenshot_10282013_131118.png"><img class="alignnone size-large wp-image-1427" style="border: 0.5px solid black;" title="screenshot_10282013_131118" alt="" src="https://github.com/delordson/AssetManager/blob/master/Resources/screenshot_10282013_131118.png" width="700" height="393" /></a>

&nbsp;

&nbsp;

Clicking or tabbing on any of these asset types takes the user to a list of assets of that asset type.

<a href="https://github.com/delordson/AssetManager/blob/master/Resources/screenshot_10282013_131203.png"><img class="alignnone size-large wp-image-1428" style="border: 0.5px solid black;" title="screenshot_10282013_131203" alt="" src="https://github.com/delordson/AssetManager/blob/master/Resources/screenshot_10282013_131203.png" width="700" height="393" /></a>

&nbsp;

&nbsp;

Clicking or tabbing on any asset takes the user to a page for managing that asset. This page provides for full traceability of the asset/equipment across its entire life cycle from purchase to eventual disposal. You can track the purchase details, manufacturer, supplier, current location, service history, service intervals and service contract details. Users can also subscribe to any asset to get an automated email whenever the asset details are updated.

&nbsp;

The page is laid out in a series of tabs. The first tab presents key information about the asset/equipment such as its reference number in the asset register, the serial number a description of the asset, a description as well as an option to upload an image of the asset.

<a href="https://github.com/delordson/AssetManager/blob/master/Resources/screenshot_10282013_131210.png"><img class="alignnone size-large wp-image-1429" style="border: 0.5px solid black;" title="screenshot_10282013_131210" alt="" src="https://github.com/delordson/AssetManager/blob/master/Resources/screenshot_10282013_131210.png" width="700" height="393" /></a>

&nbsp;

&nbsp;

Of course the built in LightSwitch validation of required fields and field lengths works great as expected…

<a href="https://github.com/delordson/AssetManager/blob/master/Resources/screenshot_10282013_185153.png"><img class="alignnone size-large wp-image-1446" style="border: 0.5px solid black;" title="screenshot_10282013_185153" alt="" src="https://github.com/delordson/AssetManager/blob/master/Resources/screenshot_10282013_185153.png" width="700" height="393" /></a>

&nbsp;

…but we’ve also added multi field validation where it makes sense. So you can’t for instance commission an asset before it’s purchase date.

<a href="https://github.com/delordson/AssetManager/blob/master/Resources/screenshot_10282013_185020.png"><img class="alignnone size-large wp-image-1445" style="border: 0.5px solid black;" title="screenshot_10282013_185020" alt="" src="https://github.com/delordson/AssetManager/blob/master/Resources/screenshot_10282013_185020.png" width="700" height="393" /></a>

&nbsp;

&nbsp;

The activities tab is where the full service history of the asset is recorded. The maintenance activity types are configured in the settings by an administrator.

<a href="https://github.com/delordson/AssetManager/blob/master/Resources/screenshot_10282013_131214.png"><img class="alignnone size-large wp-image-1430" style="border: 0.5px solid black;" title="screenshot_10282013_131214" alt="" src="https://github.com/delordson/AssetManager/blob/master/Resources/screenshot_10282013_131214.png" width="700" height="393" /></a>

&nbsp;

&nbsp;

The Schedule tab gives a list of how often various maintenance activity types need to be performed for the asset.

<a href="https://github.com/delordson/AssetManager/blob/master/Resources/screenshot_10282013_131218.png"><img class="alignnone size-large wp-image-1431" style="border: 0.5px solid black;" title="screenshot_10282013_131218" alt="" src="https://github.com/delordson/AssetManager/blob/master/Resources/screenshot_10282013_131218.png" width="700" height="393" /></a>

&nbsp;

&nbsp;

The Contracts gives info on the service contracts that have been negotiated for the asset.

<a href="https://github.com/delordson/AssetManager/blob/master/Resources/screenshot_10282013_131233.png"><img class="alignnone size-large wp-image-1432" style="border: 0.5px solid black;" title="screenshot_10282013_131233" alt="" src="https://github.com/delordson/AssetManager/blob/master/Resources/screenshot_10282013_131233.png" width="700" height="393" /></a>

&nbsp;

The Capital tab includes capital cost information. Some uses cases may require that you configure permissions so that only permitted users can see this info. That is not built in but should be easy enough to do.

<a href="https://github.com/delordson/AssetManager/blob/master/Resources/screenshot_10282013_131238.png"><img class="alignnone  wp-image-1433" style="border: 0.5px solid black;" title="screenshot_10282013_131238" alt="" src="https://github.com/delordson/AssetManager/blob/master/Resources/screenshot_10282013_131238.png" width="700" height="393" /></a>

&nbsp;

&nbsp;

The Subscribers tab allows interested parties to opt into email notification whenever any info on the asset changes. Changes tracked includes updates to the maintenance history.

<a href="https://github.com/delordson/AssetManager/blob/master/Resources/screenshot_10282013_131243.png"><img class="alignnone size-large wp-image-1434" style="border: 0.5px solid black;" title="screenshot_10282013_131243" alt="" src="https://github.com/delordson/AssetManager/blob/master/Resources/screenshot_10282013_131243.png" width="700" height="393" /></a>

&nbsp;

&nbsp;

Here’s an example of what the notification looks like:

&nbsp;

&nbsp;

Finally a Comments tab allows for an unlimited number of comments to be recorded against an asset.

<a href="https://github.com/delordson/AssetManager/blob/master/Resources/screenshot_10282013_131248.png"><img class="alignnone size-large wp-image-1435" style="border: 0.5px solid black;" title="screenshot_10282013_131248" alt="" src="https://github.com/delordson/AssetManager/blob/master/Resources/screenshot_10282013_131248.png" width="700" height="393" /></a>

&nbsp;

&nbsp;
<h2>Manage Service Contracts</h2>
Many organisations have to have service contracts in place for the ppm of their assets and equipment for compliance purposes. This is where the Manage Service Contracts module come in handy. To navigate to it, from the Home page, click or tab on the ‘Manage Service Contracts’ icon. This opens the ‘Browse Service Contracts’ page listing all service contracts.

<a href="https://github.com/delordson/AssetManager/blob/master/Resources/screenshot_10292013_201046.png"><img class="alignnone size-large wp-image-1455" style="border: 0.5px solid black;" title="screenshot_10292013_201046" alt="" src="https://github.com/delordson/AssetManager/blob/master/Resources/screenshot_10292013_201046.png" width="700" height="393" /></a>

&nbsp;

&nbsp;

Clicking or tabbing on any of these takes the user to the specific page for that service contract. The page is laid out in two tabs. A details tab and an assets covered tab. The details tab includes information such as the contract start and end dates as well as details of the contract supplier.

<a href="https://github.com/delordson/AssetManager/blob/master/Resources/screenshot_10282013_175029.png"><img class="alignnone size-large wp-image-1439" style="border: 0.5px solid black;" title="screenshot_10282013_175029" alt="" src="https://github.com/delordson/AssetManager/blob/master/Resources/screenshot_10282013_175029.png" width="700" height="393" /></a>

&nbsp;

&nbsp;

The Assets Covered tab lists assets currently covered by the contract…

<a href="https://github.com/delordson/AssetManager/blob/master/Resources/screenshot_10282013_175033.png"><img class="alignnone  wp-image-1440" style="border: 0.5px solid black;" title="screenshot_10282013_175033" alt="" src="https://github.com/delordson/AssetManager/blob/master/Resources/screenshot_10282013_175033.png" width="700" height="393" /></a>

&nbsp;

&nbsp;

…as well as allowing the user to add assets from the asset register to the contract.

<a href="https://github.com/delordson/AssetManager/blob/master/Resources/screenshot_10282013_175040.png"><img class="alignnone size-large wp-image-1441" style="border: 0.5px solid black;" title="screenshot_10282013_175040" alt="" src="https://github.com/delordson/AssetManager/blob/master/Resources/screenshot_10282013_175040.png" width="700" height="393" /></a>

&nbsp;

&nbsp;
<h2>Manage Service Contract Suppliers</h2>
The Asset Manager App includes a page for managing service contract suppliers. Clicking or tabbing on the Manage Service Contract Suppliers icon takes the user to the ‘Browse Contract Suppliers’ page.

<a href="https://github.com/delordson/AssetManager/blob/master/Resources/screenshot_10292013_201053.png"><img class="alignnone size-large wp-image-1456" style="border: 0.5px solid black;" title="screenshot_10292013_201053" alt="" src="https://github.com/delordson/AssetManager/blob/master/Resources/screenshot_10292013_201053.png" width="700" height="393" /></a>

&nbsp;

&nbsp;

Clicking or tabbing on any item takes the user to the details page for that contract supplier. This page is laid out in two tabs. A details tab and a Contracts tab. The details tab allows users to record contractor information such as address and key contact.

<a href="https://github.com/delordson/AssetManager/blob/master/Resources/screenshot_10282013_180144.png"><img class="alignnone size-large wp-image-1442" style="border: 0.5px solid black;" title="screenshot_10282013_180144" alt="" src="https://github.com/delordson/AssetManager/blob/master/Resources/screenshot_10282013_180144.png" width="700" height="393" /></a>

&nbsp;

&nbsp;

The Contracts tab allows users to manage contracts for that supplier.

<a href="https://github.com/delordson/AssetManager/blob/master/Resources/screenshot_10282013_180527.png"><img class="alignnone size-large wp-image-1444" style="border: 0.5px solid black;" title="screenshot_10282013_180527" alt="" src="https://github.com/delordson/AssetManager/blob/master/Resources/screenshot_10282013_180527.png" width="700" height="393" /></a>

&nbsp;

&nbsp;
<h2>Settings</h2>
The Settings Module is the key module used by the administrator and any other users given the right permissions for managing key application reference data. Items managed include Asset Types, Maintenance Types, lists of Asset manufacturers, lists of Asset Suppliers and lists of Employees.

<a href="https://github.com/delordson/AssetManager/blob/master/Resources/screenshot_10282013_131008.png"><img class="alignnone size-large wp-image-1421" style="border: 0.5px solid black;" title="screenshot_10282013_131008" alt="" src="https://github.com/delordson/AssetManager/blob/master/Resources/screenshot_10282013_131008.png" width="700" height="393" /></a>

&nbsp;

&nbsp;

<strong>Asset Types</strong>

<a href="https://github.com/delordson/AssetManager/blob/master/Resources/screenshot_10292013_200944.png"><img class="alignnone size-large wp-image-1449" style="border: 0.5px solid black;" title="screenshot_10292013_200944" alt="" src="https://github.com/delordson/AssetManager/blob/master/Resources/screenshot_10292013_200944.png" width="700" height="393" /></a>

&nbsp;

<strong>Maintenance Types</strong>

<a href="https://github.com/delordson/AssetManager/blob/master/Resources/screenshot_10292013_200950.png"><img class="alignnone size-large wp-image-1450" style="border: 0.5px solid black;" title="screenshot_10292013_200950" alt="" src="https://github.com/delordson/AssetManager/blob/master/Resources/screenshot_10292013_200950.png" width="700" height="393" /></a>

&nbsp;

<strong>Asset Manufacturers</strong>

<a href="https://github.com/delordson/AssetManager/blob/master/Resources/screenshot_10292013_200956.png"><img class="alignnone size-large wp-image-1451" style="border: 0.5px solid black;" title="screenshot_10292013_200956" alt="" src="https://github.com/delordson/AssetManager/blob/master/Resources/screenshot_10292013_200956.png" width="700" height="393" /></a>

&nbsp;

<strong>Asset Suppliers</strong>

<a href="https://github.com/delordson/AssetManager/blob/master/Resources/screenshot_10292013_201002.png"><img class="alignnone size-large wp-image-1452" style="border: 0.5px solid black;" title="screenshot_10292013_201002" alt="" src="https://github.com/delordson/AssetManager/blob/master/Resources/screenshot_10292013_201002.png" width="700" height="393" /></a>

&nbsp;

<strong>Employees</strong>

<a href="https://github.com/delordson/AssetManager/blob/master/Resources/screenshot_10292013_201007.png"><img class="alignnone size-large wp-image-1453" style="border: 0.5px solid black;" title="screenshot_10292013_201007" alt="" src="https://github.com/delordson/AssetManager/blob/master/Resources/screenshot_10292013_201007.png" width="700" height="393" /></a>
