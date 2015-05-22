using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Microsoft.LightSwitch;
namespace LightSwitchApplication
{
    public partial class Asset
    {
        partial void PurchasePrice_Validate(EntityValidationResultsBuilder results)
        {
            // results.AddPropertyError("<Error-Message>");
            if (this.PurchasePrice < 0)
            {
                results.AddPropertyError("Purchase Price cannot be less than 0");
            }
        }

        partial void CurrentValue_Validate(EntityValidationResultsBuilder results)
        {
            // results.AddPropertyError("<Error-Message>");
            if (this.CurrentValue < 0)
            {
                results.AddPropertyError("Current Value cannot be less than 0");
            }
        }
    }
}
