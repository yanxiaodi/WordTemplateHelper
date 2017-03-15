using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Threading.Tasks;

namespace WordTemplateHelperApi.Models
{
    /// <summary>
    /// 类型
    /// </summary>
    public enum TemplateType
    {
        /// <summary>
        /// Private
        /// </summary>
        [Description("Private")]
        Private = 0,
        /// <summary>
        /// Public
        /// </summary>
        [Description("Public")]
        Public = 1,
        /// <summary>
        /// Organization
        /// </summary>
        [Description("Organization")]
        Organization = 2,

    }
}
