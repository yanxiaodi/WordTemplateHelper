using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WordTemplateHelperApi.Models
{

    /// <summary>
    /// Response Result Info
    /// </summary>
    public class ResponseResultInfo
    {
        /// <summary>
        /// Gets or sets a value indicating whether this instance is success.
        /// </summary>
        /// <value>
        /// <c>true</c> if this instance is success; otherwise, <c>false</c>.
        /// </value>
        public bool IsSuccess { get; set; }


        /// <summary>
        /// Gets or sets the message.
        /// </summary>
        /// <value>
        /// The message.
        /// </value>
        public string Message { get; set; }


        /// <summary>
        /// Initializes a new instance of the <see cref="ResponseResultInfo"/> class.
        /// </summary>
        public ResponseResultInfo()
        {
            IsSuccess = true;
            Message = string.Empty;
        }
    }

    /// <summary>
    /// Response Result Info with T
    /// </summary>
    /// <typeparam name="T"></typeparam>
    public class ResponseResultInfo<T> : ResponseResultInfo
    {
        /// <summary>
        /// Gets or sets the result.
        /// </summary>
        /// <value>
        /// The result.
        /// </value>
        public T Result { get; set; }
    }
}
