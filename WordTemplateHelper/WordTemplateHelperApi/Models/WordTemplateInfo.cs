using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WordTemplateHelperApi.Models
{
    public class WordTemplateInfo
    {
        ///<summary>
        /// Id
        ///</summary>
        public string Id { get; set; }

        ///<summary>
        /// Template Name
        ///</summary>
        public string Name { get; set; }

        ///<summary>
        /// Stars
        ///</summary>
        public decimal? Star { get; set; }

        ///<summary>
        /// Download Count
        ///</summary>
        public int? DownloadCount { get; set; }

        ///<summary>
        /// Image Url
        ///</summary>
        public string ImageUrl { get; set; }

        ///<summary>
        /// Template Content
        ///</summary>
        public string TemplateContent { get; set; }

        ///<summary>
        /// Private Public Organization
        ///</summary>
        public TemplateType Type { get; set; }

        ///<summary>
        /// Create Time
        ///</summary>
        public DateTime CreateTime { get; set; }
    }
}
