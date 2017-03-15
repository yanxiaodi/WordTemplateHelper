using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WordTemplateHelperApi.Models
{
    public class PrivateTemplateInfo
    {
        ///<summary>
        /// Id
        ///</summary>
        public string Id { get; set; }

        ///<summary>
        /// User Id
        ///</summary>
        public string UserId { get; set; }

        ///<summary>
        /// Template Id
        ///</summary>
        public string TemplateId { get; set; }

        ///<summary>
        /// Create Time
        ///</summary>
        public DateTime CreateTime { get; set; }
    }
}
