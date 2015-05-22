using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Microsoft.LightSwitch;
namespace LightSwitchApplication
{
    public partial class AssetMaintenanceSchedule
    {
        partial void MaintenanceTypeIntervalInMonths_Validate(EntityValidationResultsBuilder results)
        {
            // results.AddPropertyError("<Error-Message>");
            if (this.MaintenanceTypeIntervalInMonths < 0)
            {
                results.AddPropertyError("Maintenance interval (in months) cannot be less than 0");
            }
        }
    }
}
