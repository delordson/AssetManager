using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Microsoft.LightSwitch;
namespace LightSwitchApplication
{
    public partial class ServiceContract
    {
        partial void CurrentContract_Validate(EntityValidationResultsBuilder results)
        {
            // results.AddPropertyError("<Error-Message>");
            if (this.ContractPrice < 0)
            {
                results.AddPropertyError("A Service Contract price cannot be less than 0");
            }
        }
    }
}
