using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WordTemplateHelperApi.Data
{
    public static class DbInitializer
    {
        public static void Initialize(WordTemplateContext context)
        {
            context.Database.EnsureCreated();

            //TODO
            context.SaveChanges();
        }
    }
}
