using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Microsoft.LightSwitch;
using Microsoft.LightSwitch.Security.Server;
using LightSwitchApplication.UserCode;

namespace LightSwitchApplication
{
    public partial class ApplicationDataService
    {
        partial void Assets_Updated(Asset entity)
        {
            SendAssetUpdateEmail(entity, "Asset Details Updated");
        }

        private void SendAssetUpdateEmail(Asset entity, string typeOfChange)
        {
            if (System.Net.NetworkInformation.NetworkInterface.GetIsNetworkAvailable())
            {
                string subject = string.Format("{0} Updated", entity.AssetDescription);

                string message = string.Format("<html><body><p><b>{0}</b> was Updated on {1} by {2}.<br></br><br></br>Type of Change: <b>{3}</b></p><br></br><p>Asset Details:</p><table border='1' cellpadding='3'><tr><td><b>Asset Reference</b></td><td><b>Asset Type</b></td><td><b>Serial Number</b></td><td><b>Model</b></td><td><b>Location</b></td></tr><tr><td>{4}</td><td>{5}</td><td>{6}</td><td>{7}</td><td>{8}</td></tr></table></body></html>", entity.AssetDescription, DateTime.Now, this.Application.User.FullName, typeOfChange, entity.Reference, entity.AssetType.AssetTypeDescription, entity.SerialNumber, entity.Model, entity.Location);

                var subscriberEmails = from employeeAssets in entity.AssetSubscribers
                                       select employeeAssets.Employee.Email;

                if (subscriberEmails.Count() != 0)
                {
                    MailHelper mailHelper = new MailHelper();
                    mailHelper.SendMail(subscriberEmails, subject, message);
                }
            }
        }

        partial void AssetMaintenanceActivities_Updated(AssetMaintenanceActivity entity)
        {
            string change = string.Format("Maintenance Details Updated: {0} due on {1}", entity.AssetMaintenanceType.MaintenanceTypeDescription, entity.DateDue.ToString());
            if (entity.DateCompleted != null)
            {
                change += string.Format(" and completed on {0}", entity.DateCompleted.ToString());
            }

            SendAssetUpdateEmail(entity.Asset, change);
        }

        partial void AssetMaintenanceActivities_Inserted(AssetMaintenanceActivity entity)
        {
            string change = string.Format("Maintenance Details Added: {0} due on {1}", entity.AssetMaintenanceType.MaintenanceTypeDescription, entity.DateDue.ToString());

            SendAssetUpdateEmail(entity.Asset, change);
        }

        partial void AssetMaintenanceActivities_Deleting(AssetMaintenanceActivity entity)
        {
            string change = string.Format("Maintenance Details Deleted: {0} due on {1}", entity.AssetMaintenanceType.MaintenanceTypeDescription, entity.DateDue.ToString());

            SendAssetUpdateEmail(entity.Asset, change);
        }

        partial void AssetMaintenanceSchedules_Updated(AssetMaintenanceSchedule entity)
        {
            string change = string.Format("Maintenance Schedule Updated: {0} due every {1} month(s)", entity.AssetMaintenanceType.MaintenanceTypeDescription, entity.MaintenanceTypeIntervalInMonths);

            SendAssetUpdateEmail(entity.Asset, change);
        }

        partial void AssetMaintenanceSchedules_Inserted(AssetMaintenanceSchedule entity)
        {
            string change = string.Format("Maintenance Schedule Added: {0} due every {1} month(s)", entity.AssetMaintenanceType.MaintenanceTypeDescription, entity.MaintenanceTypeIntervalInMonths);

            SendAssetUpdateEmail(entity.Asset, change);
        }

        partial void AssetMaintenanceSchedules_Deleting(AssetMaintenanceSchedule entity)
        {
            string change = string.Format("Maintenance Schedule Deleted: {0} due every {1} month(s)", entity.AssetMaintenanceType.MaintenanceTypeDescription, entity.MaintenanceTypeIntervalInMonths);

            SendAssetUpdateEmail(entity.Asset, change);
        }

        partial void AssetServiceContracts_Updated(AssetServiceContract entity)
        {
            string change = string.Format("Service Contract Updated: Contract ref = {0}, Name = {1}", entity.ServiceContract.ContractReference, entity.ServiceContract.ContractName);

            SendAssetUpdateEmail(entity.Asset, change);
        }

        partial void AssetServiceContracts_Inserted(AssetServiceContract entity)
        {
            string change = string.Format("Service Contract Added: Contract ref = {0}, Name = {1}", entity.ServiceContract.ContractReference, entity.ServiceContract.ContractName);

            SendAssetUpdateEmail(entity.Asset, change);
        }

        partial void AssetServiceContracts_Deleting(AssetServiceContract entity)
        {
            string change = string.Format("Service Contract Deleted: Contract ref = {0}, Name = {1}", entity.ServiceContract.ContractReference, entity.ServiceContract.ContractName);

            SendAssetUpdateEmail(entity.Asset, change);
        }

        partial void Assets_Validate(Asset entity, EntitySetValidationResultsBuilder results)
        {
            if (entity.CommissionDate != null & entity.PurchaseDate != null)
            {
                if (entity.CommissionDate < entity.PurchaseDate)
                {
                    results.AddEntityError("An Asset cannot be commissioned before it is purchased");
                }
            }

            if (entity.IntendedReplacementDate != null & entity.PurchaseDate != null)
            {
                if (entity.IntendedReplacementDate < entity.PurchaseDate)
                {
                    results.AddEntityError("An Asset cannot be replaced before it is purchased");
                }
            }

            if (entity.IntendedReplacementDate != null & entity.CommissionDate != null)
            {
                if (entity.IntendedReplacementDate < entity.CommissionDate)
                {
                    results.AddEntityError("An Asset cannot be replaced before it is commissioned");
                }
            }

            if (entity.DateRemovedFromUse != null & entity.PurchaseDate != null)
            {
                if (entity.DateRemovedFromUse < entity.PurchaseDate)
                {
                    results.AddEntityError("An Asset cannot be removed from use before it is purchased");
                }
            }

            if (entity.DateRemovedFromUse != null & entity.CommissionDate != null)
            {
                if (entity.DateRemovedFromUse < entity.CommissionDate)
                {
                    results.AddEntityError("An Asset cannot be removed from use before it is commissioned");
                }
            }

            if (entity.DateCurrentValueEvaluated != null & entity.PurchaseDate != null)
            {
                if (entity.DateCurrentValueEvaluated < entity.PurchaseDate)
                {
                    results.AddEntityError("An Asset value cannot be evaluated before it is purchased");
                }
            }

            if (entity.DateCurrentValueEvaluated != null & entity.CommissionDate != null)
            {
                if (entity.DateCurrentValueEvaluated < entity.CommissionDate)
                {
                    results.AddEntityError("An Asset value cannot be evaluated before it is commissioned");
                }
            }
        }

        partial void AssetMaintenanceActivities_Validate(AssetMaintenanceActivity entity, EntitySetValidationResultsBuilder results)
        {
            if (entity.DateCompleted != null & entity.DateDue != null)
            {
                if (entity.DateCompleted < entity.DateDue)
                {
                    results.AddEntityError("An activity cannot be comleted before it has started");
                }
            }
        }

        partial void ServiceContracts_Validate(ServiceContract entity, EntitySetValidationResultsBuilder results)
        {
            if (entity.EndDate != null & entity.StartDate != null)
            {
                if (entity.EndDate < entity.StartDate)
                {
                    results.AddEntityError("A Service Contract cannot end before it has started");
                }
            }

            if (entity.CurrentContract == true)
            {
                var existingCurrentContractsCount = (from serviceContract in DataWorkspace.ApplicationData.ServiceContracts
                                                     where (serviceContract.ServiceContractSupplier.Id == entity.ServiceContractSupplier.Id
                                                         && serviceContract.Id != entity.Id) && serviceContract.CurrentContract == true
                                                     select serviceContract).Execute().Count();

                if (existingCurrentContractsCount > 0)
                {
                    results.AddEntityError("There is already a current contract for this supplier. Change and save that first.");
                }
            }

        }

        partial void AssetComments_CanDelete(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditAssetComments);
        }

        partial void AssetComments_CanInsert(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditAssetComments);
        }

        partial void AssetComments_CanUpdate(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditAssetComments);
        }

        partial void AssetMaintenanceActivities_CanDelete(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditAssetMaintenanceActivities);
        }

        partial void AssetMaintenanceActivities_CanInsert(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditAssetMaintenanceActivities);
        }

        partial void AssetMaintenanceActivities_CanUpdate(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditAssetMaintenanceActivities);
        }

        partial void AssetMaintenanceSchedules_CanDelete(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditAssetMaintenanceSchedules);
        }

        partial void AssetMaintenanceSchedules_CanInsert(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditAssetMaintenanceSchedules);
        }

        partial void AssetMaintenanceSchedules_CanUpdate(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditAssetMaintenanceSchedules);
        }

        partial void AssetMaintenanceTypes_CanDelete(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditAssetMaintenanceTypes);
        }

        partial void AssetMaintenanceTypes_CanInsert(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditAssetMaintenanceTypes);
        }

        partial void AssetMaintenanceTypes_CanUpdate(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditAssetMaintenanceTypes);
        }

        partial void AssetManufacturers_CanDelete(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditAssetManufacturers);
        }

        partial void AssetManufacturers_CanInsert(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditAssetManufacturers);
        }

        partial void AssetManufacturers_CanUpdate(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditAssetManufacturers);
        }

        partial void Assets_CanDelete(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditAssets);
        }

        partial void Assets_CanInsert(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditAssets);
        }

        partial void Assets_CanUpdate(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditAssets);
        }

        partial void AssetServiceContracts_CanDelete(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditAssetServiceContracts);
        }

        partial void AssetServiceContracts_CanInsert(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditAssetServiceContracts);
        }

        partial void AssetServiceContracts_CanUpdate(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditAssetServiceContracts);
        }

        partial void AssetSubscribers_CanDelete(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditAssetSubscribers);
        }

        partial void AssetSubscribers_CanInsert(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditAssetSubscribers);
        }

        partial void AssetSubscribers_CanUpdate(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditAssetSubscribers);
        }

        partial void AssetSuppliers_CanDelete(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditAssetSuppliers);
        }

        partial void AssetSuppliers_CanInsert(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditAssetSuppliers);
        }

        partial void AssetSuppliers_CanUpdate(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditAssetSuppliers);
        }

        partial void AssetTypes_CanInsert(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditAssetTypes);
        }

        partial void AssetTypes_CanDelete(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditAssetTypes);
        }

        partial void AssetTypes_CanUpdate(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditAssetTypes);
        }

        partial void Employees_CanDelete(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditEmployees);
        }

        partial void Employees_CanInsert(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditEmployees);
        }

        partial void Employees_CanUpdate(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditEmployees);
        }

        partial void ServiceContracts_CanDelete(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditServiceContracts);
        }

        partial void ServiceContracts_CanInsert(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditServiceContracts);
        }

        partial void ServiceContracts_CanUpdate(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditServiceContracts);
        }

        partial void ServiceContractSuppliers_CanDelete(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditServiceContractSuppliers);
        }

        partial void ServiceContractSuppliers_CanInsert(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditServiceContractSuppliers);
        }

        partial void ServiceContractSuppliers_CanUpdate(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditServiceContractSuppliers);
        }

    }
}
